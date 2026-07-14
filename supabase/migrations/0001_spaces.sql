-- MANAtimebank — control plane multi-tenant (increment 1)
-- Registre des « espaces temps » + propriétaires. Pensé multi-tenant dès le
-- départ, découplé de MANA France. Chaque espace = un tenant.
--
-- Déploiement :
--   supabase db push            (ou coller dans le SQL Editor)
-- Idempotent : ré-exécutable sans casse.

create schema if not exists mtb;

-- ─────────────────────────────────────────────────────────────
-- Table : espaces (tenants)
-- ─────────────────────────────────────────────────────────────
create table if not exists mtb.spaces (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null
                check (slug ~ '^[a-z0-9]([a-z0-9-]{0,30}[a-z0-9])?$'),
  name        text not null,
  org_name    text not null,
  org_type    text,
  sector      text,
  langs       text[] not null default '{}',
  plan        text not null default 'community'
                check (plan in ('community','organisation','territoire','network')),
  size_band   text,
  owner_id    uuid references auth.users(id) on delete set null,
  status      text not null default 'pending'
                check (status in ('pending','active','suspended')),
  created_at  timestamptz not null default now()
);

comment on table mtb.spaces is 'Espaces temps (tenants) provisionnés via /creer.';

-- ─────────────────────────────────────────────────────────────
-- Table : membres d'un espace (rôles)
-- ─────────────────────────────────────────────────────────────
create table if not exists mtb.space_members (
  space_id    uuid not null references mtb.spaces(id) on delete cascade,
  user_id     uuid not null references auth.users(id) on delete cascade,
  role        text not null default 'member'
                check (role in ('owner','admin','member')),
  created_at  timestamptz not null default now(),
  primary key (space_id, user_id)
);

create index if not exists idx_space_members_user on mtb.space_members(user_id);

-- ─────────────────────────────────────────────────────────────
-- RLS — fail-closed : aucune écriture publique. Les inserts passent
-- exclusivement par la RPC service_role provision_space.
-- ─────────────────────────────────────────────────────────────
alter table mtb.spaces         enable row level security;
alter table mtb.space_members  enable row level security;

-- Un utilisateur voit les espaces dont il est membre.
drop policy if exists spaces_select_member on mtb.spaces;
create policy spaces_select_member on mtb.spaces
  for select using (
    exists (
      select 1 from mtb.space_members m
      where m.space_id = spaces.id and m.user_id = auth.uid()
    )
  );

-- Le propriétaire peut mettre à jour son espace (nom, langues…), pas le slug/plan critiques.
drop policy if exists spaces_update_owner on mtb.spaces;
create policy spaces_update_owner on mtb.spaces
  for update using (owner_id = auth.uid()) with check (owner_id = auth.uid());

-- Un membre voit la liste des membres de ses espaces.
drop policy if exists members_select_comember on mtb.space_members;
create policy members_select_comember on mtb.space_members
  for select using (
    exists (
      select 1 from mtb.space_members me
      where me.space_id = space_members.space_id and me.user_id = auth.uid()
    )
  );

-- ─────────────────────────────────────────────────────────────
-- RPC : provisionnement (service_role uniquement).
-- Idempotente sur le slug : si le slug existe déjà pour le MÊME owner,
-- on renvoie l'espace existant ; sinon on lève 'slug_taken' → l'edge
-- function réessaiera avec un suffixe.
-- ─────────────────────────────────────────────────────────────
create or replace function mtb.provision_space(
  p_slug      text,
  p_name      text,
  p_org_name  text,
  p_org_type  text,
  p_sector    text,
  p_langs     text[],
  p_plan      text,
  p_size_band text,
  p_owner     uuid
) returns jsonb
language plpgsql
security definer
set search_path = mtb, public
as $$
declare
  v_space mtb.spaces;
begin
  select * into v_space from mtb.spaces where slug = p_slug;

  if found then
    if v_space.owner_id is distinct from p_owner then
      raise exception 'slug_taken' using errcode = 'unique_violation';
    end if;
    -- idempotence : même owner + même slug → on renvoie l'existant
    return to_jsonb(v_space);
  end if;

  insert into mtb.spaces (slug, name, org_name, org_type, sector, langs, plan, size_band, owner_id, status)
  values (p_slug, p_name, p_org_name, p_org_type, p_sector, coalesce(p_langs, '{}'), coalesce(p_plan,'community'), p_size_band, p_owner, 'pending')
  returning * into v_space;

  insert into mtb.space_members (space_id, user_id, role)
  values (v_space.id, p_owner, 'owner')
  on conflict (space_id, user_id) do update set role = 'owner';

  return to_jsonb(v_space);
end;
$$;

-- La RPC n'est appelable que par le service_role (edge function).
revoke all on function mtb.provision_space(text,text,text,text,text,text[],text,text,uuid) from public;
revoke all on function mtb.provision_space(text,text,text,text,text,text[],text,text,uuid) from anon, authenticated;

-- PostgREST doit exposer le schéma mtb pour l'appel RPC via /rest/v1/rpc.
-- (Dashboard → Settings → API → Exposed schemas : ajouter « mtb ».)
grant usage on schema mtb to service_role;
grant execute on function mtb.provision_space(text,text,text,text,text,text[],text,text,uuid) to service_role;
grant select on mtb.spaces, mtb.space_members to authenticated;

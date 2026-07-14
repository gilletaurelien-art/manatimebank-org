// MANAtimebank — provision-space
// Endpoint PUBLIC de création d'un « espace temps » depuis /creer.
// Crée (ou réutilise) l'utilisateur propriétaire, insère l'espace via la RPC
// service_role mtb.provision_space, puis renvoie le slug réel.
//
// Déploiement :
//   supabase functions deploy provision-space
//   (SUPABASE_URL / SUPABASE_ANON_KEY / SUPABASE_SERVICE_ROLE_KEY injectés par la plateforme)
//   config.toml : [functions.provision-space] verify_jwt = false  (endpoint public)
//   Dashboard → Settings → API → Exposed schemas : ajouter « mtb »
//
// ⚠️ DETTE SÉCU (endpoint public créant des users+espaces) : ajouter un captcha
//    (hCaptcha/Turnstile) et un rate-limit avant toute promotion large. Ici :
//    honeypot + validation stricte des entrées = protection minimale.

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, 'content-type': 'application/json' } });

const URL = Deno.env.get('SUPABASE_URL')!;
const SERVICE = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const MTB = { 'Content-Profile': 'mtb', 'Accept-Profile': 'mtb' };

const admin = (path: string, init: RequestInit = {}) =>
  fetch(`${URL}${path}`, {
    ...init,
    headers: { apikey: SERVICE, Authorization: `Bearer ${SERVICE}`, 'content-type': 'application/json', ...(init.headers || {}) },
  });

function slugify(s: string): string {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 30);
}

const PLAN_BY_SIZE: Record<string, string> = { xs: 'community', sm: 'organisation', md: 'territoire', lg: 'network' };

// Crée le propriétaire (cas courant d'une nouvelle demande) ; s'il existe déjà,
// on le retrouve. On tente la création d'abord car le filtre ?email= de l'API
// admin GoTrue est dépendant de la version (à valider sur le projet réel).
async function ensureOwner(email: string): Promise<string | null> {
  const c = await admin('/auth/v1/admin/users', {
    method: 'POST',
    body: JSON.stringify({ email, email_confirm: false }),
  });
  if (c.ok) {
    const created = await c.json().catch(() => null);
    if (created?.id) return created.id;
  }
  // Échec (souvent : e-mail déjà enregistré) → on retrouve l'utilisateur existant.
  const q = await admin(`/auth/v1/admin/users?email=${encodeURIComponent(email)}`);
  if (q.ok) {
    const data = await q.json().catch(() => null);
    const users = Array.isArray(data?.users) ? data.users : Array.isArray(data) ? data : [];
    const hit = users.find((u: { email?: string; id?: string }) => (u.email || '').toLowerCase() === email.toLowerCase());
    if (hit?.id) return hit.id;
  }
  return null;
}

// Appelle la RPC provision_space (service_role) ; réessaie le slug avec suffixe si pris.
async function provision(base: Record<string, unknown>, ownerId: string): Promise<{ slug: string } | { error: string }> {
  let slug = (base.slug as string) || 'espace';
  for (let i = 0; i < 6; i++) {
    const candidate = i === 0 ? slug : `${slug}-${i + 1}`.slice(0, 30);
    const res = await admin('/rest/v1/rpc/provision_space', {
      method: 'POST',
      headers: MTB,
      body: JSON.stringify({
        p_slug: candidate,
        p_name: base.name,
        p_org_name: base.org_name,
        p_org_type: base.org_type,
        p_sector: base.sector,
        p_langs: base.langs,
        p_plan: base.plan,
        p_size_band: base.size_band,
        p_owner: ownerId,
      }),
    });
    if (res.ok) {
      const row = await res.json().catch(() => null);
      return { slug: row?.slug ?? candidate };
    }
    const err = await res.json().catch(() => null);
    const msg = (err?.message || '') + (err?.code || '');
    if (/slug_taken|unique|23505/i.test(msg)) continue; // collision → suffixe suivant
    return { error: err?.message || 'provision_failed' };
  }
  return { error: 'slug_exhausted' };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return json({ error: 'bad_json' }, 400); }

  // Honeypot anti-bot : champ invisible rempli → on renvoie un succès neutre.
  if (typeof body.botcheck === 'string' && body.botcheck.length > 0) return json({ ok: true, slug: 'ok' });

  const email = String(body.email || '').trim();
  const orgName = String(body.orgName || '').trim();
  const spaceName = String(body.spaceName || '').trim();
  if (!/^\S+@\S+\.\S+$/.test(email)) return json({ error: 'invalid_email' }, 400);
  if (orgName.length < 2) return json({ error: 'invalid_org' }, 400);

  const slug = slugify(spaceName || orgName);
  if (!slug) return json({ error: 'invalid_slug' }, 400);

  const ownerId = await ensureOwner(email);
  if (!ownerId) return json({ error: 'owner_failed' }, 500);

  const langs = Array.isArray(body.langs) ? (body.langs as unknown[]).map(String) : [];
  const size = String(body.size || '');
  const result = await provision(
    {
      slug,
      name: spaceName || orgName,
      org_name: orgName,
      org_type: body.orgType ? String(body.orgType) : null,
      sector: body.sector ? String(body.sector) : null,
      langs,
      plan: PLAN_BY_SIZE[size] || 'community',
      size_band: size || null,
    },
    ownerId,
  );

  if ('error' in result) return json(result, 409);

  // Lien de connexion magique (best-effort ; nécessite un SMTP configuré).
  admin('/auth/v1/admin/generate_link', {
    method: 'POST',
    body: JSON.stringify({ type: 'magiclink', email }),
  }).catch(() => {});

  return json({ ok: true, slug: result.slug, url: `${result.slug}.manatimebank.org`, status: 'pending' });
});

# Control plane MANAtimebank

Provisionnement multi-tenant des « espaces temps ». Découplé de MANA France :
son propre projet Supabase. Chaque espace créé via `/creer` = un tenant.

## Contenu

- `migrations/0001_spaces.sql` — schéma `mtb` : tables `spaces` + `space_members`,
  RLS fail-closed, RPC `mtb.provision_space` (service_role only).
- `functions/provision-space/` — edge function **publique** appelée par `/creer` :
  crée/réutilise le propriétaire, insère l'espace (slug auto-unique), renvoie le slug.
- `config.toml` — `verify_jwt = false` pour `provision-space`.

## Déploiement (une fois)

```bash
# 1. Créer le projet Supabase « manatimebank » (dashboard), récupérer le ref.
supabase link --project-ref <ref>

# 2. Schéma
supabase db push                     # applique migrations/0001_spaces.sql

# 3. Exposer le schéma mtb à PostgREST
#    Dashboard → Settings → API → Exposed schemas : ajouter « mtb »

# 4. Fonction
supabase functions deploy provision-space

# 5. Brancher le site (Vercel → Env vars, puis redeploy)
VITE_SUPABASE_URL=https://<ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-key>
```

Sans ces variables, `/creer` reste en **mode demande qualifiée** (Web3Forms) —
le site marche dans les deux cas et bascule automatiquement en provisioning réel
une fois l'env posé.

## ⚠️ Dette sécurité (avant promotion large)

`provision-space` est un endpoint **public** qui crée des utilisateurs et des
espaces. Protection actuelle : honeypot + validation stricte des entrées.
**À ajouter avant toute campagne :** captcha (hCaptcha/Turnstile) et rate-limit
(par IP/e-mail). Configurer aussi un SMTP (Resend) pour que le lien magique
de connexion parte réellement.

## Ce que cet incrément fait / ne fait pas

- ✅ Enregistre réellement l'espace (tenant) + le propriétaire.
- ✅ Slug unique, idempotent, sécurité fail-closed côté RPC.
- ❌ Ne fournit pas encore l'**application** que le tenant utilise (c'est le
  produit MANA France à rendre multi-tenant — effort séparé, bien plus large).

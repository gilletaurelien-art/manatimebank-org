# Prérendu SEO via GitHub Action — mise en service

Le workflow `.github/workflows/prerender-deploy.yml` construit **et prérend** le
site dans un runner GitHub (navigateur disponible), puis déploie le résultat
déjà construit sur Vercel. Résultat : les moteurs et robots reçoivent du HTML
rempli (nom, textes) au lieu d'une coquille vide.

## 1. Secrets à créer (Repo → Settings → Secrets and variables → Actions)

| Secret | Où le trouver |
|---|---|
| `VERCEL_TOKEN` | vercel.com → Account Settings → Tokens → *Create* |
| `VERCEL_ORG_ID` | dans `.vercel/project.json` après un `vercel link` local, champ `orgId` (ou Vercel → Team Settings) |
| `VERCEL_PROJECT_ID` | idem, champ `projectId` (ou Project → Settings → General) |

Pour obtenir org/project IDs rapidement en local :
```bash
npm i -g vercel
vercel link          # relie le dossier au projet Vercel
cat .vercel/project.json   # → orgId, projectId
```

## 2. Désactiver l'auto-déploiement Git de Vercel (IMPORTANT)

Vercel → Project → **Settings → Git** → désactiver *Production Branch* /
*Auto-deploy* (ou « Ignored Build Step » qui court-circuite le build).

Pourquoi : sans ça, **deux** déploiements partent à chaque push — celui de
Vercel (dans son conteneur SANS navigateur → **non prérendu**) et celui de
l'Action (**prérendu**). On veut que seule l'Action déploie.
> Filet de sécurité : même si l'auto-déploiement reste actif, le build Vercel ne
> casse pas — le script de prérendu s'auto-désactive quand le navigateur est
> absent (`postbuild … || echo`). Le site est juste servi non prérendu.

## 3. Vérifier

Pousser sur `main` (ou lancer le workflow à la main) → l'onglet **Actions**
montre `Prérendu & déploiement`. Une fois vert :
```bash
curl -sL -A "Googlebot/2.1" https://manatimebank.org/ | grep -o '<div id="root">.\{0,80\}'
```
doit montrer du HTML (pas `<div id="root"></div>`).

## Répliquer sur les autres vitrines
Copier `scripts/prerender.mjs`, le `.github/workflows/`, ce doc, ajouter
`playwright` en devDep, `postbuild: node scripts/prerender.mjs || echo …`, et
`buildCommand: npm run build` dans `vercel.json`. Créer les 3 secrets par repo.

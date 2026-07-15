// Filet de sécurité SPA — SANS navigateur, marche partout (Vercel inclus).
//
// Le prérendu (prerender.mjs) a besoin de Playwright, indisponible dans le build
// Vercel → les fichiers /route/index.html ne sont PAS créés là-bas, et les
// rewrites Vercel de secours se sont révélés non fiables pour ce projet.
//
// Ici on copie simplement dist/index.html vers dist/<route>/index.html pour
// chaque route connue, SI le fichier n'existe pas déjà (on ne surcharge donc
// jamais une vraie page prérendue). Vercel sert alors le fichier statique
// directement → plus aucun 404, aucune dépendance aux rewrites.
//
// ⚠️ Ajouter ici toute nouvelle route (voir aussi src/main.tsx).

import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { join } from 'node:path';

const DIST = 'dist';

const ROUTES = [
  '/fonctionnalites',
  '/tarifs',
  '/documentation',
  '/a-propos',
  '/creer',
  '/solutions/associations',
  '/solutions/collectivites',
  '/solutions/entreprises',
  '/solutions/universites',
  '/solutions/etablissements',
  '/solutions/reseaux',
];

let shell;
try {
  shell = await readFile(join(DIST, 'index.html'), 'utf8');
} catch {
  console.log('spa-routes: dist/index.html introuvable — ignoré');
  process.exit(0);
}

let created = 0;
for (const route of ROUTES) {
  const dir = join(DIST, route);
  const file = join(dir, 'index.html');
  try {
    await access(file); // déjà prérendu → on garde la vraie page
    continue;
  } catch {
    /* absent → on crée la coquille */
  }
  await mkdir(dir, { recursive: true });
  await writeFile(file, shell);
  created++;
}

console.log(`spa-routes: ${created} route(s) coquille créée(s), ${ROUTES.length - created} déjà présente(s)`);

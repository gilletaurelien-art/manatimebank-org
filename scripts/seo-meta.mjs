// SEO par route — SANS navigateur (marche dans le build Vercel).
//
// Chaque page servie était une COPIE de index.html → même <title>, même
// description, et surtout même canonical (= la home) → Google dédupliquait
// toutes les sous-pages sur l'accueil (aucune indexée). Ce script réécrit le
// <head> de chaque dist/<route>/index.html avec des balises propres à la route :
// title, description, canonical (self), og:*, twitter:*.
//
// Langue = EN (défaut du rendu statique du site). ⚠️ Ajouter ici toute route.

import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIST = 'dist';
const SITE = 'https://manatimebank.org';

const SEO = {
  '/fonctionnalites': {
    title: 'Features — MANAtimebank',
    desc: 'Community, contributions, recognition, steering and infrastructure — everything a real time-bank platform needs, in five coherent families.',
  },
  '/tarifs': {
    title: 'Pricing — MANAtimebank',
    desc: 'Priced by active members, degressive per head. Free under 10 members. Public-interest and non-profit pricing available.',
  },
  '/documentation': {
    title: 'Documentation — MANAtimebank',
    desc: 'Guides, API reference, architecture and the founding white paper to build and run your own time bank.',
  },
  '/a-propos': {
    title: 'About — MANAtimebank',
    desc: 'Why MANAtimebank exists: an open infrastructure to recognize contributive time — without turning it into money.',
  },
  '/creer': {
    title: 'Create your time space — MANAtimebank',
    desc: 'Open your own time bank in four short steps. We set it up with you and open it within days.',
  },
  '/solutions/associations': {
    title: 'Associations — MANAtimebank',
    desc: 'Recognize every volunteer hour, coordinate missions and retain your volunteers with a branded time bank.',
  },
  '/solutions/collectivites': {
    title: 'Local governments — MANAtimebank',
    desc: 'Deploy a territorial observatory of mutual aid and civic contribution, and steer engagement with real data.',
  },
  '/solutions/entreprises': {
    title: 'Companies — MANAtimebank',
    desc: 'Run skills-based sponsorship and employee volunteering programs with real, measurable CSR impact.',
  },
  '/solutions/universites': {
    title: 'Universities — MANAtimebank',
    desc: 'Recognize peer support, tutoring and civic hours across the whole campus, in one network.',
  },
  '/solutions/etablissements': {
    title: 'Institutions — MANAtimebank',
    desc: 'Coordinate caregivers, families and professionals around shared time, and make care visible and durable.',
  },
  '/solutions/reseaux': {
    title: 'Networks & Foundations — MANAtimebank',
    desc: 'Unite your chapters under one model with consolidated, comparable impact reporting.',
  },
};

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function rewrite(html, title, desc, url) {
  const t = esc(title);
  const d = esc(desc);
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta name="description" content=")([^"]*)(")/, (_m, a, _o, b) => `${a}${d}${b}`)
    .replace(/(<link rel="canonical" href=")([^"]*)(")/, (_m, a, _o, b) => `${a}${url}${b}`)
    .replace(/(<meta property="og:url" content=")([^"]*)(")/, (_m, a, _o, b) => `${a}${url}${b}`)
    .replace(/(<meta property="og:title" content=")([^"]*)(")/, (_m, a, _o, b) => `${a}${t}${b}`)
    .replace(/(<meta property="og:description" content=")([^"]*)(")/, (_m, a, _o, b) => `${a}${d}${b}`)
    .replace(/(<meta name="twitter:title" content=")([^"]*)(")/, (_m, a, _o, b) => `${a}${t}${b}`)
    .replace(/(<meta name="twitter:description" content=")([^"]*)(")/, (_m, a, _o, b) => `${a}${d}${b}`);
}

let done = 0;
for (const [route, { title, desc }] of Object.entries(SEO)) {
  const file = join(DIST, route, 'index.html');
  let html;
  try {
    html = await readFile(file, 'utf8');
  } catch {
    continue; // route absente (ne devrait pas arriver après spa-routes)
  }
  await writeFile(file, rewrite(html, title, desc, SITE + route));
  done++;
}

console.log(`seo-meta: ${done}/${Object.keys(SEO).length} routes réécrites`);

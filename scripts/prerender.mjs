// Prérendu statique de la SPA (CI et local). Sert dist/ avec fallback SPA,
// rend chaque route dans un vrai navigateur (Playwright), puis réécrit le HTML
// rendu par-dessus → les robots (et Google) reçoivent un contenu réel ; le
// client hydrate (main.tsx : hydrateRoot si #root a déjà du contenu).
//
// Se DÉSACTIVE proprement (exit 0) si Playwright ou son navigateur n'est pas
// installé → un `npm run build` local sans navigateur ne casse jamais.
//
// Découvre automatiquement les routes internes en suivant les liens de '/'.

import { createServer } from 'node:http';
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const DIST = 'dist';
const PORT = 45678;
const SEED = ['/']; // point de départ ; les liens internes sont découverts

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.txt': 'text/plain', '.xml': 'application/xml',
};

function startServer() {
  const server = createServer(async (req, res) => {
    const path = decodeURIComponent((req.url || '/').split('?')[0]);
    let file = join(DIST, path);
    try {
      const s = await stat(file);
      if (s.isDirectory()) file = join(file, 'index.html');
    } catch {
      if (!extname(path)) file = join(DIST, 'index.html'); // fallback SPA
    }
    try {
      const buf = await readFile(file);
      res.writeHead(200, { 'content-type': MIME[extname(file)] || 'application/octet-stream' });
      res.end(buf);
    } catch {
      res.writeHead(404); res.end('not found');
    }
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

// — Playwright dispo ? —
let chromium;
try { ({ chromium } = await import('playwright')); }
catch { console.log('prerender: playwright absent → prérendu ignoré (SPA normale)'); process.exit(0); }

let browser;
try { browser = await chromium.launch(); }
catch (e) { console.log('prerender: navigateur indisponible → prérendu ignoré (' + e.message.split('\n')[0] + ')'); process.exit(0); }

const server = await startServer();
const page = await browser.newPage();
const base = `http://localhost:${PORT}`;
const seen = new Set();
const queue = [...SEED];

while (queue.length) {
  const route = queue.shift();
  if (seen.has(route)) continue;
  seen.add(route);

  await page.goto(base + route, { waitUntil: 'networkidle' });
  await page.waitForTimeout(250);

  // Découverte des liens internes (même origine, sans ancre/fichier)
  const links = await page.$$eval('a[href]', (as) =>
    as.map((a) => a.getAttribute('href')).filter(Boolean)
  );
  for (const href of links) {
    if (/^https?:\/\//.test(href) || href.startsWith('#') || href.startsWith('mailto:')) continue;
    const clean = ('/' + href.replace(/^\//, '')).split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
    if (!extname(clean) && !seen.has(clean)) queue.push(clean);
  }

  const html = await page.content();
  const outDir = route === '/' ? DIST : join(DIST, route);
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, 'index.html'), html);
  console.log('prerender:', route, `(${html.length} car.)`);
}

await browser.close();
server.close();
console.log('prerender: terminé —', seen.size, 'route(s)');

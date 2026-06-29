# Mana Time Bank

Mana Time Bank is the international conceptual page for the MANA / TEMPOSYSTEM ecosystem.

It presents Mana Time Bank as an open model for recognizing, coordinating and sharing human time. The site is intentionally not an application, dashboard, marketplace, currency or social network. It is a public manifesto for civic time infrastructure.

## Ecosystem Role

- `TEMPOSYSTEM.eu`: the source and vision of shared time.
- `TEMPOSYSTEM.fr`: the cortex and intelligent infrastructure.
- `manatimebank.org`: the international concept for MANA time banking.
- `manafrance.org`: the first French territorial implementation.
- `mana.bzh`: the Breton laboratory.
- `alliancemana.org`: governance and stewardship.

## Tech

- React
- Vite
- TypeScript
- TailwindCSS

No backend, login, database, AI API or dashboard is included.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The Vite production output is generated in `dist`.

## Deployment

The project is ready for Vercel with the native Vite preset.

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Primary domain: `manatimebank.org`
- Redirect domains: `manatimebank.eu`, `manatimebank.com`

Configure redirects at the domain/Vercel level unless a project-specific routing rule becomes necessary.

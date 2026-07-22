// Mockup produit — fait ressentir que MANAtimebank est un vrai logiciel exploité :
// fenêtre applicative, onglets, tuiles de statistiques, mini-carte + histogramme.

import { dashboards, type Lang } from "./copy";

const BARS = [38, 52, 44, 61, 55, 72, 68, 84, 79, 92, 88, 100];

// Petit semis de points pour la mini-carte "Territoire".
const MAP_DOTS = [
  [22, 30], [40, 22], [58, 34], [74, 26], [30, 50],
  [50, 58], [68, 48], [24, 72], [46, 78], [64, 70], [80, 60],
];

export default function DashboardMockup({ lang }: { lang: Lang }) {
  return (
    <div className="mock-window" aria-hidden="true">
      {/* Barre de fenêtre */}
      <div className="mock-bar">
        <span className="mock-dot" style={{ background: "#FF5F57" }} />
        <span className="mock-dot" style={{ background: "#FEBC2E" }} />
        <span className="mock-dot" style={{ background: "#28C840" }} />
        <div className="ml-3 flex items-center gap-1">
          {dashboards.tabs.map((tab, i) => (
            <span key={tab.en} className="mock-tab" data-active={i === 0}>
              {tab[lang]}
            </span>
          ))}
        </div>
        <span className="ml-auto text-[11px] font-medium text-ink-faint">
          app.manatimebank.org
        </span>
      </div>

      {/* Contenu */}
      <div className="p-4 sm:p-6">
        {/* Tuiles de stats */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {dashboards.stats.map((s) => (
            <div key={s.value} className="rounded-xl border border-surface-border bg-surface p-3.5">
              <p className="mock-stat-value">{s.value}</p>
              <p className="mt-1.5 text-[11px] font-medium leading-tight text-ink-muted">
                {s.label[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* Carte + histogramme */}
        <div className="mt-4 grid gap-3 md:grid-cols-[0.85fr_1.15fr]">
          {/* Mini-carte territoire */}
          <div className="rounded-xl border border-surface-border bg-surface p-4">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
              {dashboards.tabs[0][lang]}
            </p>
            <svg viewBox="0 0 100 100" className="h-40 w-full">
              <defs>
                <radialGradient id="mapDot" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#6E5629" />
                  <stop offset="100%" stopColor="#C3A45E" />
                </radialGradient>
              </defs>
              {MAP_DOTS.map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r={2.6 + (i % 3)} fill="url(#mapDot)" opacity="0.18" />
                  <circle cx={x} cy={y} r="1.7" fill="url(#mapDot)" />
                </g>
              ))}
              {/* liens */}
              <g stroke="#9B804B" strokeWidth="0.5" opacity="0.35">
                <line x1="22" y1="30" x2="40" y2="22" />
                <line x1="40" y1="22" x2="58" y2="34" />
                <line x1="30" y1="50" x2="50" y2="58" />
                <line x1="50" y1="58" x2="68" y2="48" />
                <line x1="46" y1="78" x2="64" y2="70" />
              </g>
            </svg>
          </div>

          {/* Histogramme d'activité */}
          <div className="rounded-xl border border-surface-border bg-surface p-4">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
              {dashboards.tabs[1][lang]}
            </p>
            <div className="flex h-40 items-end gap-1.5">
              {BARS.map((h, i) => (
                <div
                  key={i}
                  className="mock-bar-fill flex-1 rounded-t"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${i * 55}ms`,
                    background:
                      "linear-gradient(180deg, #C3A45E 0%, #6E5629 100%)",
                    opacity: 0.55 + (i / BARS.length) * 0.45,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

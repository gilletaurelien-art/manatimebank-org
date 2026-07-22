// Hero visual — un « territoire vivant » : des lieux, des habitants, des
// associations, des gestes réels reliés par des flux de temps.
// La spirale MANA reste présente, mais discrète, en arrière-plan.

type Node = {
  x: number;
  y: number;
  kind: "place" | "person" | "asso";
  delay?: number;
};

// Positions pensées comme un petit territoire (pas une grille régulière).
const NODES: Node[] = [
  { x: 120, y: 90, kind: "asso" },
  { x: 210, y: 60, kind: "person", delay: 0.6 },
  { x: 300, y: 100, kind: "place" },
  { x: 385, y: 78, kind: "person", delay: 1.2 },
  { x: 160, y: 175, kind: "person", delay: 0.9 },
  { x: 250, y: 200, kind: "place" },
  { x: 355, y: 175, kind: "asso", delay: 0.4 },
  { x: 110, y: 265, kind: "person", delay: 1.4 },
  { x: 205, y: 300, kind: "asso", delay: 0.2 },
  { x: 300, y: 285, kind: "person", delay: 1.0 },
  { x: 390, y: 265, kind: "place" },
];

// Flux de temps (donneur → receveur), indices dans NODES.
const FLOWS: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 5],
  [4, 5],
  [5, 6],
  [3, 6],
  [4, 8],
  [8, 5],
  [8, 9],
  [9, 10],
  [6, 10],
  [7, 8],
];

export default function TerritoryHero() {
  return (
    <div className="territory" aria-hidden="true">
      <svg viewBox="0 0 500 400" fill="none" role="img">
        <defs>
          <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6E5629" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#C3A45E" stopOpacity="0.55" />
          </linearGradient>
          <radialGradient id="landGrad" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#F5EFE1" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F5EFE1" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="placeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6E5629" />
            <stop offset="100%" stopColor="#9B804B" />
          </linearGradient>
        </defs>

        {/* Halo de territoire */}
        <ellipse cx="250" cy="190" rx="240" ry="170" fill="url(#landGrad)" />

        {/* Spirale MANA — présente mais discrète, en fond */}
        <g opacity="0.10" stroke="#9B804B" strokeWidth="1.4" fill="none">
          <path d="M250 190 m-8 0 a8 8 0 1 1 16 0 a16 16 0 1 1 -32 0 a24 24 0 1 1 48 0 a32 32 0 1 1 -64 0 a40 40 0 1 1 80 0" />
        </g>

        {/* Flux de temps entre les lieux */}
        <g stroke="url(#flowGrad)" strokeWidth="1.4" strokeLinecap="round">
          {FLOWS.map(([a, b], i) => {
            const A = NODES[a];
            const B = NODES[b];
            return (
              <line
                key={i}
                className="flow"
                x1={A.x}
                y1={A.y}
                x2={B.x}
                y2={B.y}
                style={{ animationDelay: `${(i % 5) * 0.4}s` }}
              />
            );
          })}
        </g>

        {/* Noeuds : lieux, habitants, associations */}
        <g>
          {NODES.map((n, i) => {
            if (n.kind === "place") {
              return (
                <g key={i}>
                  <circle cx={n.x} cy={n.y} r="9" fill="url(#placeGrad)" opacity="0.16" />
                  <circle
                    className="territory-node pulse"
                    cx={n.x}
                    cy={n.y}
                    r="4"
                    fill="url(#placeGrad)"
                    style={{ animationDelay: `${n.delay ?? 0}s` }}
                  />
                </g>
              );
            }
            if (n.kind === "asso") {
              return (
                <rect
                  key={i}
                  x={n.x - 4.5}
                  y={n.y - 4.5}
                  width="9"
                  height="9"
                  rx="2.5"
                  fill="#C3A45E"
                  opacity="0.85"
                />
              );
            }
            return (
              <circle
                key={i}
                className="territory-node pulse"
                cx={n.x}
                cy={n.y}
                r="3.4"
                fill="#6E5629"
                style={{ animationDelay: `${n.delay ?? 0}s` }}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}

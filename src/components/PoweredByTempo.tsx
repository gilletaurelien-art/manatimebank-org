/**
 * PoweredByTempo — badge « propulsé par TEMPOsystem » commun à tout l'univers MANA.
 *
 * Bouton DORÉ (dégradé or, comme « Rejoindre TEMPOsystem » de temposystem-os),
 * écriture NOIRE, « TEMPO » en Philosopher gras, « propulsé par » + « system » en
 * SF Mono. SANS papillon. Se tape en machine à écrire au chargement (une fois),
 * caret qui s'efface. Se pose tout en bas du footer. Autonome (styles inline).
 * Respecte prefers-reduced-motion.
 *
 * Marque TEMPOSYSTEM déposée à l'INPI (15/07/2026).
 */

import { useEffect, useState } from "react";

const MONO = '"SF Mono", ui-monospace, "SFMono-Regular", "Roboto Mono", Menlo, Consolas, monospace';
const SERIF = '"Philosopher", Georgia, "Times New Roman", serif';

const SEGMENTS = [
  { t: "propulsé par ", serif: false },
  { t: "TEMPO", serif: true },
  { t: "system", serif: false },
];
const FULL = SEGMENTS.reduce((a, s) => a + s.t, "");

export default function PoweredByTempo(_props: { butterfly?: string } = {}) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(FULL.length);
      return;
    }
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      i += 1;
      setN(i);
      if (i < FULL.length) timer = setTimeout(tick, 62);
    };
    timer = setTimeout(tick, 450);
    return () => clearTimeout(timer);
  }, []);

  const done = n >= FULL.length;
  let offset = 0;
  const parts = SEGMENTS.map((s, idx) => {
    const start = offset;
    offset += s.t.length;
    const take = Math.min(s.t.length, Math.max(0, n - start));
    if (take <= 0) return null;
    return (
      <span
        key={idx}
        style={{ fontFamily: s.serif ? SERIF : MONO, fontWeight: s.serif ? 700 : 400, fontSize: s.serif ? 15 : 13 }}
      >
        {s.t.slice(0, take)}
      </span>
    );
  });

  return (
    <div style={{ width: "100%", padding: "46px 20px 36px", display: "flex", justifyContent: "center" }}>
      <style>{"@keyframes ptBlink{50%{opacity:0}}"}</style>
      <a
        href="https://temposystem.fr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="propulsé par TEMPOsystem"
        style={{
          display: "inline-flex",
          alignItems: "center",
          minHeight: 38,
          padding: "9px 20px",
          borderRadius: 999,
          background: "linear-gradient(135deg, #d6704a, #f2a73b, #e7b441)",
          color: "#171310",
          textDecoration: "none",
          boxShadow: "0 14px 30px -15px rgba(214,112,74,.55)",
          whiteSpace: "nowrap",
          letterSpacing: ".02em",
          lineHeight: 1,
        }}
      >
        <span>{parts}</span>
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: 2,
            height: "1em",
            marginLeft: 1,
            background: "#171310",
            verticalAlign: "-.1em",
            opacity: done ? 0 : 1,
            transition: done ? "opacity .5s ease .8s" : "none",
            animation: done ? "none" : "ptBlink 1s steps(1) infinite",
          }}
        />
      </a>
    </div>
  );
}

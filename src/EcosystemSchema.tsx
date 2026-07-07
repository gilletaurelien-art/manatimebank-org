/**
 * EcosystemSchema — le schéma simple de l'écosystème, commun à tous les sites Mana.
 * MANAHOME (racine) → Écosystème Temposystem → 5 mondes (emoji · nom · rôle).
 * Portable : styles inline, tokens de la référence manafrance.org.
 */
const WORLDS = [
  { emoji: '☀️', nom: 'TEMPOSYSTEM.eu', href: 'https://temposystem.eu', role: { fr: 'Le cœur', en: 'The heart' } },
  { emoji: '🧠', nom: 'TEMPOSYSTEM.fr', href: 'https://temposystem.fr', role: { fr: "L'orchestre", en: 'The orchestra' } },
  { emoji: '🌍', nom: 'ManaTimeBank.org', href: 'https://manatimebank.org', role: { fr: 'Le concept international', en: 'The international concept' } },
  { emoji: '🧪', nom: 'Mana.bzh', href: 'https://mana.bzh', role: { fr: 'Le laboratoire breton', en: 'The Breton laboratory' } },
  { emoji: '🏛', nom: 'AllianceMANA.org', href: 'https://alliancemana.org', role: { fr: 'Gouvernance & principes', en: 'Governance & principles' } },
];

export default function EcosystemSchema({ lang = 'fr' }: { lang?: string }) {
  const l = lang === 'en' ? 'en' : 'fr';
  return (
    <div style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
      <a
        href="https://manahome.org"
        style={{
          display: 'inline-block', textDecoration: 'none', color: '#fff',
          fontWeight: 700, fontSize: '1.05rem', letterSpacing: '0.14em',
          padding: '0.75rem 2.1rem', borderRadius: 999,
          background: 'linear-gradient(90deg,#2B3FC7,#C040E8)',
          boxShadow: '0 8px 24px rgba(43,63,199,0.25)',
        }}
      >
        MANAHOME
      </a>
      <div style={{ fontSize: '1.2rem', color: '#C040E8', opacity: 0.6, margin: '0.6rem 0' }}>▼</div>
      <div style={{ position: 'relative', border: '1px dashed rgba(43,63,199,0.35)', borderRadius: 20, padding: '1.7rem 1.1rem 1.1rem', background: 'rgba(43,63,199,0.02)' }}>
        <span style={{
          position: 'absolute', top: '-0.8rem', left: '50%', transform: 'translateX(-50%)',
          background: '#F7F8FA', padding: '0 0.9rem', whiteSpace: 'nowrap',
          fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, color: '#7c3aed',
        }}>
          {l === 'en' ? 'Temposystem ecosystem' : 'Écosystème Temposystem'}
        </span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '0.75rem' }}>
          {WORLDS.map((w) => (
            <a key={w.nom} href={w.href} style={{
              display: 'block', textDecoration: 'none', background: '#fff',
              border: '1px solid #E8EAF0', borderRadius: 14, padding: '1rem 0.8rem',
              transition: 'transform 0.25s, border-color 0.25s',
            }}>
              <span style={{ display: 'block', fontSize: '1.45rem', marginBottom: '0.3rem' }}>{w.emoji}</span>
              <span style={{ display: 'block', fontWeight: 700, fontSize: '0.92rem', color: '#0B1220' }}>{w.nom}</span>
              <span style={{ display: 'block', fontSize: '0.78rem', color: '#6B7280', marginTop: '0.2rem' }}>{w.role[l]}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

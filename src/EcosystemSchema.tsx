/**
 * EcosystemSchema — le schéma simple de l'écosystème, commun à tous les sites Mana.
 * MANAHOME (racine, encadré déesse) → Écosystème Temposystem → 6 mondes (icône · nom · rôle).
 * Icônes SVG inline (zéro dépendance) ; tokens de la référence manafrance.org / mana-home-site.
 */
const WORLDS: { nom: string; href: string; role: { fr: string; en: string }; icon: JSX.Element }[] = [
  {
    nom: 'TEMPOSYSTEM.eu', href: 'https://temposystem.eu', role: { fr: 'Le cœur', en: 'The heart' },
    icon: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
  },
  {
    nom: 'TEMPOSYSTEM.fr', href: 'https://temposystem.fr', role: { fr: "L'orchestre", en: 'The orchestra' },
    icon: <><rect width="8" height="8" x="3" y="3" rx="2" /><path d="M7 11v4a2 2 0 0 0 2 2h4" /><rect width="8" height="8" x="13" y="13" rx="2" /></>,
  },
  {
    nom: 'ManaTimeBank.org', href: 'https://manatimebank.org', role: { fr: 'Le concept international', en: 'The international concept' },
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></>,
  },
  {
    nom: 'Mana.bzh', href: 'https://mana.bzh', role: { fr: 'Le laboratoire breton', en: 'The Breton laboratory' },
    icon: <><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" /><path d="M6.453 15h11.094" /><path d="M8.5 2h7" /></>,
  },
  {
    nom: 'ManaFamily.org', href: 'https://manafamily.org', role: { fr: 'Les cercles familiaux', en: 'The family circles' },
    icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
  {
    nom: 'AllianceMANA.org', href: 'https://alliancemana.org', role: { fr: 'Gouvernance & principes', en: 'Governance & principles' },
    icon: <><line x1="3" x2="21" y1="22" y2="22" /><line x1="6" x2="6" y1="18" y2="11" /><line x1="10" x2="10" y1="18" y2="11" /><line x1="14" x2="14" y1="18" y2="11" /><line x1="18" x2="18" y1="18" y2="11" /><polygon points="12 2 20 7 4 7" /></>,
  },
];

export default function EcosystemSchema({ lang = 'fr' }: { lang?: string }) {
  const l = lang === 'en' ? 'en' : 'fr';
  return (
    <div style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
      <a
        href="https://manahome.org"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '1.1rem', textAlign: 'left',
          textDecoration: 'none', background: '#fff',
          border: '1px solid #E7E1D4', borderRadius: 20, padding: '1rem 1.6rem 1rem 1.1rem',
          boxShadow: '0 14px 40px rgba(90,60,230,0.13)', maxWidth: 460,
        }}
      >
        <img
          src="/deesse-mana.png"
          alt="Mana, le visage de l'univers"
          style={{
            width: 64, height: 64, flex: 'none', borderRadius: '50%',
            objectFit: 'cover', objectPosition: 'center',
            background: 'linear-gradient(135deg,#f5f3ff,#ede9fe)',
            border: '1px solid rgba(195,164,94,0.25)',
            boxShadow: '0 0 18px rgba(124,77,255,0.25)',
          }}
        />
        <span style={{ display: 'block' }}>
          <span style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '0.14em', color: '#211B12' }}>MANAHOME.org</span>
            <span style={{ fontSize: '0.66rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: '#8A6B33' }}>
              {l === 'en' ? 'The guide' : "L'assistance"}
            </span>
          </span>
          <span style={{
            display: 'block', marginTop: '0.2rem', fontStyle: 'italic', fontSize: '0.88rem', lineHeight: 1.5,
            background: 'linear-gradient(110deg,#6E5629,#9B804B,#C3A45E)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
          }}>
            {l === 'en'
              ? '“Making care visible, lasting and transmissible.”'
              : '« Rendre le soin visible, durable et transmissible. »'}
          </span>
        </span>
      </a>
      <div style={{ fontSize: '1.2rem', color: '#C3A45E', opacity: 0.6, margin: '0.6rem 0' }}>▼</div>
      <div style={{ position: 'relative', border: '1px dashed rgba(110,86,41,0.35)', borderRadius: 20, padding: '1.7rem 1.1rem 1.1rem', background: 'rgba(110,86,41,0.02)' }}>
        <span style={{
          position: 'absolute', top: '-0.8rem', left: '50%', transform: 'translateX(-50%)',
          background: '#FAF8F2', padding: '0 0.9rem', whiteSpace: 'nowrap',
          fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, color: '#8A6B33',
        }}>
          {l === 'en' ? 'Temposystem ecosystem' : 'Écosystème Temposystem'}
        </span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '0.75rem' }}>
          {WORLDS.map((w) => (
            <a key={w.nom} href={w.href} style={{
              display: 'block', textDecoration: 'none', background: '#fff',
              border: '1px solid #E7E1D4', borderRadius: 14, padding: '1rem 0.8rem',
              transition: 'transform 0.25s, border-color 0.25s',
            }}>
              <span style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.45rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9B804B" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {w.icon}
                </svg>
              </span>
              <span style={{ display: 'block', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.12em', color: '#211B12' }}>
                {w.nom.slice(0, w.nom.lastIndexOf('.')).toUpperCase()}
                <span style={{ textTransform: 'lowercase' }}>{w.nom.slice(w.nom.lastIndexOf('.'))}</span>
              </span>
              <span style={{ display: 'block', fontSize: '0.78rem', color: '#77705F', marginTop: '0.2rem' }}>{w.role[l]}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

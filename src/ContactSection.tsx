import { useState } from 'react';

/**
 * ContactSection — formulaire de contact commun de l'univers Mana.
 * Envoi via Web3Forms → tout arrive dans contact@manahome.org (sans ouvrir le client mail).
 * Distingue le contact Citoyen (personne physique) du Partenaire (personne morale).
 * Portable (styles inline) : le même composant se colle sur tous les sites.
 * Accent du site ↓ (seule chose à changer d'un site à l'autre, avec le sujet).
 */
const ACCESS_KEY = '6b87a2f3-2183-40e6-befe-23fd66944144';
const ACCENT = '#8A6B33';
const ACCENT_SOFT = 'rgba(110,86,41,0.09)';
const BTN = 'linear-gradient(135deg,#5A4620,#9B804B)';

const COPY = {
  fr: {
    eyebrow: 'Contact',
    title: 'Une question ? Parlons-nous.',
    subCitoyen: 'Une idée, une envie de contribuer, une simple curiosité. Nous lisons tout.',
    subPartenaire: 'Collectivité, association, entreprise : discutons d’un partenariat.',
    citoyen: 'Citoyen', citoyenSub: 'Personne physique',
    partenaire: 'Partenaire', partenaireSub: 'Personne morale',
    org: 'Nom de votre organisation', name: 'Votre nom', email: 'Votre e-mail', msg: 'Votre message',
    send: 'Envoyer', sending: 'Envoi…',
    ok: 'Merci ! Votre message est envoyé. 🌱', err: 'Oups — une erreur est survenue, réessayez.',
  },
  en: {
    eyebrow: 'Contact',
    title: 'A question? Let’s talk.',
    subCitoyen: 'An idea, a wish to contribute, plain curiosity. We read everything.',
    subPartenaire: 'Local authority, association, company: let’s discuss a partnership.',
    citoyen: 'Citizen', citoyenSub: 'Individual',
    partenaire: 'Partner', partenaireSub: 'Organization',
    org: 'Your organization’s name', name: 'Your name', email: 'Your email', msg: 'Your message',
    send: 'Send', sending: 'Sending…',
    ok: 'Thank you! Your message is on its way. 🌱', err: 'Oops — something went wrong, please retry.',
  },
} as const;

type Profil = 'citoyen' | 'partenaire';

const inputStyle: React.CSSProperties = {
  width: '100%', border: '1px solid #e3e4ef', borderRadius: 12,
  padding: '0.75rem 0.9rem', fontSize: '0.95rem', color: '#26243f',
  background: '#fbfbfe', outline: 'none',
};

export default function ContactSection({ lang = 'fr', subject = 'Message via un site Mana' }: { lang?: string; subject?: string }) {
  const t = COPY[lang === 'en' ? 'en' : 'fr'];
  const [profil, setProfil] = useState<Profil>('citoyen');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ msg: string; ok?: boolean }>({ msg: '' });

  const subText = profil === 'partenaire' ? t.subPartenaire : t.subCitoyen;
  const profilLabel = profil === 'partenaire' ? 'Partenaire (personne morale)' : 'Citoyen (personne physique)';

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setSending(true);
    setStatus({ msg: t.sending });
    const data = Object.fromEntries(new FormData(formEl).entries());
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const r = await res.json();
      if (r.success) { setStatus({ msg: t.ok, ok: true }); formEl.reset(); }
      else setStatus({ msg: t.err });
    } catch {
      setStatus({ msg: t.err });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <figure className="hero-butterfly-frame" style={{ width: 'min(100%, 600px)', margin: '0 auto 2rem' }}>
          <img src="/assets/manatimebank-butterfly.jpeg" alt="MANAtimebank — papillon-horloge" />
        </figure>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT, margin: '0 0 0.7rem' }}>{t.eyebrow}</p>
        <h2 style={{ fontSize: 'clamp(1.7rem,4vw,2.4rem)', fontWeight: 700, color: '#1c1e3a', margin: '0 0 0.7rem', lineHeight: 1.15 }}>{t.title}</h2>
        <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: '#6b6b84', margin: '0 0 1.6rem' }}>{subText}</p>

        {/* Choix du profil : personne physique (citoyen) vs personne morale (partenaire) */}
        <div style={{ display: 'flex', gap: 10, marginBottom: '1.1rem' }}>
          {(['citoyen', 'partenaire'] as Profil[]).map((k) => {
            const active = profil === k;
            return (
              <button
                type="button"
                key={k}
                onClick={() => setProfil(k)}
                aria-pressed={active}
                style={{
                  flex: 1, cursor: 'pointer', borderRadius: 12, padding: '0.7rem 0.85rem', textAlign: 'left',
                  border: active ? `1.5px solid ${ACCENT}` : '1px solid #e3e4ef',
                  background: active ? ACCENT_SOFT : '#fbfbfe',
                  transition: 'border-color .15s, background .15s',
                }}
              >
                <span style={{ display: 'block', fontWeight: 700, fontSize: '0.94rem', color: active ? ACCENT : '#26243f' }}>
                  {k === 'citoyen' ? t.citoyen : t.partenaire}
                </span>
                <span style={{ display: 'block', fontSize: '0.74rem', color: '#8a8aa0', marginTop: 1 }}>
                  {k === 'citoyen' ? t.citoyenSub : t.partenaireSub}
                </span>
              </button>
            );
          })}
        </div>

        <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          <input type="hidden" name="access_key" value={ACCESS_KEY} />
          <input type="hidden" name="subject" value={`${subject} — ${profil === 'partenaire' ? 'Partenaire' : 'Citoyen'}`} />
          <input type="hidden" name="profil" value={profilLabel} />
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
          {profil === 'partenaire' && (
            <input name="organisation" required placeholder={t.org} style={inputStyle} />
          )}
          <input name="name" required placeholder={t.name} style={inputStyle} />
          <input name="email" type="email" required placeholder={t.email} style={inputStyle} />
          <textarea name="message" required rows={4} placeholder={t.msg} style={{ ...inputStyle, resize: 'vertical' }} />
          <button type="submit" disabled={sending} style={{ marginTop: '0.2rem', border: 'none', cursor: 'pointer', borderRadius: 12, padding: '0.85rem', fontSize: '0.95rem', fontWeight: 700, color: '#fff', background: BTN, opacity: sending ? 0.6 : 1 }}>
            {sending ? t.sending : t.send + ' →'}
          </button>
          {status.msg && <p style={{ fontSize: '0.88rem', margin: '0.2rem 0 0', color: status.ok ? '#1e7d4f' : '#c0392b' }}>{status.msg}</p>}
        </form>
      </div>
    </section>
  );
}

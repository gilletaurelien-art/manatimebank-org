import { useState } from 'react';

/**
 * ContactSection — formulaire de contact commun de l'univers Mana.
 * Envoi via Web3Forms → tout arrive dans contact@manahome.org (sans ouvrir le client mail).
 * Portable (styles inline) : le même composant se colle sur tous les sites.
 */
const ACCESS_KEY = '6b87a2f3-2183-40e6-befe-23fd66944144';

const COPY = {
  fr: {
    eyebrow: 'Contact',
    title: 'Une question ? Parlons-nous.',
    sub: 'Écrivez-nous — une idée, une envie de contribuer, une simple curiosité. Nous lisons tout.',
    name: 'Votre nom', email: 'Votre e-mail', msg: 'Votre message',
    send: 'Envoyer', sending: 'Envoi…',
    ok: 'Merci ! Votre message est envoyé. 🌱', err: 'Oups — une erreur est survenue, réessayez.',
  },
  en: {
    eyebrow: 'Contact',
    title: 'A question? Let’s talk.',
    sub: 'Write to us — an idea, a wish to contribute, plain curiosity. We read everything.',
    name: 'Your name', email: 'Your email', msg: 'Your message',
    send: 'Send', sending: 'Sending…',
    ok: 'Thank you! Your message is on its way. 🌱', err: 'Oops — something went wrong, please retry.',
  },
} as const;

const inputStyle: React.CSSProperties = {
  width: '100%', border: '1px solid #e3e4ef', borderRadius: 12,
  padding: '0.75rem 0.9rem', fontSize: '0.95rem', color: '#26243f',
  background: '#fbfbfe', outline: 'none',
};

export default function ContactSection({ lang = 'fr', subject = 'Message via un site Mana' }: { lang?: string; subject?: string }) {
  const t = COPY[lang === 'en' ? 'en' : 'fr'];
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ msg: string; ok?: boolean }>({ msg: '' });

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
    <section id="contact" style={{ background: '#f7f8fc', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7c3aed', margin: '0 0 0.7rem' }}>{t.eyebrow}</p>
        <h2 style={{ fontSize: 'clamp(1.7rem,4vw,2.4rem)', fontWeight: 700, color: '#1c1e3a', margin: '0 0 0.7rem', lineHeight: 1.15 }}>{t.title}</h2>
        <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: '#6b6b84', margin: '0 0 1.8rem' }}>{t.sub}</p>
        <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          <input type="hidden" name="access_key" value={ACCESS_KEY} />
          <input type="hidden" name="subject" value={subject} />
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
          <input name="name" required placeholder={t.name} style={inputStyle} />
          <input name="email" type="email" required placeholder={t.email} style={inputStyle} />
          <textarea name="message" required rows={4} placeholder={t.msg} style={{ ...inputStyle, resize: 'vertical' }} />
          <button type="submit" disabled={sending} style={{ marginTop: '0.2rem', border: 'none', cursor: 'pointer', borderRadius: 12, padding: '0.85rem', fontSize: '0.95rem', fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg,#2B3FC7,#C040E8)', opacity: sending ? 0.6 : 1 }}>
            {sending ? t.sending : t.send + ' →'}
          </button>
          {status.msg && <p style={{ fontSize: '0.88rem', margin: '0.2rem 0 0', color: status.ok ? '#1e7d4f' : '#c0392b' }}>{status.msg}</p>}
        </form>
      </div>
    </section>
  );
}

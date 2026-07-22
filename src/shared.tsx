// Chrome partagé entre la home et les pages Solutions : header, footer,
// boutons, wallpaper, helpers de section. Garantit une identité identique
// d'une page à l'autre (crédibilité « produit »).

import { useEffect, useState } from "react";
import { nav, footer, type Lang } from "./copy";

const STORAGE_KEY = "manatimebank_lang";

export function detectLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "fr") return stored;
  return "en";
}

export function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLang] = useState<Lang>(detectLang);
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);
  return [lang, setLang];
}

/* ---- boutons & typographie ---- */

export function Cta({
  href,
  children,
  variant = "plain",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "plain" | "ghost";
  className?: string;
}) {
  const styles = {
    primary: "border-transparent gradient-btn text-white shadow-card",
    secondary:
      "border-surface-border bg-surface-white text-ink-secondary shadow-card hover:border-accent-muted hover:text-ink",
    plain:
      "border-surface-border bg-surface-white text-ink-secondary shadow-card hover:border-accent-muted hover:text-accent",
    ghost: "border-transparent bg-transparent text-ink-secondary hover:text-ink",
  };
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-lg border px-5 py-3 text-sm font-semibold tracking-tight transition duration-150 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export function Eyebrow({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return <p className={`eyebrow ${accent ? "eyebrow-accent" : ""}`}>{children}</p>;
}

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-content px-6 py-16 md:px-10 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  body,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow accent>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.08] tracking-tight text-ink">
        {title}
      </h2>
      {body ? <p className="mt-5 text-[15px] leading-7 text-ink-muted sm:text-base">{body}</p> : null}
    </div>
  );
}

/* ---- icônes minimales (stroke) ---- */

export function Icon({ name }: { name: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<string, React.ReactNode> = {
    organize: <><rect x="3" y="4" width="18" height="4" rx="1" {...p} /><rect x="3" y="12" width="11" height="4" rx="1" {...p} /><rect x="3" y="20" width="15" height="0.5" {...p} /></>,
    recognize: <><path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 21l-4.9-2.6.9-5.5-4-3.9L9.5 8z" {...p} /></>,
    understand: <><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" {...p} /></>,
    community: <><circle cx="9" cy="8" r="3" {...p} /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" {...p} /><path d="M16 5.5a3 3 0 010 5.5M21 20c0-2.5-1.5-4.6-3.6-5.5" {...p} /></>,
    contributions: <><path d="M12 3v18M5 10l7-7 7 7" {...p} /><path d="M5 21h14" {...p} /></>,
    recognition: <><circle cx="12" cy="9" r="5" {...p} /><path d="M8.5 13.5L7 22l5-2.5L17 22l-1.5-8.5" {...p} /></>,
    steering: <><path d="M3 3v18h18" {...p} /><path d="M7 15l4-5 3 3 5-7" {...p} /></>,
    infrastructure: <><rect x="3" y="4" width="18" height="5" rx="1.5" {...p} /><rect x="3" y="15" width="18" height="5" rx="1.5" {...p} /><path d="M7 6.5h.01M7 17.5h.01" {...p} /></>,
    check: <><path d="M4 12l5 5L20 6" {...p} /></>,
    spark: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" {...p} /></>,
  };
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      {paths[name] ?? null}
    </svg>
  );
}

/* ---- toggle langue ---- */

export function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-0.5 rounded-full border border-surface-border bg-surface-white p-0.5">
      {(["en", "fr"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={l === lang}
          className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors duration-150 ${
            l === lang ? "gradient-btn text-white" : "text-ink-muted hover:text-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

/* ---- wallpaper de marque ---- */

export function ManaWallpaper() {
  return (
    <div className="mana-wallpaper" aria-hidden="true">
      <img
        src="/assets/manatimebank-card.jpeg"
        alt=""
        className="mana-watermark"
      />
    </div>
  );
}

/* ---- header ---- */
// Ancres préfixées par "/" pour fonctionner depuis n'importe quelle page
// (une page Solutions renvoie vers /#solutions sur la home).

const NAV_LINKS = [
  { label: nav.solutions, href: "/#solutions" },
  { label: nav.features, href: "/fonctionnalites" },
  { label: nav.pricing, href: "/tarifs" },
  { label: nav.docs, href: "/documentation" },
  { label: nav.about, href: "/a-propos" },
];

export function SiteHeader({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-surface-border/60 bg-surface-white/90 backdrop-blur-md">
      <nav
        className="relative mx-auto flex h-[62px] max-w-content items-center justify-between px-6 md:px-10"
        aria-label="Main navigation"
      >
        <a href="/" className="flex items-center gap-2.5 text-[15px] font-bold tracking-tight text-ink">
          <img
            src="/assets/manatimebank-mark-t.png"
            alt="MANAtimebank"
            className="h-7 w-7 object-contain"
          />
          <span className="font-display">
            MANA<span className="font-normal">timebank</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] font-medium text-ink-muted transition-colors duration-150 hover:text-ink"
            >
              {l.label[lang]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://manafrance.org"
            className="hidden text-[13.5px] font-medium text-ink-muted transition-colors hover:text-ink sm:block"
          >
            {nav.login[lang]}
          </a>
          <Cta href="/#contact" variant="primary" className="hidden px-4 py-2 text-[13px] sm:inline-flex">
            {lang === "fr" ? "Nous contacter" : "Contact us"}
          </Cta>
          <LangToggle lang={lang} setLang={setLang} />
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-surface-border text-ink-muted lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="border-t border-surface-border bg-surface-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-ink-secondary hover:bg-surface"
              >
                {l.label[lang]}
              </a>
            ))}
            <Cta href="/#contact" variant="primary" className="mt-2">
              {lang === "fr" ? "Nous contacter" : "Contact us"}
            </Cta>
          </div>
        </div>
      ) : null}
    </header>
  );
}

/* ---- coquille de page (wallpaper + header + footer) ---- */

export function PageShell({ children }: { children: (lang: Lang) => React.ReactNode }) {
  const [lang, setLang] = useLang();
  return (
    <div className="mana-wallpaper-page relative min-h-screen overflow-x-hidden bg-surface text-ink">
      <ManaWallpaper />
      <SiteHeader lang={lang} setLang={setLang} />
      <main className="relative z-10 pt-[62px]">{children(lang)}</main>
      <SiteFooter lang={lang} />
    </div>
  );
}

/* En-tête de page interne (hero court, sur fond hero-glow) */
export function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 md:px-10">
      <div className="absolute inset-0 hero-glow" />
      <div className="relative z-10 mx-auto w-full max-w-content py-16 lg:py-20">
        <Eyebrow accent>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-[clamp(2.2rem,4.6vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
          {title}
        </h1>
        {body ? <p className="mt-5 max-w-2xl text-[clamp(1rem,1.7vw,1.25rem)] leading-relaxed text-ink-secondary">{body}</p> : null}
      </div>
    </section>
  );
}

/* ---- footer ---- */

export function SiteFooter({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-surface-border bg-surface px-6 py-14 md:px-10">
      <div className="mx-auto max-w-content">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/assets/manatimebank-mark-t.png" alt="MANAtimebank" className="h-7 w-7 object-contain" />
              <span className="font-display text-[15px] font-bold text-ink">
                MANA<span className="font-normal">timebank</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-6 text-ink-muted">{footer.tagline[lang]}</p>
          </div>

          {footer.cols.map((col) => (
            <div key={col.title.en}>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink">{col.title[lang]}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label.en}>
                    <a href={link.href} className="text-[13px] text-ink-muted transition-colors hover:text-accent">
                      {link.label[lang]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-surface-border pt-6 sm:flex-row sm:items-center">
          <p className="text-[11px] text-ink-faint">
            © {new Date().getFullYear()} — {lang === "fr" ? "L'univers MANA" : "The MANA universe"} ·{" "}
            <a href="https://manahome.org" className="transition-colors hover:text-accent">
              MANAHOME.org
            </a>
          </p>
          <div className="flex items-center gap-4 text-[11px] text-ink-faint">
            <a href="/#contact" className="transition-colors hover:text-accent">{footer.contact[lang]}</a>
            <a href="https://manahome.org" className="transition-colors hover:text-accent">{footer.legal[lang]}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

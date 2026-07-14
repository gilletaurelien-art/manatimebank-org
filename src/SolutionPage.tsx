// Page Solution dédiée à un secteur. Même chrome que la home (crédibilité).
// Structure du brief : Problème → Solution → Bénéfices → Fonctionnalités →
// Déploiement → Résultats → CTA.

import {
  solutions,
  solutionDetails,
  solutionPage,
  steps,
  type Lang,
} from "./copy";
import {
  useLang,
  Cta,
  Eyebrow,
  Section,
  SectionHead,
  Icon,
  ManaWallpaper,
  SiteHeader,
  SiteFooter,
} from "./shared";

export function solutionSlugs(): string[] {
  return solutions.items.map((s) => s.key);
}

export default function SolutionPage({ slug }: { slug: string }) {
  const [lang, setLang] = useLang();
  const item = solutions.items.find((s) => s.key === slug);
  const detail = solutionDetails[slug];

  // Slug inconnu → on renvoie vers la home (garde-fou ; ne devrait pas arriver).
  if (!item || !detail) {
    if (typeof window !== "undefined") window.location.replace("/");
    return null;
  }

  const others = solutions.items.filter((s) => s.key !== slug);

  return (
    <div className="mana-wallpaper-page relative min-h-screen overflow-x-hidden bg-surface text-ink">
      <ManaWallpaper />
      <SiteHeader lang={lang} setLang={setLang} />

      <main className="relative z-10">
        {/* Hero secteur */}
        <section className="relative overflow-hidden px-6 pt-[62px] md:px-10">
          <div className="absolute inset-0 hero-glow" />
          <div className="relative z-10 mx-auto w-full max-w-content py-16 lg:py-24">
            <nav className="flex items-center gap-2 text-[13px] text-ink-muted" aria-label="Breadcrumb">
              <a href="/#solutions" className="transition-colors hover:text-accent">
                {solutionPage.breadcrumb[lang]}
              </a>
              <span className="text-surface-border">/</span>
              <span className="font-medium text-ink-secondary">{item.title[lang]}</span>
            </nav>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.3rem,5vw,3.8rem)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
              {item.title[lang]}
            </h1>
            <p className="mt-5 max-w-2xl text-[clamp(1.05rem,1.8vw,1.35rem)] leading-relaxed text-ink-secondary">
              {detail.tagline[lang]}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Cta href="/#contact" variant="primary">
                {lang === "fr" ? "Créer votre espace" : "Create your space"}
              </Cta>
              <Cta href="/#contact" variant="secondary">
                {lang === "fr" ? "Demander une démonstration" : "Request a demo"}
              </Cta>
            </div>
          </div>
        </section>

        {/* Problème + Solution */}
        <Section>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="mana-card rounded-2xl p-8">
              <Eyebrow>{solutionPage.problem[lang]}</Eyebrow>
              <p className="mt-4 text-[15px] leading-8 text-ink-secondary sm:text-lg">{detail.problemLong[lang]}</p>
            </div>
            <div className="rounded-2xl border border-accent-muted bg-gradient-to-br from-accent-light to-surface-white p-8">
              <Eyebrow accent>{solutionPage.solution[lang]}</Eyebrow>
              <p className="mt-4 text-[15px] leading-8 text-ink sm:text-lg">{detail.solutionLong[lang]}</p>
            </div>
          </div>
        </Section>

        {/* Bénéfices */}
        <Section>
          <SectionHead eyebrow={solutionPage.benefits[lang]} title={item.title[lang]} />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {detail.benefits.map((b) => (
              <article key={b.title.en} className="mana-card rounded-2xl p-7">
                <div className="grad-badge">
                  <Icon name="spark" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{b.title[lang]}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-muted">{b.body[lang]}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Fonctionnalités */}
        <Section>
          <SectionHead eyebrow={solutionPage.features[lang]} title={solutionPage.features[lang]} />
          <div className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {detail.features[lang].map((f) => (
              <div key={f} className="flex items-start gap-3 rounded-xl border border-surface-border bg-surface-white/70 px-4 py-3.5">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-none text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10.5l4 4 8-9" />
                </svg>
                <span className="text-sm font-medium leading-6 text-ink-secondary">{f}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Déploiement (réutilise les étapes génériques) */}
        <Section>
          <SectionHead eyebrow={solutionPage.deployment[lang]} title={steps.title[lang]} />
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {steps.items.map((step, i) => (
              <li key={step.title.en} className="relative rounded-2xl border border-surface-border bg-surface-white/80 p-5">
                <span className="font-display text-2xl font-bold text-accent">{`0${i + 1}`}</span>
                <h3 className="mt-3 text-[15px] font-bold leading-tight text-ink">{step.title[lang]}</h3>
                <p className="mt-2 text-[12.5px] leading-6 text-ink-muted">{step.body[lang]}</p>
                {i < steps.items.length - 1 ? (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-accent-muted to-transparent md:block" />
                ) : null}
              </li>
            ))}
          </ol>
        </Section>

        {/* Résultats */}
        <section className="relative overflow-hidden text-white band-dark">
          <div className="relative z-10 mx-auto max-w-content px-6 py-20 md:px-10 lg:py-24">
            <p className="eyebrow text-white/50">{solutionPage.results[lang]}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {detail.results.map((r) => (
                <div key={r.label.en} className="border-l border-white/15 pl-5">
                  <p className="bg-gradient-to-r from-[#8FA0FF] to-[#E39BFF] bg-clip-text font-display text-[clamp(2rem,4vw,2.8rem)] font-bold leading-none text-transparent">
                    {r.value[lang]}
                  </p>
                  <p className="mt-3 text-[14px] leading-6 text-white/65">{r.label[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <Section className="!py-14">
          <div className="rounded-3xl border border-surface-border bg-surface-white/70 p-10 text-center backdrop-blur-md sm:p-14">
            <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.7rem,3.4vw,2.4rem)] font-bold leading-[1.1] tracking-tight text-ink">
              {solutionPage.ctaTitle[lang]}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-ink-muted">{solutionPage.ctaBody[lang]}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Cta href="/#contact" variant="primary">
                {lang === "fr" ? "Créer une banque de temps" : "Create a time bank"}
              </Cta>
              <Cta href="/#contact" variant="secondary">
                {lang === "fr" ? "Demander une démonstration" : "Request a demo"}
              </Cta>
            </div>
          </div>
        </Section>

        {/* Autres solutions */}
        <Section className="!pt-0">
          <p className="eyebrow eyebrow-accent">{solutionPage.other[lang]}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <a key={o.key} href={`/solutions/${o.key}`} className="solution-card group">
                <h3 className="text-lg font-bold text-ink">{o.title[lang]}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-secondary">{o.solution[lang]}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-accent opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                  {solutions.cta[lang]} <span aria-hidden>→</span>
                </span>
              </a>
            ))}
          </div>
        </Section>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}

export type { Lang };

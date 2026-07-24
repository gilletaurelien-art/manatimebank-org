// Pages internes : Fonctionnalités, Tarifs, Documentation, À propos.
// Toutes bâties sur le chrome partagé (PageShell) → identité identique.

import {
  featuresPage,
  features,
  pricing,
  docsPage,
  aboutPage,
  foundations,
} from "./copy";
import {
  PageShell,
  PageHero,
  Section,
  SectionHead,
  Eyebrow,
  Cta,
  Icon,
} from "./shared";

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-ink-secondary">
          <svg viewBox="0 0 20 20" className="mt-1 h-3.5 w-3.5 flex-none text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 10.5l4 4 8-9" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ============ FONCTIONNALITÉS ============ */
export function FeaturesPage() {
  return (
    <PageShell>
      {(lang) => (
        <>
          <PageHero eyebrow={featuresPage.eyebrow[lang]} title={featuresPage.title[lang]} body={featuresPage.body[lang]} />
          <Section className="!pt-4">
            <div className="grid gap-5 lg:grid-cols-2">
              {features.families.map((fam, i) => (
                <article
                  key={fam.key}
                  className={`mana-card rounded-2xl p-7 ${i === features.families.length - 1 && features.families.length % 2 === 1 ? "lg:col-span-2" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="grad-badge">
                      <Icon name={fam.key} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-ink">{fam.title[lang]}</h2>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-ink-muted">{fam.blurb[lang]}</p>
                  <div className={i === features.families.length - 1 && features.families.length % 2 === 1 ? "sm:columns-2 sm:gap-10" : ""}>
                    <CheckList items={fam.items[lang]} />
                  </div>
                </article>
              ))}
            </div>
          </Section>
          <FinalBand lang={lang} />
        </>
      )}
    </PageShell>
  );
}

/* ============ TARIFS ============ */
export function PricingPage() {
  return (
    <PageShell>
      {(lang) => (
        <>
          <PageHero eyebrow={pricing.eyebrow[lang]} title={pricing.title[lang]} body={pricing.body[lang]} />
          <Section className="!pt-4">
            <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
              {pricing.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative flex flex-col rounded-2xl border p-6 ${
                    tier.featured ? "border-accent-muted bg-surface-white shadow-card-hover" : "border-surface-border bg-surface-white/80"
                  }`}
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">{tier.members[lang]}</p>
                  <h2 className="mt-1 font-display text-lg font-bold text-ink">{tier.name}</h2>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-bold tracking-tight text-ink">{tier.price[lang]}</span>
                    {tier.period[lang] ? <span className="text-[13px] text-ink-muted">{tier.period[lang]}</span> : null}
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-ink-muted">{tier.for[lang]}</p>
                  <div className="mt-4 h-px w-full bg-surface-divider" />
                  <CheckList items={tier.features[lang]} />
                  <Cta href={tier.href} variant={tier.featured ? "primary" : "plain"} className="mt-6 w-full">
                    {tier.cta[lang]}
                  </Cta>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-[13px] leading-6 text-ink-muted">{pricing.note[lang]}</p>
          </Section>

          {/* FAQ tarifs */}
          <Section className="!pt-0">
            <SectionHead eyebrow={lang === "fr" ? "Questions fréquentes" : "FAQ"} title={lang === "fr" ? "Bon à savoir" : "Good to know"} />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {pricing.faq.map((f) => (
                <div key={f.q.en} className="rounded-2xl border border-surface-border bg-surface-white/70 p-6">
                  <h3 className="text-[15px] font-bold text-ink">{f.q[lang]}</h3>
                  <p className="mt-2.5 text-sm leading-7 text-ink-muted">{f.a[lang]}</p>
                </div>
              ))}
            </div>
          </Section>
          <FinalBand lang={lang} />
        </>
      )}
    </PageShell>
  );
}

/* ============ DOCUMENTATION ============ */
export function DocsPage() {
  return (
    <PageShell>
      {(lang) => (
        <>
          <PageHero eyebrow={docsPage.eyebrow[lang]} title={docsPage.title[lang]} body={docsPage.body[lang]} />
          <Section className="!pt-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {docsPage.sections.map((s) => (
                <a key={s.key} href={s.href} className="solution-card group flex flex-col">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-ink">{s.title[lang]}</h2>
                    {s.soon ? (
                      <span className="rounded-full border border-surface-border bg-surface px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-faint">
                        {lang === "fr" ? "Bientôt" : "Soon"}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-6 text-ink-muted">{s.desc[lang]}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    {lang === "fr" ? "Ouvrir" : "Open"} <span aria-hidden>→</span>
                  </span>
                </a>
              ))}
            </div>
          </Section>

          <Section className="!pt-0">
            <SectionHead eyebrow={docsPage.faqTitle[lang]} title={docsPage.faqTitle[lang]} />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {docsPage.faq.map((f) => (
                <div key={f.q.en} className="rounded-2xl border border-surface-border bg-surface-white/70 p-6">
                  <h3 className="text-[15px] font-bold text-ink">{f.q[lang]}</h3>
                  <p className="mt-2.5 text-sm leading-7 text-ink-muted">{f.a[lang]}</p>
                </div>
              ))}
            </div>
          </Section>
          <FinalBand lang={lang} />
        </>
      )}
    </PageShell>
  );
}

/* ============ À PROPOS ============ */
export function AboutPage() {
  return (
    <PageShell>
      {(lang) => (
        <>
          <PageHero eyebrow={aboutPage.eyebrow[lang]} title={aboutPage.title[lang]} />
          <Section className="!pt-0">
            <p className="max-w-3xl text-[clamp(1.15rem,2vw,1.5rem)] font-display leading-[1.5] text-ink-secondary">
              {aboutPage.lede[lang]}
            </p>
          </Section>

          <Section className="!pt-0">
            <div className="grid gap-4 md:grid-cols-2">
              {aboutPage.blocks.map((b) => (
                <article key={b.title.en} className="mana-card rounded-2xl p-7">
                  <h2 className="font-display text-xl font-bold text-ink">{b.title[lang]}</h2>
                  <p className="mt-3 text-[15px] leading-8 text-ink-muted">{b.body[lang]}</p>
                </article>
              ))}
            </div>
          </Section>

          {/* Piliers de l'écosystème */}
          <Section className="!pt-0">
            <Eyebrow accent>{foundations.eyebrow[lang]}</Eyebrow>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {aboutPage.pillars.map((p) => (
                <a key={p.name} href={p.href} className="mana-card group flex items-start justify-between gap-4 rounded-2xl p-6">
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{p.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-muted">{p.desc[lang]}</p>
                  </div>
                  <span aria-hidden className="mt-1 text-accent transition-transform group-hover:translate-x-0.5">→</span>
                </a>
              ))}
            </div>
          </Section>
          <FinalBand lang={lang} />
        </>
      )}
    </PageShell>
  );
}

/* Bandeau CTA commun en pied de page interne */
function FinalBand({ lang }: { lang: "en" | "fr" }) {
  return (
    <section className="relative overflow-hidden text-white band-dark">
      <div className="relative z-10 mx-auto max-w-content px-6 py-16 text-center md:px-10 lg:py-20">
        <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.7rem,3.4vw,2.4rem)] font-bold leading-[1.1] tracking-tight">
          {lang === "fr" ? "Prêt à créer votre espace temps ?" : "Ready to create your time space?"}
        </h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Cta href="/#contact" variant="primary">
                {lang === "fr" ? "Nous contacter" : "Contact us"}
              </Cta>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {lang === "fr" ? "Demander une démonstration" : "Request a demo"}
          </a>
        </div>
      </div>
    </section>
  );
}

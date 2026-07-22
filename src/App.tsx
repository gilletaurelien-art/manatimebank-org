import ContactSection from "./ContactSection";
import DashboardMockup from "./DashboardMockup";
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
import {
  nav,
  hero,
  problem,
  functions,
  solutions,
  steps,
  features,
  dashboards,
  whiteLabel,
  usedBy,
  pricing,
  foundations,
  whitePaper,
  finalCta,
} from "./copy";

export default function App() {
  const [lang, setLang] = useLang();

  return (
    <div className="mana-wallpaper-page relative min-h-screen overflow-x-hidden bg-surface text-ink">
      <ManaWallpaper />
      <SiteHeader lang={lang} setLang={setLang} />

      <main id="top" className="relative z-10">
        {/* ---------------- 1. HERO ---------------- */}
        <section className="relative overflow-hidden px-6 pt-[62px] md:px-10">
          <div className="absolute inset-0 hero-glow" />
          <div className="relative z-10 mx-auto grid w-full max-w-content items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div>
              <div className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="text-[15px] leading-none"
                  style={{ filter: "sepia(1) saturate(3.2) hue-rotate(2deg) brightness(1.02)" }}
                >
                  🦋
                </span>
                <Eyebrow accent>{hero.eyebrow[lang]}</Eyebrow>
              </div>
              <h1 className="mt-5 text-[clamp(2.6rem,6vw,4.6rem)] font-bold leading-[1.03] tracking-[-0.02em] text-ink">
                {hero.title[lang]}
              </h1>
              <p className="mt-6 max-w-xl text-[clamp(1.05rem,1.8vw,1.3rem)] leading-relaxed text-ink-secondary">
                {hero.subtitle[lang]}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Cta href="#contact" variant="primary">
                  {nav.demo[lang]}
                </Cta>
              </div>

              <div className="mt-11">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
                  {hero.sectorsLabel[lang]}
                </p>
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {hero.sectors.map((s) => (
                    <span key={s.en} className="sector-pill">
                      {s[lang]}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <figure className="hero-butterfly-frame">
                <img
                  src="/assets/manatimebank-butterfly.jpeg"
                  alt="MANAtimebank — papillon-horloge"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* ---------------- 2. PROBLÈME ---------------- */}
        <Section>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow accent>{problem.eyebrow[lang]}</Eyebrow>
              <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-ink">
                {problem.title[lang]}
                <br />
                <span className="text-ink-muted">{problem.titleTwo[lang]}</span>
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-ink-muted sm:text-base">
                {problem.body[lang]}
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 lg:justify-end">
              {problem.gestures.map((g, i) => (
                <span
                  key={g.en}
                  className="sector-pill"
                  style={{ fontSize: `${15 - (i % 3)}px`, padding: "0.5rem 1rem" }}
                >
                  {g[lang]}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* ---------------- 3. TROIS FONCTIONS ---------------- */}
        <Section>
          <SectionHead eyebrow={functions.eyebrow[lang]} title={functions.title[lang]} />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {functions.items.map((f) => (
              <article key={f.key} className="mana-card rounded-2xl p-7">
                <div className="grad-badge">
                  <Icon name={f.key} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">{f.title[lang]}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-muted">{f.body[lang]}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* ---------------- 4. SOLUTIONS ---------------- */}
        <Section id="solutions">
          <SectionHead eyebrow={solutions.eyebrow[lang]} title={solutions.title[lang]} body={solutions.body[lang]} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.items.map((s) => (
              <a key={s.key} href={`/solutions/${s.key}`} className="solution-card group block">
                <h3 className="text-lg font-bold text-ink">{s.title[lang]}</h3>
                <p className="mt-3 text-[13px] font-medium leading-6 text-ink-faint">{s.problem[lang]}</p>
                <div className="my-3 h-px w-full bg-surface-divider" />
                <p className="text-sm leading-6 text-ink-secondary">{s.solution[lang]}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-accent opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                  {solutions.cta[lang]} <span aria-hidden>→</span>
                </span>
              </a>
            ))}
          </div>
        </Section>

        {/* ---------------- 5. COMMENT ÇA MARCHE ---------------- */}
        <Section>
          <SectionHead eyebrow={steps.eyebrow[lang]} title={steps.title[lang]} />
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

        {/* ---------------- 6. FONCTIONNALITÉS ---------------- */}
        <Section id="fonctionnalites">
          <SectionHead eyebrow={features.eyebrow[lang]} title={features.title[lang]} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.families.map((fam) => (
              <article key={fam.key} className="mana-card rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <div className="grad-badge h-10 w-10">
                    <Icon name={fam.key} />
                  </div>
                  <h3 className="text-lg font-bold text-ink">{fam.title[lang]}</h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {fam.items[lang].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-ink-secondary">
                      <svg viewBox="0 0 20 20" className="mt-1 h-3.5 w-3.5 flex-none text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 10.5l4 4 8-9" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* ---------------- 7. TABLEAUX DE BORD ---------------- */}
        <Section id="documentation">
          <SectionHead eyebrow={dashboards.eyebrow[lang]} title={dashboards.title[lang]} body={dashboards.body[lang]} />
          <div className="mt-10">
            <DashboardMockup lang={lang} />
          </div>
        </Section>

        {/* ---------------- 8. MARQUE BLANCHE ---------------- */}
        <section id="marque-blanche" className="relative overflow-hidden text-white band-dark">
          <div className="relative z-10 mx-auto grid max-w-content gap-12 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center lg:py-28">
            <div>
              <p className="eyebrow text-white/50">{whiteLabel.eyebrow[lang]}</p>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.06] tracking-tight">
                {whiteLabel.title1[lang]}
                <br />
                {whiteLabel.title2[lang]}
                <br />
                <span className="text-white">
                  {whiteLabel.title3[lang]}
                </span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-7 text-white/65">{whiteLabel.body[lang]}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {whiteLabel.includes[lang].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[12.5px] font-medium text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>

            <div className="flex flex-col items-center lg:items-end">
              <figure className="hero-butterfly-frame wl-card">
                <img src="/assets/manatimebank-card.jpeg" alt="MANA timebank × TEMPOsystem" />
              </figure>
              <div className="mt-6 w-full max-w-[460px] rounded-2xl border border-white/12 bg-white/[0.04] p-5 text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                  {whiteLabel.sovereignty.label[lang]}
                </p>
                <p className="mt-2 font-display text-lg font-bold text-white">
                  {whiteLabel.sovereignty.title[lang]}
                </p>
                <p className="mt-2 text-[14px] leading-6 text-white/65">
                  {whiteLabel.sovereignty.body[lang]}
                </p>
                <a
                  href={whiteLabel.sovereignty.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-[13.5px] font-semibold text-[#E7C877] transition-colors hover:text-[#FBE7A8]"
                >
                  {whiteLabel.sovereignty.link[lang]}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- 9. ILS L'UTILISENT ---------------- */}
        <Section>
          <SectionHead eyebrow={usedBy.eyebrow[lang]} title={usedBy.title[lang]} body={usedBy.body[lang]} />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {usedBy.items.map((u) => (
              <a
                key={u.name}
                href={u.href}
                className="mana-card group flex flex-col rounded-2xl p-7 transition hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <img src="/Logo_MANA_Symbol_logo.png" alt="" className="h-8 w-8 object-contain" />
                  <span className="font-display text-xl font-bold text-ink">{u.name}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-ink-muted">{u.desc[lang]}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-accent">
                  {u.href.replace("https://", "")}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </a>
            ))}
          </div>
        </Section>

        {/* ---------------- 10. TARIFS ---------------- */}
        <Section id="tarifs">
          <SectionHead eyebrow={pricing.eyebrow[lang]} title={pricing.title[lang]} body={pricing.body[lang]} center />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  tier.featured
                    ? "border-accent-muted bg-surface-white shadow-card-hover"
                    : "border-surface-border bg-surface-white/80"
                }`}
              >
                {tier.featured ? (
                  <span className="absolute -top-2.5 left-6 rounded-full gradient-btn px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                    {lang === "fr" ? "Populaire" : "Popular"}
                  </span>
                ) : null}
                <h3 className="font-display text-lg font-bold text-ink">{tier.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-2xl font-bold tracking-tight text-ink">{tier.price[lang]}</span>
                  {tier.period[lang] ? <span className="text-[13px] text-ink-muted">{tier.period[lang]}</span> : null}
                </div>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">{tier.members[lang]}</p>
                <p className="mt-2 flex-1 text-[13px] leading-6 text-ink-muted">{tier.for[lang]}</p>
                <Cta href="/tarifs" variant={tier.featured ? "primary" : "plain"} className="mt-6 w-full">
                  {pricing.cta[lang]}
                </Cta>
              </div>
            ))}
          </div>
        </Section>

        {/* ---------------- 11. FONDATIONS ---------------- */}
        <Section id="fondations">
          <SectionHead eyebrow={foundations.eyebrow[lang]} title={foundations.title[lang]} body={foundations.body[lang]} />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {foundations.items.map((it) => (
              <a
                key={it.title.en}
                href={it.href}
                className="mana-card group flex items-start justify-between gap-4 rounded-2xl p-6"
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{it.title[lang]}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-muted">{it.body[lang]}</p>
                </div>
                <span aria-hidden className="mt-1 text-accent transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            ))}
          </div>
        </Section>

        {/* ---------------- LIVRE BLANC ---------------- */}
        <Section id="livre-blanc">
          <div className="rounded-2xl border border-accent-muted bg-gradient-to-br from-accent-light to-surface-white p-8 sm:p-10">
            <Eyebrow accent>{whitePaper.eyebrow[lang]}</Eyebrow>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">
              {whitePaper.version[lang]}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {whitePaper.title[lang]}
            </h3>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-ink-secondary sm:text-lg sm:leading-8">
              {whitePaper.body[lang]}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta href={lang === "fr" ? "/livre-blanc.html" : "/livre-blanc-en.html"} variant="primary">
                {whitePaper.read[lang]}
              </Cta>
              <Cta href="/Le-temps-donne-Livre-blanc-v1.1.pdf" variant="secondary">
                {whitePaper.download[lang]}
              </Cta>
            </div>
          </div>
        </Section>

        {/* ---------------- CTA FINAL ---------------- */}
        <Section className="!py-10">
          <div className="rounded-3xl border border-surface-border bg-surface-white/70 p-10 text-center backdrop-blur-md sm:p-14">
            <figure className="hero-butterfly-frame cta-butterfly">
              <img src="/assets/manatimebank-card.jpeg" alt="MANA timebank × TEMPOsystem" />
            </figure>
            <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.8rem,3.6vw,2.6rem)] font-bold leading-[1.1] tracking-tight text-ink">
              {finalCta.title[lang]}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-ink-muted">{finalCta.body[lang]}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Cta href="#contact" variant="primary">
                {nav.demo[lang]}
              </Cta>
            </div>
          </div>
        </Section>

        <ContactSection lang={lang} subject="Message via manatimebank.org" />
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}

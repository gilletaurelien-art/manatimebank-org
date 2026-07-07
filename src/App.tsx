import { useEffect, useState } from "react";
import HeroTransferScene from "./HeroTransferScene";
import ContactSection from "./ContactSection";
import EcosystemSchema from "./EcosystemSchema";

type Lang = "en" | "fr";

const STORAGE_KEY = "manatimebank_lang";

function detectLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "fr") return stored;
  return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
}

const t = {
  nav: {
    model: { en: "Model", fr: "Modèle" },
    principles: { en: "Principles", fr: "Principes" },
    governance: { en: "Governance", fr: "Gouvernance" },
  },
  hero: {
    eyebrow: { en: "Open civic time infrastructure", fr: "Infrastructure civique ouverte du temps" },
    tagline: {
      en: "An open model for recognizing, coordinating and sharing human time.",
      fr: "Un modèle ouvert pour reconnaître, coordonner et partager le temps humain.",
    },
    body: {
      en: "Human time is one of the most precious resources we share. Mana Time Bank proposes a civic and open framework to make contributions visible, trusted and useful across communities.",
      fr: "Le temps humain est l'une des ressources les plus précieuses que nous partageons. Mana Time Bank propose un cadre civique et ouvert pour rendre les contributions visibles, fiables et utiles entre les communautés.",
    },
    exploreModel: { en: "Explore the model", fr: "Explorer le modèle" },
    discoverTempo: { en: "Discover TEMPOSYSTEM", fr: "Découvrir TEMPOSYSTEM" },
  },
  model: {
    eyebrow: { en: "Concept", fr: "Concept" },
    title: { en: "What is Mana Time Bank?", fr: "Qu'est-ce que Mana Time Bank ?" },
    p1: {
      en: "Mana Time Bank is not a currency, not a marketplace and not a social network. It is a conceptual model for recognizing shared time as civic value.",
      fr: "Mana Time Bank n'est ni une monnaie, ni une place de marché, ni un réseau social. C'est un modèle conceptuel pour reconnaître le temps partagé comme une valeur civique.",
    },
    p2: {
      en: "Its purpose is to help communities make human contributions visible, comparable and useful without reducing them to commercial transactions. Time remains human. Recognition makes it actionable.",
      fr: "Son but est d'aider les communautés à rendre les contributions humaines visibles, comparables et utiles sans les réduire à des transactions commerciales. Le temps reste humain. La reconnaissance le rend actionnable.",
    },
    ideaLabel: { en: "The central idea", fr: "L'idée centrale" },
    idea: {
      en: "A shared hour can become a trusted signal for cooperation.",
      fr: "Une heure partagée peut devenir un signal de confiance pour la coopération.",
    },
    ideaBody: {
      en: "The model gives communities a common language for contribution, trust, coordination and collective action.",
      fr: "Le modèle donne aux communautés un langage commun pour la contribution, la confiance, la coordination et l'action collective.",
    },
  },
  principlesSection: {
    eyebrow: { en: "Principles", fr: "Principes" },
    title: { en: "A model built for civic trust", fr: "Un modèle bâti pour la confiance civique" },
  },
  flow: {
    eyebrow: { en: "Collective intelligence", fr: "Intelligence collective" },
    title: { en: "From time to collective action", fr: "Du temps à l'action collective" },
    body: {
      en: "The model turns scattered acts of help into readable signals. Those signals support trust. Trust enables coordination. Coordination makes collective action possible at civic scale.",
      fr: "Le modèle transforme des actes d'entraide dispersés en signaux lisibles. Ces signaux nourrissent la confiance. La confiance permet la coordination. La coordination rend l'action collective possible à l'échelle civique.",
    },
  },
  tempo: {
    eyebrow: { en: "Infrastructure", fr: "Infrastructure" },
    title: { en: "TEMPOSYSTEM makes coordination possible", fr: "TEMPOSYSTEM rend la coordination possible" },
    body: {
      en: "TEMPOSYSTEM is the open infrastructure that coordinates agents, memory, flows and decisions. Mana Time Bank defines the civic model. TEMPOSYSTEM provides the operating layer that can make the model durable, traceable and intelligent.",
      fr: "TEMPOSYSTEM est l'infrastructure ouverte qui coordonne les agents, la mémoire, les flux et les décisions. Mana Time Bank définit le modèle civique. TEMPOSYSTEM fournit la couche opérationnelle capable de rendre le modèle durable, traçable et intelligent.",
    },
  },
  lullaby: {
    eyebrow: { en: "The infrastructure, in motion", fr: "L'infrastructure, en mouvement" },
    equationTime: { en: "1 second", fr: "1 seconde" },
    equationMana: { en: "1 mana", fr: "1 mana" },
    body: {
      en: "Every hour given becomes a measurable, remembered energy that flows from hand to hand. Mana Time Bank turns it into civic value.",
      fr: "Chaque heure donnée devient une énergie mesurable et mémorisée qui circule de main en main. Mana Time Bank la transforme en valeur civique.",
    },
    giver: { en: "Giver", fr: "Donneur" },
    receiver: { en: "Receiver", fr: "Receveur" },
  },
  impl: {
    eyebrow: { en: "First implementation", fr: "Première mise en œuvre" },
    title: { en: "MANA France starts the territorial path", fr: "MANA France ouvre la voie territoriale" },
    franceBody: {
      en: "MANA France will be the first territorial implementation of the Mana Time Bank model, focused on recognizing shared time, cooperation and civic contribution in a concrete national context.",
      fr: "MANA France sera la première mise en œuvre territoriale du modèle Mana Time Bank, centrée sur la reconnaissance du temps partagé, de la coopération et de la contribution civique dans un contexte national concret.",
    },
    visitFrance: { en: "Visit MANA France", fr: "Visiter MANA France" },
    bretagneBody: {
      en: "mana.bzh is the Breton laboratory: a pilot territory for testing language, practices and community-scale cooperation before wider deployment.",
      fr: "mana.bzh est le laboratoire breton : un territoire pilote pour éprouver le langage, les pratiques et la coopération à l'échelle communautaire avant un déploiement plus large.",
    },
    visitBzh: { en: "Visit mana.bzh", fr: "Visiter mana.bzh" },
  },
  governance: {
    eyebrow: { en: "Governance", fr: "Gouvernance" },
    title: { en: "A model protected by Alliance MANA", fr: "Un modèle protégé par l'Alliance MANA" },
    body: {
      en: "Alliance MANA is the steward of the principles, ethics and evolution of the model. Its role is to keep Mana Time Bank open, understandable and aligned with public-interest cooperation.",
      fr: "L'Alliance MANA est la gardienne des principes, de l'éthique et de l'évolution du modèle. Son rôle est de garder Mana Time Bank ouvert, compréhensible et aligné sur la coopération d'intérêt général.",
    },
    visit: { en: "Visit Alliance MANA", fr: "Visiter l'Alliance MANA" },
  },
  footer: {
    tagline: { en: "Open model for human time coordination.", fr: "Modèle ouvert pour la coordination du temps humain." },
  },
} as const;

const principles = [
  {
    title: { en: "Time as contribution", fr: "Le temps comme contribution" },
    body: {
      en: "Every hour given to help, teach, care, organize or protect can be recognized as civic value.",
      fr: "Chaque heure donnée pour aider, enseigner, prendre soin, organiser ou protéger peut être reconnue comme valeur civique.",
    },
  },
  {
    title: { en: "Trust before scale", fr: "La confiance avant l'échelle" },
    body: {
      en: "Mana Time Bank favors clear rules, local legitimacy and traceable decisions before growth.",
      fr: "Mana Time Bank privilégie des règles claires, une légitimité locale et des décisions traçables avant la croissance.",
    },
  },
  {
    title: { en: "Local action, global language", fr: "Action locale, langage global" },
    body: {
      en: "Communities act locally while sharing a common vocabulary for time, contribution and cooperation.",
      fr: "Les communautés agissent localement tout en partageant un vocabulaire commun du temps, de la contribution et de la coopération.",
    },
  },
  {
    title: { en: "Open coordination", fr: "Coordination ouverte" },
    body: {
      en: "The model is designed to connect people, institutions and intelligent systems without locking them in.",
      fr: "Le modèle est conçu pour relier les personnes, les institutions et les systèmes intelligents sans les enfermer.",
    },
  },
] as const;

const flowSteps = [
  { en: "Shared time", fr: "Temps partagé" },
  { en: "Recognized value", fr: "Valeur reconnue" },
  { en: "Trusted coordination", fr: "Coordination de confiance" },
  { en: "Collective action", fr: "Action collective" },
] as const;

const ecosystemLinks = [
  { label: "TEMPOSYSTEM.eu", href: "https://temposystem.eu" },
  { label: "TEMPOSYSTEM.fr", href: "https://temposystem.fr" },
  { label: "MANA France", href: "https://manafrance.org" },
  { label: "MANA Bretagne", href: "https://mana.bzh" },
  { label: "Alliance MANA", href: "https://alliancemana.org" },
];

function ExternalLink({
  href,
  children,
  variant = "plain",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "plain";
}) {
  const styles = {
    primary:
      "border-transparent gradient-btn text-white shadow-card",
    secondary:
      "border-surface-border bg-surface-white text-ink-secondary shadow-card hover:border-accent-muted hover:text-ink",
    plain:
      "border-surface-border bg-surface-white text-ink-secondary shadow-card hover:border-accent-muted hover:text-accent",
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-lg border px-5 py-3 text-sm font-bold tracking-wide transition duration-150 ${styles[variant]}`}
    >
      {children}
    </a>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-[1120px] px-6 py-16 md:px-10 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
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

function ManaWallpaper() {
  return (
    <div className="mana-wallpaper" aria-hidden="true">
      <div className="mana-wallpaper-orbit mana-wallpaper-orbit-one" />
      <div className="mana-wallpaper-orbit mana-wallpaper-orbit-two" />
      <div className="mana-wallpaper-orbit mana-wallpaper-orbit-three" />
      <div className="mana-wallpaper-core">
        <img src="/Logo_MANA_Symbol_logo.png" alt="" className="mana-wallpaper-core-logo" />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="mana-world-line mana-world-line-one" />
      <div className="mana-world-line mana-world-line-two" />
      <div className="mana-world-line mana-world-line-three" />
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>(detectLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="mana-wallpaper-page relative min-h-screen overflow-x-hidden bg-surface text-ink">
      <ManaWallpaper />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-surface-border/60 bg-surface-white/95 shadow-soft backdrop-blur-md">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <img
            src="/Logo_MANA_Symbol_logo.png"
            alt=""
            className="absolute left-1/2 top-1/2 h-28 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.075]"
          />
        </div>
        <nav
          className="relative mx-auto flex h-[60px] max-w-[1120px] items-center justify-between px-6 md:px-10"
          aria-label="Main navigation"
        >
          <a href="#top" className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.18em] text-ink">
            <img src="/Logo_MANA_Symbol_logo.png" alt="MANA" className="h-7 w-7 object-contain" />
            Mana Time Bank
          </a>
          <div className="flex items-center gap-7">
            <div className="hidden items-center gap-7 text-[13px] text-ink-muted md:flex">
              <a className="transition-colors duration-150 hover:text-ink" href="#model">
                {t.nav.model[lang]}
              </a>
              <a className="transition-colors duration-150 hover:text-ink" href="#principles">
                {t.nav.principles[lang]}
              </a>
              <a className="transition-colors duration-150 hover:text-ink" href="#temposystem">
                TEMPOSYSTEM
              </a>
              <a className="transition-colors duration-150 hover:text-ink" href="#governance">
                {t.nav.governance[lang]}
              </a>
            </div>
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </nav>
      </header>

      <main id="top" className="relative z-10">
        <section className="relative flex min-h-screen items-center overflow-hidden bg-transparent px-6 pt-[60px] md:px-10">
          <div className="absolute inset-0 hero-glow" />
          <div className="relative z-10 mx-auto w-full max-w-6xl py-24">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-accent/80">
                {t.hero.eyebrow[lang]}
              </p>
              <h1 className="mt-6 text-[clamp(2.7rem,7vw,5.5rem)] font-bold leading-[1.04] tracking-[-0.02em] text-ink">
                Mana Time Bank
              </h1>
              <p className="mt-6 max-w-3xl text-[clamp(1.05rem,2vw,1.3rem)] leading-snug text-ink-secondary italic">
                {t.hero.tagline[lang]}
              </p>
              <p className="mt-8 max-w-2xl text-[15px] leading-[1.75] text-ink-muted sm:text-base">
                {t.hero.body[lang]}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ExternalLink href="#model" variant="primary">
                  {t.hero.exploreModel[lang]}
                </ExternalLink>
                <ExternalLink href="https://temposystem.eu" variant="secondary">
                  {t.hero.discoverTempo[lang]}
                </ExternalLink>
              </div>
            </div>
          </div>
        </section>

        <Section id="model" eyebrow={t.model.eyebrow[lang]} title={t.model.title[lang]}>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="mana-card rounded-2xl p-8">
              <p className="text-xl leading-9 text-ink-secondary">
                {t.model.p1[lang]}
              </p>
              <p className="mt-6 leading-8 text-ink-muted">
                {t.model.p2[lang]}
              </p>
            </div>
            <div className="grid gap-4 mana-card rounded-2xl bg-accent-light p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                {t.model.ideaLabel[lang]}
              </p>
              <p className="text-2xl font-semibold leading-snug text-ink">
                {t.model.idea[lang]}
              </p>
              <p className="leading-7 text-ink-muted">
                {t.model.ideaBody[lang]}
              </p>
            </div>
          </div>
        </Section>

        <Section id="principles" eyebrow={t.principlesSection.eyebrow[lang]} title={t.principlesSection.title[lang]}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <article
                key={principle.title.en}
                className="mana-card rounded-2xl p-6 transition hover:-translate-y-0.5"
              >
                <div className="mb-6 h-1 w-10 rounded-full bg-gradient-to-r from-accent to-accent-end" />
                <h3 className="text-lg font-semibold text-ink">{principle.title[lang]}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-muted">{principle.body[lang]}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow={t.flow.eyebrow[lang]}
          title={t.flow.title[lang]}
        >
          <div className="mana-card rounded-2xl p-5 sm:p-8">
            <div className="grid gap-4 md:grid-cols-4">
              {flowSteps.map((step, index) => (
                <div key={step.en} className="relative rounded-xl border border-surface-border bg-surface px-5 py-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    0{index + 1}
                  </span>
                  <p className="mt-5 text-xl font-semibold text-ink">{step[lang]}</p>
                  {index < flowSteps.length - 1 ? (
                    <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-mana to-transparent md:block" />
                  ) : null}
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-7 text-ink-muted">
              {t.flow.body[lang]}
            </p>
          </div>
        </Section>

        <Section id="temposystem" eyebrow={t.tempo.eyebrow[lang]} title={t.tempo.title[lang]}>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="mana-card rounded-2xl p-8 lg:col-span-2">
              <p className="text-lg leading-8 text-ink-secondary">
                {t.tempo.body[lang]}
              </p>
            </article>
            <div className="grid content-start gap-3">
              <ExternalLink href="https://temposystem.eu">TEMPOSYSTEM.eu</ExternalLink>
              <ExternalLink href="https://temposystem.fr">TEMPOSYSTEM.fr</ExternalLink>
            </div>
          </div>
        </Section>

        {/* LULLABY — TEMPOSYSTEM as a living flow (illustration, dark band) */}
        <section
          id="lullaby"
          className="relative overflow-hidden text-white"
          style={{ background: "linear-gradient(160deg,#1b2a55 0%,#3a2a78 45%,#6d3a9e 100%)" }}
        >
          <div className="relative z-10 mx-auto flex max-w-[1120px] flex-col items-center px-6 py-20 text-center md:px-10 md:py-28">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/55">
              {t.lullaby.eyebrow[lang]}
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.05] tracking-tight">
              TEMPOSYSTEM
            </h2>

            <p className="source-equation" aria-label="1 second equals 1 mana" style={{ marginTop: "1rem" }}>
              <span className="eq-part eq-time">{t.lullaby.equationTime[lang]}</span>
              <span className="eq-sign">=</span>
              <span className="eq-part eq-mana">{t.lullaby.equationMana[lang]}</span>
            </p>

            {/* Module LULLABY — butterfly-comet + time transfer counters */}
            <HeroTransferScene giverLabel={t.lullaby.giver[lang]} receiverLabel={t.lullaby.receiver[lang]} />

            <p className="max-w-xl text-[15px] leading-[1.8] text-white/70">
              {t.lullaby.body[lang]}
            </p>
          </div>
        </section>

        <Section eyebrow={t.impl.eyebrow[lang]} title={t.impl.title[lang]}>
          {/* Schéma simple de l'écosystème (remplace les cartes détaillées) */}
          <EcosystemSchema lang={lang} />
        </Section>

        <Section id="governance" eyebrow={t.governance.eyebrow[lang]} title={t.governance.title[lang]}>
          <div className="rounded-2xl border border-accent-muted bg-gradient-to-br from-accent-light to-surface-white p-8 sm:p-10">
            <p className="max-w-3xl text-lg leading-8 text-ink-secondary">
              {t.governance.body[lang]}
            </p>
            <div className="mt-8">
              <ExternalLink href="https://alliancemana.org" variant="primary">
                {t.governance.visit[lang]}
              </ExternalLink>
            </div>
          </div>
        </Section>
        <ContactSection lang={lang} subject="Message via manatimebank.org" />
      </main>

      <footer className="border-t border-surface-border bg-surface px-6 py-10 md:px-10">
        <div className="mx-auto max-w-[1120px]">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3.5">
              <img src="/Logo_MANA_Symbol_logo.png" alt="MANA" className="h-6 w-6 object-contain opacity-70" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink">
                  Mana Time Bank
                </p>
                <p className="mt-0.5 text-[11px] text-ink-faint">
                  {t.footer.tagline[lang]}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-3 border-t border-surface-border pt-7 sm:grid-cols-2 lg:grid-cols-5">
            {ecosystemLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-surface-border bg-surface-white px-4 py-3 shadow-card transition-all duration-150 hover:-translate-y-0.5 hover:border-accent-muted hover:shadow-card-hover"
              >
                <span className="text-[12px] font-bold text-ink-secondary group-hover:text-accent">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

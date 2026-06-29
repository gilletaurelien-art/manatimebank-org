const principles = [
  {
    title: "Time as contribution",
    body: "Every hour given to help, teach, care, organize or protect can be recognized as civic value.",
  },
  {
    title: "Trust before scale",
    body: "Mana Time Bank favors clear rules, local legitimacy and traceable decisions before growth.",
  },
  {
    title: "Local action, global language",
    body: "Communities act locally while sharing a common vocabulary for time, contribution and cooperation.",
  },
  {
    title: "Open coordination",
    body: "The model is designed to connect people, institutions and intelligent systems without locking them in.",
  },
];

const flowSteps = [
  "Shared time",
  "Recognized value",
  "Trusted coordination",
  "Collective action",
];

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

function TimeField() {
  return (
    <div className="hero-field" aria-hidden="true">
      <div className="time-orbit time-orbit-one" />
      <div className="time-orbit time-orbit-two" />
      <div className="time-orbit time-orbit-three" />
      <div className="time-core">
        <span />
        <span />
        <span />
      </div>
      <div className="world-line world-line-one" />
      <div className="world-line world-line-two" />
      <div className="world-line world-line-three" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-ink">
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
          <div className="hidden items-center gap-7 text-[13px] text-ink-muted md:flex">
            <a className="transition-colors duration-150 hover:text-ink" href="#model">
              Model
            </a>
            <a className="transition-colors duration-150 hover:text-ink" href="#principles">
              Principles
            </a>
            <a className="transition-colors duration-150 hover:text-ink" href="#temposystem">
              TEMPOSYSTEM
            </a>
            <a className="transition-colors duration-150 hover:text-ink" href="#governance">
              Governance
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="relative flex min-h-screen items-center overflow-hidden bg-surface-white px-6 pt-[60px] md:px-10">
          <TimeField />
          <div className="absolute inset-0 hero-glow" />
          <div className="relative z-10 mx-auto w-full max-w-6xl py-24">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-accent/80">
                Open civic time infrastructure
              </p>
              <h1 className="mt-6 text-[clamp(2.7rem,7vw,5.5rem)] font-bold leading-[1.04] tracking-[-0.02em] text-ink">
                Mana Time Bank
              </h1>
              <p className="mt-6 max-w-3xl text-[clamp(1.05rem,2vw,1.3rem)] leading-snug text-ink-secondary italic">
                An open model for recognizing, coordinating and sharing human time.
              </p>
              <p className="mt-8 max-w-2xl text-[15px] leading-[1.75] text-ink-muted sm:text-base">
                Human time is one of the most precious resources we share. Mana
                Time Bank proposes a civic and open framework to make contributions
                visible, trusted and useful across communities.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ExternalLink href="#model" variant="primary">
                  Explore the model
                </ExternalLink>
                <ExternalLink href="https://temposystem.eu" variant="secondary">
                  Discover TEMPOSYSTEM
                </ExternalLink>
              </div>
            </div>
          </div>
        </section>

        <Section id="model" eyebrow="Concept" title="What is Mana Time Bank?">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="mana-card rounded-2xl p-8">
              <p className="text-xl leading-9 text-ink-secondary">
                Mana Time Bank is not a currency, not a marketplace and not a
                social network. It is a conceptual model for recognizing shared
                time as civic value.
              </p>
              <p className="mt-6 leading-8 text-ink-muted">
                Its purpose is to help communities make human contributions
                visible, comparable and useful without reducing them to commercial
                transactions. Time remains human. Recognition makes it actionable.
              </p>
            </div>
            <div className="grid gap-4 mana-card rounded-2xl bg-accent-light p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                The central idea
              </p>
              <p className="text-2xl font-semibold leading-snug text-ink">
                A shared hour can become a trusted signal for cooperation.
              </p>
              <p className="leading-7 text-ink-muted">
                The model gives communities a common language for contribution,
                trust, coordination and collective action.
              </p>
            </div>
          </div>
        </Section>

        <Section id="principles" eyebrow="Principles" title="A model built for civic trust">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="mana-card rounded-2xl p-6 transition hover:-translate-y-0.5"
              >
                <div className="mb-6 h-1 w-10 rounded-full bg-gradient-to-r from-accent to-accent-end" />
                <h3 className="text-lg font-semibold text-ink">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-muted">{principle.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Collective intelligence"
          title="From time to collective action"
        >
          <div className="mana-card rounded-2xl p-5 sm:p-8">
            <div className="grid gap-4 md:grid-cols-4">
              {flowSteps.map((step, index) => (
                <div key={step} className="relative rounded-xl border border-surface-border bg-surface px-5 py-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    0{index + 1}
                  </span>
                  <p className="mt-5 text-xl font-semibold text-ink">{step}</p>
                  {index < flowSteps.length - 1 ? (
                    <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-mana to-transparent md:block" />
                  ) : null}
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-7 text-ink-muted">
              The model turns scattered acts of help into readable signals. Those
              signals support trust. Trust enables coordination. Coordination
              makes collective action possible at civic scale.
            </p>
          </div>
        </Section>

        <Section id="temposystem" eyebrow="Infrastructure" title="TEMPOSYSTEM makes coordination possible">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="mana-card rounded-2xl p-8 lg:col-span-2">
              <p className="text-lg leading-8 text-ink-secondary">
                TEMPOSYSTEM is the open infrastructure that coordinates agents,
                memory, flows and decisions. Mana Time Bank defines the civic
                model. TEMPOSYSTEM provides the operating layer that can make the
                model durable, traceable and intelligent.
              </p>
            </article>
            <div className="grid content-start gap-3">
              <ExternalLink href="https://temposystem.eu">TEMPOSYSTEM.eu</ExternalLink>
              <ExternalLink href="https://temposystem.fr">TEMPOSYSTEM.fr</ExternalLink>
            </div>
          </div>
        </Section>

        <Section eyebrow="First implementation" title="MANA France starts the territorial path">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="mana-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-ink">MANA France</h3>
              <p className="mt-5 leading-8 text-ink-muted">
                MANA France will be the first territorial implementation of the
                Mana Time Bank model, focused on recognizing shared time,
                cooperation and civic contribution in a concrete national context.
              </p>
              <div className="mt-7">
                <ExternalLink href="https://manafrance.org" variant="secondary">
                  Visit MANA France
                </ExternalLink>
              </div>
            </div>
            <div className="mana-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-ink">MANA Bretagne</h3>
              <p className="mt-5 leading-8 text-ink-muted">
                mana.bzh is the Breton laboratory: a pilot territory for testing
                language, practices and community-scale cooperation before wider
                deployment.
              </p>
              <div className="mt-7">
                <ExternalLink href="https://mana.bzh" variant="secondary">
                  Visit mana.bzh
                </ExternalLink>
              </div>
            </div>
          </div>
        </Section>

        <Section id="governance" eyebrow="Governance" title="A model protected by Alliance MANA">
          <div className="rounded-2xl border border-accent-muted bg-gradient-to-br from-accent-light to-surface-white p-8 sm:p-10">
            <p className="max-w-3xl text-lg leading-8 text-ink-secondary">
              Alliance MANA is the steward of the principles, ethics and evolution
              of the model. Its role is to keep Mana Time Bank open, understandable
              and aligned with public-interest cooperation.
            </p>
            <div className="mt-8">
              <ExternalLink href="https://alliancemana.org" variant="primary">
                Visit Alliance MANA
              </ExternalLink>
            </div>
          </div>
        </Section>
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
                  Open model for human time coordination.
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

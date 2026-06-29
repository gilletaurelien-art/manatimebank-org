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
      "border-mana bg-mana text-midnight shadow-lg shadow-mana/15 hover:bg-[#f2d58b]",
    secondary:
      "border-white/15 bg-white/5 text-slate-100 hover:border-mana/50 hover:bg-white/10",
    plain:
      "border-white/10 bg-white/[0.03] text-slate-200 hover:border-ocean/45 hover:text-white",
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition ${styles[variant]}`}
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
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-mana/80">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
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
    <div className="min-h-screen bg-midnight text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-midnight/80 backdrop-blur-xl">
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
          aria-label="Main navigation"
        >
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
            <span className="h-3 w-3 rounded-full bg-mana shadow-[0_0_18px_rgb(217_184_111_/_0.9)]" />
            Mana Time Bank
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#model">
              Model
            </a>
            <a className="transition hover:text-white" href="#principles">
              Principles
            </a>
            <a className="transition hover:text-white" href="#temposystem">
              TEMPOSYSTEM
            </a>
            <a className="transition hover:text-white" href="#governance">
              Governance
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 sm:px-8">
          <TimeField />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(217,184,111,0.16),transparent_30%),linear-gradient(180deg,rgba(7,11,22,0.08),#070b16_92%)]" />
          <div className="relative z-10 mx-auto w-full max-w-6xl py-24">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-mana/80">
                Open civic time infrastructure
              </p>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl">
                Mana Time Bank
              </h1>
              <p className="mt-6 max-w-3xl text-2xl leading-tight text-slate-100 sm:text-3xl">
                An open model for recognizing, coordinating and sharing human time.
              </p>
              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
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
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-soft">
              <p className="text-xl leading-9 text-slate-200">
                Mana Time Bank is not a currency, not a marketplace and not a
                social network. It is a conceptual model for recognizing shared
                time as civic value.
              </p>
              <p className="mt-6 leading-8 text-slate-400">
                Its purpose is to help communities make human contributions
                visible, comparable and useful without reducing them to commercial
                transactions. Time remains human. Recognition makes it actionable.
              </p>
            </div>
            <div className="grid gap-4 rounded-2xl border border-mana/20 bg-mana/[0.07] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-mana">
                The central idea
              </p>
              <p className="text-2xl font-semibold leading-snug text-white">
                A shared hour can become a trusted signal for cooperation.
              </p>
              <p className="leading-7 text-slate-300">
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
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-mana/40 hover:bg-white/[0.055]"
              >
                <div className="mb-6 h-1 w-10 rounded-full bg-gradient-to-r from-mana to-ocean" />
                <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{principle.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Collective intelligence"
          title="From time to collective action"
        >
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 sm:p-8">
            <div className="grid gap-4 md:grid-cols-4">
              {flowSteps.map((step, index) => (
                <div key={step} className="relative rounded-xl border border-white/10 bg-white/[0.035] p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mana">
                    0{index + 1}
                  </span>
                  <p className="mt-5 text-xl font-semibold text-white">{step}</p>
                  {index < flowSteps.length - 1 ? (
                    <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-mana to-transparent md:block" />
                  ) : null}
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-400">
              The model turns scattered acts of help into readable signals. Those
              signals support trust. Trust enables coordination. Coordination
              makes collective action possible at civic scale.
            </p>
          </div>
        </Section>

        <Section id="temposystem" eyebrow="Infrastructure" title="TEMPOSYSTEM makes coordination possible">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 lg:col-span-2">
              <p className="text-lg leading-8 text-slate-200">
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
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
              <h3 className="text-2xl font-semibold text-white">MANA France</h3>
              <p className="mt-5 leading-8 text-slate-300">
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
            <div className="rounded-2xl border border-ocean/20 bg-ocean/[0.06] p-8">
              <h3 className="text-2xl font-semibold text-white">MANA Bretagne</h3>
              <p className="mt-5 leading-8 text-slate-300">
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
          <div className="rounded-2xl border border-mana/20 bg-gradient-to-br from-mana/[0.12] to-white/[0.03] p-8 sm:p-10">
            <p className="max-w-3xl text-lg leading-8 text-slate-200">
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

      <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
              Mana Time Bank
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Open model for human time coordination.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {ecosystemLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

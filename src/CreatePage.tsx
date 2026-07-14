// « Créer votre espace temps » — assistant guidé en 4 étapes.
// Pas de provisioning back-end (encore) : la demande part via Web3Forms
// (même canal que ContactSection → contact@manahome.org), et l'utilisateur
// a le sentiment concret de façonner son espace (récap live + formule).

import { useMemo, useState } from "react";
import { createSpace as C, type Lang } from "./copy";
import { PageShell } from "./shared";

const ACCESS_KEY = "6b87a2f3-2183-40e6-befe-23fd66944144";
const TOTAL = 4;

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 32);
}

type State = {
  orgType: string;
  orgName: string;
  spaceName: string;
  langs: string[];
  size: string; // key
  contactName: string;
  email: string;
  message: string;
};

const EMPTY: State = {
  orgType: "",
  orgName: "",
  spaceName: "",
  langs: [],
  size: "",
  contactName: "",
  email: "",
  message: "",
};

/* Puce sélectionnable (radio/checkbox stylée) */
function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
        active
          ? "border-accent bg-accent-light text-ink shadow-card"
          : "border-surface-border bg-surface-white/70 text-ink-secondary hover:border-accent-muted"
      }`}
    >
      {children}
    </button>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-semibold text-ink-secondary">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-surface-border bg-surface-white/80 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent-muted/40";

function CreateWizard({ lang }: { lang: Lang }) {
  const [step, setStep] = useState(0);
  const [v, setV] = useState<State>(EMPTY);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [resultSlug, setResultSlug] = useState(""); // slug réel renvoyé par le control plane (peut être suffixé)

  const set = (patch: Partial<State>) => setV((prev) => ({ ...prev, ...patch }));

  const slug = useMemo(() => slugify(v.spaceName || v.orgName) || "votre-espace", [v.spaceName, v.orgName]);
  const finalSlug = resultSlug || slug;
  const sizeInfo = C.sizes.find((s) => s.key === v.size);

  const stepValid = [
    !!v.orgType && v.orgName.trim().length > 1,
    v.spaceName.trim().length > 1,
    !!v.size,
    v.contactName.trim().length > 1 && /\S+@\S+\.\S+/.test(v.email),
  ][step];

  function toggleLang(l: string) {
    set({ langs: v.langs.includes(l) ? v.langs.filter((x) => x !== l) : [...v.langs, l] });
  }

  // Provisioning réel si le control plane est configuré (VITE_SUPABASE_URL +
  // VITE_SUPABASE_ANON_KEY) ; sinon repli sur la demande qualifiée (Web3Forms).
  // Le site fonctionne dans les deux cas et « s'améliore » dès que l'env est posé.
  const SUPA_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const SUPA_ANON = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

  async function provisionReal(): Promise<boolean> {
    const res = await fetch(`${SUPA_URL}/functions/v1/provision-space`, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: SUPA_ANON!, Authorization: `Bearer ${SUPA_ANON}` },
      body: JSON.stringify({
        botcheck: "",
        orgType: v.orgType,
        orgName: v.orgName,
        spaceName: v.spaceName,
        langs: v.langs,
        size: v.size,
        contactName: v.contactName,
        email: v.email,
        message: v.message,
      }),
    });
    const r = await res.json().catch(() => null);
    if (res.ok && r?.ok) {
      if (r.slug) setResultSlug(r.slug);
      return true;
    }
    return false;
  }

  async function submitLead(): Promise<boolean> {
    const payload = {
      access_key: ACCESS_KEY,
      subject: `Nouvelle demande d'espace temps — ${v.orgName || slug}`,
      from_name: "MANAtimebank · Créer un espace",
      "Type d'organisation": v.orgType,
      "Organisation": v.orgName,
      "Nom de l'espace": v.spaceName,
      "Adresse": `${slug}.manatimebank.org`,
      "Langues": v.langs.join(", ") || "—",
      "Taille (membres actifs)": sizeInfo ? sizeInfo.label.fr : v.size,
      "Formule suggérée": sizeInfo ? sizeInfo.plan : "—",
      name: v.contactName,
      email: v.email,
      message: v.message || "—",
    };
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const r = await res.json().catch(() => null);
    return !!r?.success;
  }

  async function submit() {
    setSending(true);
    setError("");
    try {
      // Provisioning réel si configuré ; en cas d'échec (back-end pas encore
      // déployé, erreur transitoire…) on retombe sur le lead Web3Forms — le
      // formulaire aboutit toujours et on ne perd jamais la demande.
      let ok = false;
      if (SUPA_URL && SUPA_ANON) {
        try {
          ok = await provisionReal();
        } catch {
          ok = false;
        }
      }
      if (!ok) ok = await submitLead();
      if (ok) setDone(true);
      else setError(C.errMsg[lang]);
    } catch {
      setError(C.errMsg[lang]);
    } finally {
      setSending(false);
    }
  }

  /* Écran de succès */
  if (done) {
    return (
      <section className="mx-auto w-full max-w-content px-6 py-24 md:px-10">
        <div className="mx-auto max-w-xl rounded-3xl border border-surface-border bg-surface-white/80 p-10 text-center backdrop-blur-md sm:p-14">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#2B3FC7] to-[#C040E8] text-white">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12l5 5L20 6" />
            </svg>
          </div>
          <h1 className="mt-6 font-display text-[clamp(1.6rem,3.2vw,2.2rem)] font-bold tracking-tight text-ink">
            {C.okTitle[lang]}
          </h1>
          <p className="mt-4 text-[15px] leading-7 text-ink-muted">{C.okBody[lang]}</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-4 py-1.5 text-[13px] font-medium text-ink-secondary">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#2B3FC7] to-[#C040E8]" />
            {finalSlug}.manatimebank.org
          </div>
          <div className="mt-8">
            <a href="/" className="inline-flex items-center justify-center rounded-lg gradient-btn px-6 py-3 text-sm font-semibold text-white shadow-card">
              {C.okCta[lang]}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-content px-6 py-14 md:px-10 lg:py-20">
      {/* En-tête */}
      <div className="max-w-2xl">
        <p className="eyebrow eyebrow-accent">{C.eyebrow[lang]}</p>
        <h1 className="mt-4 text-[clamp(2rem,4.2vw,3.2rem)] font-bold leading-[1.06] tracking-[-0.02em] text-ink">
          {C.title[lang]}
        </h1>
        <p className="mt-4 text-[15px] leading-7 text-ink-muted sm:text-base">{C.subtitle[lang]}</p>
      </div>

      {/* Progression */}
      <div className="mt-10 flex items-center gap-3">
        <span className="text-[13px] font-semibold text-ink-secondary">
          {C.step[lang]} {step + 1} {C.of[lang]} {TOTAL}
        </span>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-divider">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#2B3FC7] to-[#C040E8] transition-all duration-300"
            style={{ width: `${((step + 1) / TOTAL) * 100}%` }}
          />
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ---- Colonne formulaire ---- */}
        <div className="mana-card rounded-2xl p-7 sm:p-8">
          {step === 0 && (
            <div>
              <h2 className="text-xl font-bold text-ink">{C.s1Title[lang]}</h2>
              <p className="mt-2 text-sm text-ink-muted">{C.s1Body[lang]}</p>
              <div className="mt-6 space-y-6">
                <div>
                  <span className="mb-2 block text-[13px] font-semibold text-ink-secondary">{C.orgTypeLabel[lang]}</span>
                  <div className="flex flex-wrap gap-2">
                    {C.orgTypes.map((o) => (
                      <Chip key={o.en} active={v.orgType === o[lang]} onClick={() => set({ orgType: o[lang] })}>
                        {o[lang]}
                      </Chip>
                    ))}
                  </div>
                </div>
                <Field label={C.orgNameLabel[lang]}>
                  <input
                    className={inputCls}
                    value={v.orgName}
                    onChange={(e) => set({ orgName: e.target.value })}
                    placeholder={C.orgNamePlaceholder[lang]}
                  />
                </Field>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-ink">{C.s2Title[lang]}</h2>
              <p className="mt-2 text-sm text-ink-muted">{C.s2Body[lang]}</p>
              <div className="mt-6 space-y-6">
                <Field label={C.spaceNameLabel[lang]}>
                  <input
                    className={inputCls}
                    value={v.spaceName}
                    onChange={(e) => set({ spaceName: e.target.value })}
                    placeholder={C.spaceNamePlaceholder[lang]}
                  />
                </Field>
                <div>
                  <span className="mb-1.5 block text-[13px] font-semibold text-ink-secondary">{C.addressLabel[lang]}</span>
                  <div className="flex items-center rounded-xl border border-surface-border bg-surface px-4 py-3 text-sm">
                    <span className="font-semibold text-accent">{slug}</span>
                    <span className="text-ink-faint">.manatimebank.org</span>
                  </div>
                </div>
                <div>
                  <span className="mb-2 block text-[13px] font-semibold text-ink-secondary">{C.langsLabel[lang]}</span>
                  <div className="flex flex-wrap gap-2">
                    {C.langs.map((l) => (
                      <Chip key={l.en} active={v.langs.includes(l[lang])} onClick={() => toggleLang(l[lang])}>
                        {l[lang]}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-ink">{C.s3Title[lang]}</h2>
              <p className="mt-2 text-sm text-ink-muted">{C.s3Body[lang]}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {C.sizes.map((s) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => set({ size: s.key })}
                    aria-pressed={v.size === s.key}
                    className={`flex flex-col items-start rounded-2xl border p-5 text-left transition ${
                      v.size === s.key
                        ? "border-accent bg-accent-light shadow-card"
                        : "border-surface-border bg-surface-white/70 hover:border-accent-muted"
                    }`}
                  >
                    <span className="text-lg font-bold text-ink">{s.label[lang]}</span>
                    <span className="mt-1 text-[12px] font-medium uppercase tracking-[0.08em] text-ink-faint">
                      {lang === "fr" ? "membres actifs" : "active members"}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold text-accent">
                      {s.plan} · {s.price[lang]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-ink">{C.s4Title[lang]}</h2>
              <p className="mt-2 text-sm text-ink-muted">{C.s4Body[lang]}</p>
              <div className="mt-6 space-y-5">
                <Field label={C.contactNameLabel[lang]}>
                  <input className={inputCls} value={v.contactName} onChange={(e) => set({ contactName: e.target.value })} />
                </Field>
                <Field label={C.emailLabel[lang]}>
                  <input className={inputCls} type="email" value={v.email} onChange={(e) => set({ email: e.target.value })} />
                </Field>
                <Field label={C.msgLabel[lang]}>
                  <textarea className={`${inputCls} resize-y`} rows={3} value={v.message} onChange={(e) => set({ message: e.target.value })} />
                </Field>
              </div>
              {error ? <p className="mt-4 text-sm text-[#c0392b]">{error}</p> : null}
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className={`text-sm font-semibold text-ink-muted transition hover:text-ink ${step === 0 ? "invisible" : ""}`}
            >
              ← {C.back[lang]}
            </button>
            {step < TOTAL - 1 ? (
              <button
                type="button"
                disabled={!stepValid}
                onClick={() => setStep((s) => s + 1)}
                className="inline-flex items-center justify-center rounded-lg gradient-btn px-6 py-3 text-sm font-semibold text-white shadow-card transition disabled:cursor-not-allowed disabled:opacity-40"
              >
                {C.next[lang]} →
              </button>
            ) : (
              <button
                type="button"
                disabled={!stepValid || sending}
                onClick={submit}
                className="inline-flex items-center justify-center rounded-lg gradient-btn px-6 py-3 text-sm font-semibold text-white shadow-card transition disabled:cursor-not-allowed disabled:opacity-40"
              >
                {sending ? C.sending[lang] : C.submit[lang]}
              </button>
            )}
          </div>
        </div>

        {/* ---- Colonne récapitulatif live ---- */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-accent-muted bg-gradient-to-br from-accent-light to-surface-white p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent">{C.summaryTitle[lang]}</p>
            <p className="mt-3 font-display text-2xl font-bold leading-tight text-ink">
              {v.spaceName || v.orgName || (lang === "fr" ? "Votre espace" : "Your space")}
            </p>
            <div className="mt-1.5 inline-flex items-center gap-2 rounded-full bg-surface-white/70 px-3 py-1 text-[12px] font-medium text-ink-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#2B3FC7] to-[#C040E8]" />
              {slug}.manatimebank.org
            </div>

            <dl className="mt-6 space-y-3 text-[13px]">
              {v.orgType ? (
                <div className="flex justify-between gap-3">
                  <dt className="text-ink-muted">{C.orgTypeLabel[lang]}</dt>
                  <dd className="text-right font-semibold text-ink">{v.orgType}</dd>
                </div>
              ) : null}
              {v.langs.length ? (
                <div className="flex justify-between gap-3">
                  <dt className="text-ink-muted">{C.langsLabel[lang]}</dt>
                  <dd className="text-right font-semibold text-ink">{v.langs.join(", ")}</dd>
                </div>
              ) : null}
              {sizeInfo ? (
                <div className="flex justify-between gap-3">
                  <dt className="text-ink-muted">{lang === "fr" ? "Membres" : "Members"}</dt>
                  <dd className="text-right font-semibold text-ink">{sizeInfo.label[lang]}</dd>
                </div>
              ) : null}
            </dl>

            <div className="mt-6 rounded-xl border border-surface-border bg-surface-white/70 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-faint">{C.planLabel[lang]}</p>
              <p className="mt-1 font-display text-lg font-bold text-ink">
                {sizeInfo ? sizeInfo.plan : "—"}
              </p>
              {sizeInfo ? <p className="text-[13px] font-semibold text-accent">{sizeInfo.price[lang]}</p> : null}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default function CreatePage() {
  return <PageShell>{(lang) => <CreateWizard lang={lang} />}</PageShell>;
}

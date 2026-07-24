// Contenu bilingue du site MANAtimebank.org
// Registre : infrastructure crédible (Stripe / GitHub / Nextcloud), pas manifeste.
// Règle d'écriture : très peu de texte, beaucoup d'espace. Chaque phrase porte.

export type Lang = "en" | "fr";

type T = { en: string; fr: string };

export const nav = {
  solutions: { en: "Solutions", fr: "Solutions" },
  features: { en: "Features", fr: "Fonctionnalités" },
  pricing: { en: "Pricing", fr: "Tarifs" },
  docs: { en: "Documentation", fr: "Documentation" },
  about: { en: "About", fr: "À propos" },
  login: { en: "Log in", fr: "Connexion" },
  create: { en: "Create your time space", fr: "Créer votre espace temps" },
  demo: { en: "Request a demo", fr: "Demander une démonstration" },
} satisfies Record<string, T>;

export const hero = {
  eyebrow: {
    en: "The time bank, open to the world",
    fr: "La banque de temps ouverte au monde",
  },
  title: { en: "Your Time Space", fr: "Votre Espace Temps" },
  subtitle: {
    en: "The platform that lets organizations recognize, coordinate and measure contributive time — at any scale. Grounded in a digital Constitution and sovereign data.",
    fr: "La plateforme qui permet aux organisations de reconnaître, coordonner et mesurer le temps contributif — à toute échelle. Adossée à une Constitution numérique et des données souveraines.",
  },
  sectorsLabel: { en: "Built for", fr: "Conçu pour" },
  sectors: [
    { en: "Associations", fr: "Associations" },
    { en: "Local governments", fr: "Collectivités" },
    { en: "Companies", fr: "Entreprises" },
    { en: "Universities", fr: "Universités" },
    { en: "Institutions", fr: "Établissements" },
    { en: "Networks", fr: "Réseaux" },
    { en: "White label", fr: "Marque blanche" },
  ] satisfies T[],
} as const;

export const problem = {
  eyebrow: { en: "Why we exist", fr: "Pourquoi nous existons" },
  title: {
    en: "We know how to measure money.",
    fr: "Nous savons mesurer l'argent.",
  },
  titleTwo: {
    en: "We rarely measure what actually holds a society together.",
    fr: "Nous mesurons rarement ce qui tient une société debout.",
  },
  body: {
    en: "Every day, millions of hours of help, care and cooperation keep communities standing — invisible in every ledger. MANAtimebank makes that contributive time legible.",
    fr: "Chaque jour, des millions d'heures d'entraide, de soin et de coopération font tenir les communautés — absentes de toute comptabilité. MANAtimebank rend ce temps contributif lisible.",
  },
  gestures: [
    { en: "Mutual aid", fr: "Entraide" },
    { en: "Volunteering", fr: "Bénévolat" },
    { en: "Care", fr: "Soin" },
    { en: "Transmission", fr: "Transmission" },
    { en: "Neighborhood", fr: "Voisinage" },
    { en: "Mentoring", fr: "Mentorat" },
    { en: "Caregiving", fr: "Aidance" },
  ] satisfies T[],
} as const;

export const functions = {
  eyebrow: { en: "Three functions", fr: "Trois fonctions" },
  title: {
    en: "One platform. Three verbs.",
    fr: "Une plateforme. Trois verbes.",
  },
  items: [
    {
      key: "organize",
      title: { en: "Organize", fr: "Organiser" },
      body: {
        en: "Coordinate people, needs and contributions in one shared, trusted space.",
        fr: "Coordonnez personnes, besoins et contributions dans un espace partagé et fiable.",
      },
    },
    {
      key: "recognize",
      title: { en: "Recognize", fr: "Reconnaître" },
      body: {
        en: "Turn every hour given into a visible, comparable and durable signal.",
        fr: "Transformez chaque heure donnée en un signal visible, comparable et durable.",
      },
    },
    {
      key: "understand",
      title: { en: "Understand", fr: "Comprendre" },
      body: {
        en: "Read your community's contributive wealth through live maps and reports.",
        fr: "Lisez la richesse contributive de votre communauté par des cartes et rapports vivants.",
      },
    },
  ],
} as const;

export const solutions = {
  eyebrow: { en: "Solutions", fr: "Solutions" },
  title: { en: "One infrastructure, every context", fr: "Une infrastructure, tous les contextes" },
  body: {
    en: "A time bank is one use case. The same platform becomes an observatory, an engagement program or a national infrastructure.",
    fr: "Une banque de temps n'est qu'un cas d'usage. La même plateforme devient un observatoire, un programme d'engagement ou une infrastructure nationale.",
  },
  items: [
    {
      key: "associations",
      title: { en: "Associations", fr: "Associations" },
      problem: {
        en: "Volunteer time stays invisible and hard to sustain.",
        fr: "Le temps bénévole reste invisible et difficile à entretenir.",
      },
      solution: {
        en: "Recognize every contribution, coordinate missions, retain your volunteers.",
        fr: "Reconnaissez chaque contribution, coordonnez les missions, fidélisez vos bénévoles.",
      },
    },
    {
      key: "collectivites",
      title: { en: "Local governments", fr: "Collectivités" },
      problem: {
        en: "Solidarity happens, but no one can read it at territory scale.",
        fr: "La solidarité existe, mais nul ne la lit à l'échelle du territoire.",
      },
      solution: {
        en: "Deploy a territorial observatory of mutual aid and civic contribution.",
        fr: "Déployez un observatoire territorial de l'entraide et de la contribution civique.",
      },
    },
    {
      key: "entreprises",
      title: { en: "Companies", fr: "Entreprises" },
      problem: {
        en: "Employee engagement is declared, seldom measured.",
        fr: "L'engagement des salariés se déclare, rarement se mesure.",
      },
      solution: {
        en: "Run skills-sharing and volunteering programs with real impact metrics.",
        fr: "Pilotez mécénat de compétences et bénévolat avec des indicateurs d'impact réels.",
      },
    },
    {
      key: "universites",
      title: { en: "Universities", fr: "Universités" },
      problem: {
        en: "Student engagement is scattered across silos.",
        fr: "L'engagement étudiant se disperse dans les silos.",
      },
      solution: {
        en: "Recognize peer support, tutoring and civic hours in one network.",
        fr: "Reconnaissez entraide, tutorat et heures civiques dans un même réseau.",
      },
    },
    {
      key: "etablissements",
      title: { en: "Institutions", fr: "Établissements" },
      problem: {
        en: "Care and presence leave no durable trace.",
        fr: "Le soin et la présence ne laissent aucune trace durable.",
      },
      solution: {
        en: "Coordinate caregivers, families and professionals around shared time.",
        fr: "Coordonnez aidants, familles et professionnels autour du temps partagé.",
      },
    },
    {
      key: "reseaux",
      title: { en: "Networks & Foundations", fr: "Réseaux & Fondations" },
      problem: {
        en: "Federated members lack a common language for contribution.",
        fr: "Les membres fédérés manquent d'un langage commun de la contribution.",
      },
      solution: {
        en: "Unite chapters under one model with consolidated, comparable reporting.",
        fr: "Unissez vos antennes sous un même modèle, avec un reporting consolidé et comparable.",
      },
    },
  ],
  cta: { en: "Explore this solution", fr: "Explorer cette solution" },
} as const;

// Libellés de la structure commune à chaque page Solution.
export const solutionPage = {
  breadcrumb: { en: "Solutions", fr: "Solutions" },
  problem: { en: "The problem", fr: "Le problème" },
  solution: { en: "The solution", fr: "La solution" },
  benefits: { en: "The benefits", fr: "Les bénéfices" },
  features: { en: "Key features", fr: "Les fonctionnalités" },
  deployment: { en: "Deployment", fr: "Déploiement" },
  results: { en: "Expected results", fr: "Résultats attendus" },
  other: { en: "Other solutions", fr: "Autres solutions" },
  ctaTitle: {
    en: "Ready to recognize contributive time?",
    fr: "Prêt à reconnaître le temps contributif ?",
  },
  ctaBody: {
    en: "Open your space today, or let us walk you through a tailored deployment.",
    fr: "Ouvrez votre espace aujourd'hui, ou laissez-nous vous guider dans un déploiement sur mesure.",
  },
} as const;

// Contenu détaillé par secteur (page dédiée). Clés alignées sur solutions.items.
export const solutionDetails: Record<
  string,
  {
    tagline: T;
    problemLong: T;
    solutionLong: T;
    benefits: { title: T; body: T }[];
    features: { en: string[]; fr: string[] };
    results: { value: T; label: T }[];
  }
> = {
  associations: {
    tagline: {
      en: "Recognize every volunteer hour — and keep your volunteers.",
      fr: "Reconnaissez chaque heure bénévole — et gardez vos bénévoles.",
    },
    problemLong: {
      en: "Volunteer time is the lifeblood of associations, yet it stays invisible: hard to value, hard to thank, hard to sustain. Burnout and turnover follow, and impact reports stay anecdotal.",
      fr: "Le temps bénévole est le sang des associations, pourtant il reste invisible : difficile à valoriser, à remercier, à entretenir. L'épuisement et le turnover suivent, et les rapports d'impact restent anecdotiques.",
    },
    solutionLong: {
      en: "Give every contribution a durable trace. Coordinate missions, match volunteers by skills, and turn recognized hours into badges, milestones and public impact — all in one branded space.",
      fr: "Donnez à chaque contribution une trace durable. Coordonnez les missions, mettez en relation les bénévoles par talents, et transformez les heures reconnues en badges, paliers et impact public — dans un espace unique à votre marque.",
    },
    benefits: [
      { title: { en: "Retain volunteers", fr: "Fidéliser les bénévoles" }, body: { en: "Recognition and belonging reduce turnover.", fr: "Reconnaissance et appartenance réduisent le turnover." } },
      { title: { en: "Coordinate missions", fr: "Coordonner les missions" }, body: { en: "Right person, right need, right moment.", fr: "La bonne personne, le bon besoin, au bon moment." } },
      { title: { en: "Prove your impact", fr: "Prouver votre impact" }, body: { en: "Turn hours into reports funders trust.", fr: "Transformez les heures en rapports que les financeurs croient." } },
    ],
    features: {
      en: ["Missions & sign-ups", "Skills matching", "Time logging", "Badges & milestones", "Impact reports", "Public volunteer passport"],
      fr: ["Missions & inscriptions", "Mise en relation par talents", "Enregistrement du temps", "Badges & paliers", "Rapports d'impact", "Passeport bénévole public"],
    },
    results: [
      { value: { en: "+30%", fr: "+30 %" }, label: { en: "volunteer retention", fr: "de fidélisation bénévole" } },
      { value: { en: "100%", fr: "100 %" }, label: { en: "of hours recognized", fr: "des heures reconnues" } },
      { value: { en: "1 click", fr: "1 clic" }, label: { en: "to a funder-ready report", fr: "vers un rapport prêt pour le financeur" } },
    ],
  },
  collectivites: {
    tagline: {
      en: "A territorial observatory of mutual aid.",
      fr: "Un observatoire territorial de l'entraide.",
    },
    problemLong: {
      en: "Solidarity happens everywhere on your territory — but no one can read it. Public policy on engagement, care and cohesion flies blind, without a shared, live picture of civic contribution.",
      fr: "La solidarité a lieu partout sur votre territoire — mais nul ne la lit. Les politiques d'engagement, de soin et de cohésion avancent à l'aveugle, sans image partagée et vivante de la contribution civique.",
    },
    solutionLong: {
      en: "Deploy a territorial platform that federates associations, residents and institutions. Map contributive wealth in real time and steer engagement policy with evidence rather than intuition.",
      fr: "Déployez une plateforme territoriale qui fédère associations, habitants et institutions. Cartographiez la richesse contributive en temps réel et pilotez la politique d'engagement par la preuve plutôt que par l'intuition.",
    },
    benefits: [
      { title: { en: "See your territory", fr: "Voir votre territoire" }, body: { en: "Live maps of aid, care and cooperation.", fr: "Cartes vivantes de l'entraide, du soin et de la coopération." } },
      { title: { en: "Steer with evidence", fr: "Piloter par la preuve" }, body: { en: "Reports that inform public policy.", fr: "Des rapports qui éclairent la politique publique." } },
      { title: { en: "Federate actors", fr: "Fédérer les acteurs" }, body: { en: "One common language for every partner.", fr: "Un langage commun pour chaque partenaire." } },
    ],
    features: {
      en: ["Territorial mapping", "Multi-organization federation", "Consolidated reporting", "Civic engagement metrics", "Open data exports", "Custom territory rules"],
      fr: ["Cartographie territoriale", "Fédération multi-organisations", "Reporting consolidé", "Indicateurs d'engagement civique", "Exports open data", "Règles de territoire sur mesure"],
    },
    results: [
      { value: { en: "1 map", fr: "1 carte" }, label: { en: "of the whole territory", fr: "de tout le territoire" } },
      { value: { en: "Live", fr: "En direct" }, label: { en: "contributive indicators", fr: "d'indicateurs contributifs" } },
      { value: { en: "All actors", fr: "Tous les acteurs" }, label: { en: "on one shared model", fr: "sur un modèle partagé" } },
    ],
  },
  entreprises: {
    tagline: {
      en: "Employee engagement, finally measured.",
      fr: "L'engagement des salariés, enfin mesuré.",
    },
    problemLong: {
      en: "Skills-based sponsorship and corporate volunteering are declared in CSR reports but rarely measured. Employees want meaning; leadership wants evidence. The gap is a spreadsheet no one maintains.",
      fr: "Le mécénat de compétences et le bénévolat d'entreprise se déclarent dans les rapports RSE mais se mesurent rarement. Les salariés veulent du sens ; la direction veut des preuves. L'écart est un tableur que personne ne tient.",
    },
    solutionLong: {
      en: "Run structured skills-sharing and volunteering programs with real matching, time tracking and impact metrics — connecting employees to causes and giving CSR teams the data they've always lacked.",
      fr: "Pilotez des programmes structurés de mécénat de compétences et de bénévolat avec une vraie mise en relation, un suivi du temps et des indicateurs d'impact — reliez les salariés aux causes et donnez aux équipes RSE la donnée qui leur manquait.",
    },
    benefits: [
      { title: { en: "Engage employees", fr: "Engager les salariés" }, body: { en: "Meaningful contribution, visibly valued.", fr: "Une contribution qui a du sens, visiblement valorisée." } },
      { title: { en: "Measure CSR impact", fr: "Mesurer l'impact RSE" }, body: { en: "Hours, causes and outcomes in real numbers.", fr: "Heures, causes et résultats en chiffres réels." } },
      { title: { en: "Report with confidence", fr: "Reporter en confiance" }, body: { en: "Audit-ready engagement data.", fr: "Une donnée d'engagement prête pour l'audit." } },
    ],
    features: {
      en: ["Skills-based sponsorship", "Cause & partner directory", "Employee time tracking", "Team challenges", "CSR dashboards", "Export to reporting tools"],
      fr: ["Mécénat de compétences", "Annuaire causes & partenaires", "Suivi du temps salarié", "Défis d'équipe", "Tableaux de bord RSE", "Export vers outils de reporting"],
    },
    results: [
      { value: { en: "Measured", fr: "Mesuré" }, label: { en: "engagement, not declared", fr: "au lieu de déclaré" } },
      { value: { en: "+ meaning", fr: "+ de sens" }, label: { en: "for every employee", fr: "pour chaque salarié" } },
      { value: { en: "CSR-ready", fr: "Prêt RSE" }, label: { en: "reports on demand", fr: "des rapports à la demande" } },
    ],
  },
  universites: {
    tagline: {
      en: "Recognize student engagement across the campus.",
      fr: "Reconnaître l'engagement étudiant sur tout le campus.",
    },
    problemLong: {
      en: "Peer support, tutoring and civic hours are everywhere on campus — scattered across clubs, departments and silos. Students earn nothing durable for them, and the institution can't see the whole.",
      fr: "Entraide, tutorat et heures civiques sont partout sur le campus — dispersés entre associations, départements et silos. Les étudiants n'en retirent rien de durable, et l'établissement ne voit pas l'ensemble.",
    },
    solutionLong: {
      en: "Unite student engagement in one network: recognize tutoring, mentoring and civic hours, award them toward recognition or credits, and give the university a live view of its contributive community.",
      fr: "Unissez l'engagement étudiant dans un même réseau : reconnaissez tutorat, mentorat et heures civiques, créditez-les vers une reconnaissance ou des ECTS, et donnez à l'université une vue vivante de sa communauté contributive.",
    },
    benefits: [
      { title: { en: "Value engagement", fr: "Valoriser l'engagement" }, body: { en: "Recognition students can carry forward.", fr: "Une reconnaissance que les étudiants emportent." } },
      { title: { en: "Connect the campus", fr: "Relier le campus" }, body: { en: "One network across every faculty.", fr: "Un réseau à travers chaque faculté." } },
      { title: { en: "Track civic hours", fr: "Suivre les heures civiques" }, body: { en: "Auditable, creditable, comparable.", fr: "Auditables, créditables, comparables." } },
    ],
    features: {
      en: ["Peer tutoring & mentoring", "Civic hours tracking", "Recognition toward credits", "Student clubs & groups", "Campus-wide directory", "SSO integration"],
      fr: ["Tutorat & mentorat étudiant", "Suivi des heures civiques", "Reconnaissance vers ECTS", "Associations & groupes", "Annuaire campus", "Intégration SSO"],
    },
    results: [
      { value: { en: "1 network", fr: "1 réseau" }, label: { en: "for the whole campus", fr: "pour tout le campus" } },
      { value: { en: "Creditable", fr: "Créditable" }, label: { en: "engagement hours", fr: "des heures d'engagement" } },
      { value: { en: "Visible", fr: "Visible" }, label: { en: "student contribution", fr: "la contribution étudiante" } },
    ],
  },
  etablissements: {
    tagline: {
      en: "Coordinate care around shared time.",
      fr: "Coordonner le soin autour du temps partagé.",
    },
    problemLong: {
      en: "In care institutions, presence and attention are the real work — yet they leave no durable trace. Caregivers, families and professionals coordinate by phone, memory and goodwill, with nothing shared.",
      fr: "Dans les établissements de soin, la présence et l'attention sont le vrai travail — pourtant elles ne laissent aucune trace durable. Aidants, familles et professionnels se coordonnent par téléphone, mémoire et bonne volonté, sans rien de partagé.",
    },
    solutionLong: {
      en: "Give the care circle a shared space: coordinate caregivers, families and professionals, make presence visible and durable, and turn attention into a memory everyone can rely on.",
      fr: "Donnez au cercle de soin un espace partagé : coordonnez aidants, familles et professionnels, rendez la présence visible et durable, et transformez l'attention en une mémoire sur laquelle chacun s'appuie.",
    },
    benefits: [
      { title: { en: "Coordinate the circle", fr: "Coordonner le cercle" }, body: { en: "Everyone sees who does what, when.", fr: "Chacun voit qui fait quoi, et quand." } },
      { title: { en: "Make care visible", fr: "Rendre le soin visible" }, body: { en: "Presence recorded, not forgotten.", fr: "La présence enregistrée, non oubliée." } },
      { title: { en: "Reassure families", fr: "Rassurer les familles" }, body: { en: "A shared, trusted memory of care.", fr: "Une mémoire du soin, partagée et fiable." } },
    ],
    features: {
      en: ["Care circles", "Caregiver ↔ professional coordination", "Presence & visit logging", "Shared memory timeline", "Family access", "Privacy-first design"],
      fr: ["Cercles de soin", "Coordination aidant ↔ pro", "Journal de présence & visites", "Fil de mémoire partagé", "Accès famille", "Conçu pour la confidentialité"],
    },
    results: [
      { value: { en: "1 circle", fr: "1 cercle" }, label: { en: "around each person", fr: "autour de chaque personne" } },
      { value: { en: "Durable", fr: "Durable" }, label: { en: "memory of care", fr: "mémoire du soin" } },
      { value: { en: "Less", fr: "Moins" }, label: { en: "coordination burden", fr: "de charge de coordination" } },
    ],
  },
  reseaux: {
    tagline: {
      en: "Unite your chapters under one model.",
      fr: "Unissez vos antennes sous un même modèle.",
    },
    problemLong: {
      en: "Federated networks and foundations run dozens of chapters, each with its own tools, vocabulary and data. Comparing contribution across them is impossible — and consolidated impact stays out of reach.",
      fr: "Réseaux fédérés et fondations pilotent des dizaines d'antennes, chacune avec ses outils, son vocabulaire et sa donnée. Comparer la contribution entre elles est impossible — et l'impact consolidé reste hors d'atteinte.",
    },
    solutionLong: {
      en: "Give every chapter the same platform and a shared model of contribution, while keeping local autonomy. Consolidate reporting across the network and read comparable impact at last.",
      fr: "Donnez à chaque antenne la même plateforme et un modèle de contribution partagé, tout en gardant l'autonomie locale. Consolidez le reporting sur tout le réseau et lisez enfin un impact comparable.",
    },
    benefits: [
      { title: { en: "Consolidate impact", fr: "Consolider l'impact" }, body: { en: "Comparable data across every chapter.", fr: "Une donnée comparable sur chaque antenne." } },
      { title: { en: "Keep local autonomy", fr: "Garder l'autonomie locale" }, body: { en: "Shared model, custom local rules.", fr: "Modèle partagé, règles locales sur mesure." } },
      { title: { en: "Scale a movement", fr: "Passer à l'échelle" }, body: { en: "One infrastructure, many territories.", fr: "Une infrastructure, plusieurs territoires." } },
    ],
    features: {
      en: ["Multi-chapter federation", "Shared contribution model", "Local autonomy & roles", "Network-wide reporting", "Cross-chapter comparison", "White-label per chapter"],
      fr: ["Fédération multi-antennes", "Modèle de contribution partagé", "Autonomie & rôles locaux", "Reporting sur tout le réseau", "Comparaison inter-antennes", "Marque blanche par antenne"],
    },
    results: [
      { value: { en: "1 model", fr: "1 modèle" }, label: { en: "across the network", fr: "sur tout le réseau" } },
      { value: { en: "Comparable", fr: "Comparable" }, label: { en: "impact everywhere", fr: "l'impact partout" } },
      { value: { en: "Autonomy", fr: "Autonomie" }, label: { en: "kept local", fr: "gardée locale" } },
    ],
  },
};

export const steps = {
  eyebrow: { en: "How it works", fr: "Comment ça fonctionne" },
  title: { en: "From space to impact, in five steps", fr: "De l'espace à l'impact, en cinq étapes" },
  items: [
    {
      title: { en: "Create your space", fr: "Créer votre espace" },
      body: { en: "Set up your instance in minutes.", fr: "Ouvrez votre instance en quelques minutes." },
    },
    {
      title: { en: "Define your rules", fr: "Définir vos règles" },
      body: { en: "Roles, units, trust, boundaries — your model.", fr: "Rôles, unités, confiance, périmètres — votre modèle." },
    },
    {
      title: { en: "Invite your community", fr: "Inviter votre communauté" },
      body: { en: "Members, partners, institutions.", fr: "Membres, partenaires, institutions." },
    },
    {
      title: { en: "Recognize contributions", fr: "Reconnaître les contributions" },
      body: { en: "Every hour given becomes a trusted signal.", fr: "Chaque heure donnée devient un signal de confiance." },
    },
    {
      title: { en: "Measure your impact", fr: "Mesurer votre impact" },
      body: { en: "Live dashboards, maps and reports.", fr: "Tableaux de bord, cartes et rapports en direct." },
    },
  ],
} as const;

export const features = {
  eyebrow: { en: "Features", fr: "Fonctionnalités" },
  title: { en: "Everything a real platform needs", fr: "Tout ce qu'exige une vraie plateforme" },
  families: [
    {
      key: "community",
      title: { en: "Community", fr: "Communauté" },
      blurb: {
        en: "Bring people in, organize them and keep the space trusted.",
        fr: "Rassemblez les personnes, organisez-les et gardez l'espace de confiance.",
      },
      items: {
        en: ["Profiles & trust tiers", "Invitations & onboarding", "Groups, clans & territories", "Messaging & notifications", "Roles & permissions", "Member directory"],
        fr: ["Profils & paliers de confiance", "Invitations & accueil", "Groupes, clans & territoires", "Messagerie & notifications", "Rôles & permissions", "Annuaire des membres"],
      },
    },
    {
      key: "contributions",
      title: { en: "Contributions", fr: "Contributions" },
      blurb: {
        en: "Turn needs and offers into real, tracked cooperation.",
        fr: "Transformez besoins et offres en coopération réelle et tracée.",
      },
      items: {
        en: ["Missions & requests", "Matching by skills", "Time logging", "Exchanges & mutual aid", "Availability & scheduling", "Ratings & confirmations"],
        fr: ["Missions & demandes", "Mise en relation par talents", "Enregistrement du temps", "Échanges & entraide", "Disponibilités & créneaux", "Notations & confirmations"],
      },
    },
    {
      key: "recognition",
      title: { en: "Recognition", fr: "Reconnaissance" },
      blurb: {
        en: "Make every hour given visible, comparable and durable.",
        fr: "Rendez chaque heure donnée visible, comparable et durable.",
      },
      items: {
        en: ["Contributive units", "Badges & skills", "Ceremonies & milestones", "Public passport", "Leaderboards & streaks", "Certificates of contribution"],
        fr: ["Unités contributives", "Badges & talents", "Cérémonies & paliers", "Passeport public", "Classements & séries", "Attestations de contribution"],
      },
    },
    {
      key: "steering",
      title: { en: "Steering", fr: "Pilotage" },
      blurb: {
        en: "Read your contributive wealth and steer with evidence.",
        fr: "Lisez votre richesse contributive et pilotez par la preuve.",
      },
      items: {
        en: ["Live dashboards", "Territorial maps", "Impact reports", "Data exports", "Custom indicators", "Period comparisons"],
        fr: ["Tableaux de bord", "Cartographie territoriale", "Rapports d'impact", "Exports de données", "Indicateurs sur mesure", "Comparaisons de périodes"],
      },
    },
    {
      key: "infrastructure",
      title: { en: "Infrastructure", fr: "Infrastructure" },
      blurb: {
        en: "The operating layer: open, branded and yours to run.",
        fr: "La couche opérationnelle : ouverte, à votre marque, à vous d'exploiter.",
      },
      items: {
        en: ["API & webhooks", "SSO & MANA Passport", "Hosting & backups", "White-label branding", "Custom domains", "GDPR & data ownership"],
        fr: ["API & webhooks", "SSO & Passeport MANA", "Hébergement & sauvegardes", "Marque blanche", "Domaines dédiés", "RGPD & propriété des données"],
      },
    },
  ],
} as const;

// Intro de la page Fonctionnalités dédiée.
export const featuresPage = {
  eyebrow: { en: "Features", fr: "Fonctionnalités" },
  title: { en: "One platform, five coherent families", fr: "Une plateforme, cinq familles cohérentes" },
  body: {
    en: "Not an endless list — five families that map to the whole lifecycle of contributive time: bring people together, let them contribute, recognize it, understand it, and run it as your own infrastructure.",
    fr: "Pas une liste interminable — cinq familles qui épousent tout le cycle du temps contributif : rassembler, contribuer, reconnaître, comprendre, et l'exploiter comme votre propre infrastructure.",
  },
} as const;

export const dashboards = {
  eyebrow: { en: "A real software platform", fr: "Une vraie plateforme logicielle" },
  title: { en: "See your contributive wealth, live", fr: "Voyez votre richesse contributive, en direct" },
  body: {
    en: "Maps, statistics, reports, impact, activity, territory. MANAtimebank is operated software — not a slideshow.",
    fr: "Cartographie, statistiques, rapports, impact, activité, territoire. MANAtimebank est un logiciel exploité — pas un diaporama.",
  },
  tabs: [
    { en: "Territory", fr: "Territoire" },
    { en: "Statistics", fr: "Statistiques" },
    { en: "Impact", fr: "Impact" },
  ] satisfies T[],
  stats: [
    { label: { en: "Hours recognized", fr: "Heures reconnues" }, value: "128,400" },
    { label: { en: "Active members", fr: "Membres actifs" }, value: "3,120" },
    { label: { en: "Contributions / week", fr: "Contributions / sem." }, value: "742" },
    { label: { en: "Partner organizations", fr: "Organisations partenaires" }, value: "89" },
  ],
} as const;

export const whiteLabel = {
  eyebrow: { en: "White label", fr: "Marque blanche" },
  title1: { en: "Your time bank.", fr: "Votre banque de temps." },
  title2: { en: "Your identity.", fr: "Votre identité." },
  title3: { en: "Our infrastructure.", fr: "Notre infrastructure." },
  body: {
    en: "Ship a fully branded platform on your own domain — while we run the engine underneath.",
    fr: "Livrez une plateforme entièrement à votre marque, sur votre domaine — pendant que nous opérons le moteur.",
  },
  includes: {
    en: ["Logo & brand", "Your name", "Languages", "Custom domains", "API access", "Hosting", "Maintenance", "Support", "Custom rules"],
    fr: ["Logo & charte", "Votre nom", "Langues", "Domaines dédiés", "Accès API", "Hébergement", "Maintenance", "Support", "Règles sur mesure"],
  },
  examples: [
    { name: "SolidariCité", tag: { en: "City of Rennes", fr: "Ville de Rennes" } },
    { name: "TempsPartagé", tag: { en: "Grand Est network", fr: "Réseau Grand Est" } },
    { name: "CampusLink", tag: { en: "University alliance", fr: "Alliance universitaire" } },
  ],
  sovereignty: {
    label: { en: "Data sovereignty", fr: "Souveraineté des données" },
    title: { en: "Your data, hosted in France.", fr: "Vos données, hébergées en France." },
    body: {
      en: "Your community's data stays under European jurisdiction — a sovereign infrastructure operated by TempoSystem, with data residency and no lock-in.",
      fr: "Les données de votre communauté restent sous juridiction européenne — une infrastructure souveraine opérée par TempoSystem, avec résidence des données et sans verrouillage.",
    },
    link: { en: "Learn more on temposystem.eu →", fr: "En savoir plus sur temposystem.eu →" },
    href: "https://temposystem.eu",
  },
} as const;

export const usedBy = {
  eyebrow: { en: "Live implementations", fr: "Mises en œuvre en production" },
  title: { en: "They already run on MANAtimebank", fr: "Ils tournent déjà sur MANAtimebank" },
  body: {
    en: "MANA is an implementation of the model — not the other way around.",
    fr: "MANA est une implémentation du modèle — et non l'inverse.",
  },
  items: [
    {
      name: "MANA France",
      href: "https://manafrance.org",
      desc: { en: "National territorial implementation.", fr: "Mise en œuvre territoriale nationale." },
    },
    {
      name: "MANA Breizh",
      href: "https://mana.bzh",
      desc: { en: "Breton pilot laboratory.", fr: "Laboratoire pilote breton." },
    },
    {
      name: "MANA Family",
      href: "https://manafamily.org",
      desc: { en: "Care circles for families.", fr: "Cercles de soin pour les familles." },
    },
  ],
} as const;

export const pricing = {
  eyebrow: { en: "Pricing", fr: "Tarifs" },
  title: { en: "One foundation. Two ways in.", fr: "Une fondation. Deux façons d'y accéder." },
  body: {
    en: "MANAtimebank is the ledger of given time — the layer the ecosystem's apps run on. We never bill members: we open the foundation to operators, and in France or abroad the everyday use is deployed through TEMPOsystem.",
    fr: "MANAtimebank est le grand livre du temps donné — le socle sur lequel tournent les applications de l'écosystème. On n'y facture jamais les membres : on ouvre le socle aux opérateurs, et en France ou à l'étranger l'usage se déploie via TEMPOsystem.",
  },
  // Deux voies d'accès (cap A+B). Voir la grille de formules sur temposystem.fr/#/tarifs.
  tiers: [
    {
      name: "Infrastructure",
      price: { en: "Custom", fr: "Sur mesure" },
      period: { en: "", fr: "" },
      members: { en: "Operators & networks · Worldwide", fr: "Opérateurs & réseaux · Monde" },
      for: {
        en: "Run your own time bank on the open foundation — your brand, your data, your territory.",
        fr: "Faites tourner votre propre banque de temps sur le socle ouvert — votre marque, vos données, votre territoire.",
      },
      featured: true,
      cta: { en: "Talk to us", fr: "Nous contacter" },
      href: "/#contact",
      features: {
        en: ["The ledger of time — open model", "API, webhooks & federation", "White-label, domains & SSO", "Dedicated hosting & data residency", "Sovereignty & custom rules", "SLA, onboarding & dedicated support"],
        fr: ["Le grand livre du temps — modèle ouvert", "API, webhooks & fédération", "Marque blanche, domaines & SSO", "Hébergement dédié & résidence des données", "Souveraineté & règles sur mesure", "SLA, accompagnement & support dédié"],
      },
    },
    {
      name: "TEMPOsystem",
      price: { en: "From €0", fr: "Dès 0 €" },
      period: { en: "/year", fr: "/an" },
      members: { en: "Non-profits & authorities · France & abroad", fr: "Associations & collectivités · France & étranger" },
      for: {
        en: "A non-profit, network or local authority, in France or abroad? The turnkey use is deployed through a TEMPOsystem plan.",
        fr: "Une asso, un réseau ou une collectivité, en France ou à l'étranger ? L'usage clé en main se déploie via une formule TEMPOsystem.",
      },
      featured: false,
      cta: { en: "See TEMPOsystem pricing", fr: "Voir la grille TEMPOsystem" },
      href: "https://temposystem.fr/#/tarifs",
      features: {
        en: ["Découverte — free · up to 9 active", "Éclosion — €1,200/yr · up to 99", "Coopération — €3,600/yr · up to 499", "Territoire — €7,200/yr · up to 999", "Alliance — custom quote · 1,000+", "Authorities: €0.22–0.70 / resident / year"],
        fr: ["Découverte — gratuit · jusqu'à 9 actifs", "Éclosion — 1 200 €/an · jusqu'à 99", "Coopération — 3 600 €/an · jusqu'à 499", "Territoire — 7 200 €/an · jusqu'à 999", "Alliance — sur devis · 1 000 et +", "Collectivités : 0,22 à 0,70 € / habitant / an"],
      },
    },
  ],
  cta: { en: "Talk to us", fr: "Nous contacter" },
  note: {
    en: "Citizens, volunteers and beneficiaries are never billed individually. In France and abroad, the everyday use is deployed through TEMPOsystem; the foundation stays open to operators who want their own instance.",
    fr: "Les citoyens, bénévoles et bénéficiaires ne sont jamais facturés individuellement. En France comme à l'étranger, l'usage se déploie via TEMPOsystem ; le socle reste ouvert aux opérateurs qui veulent leur propre instance.",
  },
  faq: [
    {
      q: { en: "Why no price per member?", fr: "Pourquoi pas de prix par membre ?" },
      a: {
        en: "MANAtimebank is an infrastructure, not software sold by headcount. We never bill citizens or volunteers. Access is either an infrastructure licence (operators) or a TEMPOsystem plan (everyday use).",
        fr: "MANAtimebank est une infrastructure, pas un logiciel vendu à la tête. On ne facture jamais les citoyens ni les bénévoles. L'accès se fait soit par une licence d'infrastructure (opérateurs), soit par une formule TEMPOsystem (l'usage).",
      },
    },
    {
      q: { en: "I run a non-profit in France — where do I start?", fr: "Je suis une asso française, par où je commence ?" },
      a: {
        en: "Through TEMPOsystem: the Découverte plan is free up to 9 active users, then Éclosion (€1,200/yr) and beyond. See the full ladder on temposystem.fr.",
        fr: "Par TEMPOsystem : la formule Découverte est gratuite jusqu'à 9 utilisateurs actifs, puis Éclosion (1 200 €/an) et au-delà. La grille complète est sur temposystem.fr.",
      },
    },
    {
      q: { en: "Can we run our own instance?", fr: "Peut-on héberger notre propre instance ?" },
      a: {
        en: "Yes — that is exactly the Infrastructure path: white-label, domains, data residency, SSO and custom rules, tailored to your organisation.",
        fr: "Oui — c'est précisément la voie Infrastructure : marque blanche, domaines, résidence des données, SSO et règles sur mesure, adaptés à votre organisation.",
      },
    },
    {
      q: { en: "Public-interest or non-profit pricing?", fr: "Tarif d'intérêt général ou associatif ?" },
      a: {
        en: "The Découverte plan is free, and the pricing is public-interest by design — calibrated case by case. Beneficiaries never pay.",
        fr: "La formule Découverte est gratuite, et les tarifs sont d'intérêt général par nature — calibrés au cas par cas. Les bénéficiaires ne paient jamais.",
      },
    },
  ],
} as const;

export const foundations = {
  eyebrow: { en: "The foundations", fr: "Les fondations" },
  title: { en: "The thinking beneath the product", fr: "La pensée sous le produit" },
  body: {
    en: "The platform stands on an open model, a set of principles and a coordination layer. Philosophy supports the product — it is no longer the front door.",
    fr: "La plateforme repose sur un modèle ouvert, des principes et une couche de coordination. La philosophie soutient le produit — elle n'est plus la porte d'entrée.",
  },
  items: [
    {
      title: { en: "The model", fr: "Le modèle" },
      body: { en: "Contributive time recognized as civic value.", fr: "Le temps contributif reconnu comme valeur civique." },
      href: "#livre-blanc",
    },
    {
      title: { en: "TempoSystem", fr: "TempoSystem" },
      body: { en: "The open coordination layer beneath.", fr: "La couche de coordination ouverte, en dessous." },
      href: "https://temposystem.eu",
    },
    {
      title: { en: "Alliance MANA", fr: "Alliance MANA" },
      body: { en: "Steward of the model's ethics.", fr: "Gardienne de l'éthique du modèle." },
      href: "https://alliancemana.org",
    },
  ],
} as const;

export const lullaby = {
  eyebrow: { en: "The infrastructure, in motion", fr: "L'infrastructure, en mouvement" },
  equationTime: { en: "1 second", fr: "1 seconde" },
  equationMana: { en: "1 mana", fr: "1 mana" },
  body: {
    en: "Every hour given becomes a measurable, remembered energy that flows from hand to hand.",
    fr: "Chaque heure donnée devient une énergie mesurable et mémorisée qui circule de main en main.",
  },
  giver: { en: "Giver", fr: "Donneur" },
  receiver: { en: "Receiver", fr: "Receveur" },
} as const;

export const whitePaper = {
  eyebrow: { en: "The founding document", fr: "Le texte de référence" },
  version: {
    en: "ManaTimeBank × TempoSystem · v1.1 · English edition",
    fr: "ManaTimeBank × TempoSystem · v1.1 · Édition française",
  },
  title: {
    en: "Given time — the concept and its inscription",
    fr: "Le temps donné — le concept et son inscription",
  },
  body: {
    en: "What GDP cannot see, the trace rather than the claim, and how it is inscribed, concretely. Free, sourced, feasible.",
    fr: "Ce que le PIB ne voit pas, la trace plutôt que la créance, et comment on l'inscrit, concrètement. Gratuit, sourcé, faisable.",
  },
  read: { en: "Read online →", fr: "Lire en ligne →" },
  download: { en: "Download PDF", fr: "Télécharger le PDF" },
} as const;

export const finalCta = {
  title: { en: "Deploy contributive time recognition where you are.", fr: "Déployez la reconnaissance du temps contributif chez vous." },
  body: {
    en: "A local association, a metropolis, a ministry, a foundation — the same infrastructure, ready today.",
    fr: "Une association locale, une métropole, un ministère, une fondation — la même infrastructure, prête aujourd'hui.",
  },
} as const;

export const footer = {
  tagline: {
    en: "Infrastructure for recognizing contributive time.",
    fr: "L'infrastructure de reconnaissance du temps contributif.",
  },
  cols: [
    {
      title: { en: "Product", fr: "Produit" },
      links: [
        { label: { en: "Solutions", fr: "Solutions" }, href: "/#solutions" },
        { label: { en: "Features", fr: "Fonctionnalités" }, href: "/fonctionnalites" },
        { label: { en: "Pricing", fr: "Tarifs" }, href: "/tarifs" },
        { label: { en: "White label", fr: "Marque blanche" }, href: "/#marque-blanche" },
      ],
    },
    {
      title: { en: "Resources", fr: "Ressources" },
      links: [
        { label: { en: "Documentation", fr: "Documentation" }, href: "/documentation" },
        { label: { en: "About", fr: "À propos" }, href: "/a-propos" },
        { label: { en: "White paper", fr: "Livre blanc" }, href: "/#livre-blanc" },
        { label: { en: "GitHub", fr: "GitHub" }, href: "https://github.com/gilletaurelien-art" },
      ],
    },
    {
      title: { en: "Ecosystem", fr: "Écosystème" },
      links: [
        { label: { en: "TempoSystem", fr: "TempoSystem" }, href: "https://temposystem.eu" },
        { label: { en: "Alliance MANA", fr: "Alliance MANA" }, href: "https://alliancemana.org" },
        { label: { en: "MANA France", fr: "MANA France" }, href: "https://manafrance.org" },
        { label: { en: "ManaHome", fr: "ManaHome" }, href: "https://manahome.org" },
      ],
    },
  ],
  legal: { en: "Legal notice", fr: "Mentions légales" },
  contact: { en: "Contact", fr: "Contact" },
} as const;

// ---------------- Page Documentation ----------------
export const docsPage = {
  eyebrow: { en: "Documentation", fr: "Documentation" },
  title: { en: "Everything you need to build and run", fr: "Tout pour construire et exploiter" },
  body: {
    en: "Guides, API references, architecture and the founding white paper. Some sections are being written as the platform opens up — reach out and we'll onboard you directly.",
    fr: "Guides, références API, architecture et le livre blanc fondateur. Certaines sections s'écrivent au fil de l'ouverture de la plateforme — écrivez-nous et nous vous accompagnons directement.",
  },
  sections: [
    {
      key: "product",
      title: { en: "Product documentation", fr: "Documentation produit" },
      desc: { en: "Concepts, roles, contributions and recognition — how the platform works, end to end.", fr: "Concepts, rôles, contributions et reconnaissance — comment la plateforme fonctionne, de bout en bout." },
      href: "/#contact",
      soon: true,
    },
    {
      key: "api",
      title: { en: "API & webhooks", fr: "API & webhooks" },
      desc: { en: "Integrate contributive time into your own systems via the TempoSystem API.", fr: "Intégrez le temps contributif à vos systèmes via l'API TempoSystem." },
      href: "https://temposystem.eu",
      soon: false,
    },
    {
      key: "architecture",
      title: { en: "Architecture", fr: "Architecture" },
      desc: { en: "The model, the coordination layer and how deployments are structured.", fr: "Le modèle, la couche de coordination et la structure des déploiements." },
      href: "/#fondations",
      soon: false,
    },
    {
      key: "guides",
      title: { en: "Guides & tutorials", fr: "Guides & tutoriels" },
      desc: { en: "Step-by-step: open a space, define rules, invite a community, measure impact.", fr: "Pas à pas : ouvrir un espace, définir les règles, inviter une communauté, mesurer l'impact." },
      href: "/#contact",
      soon: true,
    },
    {
      key: "usecases",
      title: { en: "Use cases", fr: "Cas d'usage" },
      desc: { en: "Associations, territories, companies, universities — patterns per sector.", fr: "Associations, territoires, entreprises, universités — les schémas par secteur." },
      href: "/#solutions",
      soon: false,
    },
    {
      key: "whitepaper",
      title: { en: "White paper", fr: "Livre blanc" },
      desc: { en: "Given time: the concept and its inscription. The founding reference.", fr: "Le temps donné : le concept et son inscription. La référence fondatrice." },
      href: "/#livre-blanc",
      soon: false,
    },
  ],
  faqTitle: { en: "Frequently asked questions", fr: "Questions fréquentes" },
  faq: [
    {
      q: { en: "Is the model open?", fr: "Le modèle est-il ouvert ?" },
      a: { en: "Yes. The Mana Time Bank model and the TempoSystem coordination layer are open and stewarded by Alliance MANA.", fr: "Oui. Le modèle Mana Time Bank et la couche de coordination TempoSystem sont ouverts et gardés par l'Alliance MANA." },
    },
    {
      q: { en: "Can we migrate our existing data?", fr: "Peut-on migrer nos données existantes ?" },
      a: { en: "Yes — members, hours and history can be imported during onboarding. Talk to us about your format.", fr: "Oui — membres, heures et historique s'importent à l'accueil. Parlons de votre format." },
    },
    {
      q: { en: "Who owns the data?", fr: "À qui appartiennent les données ?" },
      a: { en: "You do. Data ownership, GDPR compliance and export are built in, on every tier.", fr: "À vous. Propriété des données, conformité RGPD et export sont intégrés, sur chaque palier." },
    },
  ],
} as const;

// ---------------- Page À propos ----------------
export const aboutPage = {
  eyebrow: { en: "About", fr: "À propos" },
  title: { en: "Why MANAtimebank exists", fr: "Pourquoi MANAtimebank existe" },
  lede: {
    en: "We measure money to the cent, yet the time people give to help, care and cooperate — the very thing that holds societies together — stays invisible. MANAtimebank exists to make that time legible, without turning it into money.",
    fr: "Nous mesurons l'argent au centime près, pourtant le temps que les gens donnent pour aider, prendre soin et coopérer — ce qui fait tenir les sociétés — reste invisible. MANAtimebank existe pour rendre ce temps lisible, sans le transformer en monnaie.",
  },
  blocks: [
    {
      title: { en: "Contributive time", fr: "Le temps contributif" },
      body: { en: "An hour given to help, teach, care, organize or protect is real value. We give it a durable trace — a signal of trust, not a currency.", fr: "Une heure donnée pour aider, enseigner, prendre soin, organiser ou protéger est une valeur réelle. Nous lui donnons une trace durable — un signal de confiance, pas une monnaie." },
    },
    {
      title: { en: "An infrastructure, not an app", fr: "Une infrastructure, pas une app" },
      body: { en: "MANAtimebank is the platform organizations use to create their own time banks and recognition systems. MANA France, MANA Breizh and MANA Family are implementations of it.", fr: "MANAtimebank est la plateforme que les organisations utilisent pour créer leurs propres banques de temps et systèmes de reconnaissance. MANA France, MANA Breizh et MANA Family en sont des implémentations." },
    },
    {
      title: { en: "The ecosystem", fr: "L'écosystème" },
      body: { en: "It sits within a wider universe: TempoSystem coordinates, Alliance MANA stewards the ethics, and ManaHome is the mother house that binds them.", fr: "Elle s'inscrit dans un univers plus large : TempoSystem coordonne, l'Alliance MANA garde l'éthique, et ManaHome est la maison mère qui les relie." },
    },
    {
      title: { en: "International by design", fr: "Internationale par conception" },
      body: { en: "Local action, global language. The same infrastructure serves a village association or a national program, in any language, under your own brand.", fr: "Action locale, langage global. La même infrastructure sert une association de village ou un programme national, dans toute langue, sous votre propre marque." },
    },
  ],
  pillars: [
    { name: "TempoSystem", desc: { en: "The open coordination layer.", fr: "La couche de coordination ouverte." }, href: "https://temposystem.eu" },
    { name: "Alliance MANA", desc: { en: "Steward of the model's ethics.", fr: "Gardienne de l'éthique du modèle." }, href: "https://alliancemana.org" },
    { name: "ManaHome", desc: { en: "The mother house of the universe.", fr: "La maison mère de l'univers." }, href: "https://manahome.org" },
  ],
} as const;

// ---------------- Créer votre espace temps (wizard) ----------------
export const createSpace = {
  eyebrow: { en: "Get started", fr: "Commencer" },
  title: { en: "Create your time space", fr: "Créer votre espace temps" },
  subtitle: {
    en: "Four short steps to shape your space. We'll set it up with you and open it within days.",
    fr: "Quatre étapes courtes pour dessiner votre espace. Nous le mettons en place avec vous et l'ouvrons sous quelques jours.",
  },
  step: { en: "Step", fr: "Étape" },
  of: { en: "of", fr: "sur" },
  back: { en: "Back", fr: "Retour" },
  next: { en: "Continue", fr: "Continuer" },
  submit: { en: "Create my time space", fr: "Créer mon espace temps" },
  sending: { en: "Sending…", fr: "Envoi…" },
  summaryTitle: { en: "Your time space", fr: "Votre espace temps" },
  planLabel: { en: "Suggested plan", fr: "Formule suggérée" },
  required: { en: "This field is required.", fr: "Ce champ est requis." },

  // Étape 1 — organisation
  s1Title: { en: "Who are you?", fr: "Qui êtes-vous ?" },
  s1Body: { en: "Tell us about your organization.", fr: "Parlez-nous de votre organisation." },
  orgTypeLabel: { en: "Type of organization", fr: "Type d'organisation" },
  orgTypes: [
    { en: "Association", fr: "Association" },
    { en: "Local government", fr: "Collectivité" },
    { en: "Company", fr: "Entreprise" },
    { en: "University", fr: "Université" },
    { en: "Institution", fr: "Établissement" },
    { en: "Network", fr: "Réseau" },
    { en: "Foundation", fr: "Fondation" },
    { en: "Other", fr: "Autre" },
  ] as { en: string; fr: string }[],
  orgNameLabel: { en: "Organization name", fr: "Nom de l'organisation" },
  orgNamePlaceholder: { en: "e.g. Les Restos du Cœur", fr: "ex. Les Restos du Cœur" },

  // Étape 2 — espace
  s2Title: { en: "Name your space", fr: "Nommez votre espace" },
  s2Body: { en: "This is how your community will find you.", fr: "C'est ainsi que votre communauté vous trouvera." },
  spaceNameLabel: { en: "Space name", fr: "Nom de l'espace" },
  spaceNamePlaceholder: { en: "e.g. Temps Solidaire", fr: "ex. Temps Solidaire" },
  addressLabel: { en: "Web address", fr: "Adresse web" },
  langsLabel: { en: "Languages", fr: "Langues" },
  langs: [
    { en: "French", fr: "Français" },
    { en: "English", fr: "English" },
    { en: "Brezhoneg", fr: "Brezhoneg" },
    { en: "Other", fr: "Autre" },
  ] as { en: string; fr: string }[],

  // Étape 3 — communauté
  s3Title: { en: "How big is your community?", fr: "Quelle est la taille de votre communauté ?" },
  s3Body: { en: "Active members — those who give or receive time. This sets your plan.", fr: "Membres actifs — ceux qui donnent ou reçoivent du temps. Cela définit votre formule." },
  sizes: [
    { key: "xs", label: { en: "Under 10", fr: "Moins de 10" }, plan: "Community", price: { en: "Free", fr: "Gratuit" } },
    { key: "sm", label: { en: "10 to 100", fr: "10 à 100" }, plan: "Organisation", price: { en: "€99/mo", fr: "99 €/mois" } },
    { key: "md", label: { en: "100 to 500", fr: "100 à 500" }, plan: "Territoire", price: { en: "€399/mo", fr: "399 €/mois" } },
    { key: "lg", label: { en: "500+", fr: "500 et plus" }, plan: "Réseau / White Label", price: { en: "Custom", fr: "Sur mesure" } },
  ] as { key: string; label: { en: string; fr: string }; plan: string; price: { en: string; fr: string } }[],

  // Étape 4 — contact
  s4Title: { en: "Where do we reach you?", fr: "Où vous joindre ?" },
  s4Body: { en: "We'll get back within one business day.", fr: "Nous revenons vers vous sous un jour ouvré." },
  contactNameLabel: { en: "Your name", fr: "Votre nom" },
  emailLabel: { en: "Your email", fr: "Votre e-mail" },
  msgLabel: { en: "Anything we should know? (optional)", fr: "Un mot pour nous ? (facultatif)" },

  // Succès
  okTitle: { en: "Your time space is on its way", fr: "Votre espace temps est en préparation" },
  okBody: { en: "We received your request and will set up your space with you shortly. Meanwhile, explore the platform.", fr: "Nous avons reçu votre demande et mettons votre espace en place avec vous très vite. En attendant, explorez la plateforme." },
  okCta: { en: "Back to home", fr: "Retour à l'accueil" },
  errMsg: { en: "Something went wrong — please retry or email contact@manahome.org.", fr: "Une erreur est survenue — réessayez ou écrivez à contact@manahome.org." },
} as const;

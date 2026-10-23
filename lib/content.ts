// Veškerý obsah webu na jednom místě – texty upravujte tady.

export const site = {
  name: "Barbora Maňáková",
  role: "Online marketing | Freelancer",
  location: "Praha, Česko",
  linkedin: "https://www.linkedin.com/in/barbora-ma%C5%88%C3%A1kov%C3%A1-7480712b7/",
  // TODO: doplnit e-mail a telefon, např. email: "barbora@…"
  email: "",
  phone: "",
  photo: "/barbora.jpg",
}

export const navItems = [
  { name: "Úvod", href: "#uvod" },
  { name: "Služby", href: "#sluzby" },
  { name: "O mně", href: "#o-mne" },
  { name: "Zkušenosti", href: "#zkusenosti" },
  { name: "Spolupráce", href: "#spoluprace" },
  { name: "FAQ", href: "#faq" },
]

export const hero = {
  badge: "Online marketing · Social media · Design",
  titleGradient: "Online marketing,",
  title: "který prodává",
  lead: "Pomáhám firmám a podnikatelům růst na sociálních sítích – od strategie přes grafiku a texty až po reklamy, které dávají smysl.",
  note: "Praha · práce na dálku pro celou ČR",
  photoChips: ["Social media", "Design", "PPC"],
}

export const services = [
  {
    icon: "instagram",
    title: "Správa sociálních sítí",
    description: "Facebook a Instagram od A do Z – obsahový plán, příspěvky, krátká videa a péče o komunitu.",
    tags: ["Facebook", "Instagram", "Editace videa"],
  },
  {
    icon: "palette",
    title: "Grafika a design",
    description: "Vizuály pro sítě, bannery a reklamní kreativy v jednotném stylu vaší značky.",
    tags: ["Grafický design", "Multimédia"],
  },
  {
    icon: "megaphone",
    title: "PPC a online reklama",
    description: "Kampaně v Google Ads a na Facebooku či Instagramu s hlídaným rozpočtem a jasným cílem.",
    tags: ["Google Ads", "Business Manager", "Rozpočet"],
  },
  {
    icon: "pen",
    title: "Copywriting a obsah",
    description: "Články, texty na web i příspěvky, které čtenáře zaujmou a dovedou k akci.",
    tags: ["Copywriting", "Autorské psaní"],
  },
  {
    icon: "mail",
    title: "E-mail marketing",
    description: "Newslettery, automatizace a segmentace kontaktů – aby se zákazníci vraceli.",
    tags: ["Ecomail", "Automatizace", "Segmentace"],
  },
  {
    icon: "chart",
    title: "Web, SEO a analytika",
    description: "Úpravy webu ve WordPressu, optimalizace pro vyhledávače a měření v Google Analytics.",
    tags: ["WordPress", "SEO", "Collabim", "Google Analytics"],
  },
] as const

export const about = {
  title: "Marketing s obchodním myšlením",
  text: "Jsem marketérka na volné noze z Prahy. Než jsem se naplno věnovala marketingu, téměř pět let jsem vedla prodejní tým. Proto vím, že cílem nejsou jen lajky, ale noví zákazníci a tržby.",
  stats: [
    { value: 6, suffix: "+", label: "let v obchodě a marketingu" },
    { value: 3, suffix: "", label: "certifikace v digitálním marketingu" },
    { value: 20, suffix: "+", label: "marketingových dovedností" },
  ],
  reasons: [
    {
      icon: "handshake",
      title: "Rozumím prodeji",
      text: "4,5 roku ve vedení prodejního týmu. Marketing stavím tak, aby podporoval obchod.",
    },
    {
      icon: "badge",
      title: "Certifikované know-how",
      text: "Google Digital Marketing, Orange academy a Ecomail. Stále se vzdělávám.",
    },
    {
      icon: "layers",
      title: "Vše na jednom místě",
      text: "Strategie, grafika, texty i reklamy. Nemusíte koordinovat několik dodavatelů.",
    },
  ],
} as const

export const experience = [
  {
    period: "11/2024 – současnost",
    title: "Online marketing · Freelancer",
    org: "Na volné noze · Praha a práce na dálku",
    text: "Sociální sítě, grafika, copywriting, PPC kampaně a e-mail marketing pro klienty z různých oborů.",
    current: true,
  },
  {
    period: "6/2024 – 11/2024",
    title: "Marketingová podpora",
    org: "šéfbot s.r.o. · Praha",
    text: "Příprava a realizace marketingových kampaní, články o produktu, spolupráce s klienty a správa firemních sociálních sítí.",
    current: false,
  },
  {
    period: "12/2019 – 6/2024",
    title: "Vedoucí manažerka týmu",
    org: "HappyZoo · Praha",
    text: "Vedení a motivace prodejního týmu k plnění cílů, komunikace se zákazníky a perfektní zákaznický servis.",
    current: false,
  },
]

export const certificates = [
  {
    period: "2/2024",
    title: "Fundamentals of Digital Marketing",
    org: "Google",
    text: "Základy digitálního marketingu – SEO, PPC, sociální sítě, obsah a analytika.",
  },
  {
    period: "6/2024",
    title: "Nákupčí pro internet, multimédia a nová média",
    org: "Orange academy",
    text: "Plánování a nákup online inzerce, práce s rozpočtem, Google Ads a Business Manager.",
  },
  {
    period: "9/2024",
    title: "Jak na e-mail marketing s Ecomailem",
    org: "Ecomail.cz",
    text: "E-mailové kampaně, automatizace, segmentace a analýza dat.",
  },
]

export const education = [
  { title: "SŠ podnikání a management Slavičín", text: "Selling Skills and Sales Operations" },
  { title: "SŠ oděvní a služeb Vizovice", text: "" },
]

export const skills = [
  {
    group: "Marketing",
    items: ["Digitální marketing", "Digitální strategie", "Sociální média", "Marketing na Facebooku", "Instagram marketing", "PPC", "Online inzerce", "SEO", "E-mailový marketing"],
  },
  {
    group: "Kreativa",
    items: ["Grafický design", "Copywriting", "Autorské psaní", "Editace videa", "Multimédia", "Nová média"],
  },
  {
    group: "Nástroje",
    items: ["Google Ads", "Google Analytics", "Business Manager", "WordPress", "Ecomail", "Collabim"],
  },
  {
    group: "Obchod a vedení",
    items: ["Sales management", "Obchodní strategie", "Strategické plánování", "Vedení týmu", "Vztahy s klienty", "Analýza dat", "Rozpočet", "Komunikace"],
  },
]

export const process = [
  {
    step: "01",
    title: "Úvodní konzultace",
    text: "Probereme vaše podnikání, cíle a zákazníky. Podívám se, kde jste online teď a co funguje.",
  },
  {
    step: "02",
    title: "Strategie a plán",
    text: "Navrhnu kanály, obsah, rozpočet a harmonogram na míru.",
  },
  {
    step: "03",
    title: "Realizace",
    text: "Tvořím grafiku, texty a kampaně a starám se o jejich zveřejnění.",
  },
  {
    step: "04",
    title: "Měření a ladění",
    text: "Sleduji výsledky, posílám přehledy a průběžně vylepšuji, co přináší nejvíc.",
  },
]

export const faqs = [
  {
    question: "Pro koho pracujete?",
    answer: "Pro malé a střední firmy, e-shopy i živnostníky, kteří chtějí být vidět online a přivést si nové zákazníky – ať už teprve začínají, nebo potřebují svůj marketing posunout.",
  },
  {
    question: "Pracujete i na dálku?",
    answer: "Ano. Sídlím v Praze, kde se ráda potkám osobně, ale s klienty z celé republiky spolupracuji online.",
  },
  {
    question: "Kolik spolupráce stojí?",
    answer: "Cena záleží na rozsahu – jinak vychází jednorázová kampaň, jinak dlouhodobá správa sítí. Po úvodní konzultaci vám pošlu nabídku na míru, bez skrytých poplatků.",
  },
  {
    question: "Musím mít vlastní fotky a texty?",
    answer: "Nemusíte. Texty i grafiku připravím, vaše vlastní fotky a podklady ale vždy ráda využiji – díky nim je obsah autentičtější.",
  },
  {
    question: "Spravujete i rozpočet na reklamu?",
    answer: "Ano. Navrhnu rozdělení rozpočtu, nastavím kampaně v Google Ads či Meta Business Manageru a průběžně je optimalizuji tak, aby každá koruna pracovala.",
  },
  {
    question: "Jak rychle můžeme začít?",
    answer: "Obvykle během několika dní. Stačí mi napsat, domluvíme si krátký úvodní hovor a pustíme se do toho.",
  },
]

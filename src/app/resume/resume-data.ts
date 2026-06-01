// Single source of truth for the resume. Rendered to /resume (HTML) and to
// public/uzair-saleem-resume.pdf via scripts/generate-resume.mjs — edit here only.

export type ContactItem = { label: string; href?: string };

export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
  tech: string[];
};

export type Project = {
  name: string;
  link: { label: string; href: string };
  blurb: string;
};

export type SkillGroup = { label: string; items: string[] };

export type Education = {
  degree: string;
  school: string;
  location: string;
  dates: string;
};

export const NAME = "Uzair Saleem";

export const CONTACT: ContactItem[] = [
  { label: "Islamabad, PK" },
  { label: "uzairsaleemdev@gmail.com", href: "mailto:uzairsaleemdev@gmail.com" },
  { label: "uzairsaleem.dev", href: "https://uzairsaleem.dev" },
  { label: "linkedin.com/in/uzair-saleem", href: "https://www.linkedin.com/in/uzair-saleem-5a399825a/" },
  { label: "github.com/developeruzairsaleem", href: "https://github.com/developeruzairsaleem" },
  { label: "+92 310 5187872" },
];

export const SUMMARY =
  "Full-stack engineer, four years shipping production SaaS end to end — revenue analytics, marketplaces, ops software. I own the whole stack from schema to deploy; most of the work is correctness-critical, where the numbers reconcile to source. Stack: Next.js, Node.js, Postgres, Stripe.";

export const EXPERIENCE: Experience[] = [
  {
    company: "Rocket Devs",
    role: "Full-Stack Engineer",
    location: "Remote (US / EU / MENA)",
    dates: "Jul 2025 – Present",
    bullets: [
      "Built Indiecator, a Baremetrics-style revenue-analytics platform: connect Stripe or Paddle for MRR, ARR, retention, and expansion / contraction / churn across multiple businesses.",
      "Shipped a hybrid invoice + event MRR ledger after pure event-sourcing broke on Stripe's 3-month event retention — invoices carry the long tail, live events apply proration-accurate changes.",
      "Built three idempotent ingestion flows into a multi-tenant Postgres ledger — webhooks, a 24-hour cron, a 2-year backfill — with per-day ECB FX across 30 currencies and row-level tenant isolation.",
      "Rebuilt Sat-Raj for a fuel wholesaler, replacing 39 hand-edited spreadsheets and cutting the daily pricing + invoicing run from 45–60 minutes to under 90 seconds; led 2 junior engineers.",
    ],
    tech: ["Next.js", "Node.js", "TypeScript", "Postgres", "Redis", "Stripe", "Paddle", "AWS", "GitHub Actions"],
  },
  {
    company: "Design&Desktop",
    role: "Full-Stack Engineer",
    location: "Remote (Germany)",
    dates: "Jan 2025 – Jul 2025",
    bullets: [
      "Cut AI-reel render times ~90% by moving the pipeline off in-browser FFmpeg.wasm to MediaBunny; multithreading alone bought only ~50% and swung 2–10 minutes across devices.",
      "Raised restaurant-scrape throughput ~80% with a pool of 5 parallel headless-Chromium workers, after target sites blocked direct HTTP requests.",
      "Modeled a German B2B marketplace's shipping on a ~12,000-row postal-code dataset I scraped and mapped to city / state, driving per-warehouse pricing and ZIP validation.",
    ],
    tech: ["Next.js", "Node.js", "TypeScript", "Postgres", "Supabase", "MediaBunny", "Puppeteer", "Framer Motion"],
  },
  {
    company: "Apifiny",
    role: "Full-Stack Engineer",
    location: "Islamabad",
    dates: "Jan 2022 – Dec 2024",
    bullets: [
      "Built B2B SaaS platforms end to end for agency clients; joined as a junior and within 18 months owned schema and architecture and led 2 engineers.",
      "Shipped Diffed.gg, a three-sided gaming-services marketplace (players, ranked experts, admin), end to end in 2 months on a 3-person team.",
      "Built a config-driven ranking engine so admins onboard any game's rank structure (divisions, tiers, straight ranks) without code, normalizing start and target ranks across games for pricing.",
    ],
    tech: ["Next.js", "Node.js", "JavaScript", "Postgres", "Redis", "Stripe", "PayPal", "Docker", "Vercel"],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Indiecator",
    link: { label: "indiecator.com", href: "https://indiecator.com" },
    blurb:
      "Revenue analytics on Stripe and Paddle — hybrid invoice + event MRR ledger, per-day ECB FX across 30 currencies, and multi-tenant row-level security.",
  },
  {
    name: "Sat-Raj",
    link: { label: "satraj.inc", href: "https://satraj.inc" },
    blurb:
      "Fuel-distribution ops reconciling Samsara telematics, supplier FTP, and delivered gallons; 3-gate address mapping and a .NET QuickBooks bridge.",
  },
  {
    name: "Diffed.gg",
    link: { label: "diffed-swart.vercel.app", href: "https://diffed-swart.vercel.app/" },
    blurb:
      "Three-sided gaming-services marketplace — cross-game ranking engine, Stripe + PayPal multi-currency wallet with day-of FX, live order chat, and admin tooling.",
  },
];

export const SKILLS: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "SQL", "C# (.NET)"] },
  { label: "Frameworks & Runtime", items: ["Next.js", "React", "Node.js", "Express", "Socket.IO"] },
  { label: "Data", items: ["PostgreSQL", "Supabase", "Redis", "Prisma"] },
  { label: "Payments & Infra", items: ["Stripe", "Paddle", "PayPal", "AWS", "Cloudflare", "Docker", "GitHub Actions"] },
];

export const EDUCATION: Education = {
  degree: "BS, Artificial Intelligence",
  school: "SZABIST University",
  location: "Islamabad",
  dates: "Nov 2018 – May 2022",
};

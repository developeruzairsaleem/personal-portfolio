// Single source of truth for the resume. Rendered to /resume (HTML) and to
// public/uzair-saleem-resume.pdf via scripts/generate-resume.mjs. Edit here only.

export type ContactItem = { label: string; href?: string };

export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
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
  "Full-stack engineer, four years building production software end to end: revenue analytics, online marketplaces, and operations software. Most of my work is correctness-critical, where data has to reconcile back to its source. Primarily Next.js, Node.js, and Postgres.";

export const EXPERIENCE: Experience[] = [
  {
    company: "Rocket Devs",
    role: "Full-Stack Engineer",
    location: "Remote (US / EU / MENA)",
    dates: "Jul 2025 – Present",
    bullets: [
      "Built Indiecator, a revenue-analytics platform that connects a founder's Stripe or Paddle account and reports MRR, ARR, retention, and net expansion across one or more businesses, with drill-down from any metric to the customer behind it.",
      "Engineered the recurring-revenue ledger behind every metric on the platform, reconstructing complete billing history from invoices and applying live events for proration-accurate expansion and contraction.",
      "Built 3 idempotent ingestion paths into a multi-tenant Postgres ledger, covering live webhooks, a daily catch-up job, and a 2-year historical backfill, so a newly connected account sees its full revenue history **within minutes**.",
      "Rebuilt Satraj, the daily pricing and invoicing system for a fuel wholesaler, replacing **39 hand-edited spreadsheets** and cutting the daily run from 45–60 minutes to **under 90 seconds**.",
    ],
  },
  {
    company: "Design&Desktop",
    role: "Full-Stack Engineer",
    location: "Remote (Germany)",
    dates: "Jan 2025 – Jul 2025",
    bullets: [
      "Rebuilt the in-browser video pipeline for an AI reel generator on MediaBunny, cutting render times from 2–10 minutes per clip to **about 10 seconds**.",
      "Engineered an automated reel pipeline that renders language-learning videos with Remotion and publishes them to Instagram through an n8n workflow.",
      "Built a restaurant-data dashboard that scrapes listings through headless Chromium, raising throughput **80%** by running 5 browser instances in parallel.",
      "Built per-warehouse delivery pricing and checkout address validation for a German B2B marketplace across a 12,000-entry postal-code dataset.",
    ],
  },
  {
    company: "Apifiny",
    role: "Full-Stack Engineer",
    location: "Islamabad",
    dates: "Feb 2023 – Dec 2024",
    bullets: [
      "Built B2B SaaS platforms end to end for agency clients, owning the schema, backend, frontend, and deployment.",
      "Shipped Diffed.gg, a three-sided marketplace where players hire ranked experts to climb competitive games, building the player, expert, and admin experiences in about 2 months on a 3-person team.",
      "Designed a configuration-driven ranking engine so administrators could onboard any game's rank structure, whether tiered divisions or straight ranks, without writing code, normalizing every order's start and target ranks into a common scale for pricing.",
    ],
  },
  {
    company: "Apifiny",
    role: "Full-Stack Engineer Intern",
    location: "Islamabad",
    dates: "Dec 2021 – Feb 2022",
    bullets: [
      "Built frontend and backend features for client B2B SaaS products, shipping production code across multiple projects.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Indiecator",
    link: { label: "indiecator.com", href: "https://indiecator.com" },
    blurb:
      "Revenue analytics for Stripe and Paddle. Computes MRR, ARR, net revenue retention, and churn from a hybrid ledger of invoices and live events, each metric drillable down to the customer that drives it.",
  },
  {
    name: "Satraj",
    link: { label: "satraj.inc", href: "https://satraj.inc" },
    blurb:
      "Operations software for a fuel distributor. Reconciles delivered gallons across Samsara telematics and supplier records, resolves delivery site locations through a 3-stage system backed by geofences, and pushes invoices into QuickBooks.",
  },
  {
    name: "Diffed.gg",
    link: { label: "diffed-swart.vercel.app", href: "https://diffed-swart.vercel.app/" },
    blurb:
      "Matchmaking and coaching marketplace for gamers, with a cross-game ranking engine, a multi-currency wallet over Stripe and PayPal, live order chat, and admin tooling.",
  },
];

export const SKILLS: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "SQL"] },
  { label: "Frameworks and Runtime", items: ["Next.js", "React", "Node.js", "Express", "Socket.IO"] },
  { label: "Data", items: ["PostgreSQL", "Supabase", "Redis", "Prisma"] },
  { label: "Payments and Infrastructure", items: ["Stripe", "Paddle", "PayPal", "AWS", "Cloudflare", "Docker", "GitHub Actions"] },
];

export const EDUCATION: Education = {
  degree: "BS, Artificial Intelligence",
  school: "SZABIST University",
  location: "Islamabad",
  dates: "Feb 2019 – Jan 2023",
};

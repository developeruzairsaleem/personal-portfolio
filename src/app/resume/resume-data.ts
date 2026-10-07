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
  { label: "uzair@uzairsaleem.dev", href: "mailto:uzair@uzairsaleem.dev" },
  { label: "uzairsaleem.dev", href: "https://uzairsaleem.dev" },
  { label: "linkedin.com/in/uzair-saleem", href: "https://www.linkedin.com/in/uzair-saleem-5a399825a/" },
  { label: "github.com/developeruzairsaleem", href: "https://github.com/developeruzairsaleem" },
  { label: "WhatsApp +92 310 5187872", href: "https://wa.me/923105187872" },
];

export const SUMMARY =
  "Full-stack developer and automation specialist with 5+ years shipping production software: SaaS analytics, marketplaces, and operations platforms. I build Next.js and Node backends, PostgreSQL data models, and n8n workflows (webhooks, AI steps, scheduled jobs) so support, reporting, and delivery stop living in inboxes and spreadsheets.";

export const EXPERIENCE: Experience[] = [
  {
    company: "Rocket Devs",
    role: "Full-Stack Engineer",
    location: "Remote (US / EU / MENA)",
    dates: "Jul 2025 – Present",
    bullets: [
      "Built Indiecator (indiecator.com), a revenue-analytics platform connecting Stripe or Paddle with MRR, ARR, retention, and net expansion, drillable to the customer behind each metric.",
      "Engineered a recurring-revenue ledger from invoices and live billing events, with **three idempotent ingestion paths** (webhooks, daily reconciliation, 2-year backfill) into multi-tenant Postgres.",
      "Automated Satraj's fuel operations end to end — daily pricing, delivery capture, office approval, and QuickBooks Desktop invoicing — replacing manual retyping across dispatch and back office (satraj.inc).",
    ],
  },
  {
    company: "Design&Desktop",
    role: "Full-Stack Engineer",
    location: "Remote (Germany)",
    dates: "Jan 2025 – Jul 2025",
    bullets: [
      "Rebuilt an AI reel generator's in-browser video pipeline on MediaBunny, cutting render times from 2–10 minutes to **about 10 seconds** per clip.",
      "Built an automated reel pipeline: Remotion compositions render language-learning videos; **n8n publishes to Instagram** on a schedule without manual editing.",
      "Raised restaurant-data scraping throughput **80%** with parallel headless Chromium workers for a listings dashboard.",
      "Shipped per-warehouse delivery pricing and checkout address validation for a German B2B marketplace (12,000 postal codes).",
    ],
  },
  {
    company: "Apifiny",
    role: "Full-Stack Engineer",
    location: "Islamabad",
    dates: "Feb 2023 – Dec 2024",
    bullets: [
      "Owned B2B SaaS builds end to end for agency clients: schema, API, frontend, and deployment.",
      "Led Diffed.gg (diffed-swart.vercel.app), a three-sided gaming marketplace — checkout, live provider matching, wallet payouts, and admin tooling — shipped in **~2 months** with a team of three.",
      "Designed a configuration-driven ranking engine so admins could onboard any game's rank structure without code changes.",
    ],
  },
  {
    company: "Apifiny",
    role: "Full-Stack Engineer Intern",
    location: "Islamabad",
    dates: "Dec 2021 – Feb 2022",
    bullets: [
      "Shipped production features across multiple client B2B SaaS products (frontend and backend).",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Satraj · fuel operations automation",
    link: { label: "satraj.inc", href: "https://satraj.inc" },
    blurb:
      "Dispatch through invoicing for a NJ/PA fuel wholesaler: DTN and Samsara ingestion, pricing engine, review queues, and QuickBooks Desktop sync — live in production.",
  },
  {
    name: "Indiecator",
    link: { label: "indiecator.com", href: "https://indiecator.com" },
    blurb:
      "Revenue analytics for Stripe and Paddle. MRR, ARR, churn, and retention from a movement ledger tied to real invoices, with drill-down to customers.",
  },
  {
    name: "Diffed.gg",
    link: { label: "diffed-swart.vercel.app", href: "https://diffed-swart.vercel.app/" },
    blurb:
      "Gaming coaching marketplace: cross-game ranks, Stripe/PayPal checkout, live chat, provider wallets, and admin verification.",
  },
  {
    name: "AI reels automator",
    link: { label: "Portfolio case study", href: "https://uzairsaleem.dev/#work" },
    blurb:
      "Remotion render pipeline + MediaBunny encoding + n8n workflow to generate and publish short-form reels automatically.",
  },
];

export const SKILLS: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "SQL", "Python"] },
  { label: "Frameworks", items: ["Next.js", "React", "Node.js", "Express", "Socket.IO"] },
  { label: "Automation & AI", items: ["n8n", "Webhooks", "OpenAI / LLM APIs", "Remotion", "Headless browser jobs"] },
  { label: "Data & infra", items: ["PostgreSQL", "Supabase", "Redis", "Prisma", "AWS", "Docker", "GitHub Actions"] },
  { label: "Integrations", items: ["Stripe", "Paddle", "PayPal", "QuickBooks Desktop", "Stripe webhooks"] },
];

export const EDUCATION: Education = {
  degree: "BS, Artificial Intelligence",
  school: "SZABIST University",
  location: "Islamabad",
  dates: "Feb 2019 – Jan 2023",
};

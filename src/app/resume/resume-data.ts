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
  "Full-stack engineer with four years building production SaaS end to end, across revenue analytics, online marketplaces, and operations software. I own each product from the database schema through the backend, frontend, and deployment, and most of my work is correctness-critical, where the numbers a customer sees have to reconcile back to their source. I work primarily in Next.js, Node.js, and Postgres.";

export const EXPERIENCE: Experience[] = [
  {
    company: "Rocket Devs",
    role: "Full-Stack Engineer",
    location: "Remote (US / EU / MENA)",
    dates: "Jul 2025 – Present",
    bullets: [
      "Built Indiecator, a revenue-analytics platform in the style of Baremetrics that connects a founder's Stripe or Paddle account and reports MRR, ARR, retention, and net expansion across one or more businesses, with drill-down from any metric to the customer behind it.",
      "Designed the recurring-revenue ledger that drives every metric on the platform, rebuilding it to reconstruct history from invoices while applying live events for proration-accurate changes after an early event-sourced version broke on Stripe's three-month event retention.",
      "Built three idempotent ingestion paths into a multi-tenant Postgres ledger, covering live webhooks, a daily catch-up job, and a two-year historical backfill, so a newly connected account sees its full revenue history within minutes.",
      "Rebuilt Sat-Raj, the daily pricing and invoicing system for a fuel wholesaler, replacing thirty-nine hand-edited spreadsheets and cutting a morning process that took forty-five to sixty minutes down to under ninety seconds, while leading two junior engineers.",
    ],
    tech: ["Next.js", "Node.js", "TypeScript", "Postgres", "Redis", "Stripe", "Paddle", "AWS", "GitHub Actions"],
  },
  {
    company: "Design&Desktop",
    role: "Full-Stack Engineer",
    location: "Remote (Germany)",
    dates: "Jan 2025 – Jul 2025",
    bullets: [
      "Re-architected the in-browser video pipeline behind an AI reel generator that rendered with FFmpeg compiled to WebAssembly and took two to ten minutes per clip, moving it to MediaBunny after multithreading fell short and bringing renders down to about ten seconds.",
      "Built a restaurant-data dashboard that drove headless Chromium through Puppeteer once the target German sites began blocking direct requests, raising scrape throughput by roughly eighty percent by running five browser instances in parallel.",
      "Modeled shipping for a German B2B marketplace on a dataset of about twelve thousand postal codes that I scraped and mapped to their cities and states, which drove per-warehouse delivery pricing and address validation at checkout.",
    ],
    tech: ["Next.js", "Node.js", "TypeScript", "Postgres", "Supabase", "MediaBunny", "Puppeteer", "Framer Motion"],
  },
  {
    company: "Apifiny",
    role: "Full-Stack Engineer",
    location: "Islamabad",
    dates: "Jan 2022 – Dec 2024",
    bullets: [
      "Built B2B SaaS platforms end to end for agency clients, joining as a junior engineer and within eighteen months owning the schema and architecture and leading two engineers.",
      "Shipped Diffed.gg, a three-sided marketplace where players hire ranked experts to climb competitive games, building the player, expert, and admin experiences in about two months on a three-person team.",
      "Designed a configuration-driven ranking engine so administrators could onboard any game's rank structure, whether tiered divisions or straight ranks, without writing code, normalizing every order's start and target ranks into a common scale for pricing.",
    ],
    tech: ["Next.js", "Node.js", "JavaScript", "Postgres", "Redis", "Stripe", "PayPal", "Docker", "Vercel"],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Indiecator",
    link: { label: "indiecator.com", href: "https://indiecator.com" },
    blurb:
      "Revenue analytics for Stripe and Paddle. Reconstructs MRR from a hybrid ledger of invoices and live events, converts thirty currencies at historical ECB rates from the day of each transaction, and isolates every tenant with row-level security.",
  },
  {
    name: "Sat-Raj",
    link: { label: "satraj.inc", href: "https://satraj.inc" },
    blurb:
      "Operations software for a fuel distributor. Reconciles delivered gallons across Samsara telematics and supplier records, resolves free-text delivery addresses through a three-stage system backed by geofences, and pushes invoices into QuickBooks over a .NET bridge.",
  },
  {
    name: "Diffed.gg",
    link: { label: "diffed-swart.vercel.app", href: "https://diffed-swart.vercel.app/" },
    blurb:
      "Three-sided marketplace for competitive gaming services, with a cross-game ranking engine, a multi-currency wallet over Stripe and PayPal that settles at the day's exchange rate, live order chat, and admin tooling.",
  },
];

export const SKILLS: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "SQL", "C# (.NET)"] },
  { label: "Frameworks and Runtime", items: ["Next.js", "React", "Node.js", "Express", "Socket.IO"] },
  { label: "Data", items: ["PostgreSQL", "Supabase", "Redis", "Prisma"] },
  { label: "Payments and Infrastructure", items: ["Stripe", "Paddle", "PayPal", "AWS", "Cloudflare", "Docker", "GitHub Actions"] },
];

export const EDUCATION: Education = {
  degree: "BS, Artificial Intelligence",
  school: "SZABIST University",
  location: "Islamabad",
  dates: "Nov 2018 – May 2022",
};

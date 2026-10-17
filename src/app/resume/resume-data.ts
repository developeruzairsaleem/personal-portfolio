// Single source of truth for the resume. Rendered to /resume (HTML), to
// public/uzair-saleem-resume.pdf via scripts/generate-resume.mjs, and to
// public/uzair-saleem-resume.docx via scripts/generate-resume-docx.mts.
// The home page reads EXPERIENCE from here too. Edit here only.

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

export const HEADLINE = "Full-Stack Engineer";

export const CONTACT: ContactItem[] = [
  { label: "Islamabad, PK (works US hours)" },
  { label: "uzair@uzairsaleem.dev", href: "mailto:uzair@uzairsaleem.dev" },
  { label: "uzairsaleem.dev", href: "https://uzairsaleem.dev" },
  { label: "linkedin.com/in/uzair-saleem", href: "https://www.linkedin.com/in/uzair-saleem-5a399825a/" },
  { label: "github.com/developeruzairsaleem", href: "https://github.com/developeruzairsaleem" },
  { label: "WhatsApp +92 310 5187872", href: "https://wa.me/923105187872" },
];

export const SUMMARY =
  "Full-stack engineer who ships to production. I build data pipelines, billing workflows and AI automations with Next.js, Node, PostgreSQL and n8n. I have been writing production code since 2021 for clients in the US and Europe, and I work US hours from Islamabad.";

// Bullets can mark a key result as **bold**.
export const EXPERIENCE: Experience[] = [
  {
    company: "Rocket Devs",
    role: "Full-Stack Engineer",
    location: "Remote (US / EU)",
    dates: "Jul 2025 – Present",
    bullets: [
      "Engineered data intensive ETL pipelines for Indiecator (indiecator.com) that sync years of Stripe and Paddle billing history without downtime: a **2-year backfill**, live webhooks and a nightly reconciliation, all idempotent, into multi-tenant Postgres.",
      "Built the revenue ledger behind MRR, ARR, churn and retention from real invoices, so every number drills down to the customers behind it.",
      "Integrated and shipped Satraj's complete billing workflow from dispatch to QuickBooks Desktop (satraj.inc). It handles messy data from DTN and Samsara, sends unclear deliveries to an office review queue, and syncs invoices with retries and duplicate checks. **The whole office runs real invoices through it.**",
    ],
  },
  {
    company: "Design&Desktop",
    role: "Full-Stack Engineer",
    location: "Remote (Germany)",
    dates: "Jan 2025 – Jul 2025",
    bullets: [
      "Built an AI integrated reel generator and shipped its n8n workflow that posts finished reels to Instagram on a schedule.",
      "Rebuilt the in-browser video pipeline on MediaBunny. Render time went from 2–10 minutes to **about 10 seconds** per clip.",
      "Raised restaurant-data scraping throughput by **80%** with parallel headless Chromium workers for a listings dashboard.",
      "Shipped per-warehouse delivery pricing and checkout address validation across 12,000 postal codes for a German B2B marketplace.",
    ],
  },
  {
    company: "Apifiny",
    role: "Full-Stack Engineer",
    location: "Islamabad",
    dates: "Feb 2023 – Dec 2024",
    bullets: [
      "Led Diffed.gg (diffed-swart.vercel.app), a gaming coaching marketplace with checkout, live provider matching, wallets, payouts and admin tools. Shipped in **about 2 months** with a team of three.",
      "Designed a config-driven rank engine so admins can add any game's rank system without code changes.",
      "Owned client SaaS builds end to end: schema, API, frontend and deployment.",
    ],
  },
  {
    company: "Apifiny",
    role: "Full-Stack Engineer Intern",
    location: "Islamabad",
    dates: "Dec 2021 – Feb 2022",
    bullets: [
      "Shipped production features across several client B2B SaaS products, frontend and backend.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Satraj · fuel billing, dispatch to QuickBooks",
    link: { label: "satraj.inc", href: "https://satraj.inc" },
    blurb:
      "Daily DTN pricing, delivery tickets from DTN and Samsara, an office review queue, and QuickBooks Desktop invoice sync. Live in production.",
  },
  {
    name: "Indiecator · revenue analytics",
    link: { label: "indiecator.com", href: "https://indiecator.com" },
    blurb:
      "MRR, ARR, churn and retention for Stripe and Paddle, from a ledger tied to real invoices. Code is public on GitHub.",
  },
  {
    name: "Diffed.gg · gaming marketplace",
    link: { label: "diffed-swart.vercel.app", href: "https://diffed-swart.vercel.app/" },
    blurb:
      "Card and PayPal checkout, live chat, provider wallets and admin verification, with separate apps for customers, providers and admins.",
  },
  {
    name: "AI reel generator · n8n posting",
    link: { label: "uzairsaleem.dev/#work", href: "https://uzairsaleem.dev/#work" },
    blurb:
      "Remotion renders, MediaBunny encoding and an n8n workflow that publishes reels to Instagram on a schedule.",
  },
];

export const SKILLS: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "SQL", "Python"] },
  { label: "Frameworks", items: ["Next.js", "React", "Node.js", "Express", "Socket.IO"] },
  { label: "Data & infra", items: ["PostgreSQL", "Supabase", "Redis", "Prisma", "AWS", "Docker", "GitHub Actions"] },
  { label: "Automation & AI", items: ["n8n", "LLM APIs", "Webhooks", "Remotion", "Headless Chromium"] },
  { label: "Integrations", items: ["Stripe", "Paddle", "PayPal", "QuickBooks Desktop", "Samsara", "DTN"] },
];

export const EDUCATION: Education = {
  degree: "BS, Artificial Intelligence",
  school: "SZABIST University",
  location: "Islamabad",
  dates: "Feb 2019 – Jan 2023",
};

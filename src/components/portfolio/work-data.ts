export type WorkLink = { label: string; href: string; kind: "site" | "code" | "page" | "pdf" };

export type Work = {
  id: string;
  kicker: string;
  status: string;
  title: string;
  summary: string;
  points: string[];
  stack: string[];
  links: WorkLink[];
  image?: { src: string; alt: string; width: number; height: number };
  flow?: [string, string][];
};

export const WORK: Work[] = [
  {
    id: "satraj",
    kicker: "Fuel distributor, New Jersey",
    status: "Live in production",
    title: "Satraj billing, from dispatch to QuickBooks",
    summary:
      "Sat-Raj delivers gasoline and diesel across New Jersey and Pennsylvania. Their office used to type every delivery ticket into a spreadsheet and then again into QuickBooks. I built the system that replaced that. Their whole team runs real invoices through it every day, and I still ship the fixes and new features.",
    points: [
      "Supplier prices come in from DTN every day. The pricing engine had to match the old spreadsheet to the cent, so the math is pinned to the legacy rates in tests.",
      "Delivery tickets come in from DTN and Samsara. When a truck's GPS stop doesn't clearly match a customer site, the delivery goes to a review queue instead of being guessed.",
      "Approved invoices post to QuickBooks Desktop through the Web Connector with the right fuel and tax lines, plus retries and duplicate checks.",
    ],
    stack: ["Next.js", "PostgreSQL", "AWS", "QuickBooks Web Connector", "Samsara API", "DTN"],
    links: [
      { label: "satraj.inc", href: "https://satraj.inc", kind: "site" },
      { label: "Case study", href: "/work/satraj", kind: "page" },
    ],
    image: {
      src: "/images/satraj-review-queue.png",
      alt: "The office review queue from the Satraj billing system, shown with demo data. One delivery is flagged because the gallons don't match the ticket.",
      width: 1780,
      height: 790,
    },
  },
  {
    id: "indiecator",
    kicker: "SaaS revenue analytics",
    status: "Live",
    title: "Indiecator data pipelines",
    summary:
      "Indiecator shows SaaS founders their real MRR, churn and retention. I engineered the data intensive ETL pipelines behind it. When a founder connects Stripe or Paddle, it pulls two years of billing history and keeps it in sync without downtime.",
    points: [
      "Three ingestion paths write to one ledger: a two-year backfill, live webhooks, and a nightly reconciliation that repairs anything the webhooks missed. All of them are idempotent, so a replay never double counts.",
      "The ledger records revenue movements from what customers actually paid, so upgrades, downgrades and a $4.27 proration invoice each get counted the right way.",
      "Every metric drills down to the customers behind it, on multi-tenant Postgres.",
    ],
    stack: ["Node.js", "Next.js", "PostgreSQL", "Supabase", "Redis", "Stripe", "Paddle"],
    links: [
      { label: "indiecator.com", href: "https://indiecator.com", kind: "site" },
      { label: "Code on GitHub", href: "https://github.com/developeruzairsaleem/indiecator", kind: "code" },
      { label: "Case study (PDF)", href: "/case-studies/indiecator.pdf", kind: "pdf" },
    ],
    image: {
      src: "/images/indiecator.png",
      alt: "Indiecator home page: See real MRR, see what you actually keep",
      width: 1000,
      height: 522,
    },
  },
  {
    id: "diffed",
    kicker: "Gaming marketplace",
    status: "Live",
    title: "Diffed.gg, checkout to payout",
    summary:
      "Players book a coach or a teammate, pay by card or PayPal, and providers apply to the order live. I led a team of three and we shipped it in about two months, with separate apps for customers, providers and admins.",
    points: [
      "Money is stored in whole cents, and every wallet balance comes from transactions that are never edited.",
      "The server re-prices every checkout, so a tampered price never reaches the payment gateway.",
      "A config-driven rank engine lets admins add any game's rank system without code.",
    ],
    stack: ["Next.js", "PostgreSQL", "Socket.IO", "Stripe", "PayPal"],
    links: [
      { label: "Live site", href: "https://diffed-swart.vercel.app/", kind: "site" },
      { label: "Code on GitHub", href: "https://github.com/developeruzairsaleem/diffedgg", kind: "code" },
      { label: "Case study (PDF)", href: "/case-studies/diffed.pdf", kind: "pdf" },
    ],
    image: {
      src: "/images/diffed.png",
      alt: "Diffed.gg home page: Rank up, level up, game on",
      width: 1000,
      height: 514,
    },
  },
  {
    id: "reels",
    kicker: "AI media automation, Germany",
    status: "Shipped",
    title: "AI reel generator with n8n posting",
    summary:
      "I built an AI integrated reel generator for Design&Desktop and shipped its n8n workflow, which posts finished reels to Instagram on a schedule so nobody has to open a video editor.",
    points: [
      "I rebuilt the in-browser video pipeline on MediaBunny. Render time went from 2 to 10 minutes down to about 10 seconds per clip.",
      "Remotion compositions render each reel from a spec of scenes, text and media.",
      "n8n handles credentials, retries and posting, so one broken API call doesn't quietly skip a day.",
    ],
    stack: ["Remotion", "MediaBunny", "WebCodecs", "n8n", "Instagram API"],
    links: [],
    flow: [
      ["Spec", "scenes, text, media"],
      ["Render", "Remotion"],
      ["Encode", "MediaBunny, ~10 s"],
      ["Publish", "n8n to Instagram"],
    ],
  },
];

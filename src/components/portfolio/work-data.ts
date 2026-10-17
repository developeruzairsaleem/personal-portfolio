// The four projects on the home page and the /work/[slug] case studies.
// Facts here come from the résumé data and the project deep-dive. Keep the
// copy plain, keep numbers to ones that can be checked, no em dashes.

export type WorkLink = { label: string; href: string; kind: "site" | "code" | "pdf" };
export type CaseStep = { title: string; text: string };

export type Work = {
  slug: string;
  name: string;
  kicker: string;
  status: string;
  title: string;
  oneLiner: string;
  /** One checkable result, shown on the tile. */
  result: string;
  stack: string[];
  links: WorkLink[];
  image?: { src: string; alt: string; width: number; height: number; fit?: "cover" | "contain" };
  /** Used instead of an image when there is nothing public to show. */
  flow?: [string, string][];
  note?: string;
  /** Older PDF write-up, still linked from past applications. */
  pdf?: string;
  case: {
    lead: string;
    role: string;
    period: string;
    problem: string;
    built: CaseStep[];
    hard: { title: string; text: string };
    results: string[];
    video?: { src: string; poster: string; caption: string };
    writing?: { label: string; href: string };
    extras?: { title: string; items: string[] };
  };
};

export const WORK: Work[] = [
  {
    slug: "satraj",
    name: "Sat-Raj",
    kicker: "Fuel distributor, New Jersey",
    status: "Live in production",
    title: "Billing for a fuel distributor",
    oneLiner:
      "The office typed every delivery ticket twice, once into a spreadsheet and once into QuickBooks. Now prices, deliveries and invoices run through one system.",
    result: "The whole office runs real invoices through it every day",
    stack: ["Next.js", "PostgreSQL", "AWS", "QuickBooks", "Samsara"],
    links: [{ label: "satraj.inc", href: "https://satraj.inc", kind: "site" }],
    image: {
      src: "/images/satraj-review-queue.png",
      alt: "The office review queue from the Sat-Raj billing system, with demo data. One delivery is flagged because the gallons don't match the ticket.",
      width: 1780,
      height: 790,
      fit: "contain",
    },
    case: {
      lead:
        "I built the billing system for Sat-Raj, a fuel distributor that delivers gasoline and diesel across New Jersey and Pennsylvania. It replaced the spreadsheets the office used for prices and invoices, and I still ship fixes and new features.",
      role: "Full-stack engineer, contract",
      period: "Jan 2026 to now",
      problem:
        "Prices lived in hand-edited spreadsheets. Every delivery ticket was typed twice, once into a sheet and once into QuickBooks. Drivers wrote delivery addresses by hand, so one customer could show up written many different ways, and the invoice would not match.",
      built: [
        {
          title: "Pricing",
          text: "Supplier prices arrive from DTN every day. The pricing engine adds each customer's margin, freight and New Jersey and Pennsylvania fuel taxes, and the daily price emails go out from the system. It had to match the old spreadsheet to the cent, so the math is pinned to the old rates in tests.",
        },
        {
          title: "Deliveries",
          text: "Delivery tickets come in from DTN and from Samsara, the GPS system on the trucks. If a truck stop doesn't clearly match a customer site, it goes to a review queue instead of being guessed.",
        },
        {
          title: "Invoices",
          text: "Approved deliveries post to QuickBooks Desktop through the Web Connector, with the right fuel and tax lines. Retries and duplicate checks mean a failed sync can't create a double invoice.",
        },
        {
          title: "Ongoing",
          text: "I own it in production. Recent work: repairing history after a terminal feed swapped gross and net gallons, adding a Top Tier additive charge, and building a payables view.",
        },
      ],
      hard: {
        title: "Matching a delivery to the right customer",
        text: "A delivery is only billable once the system knows which customer it went to, and drivers had typed that as free text. I fixed it in layers. Dispatch dropdowns and pre-filled forms replaced the typing. The truck's GPS position, checked against a map area drawn around each customer site, backs that up. Anything still unclear lands in the review queue for the office to decide.",
      },
      results: [
        "The whole office runs real invoices through it every day.",
        "Nobody retypes tickets into a spreadsheet and then into QuickBooks.",
        "Deliveries that don't match cleanly get reviewed, not guessed.",
        "Every price sent and every invoice synced can be looked up by date and customer.",
      ],
      video: {
        src: "/fuel-demo-v3.mp4",
        poster: "/fuel-demo-v3-poster.jpg",
        caption: "50-second screen recording of the real system, running on demo data.",
      },
    },
  },
  {
    slug: "indiecator",
    name: "Indiecator",
    kicker: "Revenue analytics for SaaS",
    status: "Live",
    title: "Revenue analytics for SaaS founders",
    oneLiner:
      "Connect Stripe or Paddle and see MRR, churn and retention. I built the data pipelines that pull in two years of billing history and keep it current.",
    result: "Two years of history, synced without downtime",
    stack: ["Node.js", "Next.js", "PostgreSQL", "Supabase", "Redis", "Stripe"],
    links: [
      { label: "indiecator.com", href: "https://indiecator.com", kind: "site" },
      { label: "Code", href: "https://github.com/developeruzairsaleem/indiecator", kind: "code" },
    ],
    pdf: "/case-studies/indiecator.pdf",
    image: {
      src: "/images/indiecator.png",
      alt: "Indiecator home page: See real MRR, see what you actually keep",
      width: 1000,
      height: 522,
    },
    case: {
      lead:
        "Indiecator shows SaaS founders their real MRR, ARR, churn and retention. I built it with Rocket Devs, including the data pipelines behind every number on the dashboard.",
      role: "Full-stack engineer at Rocket Devs",
      period: "Jul 2025 to now",
      problem:
        "A founder wants to see their revenue history the moment they connect Stripe. A dashboard that starts empty is useless, and a number you can't trace back to real customers is one nobody trusts.",
      built: [
        {
          title: "Three ways in",
          text: "When an account connects, a background job backfills two years of history. Live webhooks keep it current. A daily catch-up job repairs anything the webhooks missed. All three are safe to re-run, so a replay never double counts.",
        },
        {
          title: "A ledger built from invoices",
          text: "MRR, ARR, churn and retention come from what customers actually paid, so upgrades, downgrades and prorations land in the right month.",
        },
        {
          title: "Click any number",
          text: "Every metric drills down to the customers and transactions behind it, so a founder can check it against Stripe themselves.",
        },
        {
          title: "Safe for many customers",
          text: "Each customer's data is isolated in the database with Postgres row-level security. Redis keeps dashboards quick on accounts with two years of history. Revenue is converted at the exchange rate from the day it happened.",
        },
      ],
      hard: {
        title: "Stripe only remembers three months",
        text: "My first design replayed Stripe's events to rebuild history. Then a real account connected and the events ran out after about three months. Invoices go back forever, but they hide the day a mid-month upgrade happened. The fix uses both: invoices for the old history, events for the recent window, and one shared list where overlaps merge instead of counting twice.",
      },
      results: [
        "Live at indiecator.com, with the code public on GitHub.",
        "Two years of history on connect, kept in sync without downtime.",
        "Shipped end to end in about three months.",
      ],
      writing: {
        label: "Read the full write-up of the three-month problem",
        href: "/blog/show-2-years-revenue-stripe-keeps-3-months",
      },
    },
  },
  {
    slug: "diffed",
    name: "Diffed.gg",
    kicker: "Gaming marketplace",
    status: "Live",
    title: "Gaming coaching marketplace",
    oneLiner:
      "Players book a coach and pay by card or PayPal, and providers get paid out. I led a team of three and we shipped it in about two months.",
    result: "Shipped in about two months with a team of three",
    stack: ["Next.js", "PostgreSQL", "Socket.IO", "Stripe", "PayPal"],
    links: [
      { label: "Live site", href: "https://diffed-swart.vercel.app/", kind: "site" },
      { label: "Code", href: "https://github.com/developeruzairsaleem/diffedgg", kind: "code" },
    ],
    pdf: "/case-studies/diffed.pdf",
    image: {
      src: "/images/diffed.png",
      alt: "Diffed.gg home page: Rank up, level up, game on",
      width: 1000,
      height: 514,
    },
    case: {
      lead:
        "Diffed.gg connects players with ranked experts who help them climb in their games. It has separate apps for players, providers and admins. I led the three-person team at Apifiny that built it.",
      role: "Led the build, Apifiny",
      period: "Feb 2023 to Dec 2024 at Apifiny",
      problem:
        "Every game ranks players differently. To price an order and match a provider, the platform has to compare a starting rank and a target rank in any game. And because it moves real money, every balance has to add up exactly.",
      built: [
        {
          title: "A game engine with no code changes",
          text: "Admins add a new game and define its ranks in the admin panel. The platform then knows how to price and match for it.",
        },
        {
          title: "Wallets that add up",
          text: "Money is stored in whole cents. Every balance is the sum of transactions that are never edited, and foreign currency is converted at the rate from the day it happened.",
        },
        {
          title: "Prices the browser can't change",
          text: "The server re-prices every order, so a changed price in the browser never reaches Stripe or PayPal.",
        },
        {
          title: "Live orders and admin tools",
          text: "Providers apply to an order live and chat with the player over Socket.IO. Admins handle onboarding, fees, payouts, disputes and refunds.",
        },
      ],
      hard: {
        title: "Ranks that don't line up",
        text: "One game has tiers with divisions inside each tier. Another goes straight from rank to rank. Instead of hard-coding each game, I modeled a game as data. The same pricing and matching logic now works for every game an admin adds.",
      },
      results: [
        "Shipped in about two months with a team of three.",
        "Separate apps for players, providers and admins.",
        "Live preview and public code.",
      ],
    },
  },
  {
    slug: "reels",
    name: "Design&Desktop",
    kicker: "AI video automation, Germany",
    status: "Shipped",
    title: "AI reel generator",
    oneLiner:
      "Turns a creator's clips into short videos and posts them to Instagram on a schedule with an n8n workflow. I rebuilt the rendering so a clip takes about 10 seconds.",
    result: "About 10 seconds per clip, down from 2 to 10 minutes",
    stack: ["Remotion", "MediaBunny", "WebCodecs", "n8n", "Instagram API"],
    links: [],
    note: "Client work, so there is no public link.",
    flow: [
      ["Spec", "scenes, text, media"],
      ["Render", "Remotion"],
      ["Encode", "MediaBunny, 10 sec"],
      ["Publish", "n8n to Instagram"],
    ],
    case: {
      lead:
        "An AI reel generator for Design&Desktop, a team in Germany. I built the tool and shipped the n8n workflow that posts the finished reels.",
      role: "Full-stack engineer at Design&Desktop",
      period: "Jan to Jul 2025",
      problem:
        "Rendering ran in the user's browser. The same clip took 2 minutes on one device and 10 on another, so there was no honest render time to promise anyone.",
      built: [
        {
          title: "Reels from a spec",
          text: "Remotion compositions render each reel from a spec of scenes, text and media, so a new reel is data, not a new edit.",
        },
        {
          title: "Posting that fails loudly",
          text: "n8n handles credentials, retries and the posting schedule, so one broken API call doesn't quietly skip a day.",
        },
      ],
      hard: {
        title: "Making renders fast on every device",
        text: "The first version used FFmpeg compiled to WebAssembly. Multithreading it cut the time about in half, which was not enough. I looked at the alternatives and moved the pipeline to MediaBunny, which uses the browser's own video encoders through WebCodecs. A clip now takes about 10 seconds.",
      },
      results: [
        "Render time went from 2 to 10 minutes down to about 10 seconds per clip.",
        "Finished reels post to Instagram on a schedule with no one opening a video editor.",
      ],
      extras: {
        title: "Also at Design&Desktop",
        items: [
          "Restaurant data dashboard: parallel headless Chromium workers made scraping 80% faster.",
          "German B2B marketplace: delivery pricing and address checks across 12,000 postal codes.",
        ],
      },
    },
  },
];

export function getWork(slug: string): Work | undefined {
  return WORK.find((w) => w.slug === slug);
}

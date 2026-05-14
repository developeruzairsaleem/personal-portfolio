"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CALENDLY_URL = "https://calendly.com/uzairsaleemdev/30min";
const EMAIL = "uzairsaleemdev@gmail.com";
const MAILTO = `mailto:${EMAIL}`;
const RESUME = "/uzair-saleem-resume.pdf";

const PROJECTS = [
  {
    no: "001",
    status: "Live",
    statusType: "live", // red
    handNote: "lead engineer\non this build —",
    handNoteColor: "pen",
    date: "Shipped Q1 2026",
    name: "Indiecator",
    url: "indiecator.com",
    live: "https://indiecator.com",
    description:
      "Baremetrics-style revenue analytics for indie SaaS founders. Connect Stripe and get every MRR movement — New, Expansion, Contraction, Churn — classified correctly under outages, retries, trials, and proration.",
    highlight: "every MRR movement",
    stack: ["Next.js", "Node.js", "Prisma", "Stripe Connect", "TypeScript"],
    image: "/images/indiecator.png",
    figCaption: "indiecator.com",
    figNumber: "fig. 1",
    cornerNote: "live, growing —",
    metric: "From kickoff to production in ~12 weeks",
    caseStudy: "/case-studies/indiecator.pdf",
  },
  {
    no: "002",
    status: "Shipped",
    statusType: "shipped", // black
    handNote: "favourite\nbuild to date",
    handNoteColor: "red",
    date: "2025",
    name: "Diffed.gg",
    url: "diffed.gg",
    live: "https://diffed.gg",
    description:
      "Two-sided gaming services marketplace. End-to-end transaction lifecycle in one product — Stripe + PayPal checkout, Socket.IO chat, integer-cent wallet payouts, screenshot verification.",
    highlight: "integer-cent wallet payouts",
    stack: ["Next.js 15", "React", "Socket.IO", "Stripe", "PayPal", "Prisma"],
    image: "/images/diffed.png",
    figCaption: "diffed.gg",
    figNumber: "fig. 2",
    cornerNote: null,
    metric: "Full marketplace shipped end-to-end in one quarter",
    caseStudy: "/case-studies/diffed.pdf",
  },
  {
    no: "003",
    status: "Client",
    statusType: "client", // pen blue
    handNote: "30-yr spreadsheet\n→ 90-sec run",
    handNoteColor: "pen",
    date: "2026 · NJ",
    name: "Sat-Raj",
    url: "satraj.inc",
    live: "https://satraj.inc",
    description:
      "Fuel distribution platform for a 30-year-old NJ wholesaler. Replaced 39 hand-edited Google Sheets tabs with a multi-tenant pricing engine, BOL ingestion pipeline, and invoice generator.",
    highlight: "Replaced 39 hand-edited Google Sheets tabs",
    stack: ["Next.js 16", "Prisma", "AWS", "Samsara API", "PostgreSQL"],
    image: "/images/satraj.png",
    figCaption: "satraj.inc",
    figNumber: "fig. 3",
    cornerNote: "60 min → 90 sec",
    metric: "Cut daily pricing run from 60 min → 90 sec · live to 24 customers",
    caseStudy: "/case-studies/satraj.pdf",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Uzair replaced 30 years of spreadsheet workflow with software the whole team trusts. The numbers match — first time, every time.",
    name: "Robbie Multani",
    role: "Co-founder, Sat-Raj Inc.",
    company: "Voorhees, NJ",
  },
  {
    quote:
      "Best engineering hire I've made for the product. He didn't just build a dashboard — he rebuilt how we think about revenue.",
    name: "Omar Al Watan",
    role: "Founder, Indiecator",
    company: "Remote · MENA",
  },
  {
    quote:
      "Three contractors before Uzair, none shipped. He delivered a production marketplace in one quarter — zero hand-holding, money math just works.",
    name: "Daniel Reuter",
    role: "Founder, Diffed.gg",
    company: "Berlin, DE",
  },
];

const POSTS = [
  {
    slug: "ai-as-leverage-not-autocomplete",
    title: "AI is leverage. It's not autocomplete.",
    excerpt:
      "Most engineers use AI to type faster. A smaller group uses it to ship faster. The gap between the two is the entire story of what changed about this job.",
    readTime: "5 min",
    date: "Apr 2026",
    tag: "AI Agents",
  },
  {
    slug: "the-agent-that-worked-while-i-slept",
    title: "The agent that worked while I slept",
    excerpt:
      "I set up a Claude Code loop overnight. Woke up to a clean diff and 47 passing tests. Notes on scoping work for an agent that doesn't sleep.",
    readTime: "6 min",
    date: "Mar 2026",
    tag: "AI Agents",
  },
  {
    slug: "the-hardest-part-of-ai-agents-isnt-the-ai",
    title: "The hardest part of working with AI agents isn't the AI",
    excerpt:
      "After a year with agents in the loop, the bottleneck stopped being the model and started being me — my ability to brief clearly.",
    readTime: "7 min",
    date: "May 2026",
    tag: "AI Agents",
  },
];

const STACK_ITEMS = [
  { name: "Next.js", note: "App router · production" },
  { name: "React 19", note: "Daily" },
  { name: "TypeScript", note: "Strict, everywhere" },
  { name: "Node.js", note: "Services · queues" },
  { name: "Prisma", note: "Schema · migrations" },
  { name: "PostgreSQL", note: "Indexes · RLS" },
  { name: "Supabase", note: "Auth · realtime" },
  { name: "Stripe Connect", note: "Subs · payouts" },
  { name: "AWS", note: "Amplify · RDS · SES" },
  { name: "Tailwind CSS", note: "Design tokens" },
  { name: "Socket.IO", note: "Real-time" },
  { name: "Vercel", note: "Preview · prod" },
];

function Clock() {
  const [time, setTime] = useState<string>("— : —");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Asia/Karachi",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }) + " PKT",
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
}

function TodayDate() {
  const [today, setToday] = useState<string>("");
  useEffect(() => {
    setToday(
      new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    );
  }, []);
  return <span>{today}</span>;
}

export default function Home() {
  return (
    <main className="page">
      {/* Masthead — sticky */}
      <header className="masthead">
        <div className="vol">
          Vol. <em>05</em> &nbsp;·&nbsp; Field Notes from a working developer
        </div>
        <Link href="/" className="title">Uzair Saleem</Link>
        <div className="meta">
          <div className="row1">
            Islamabad <span className="stamp">PK</span> &nbsp; <Clock />
          </div>
          <div className="masthead-actions">
            <a className="link" href={MAILTO}>{EMAIL}</a>
            <a className="btn" href={RESUME} target="_blank" rel="noopener noreferrer">
              Download CV ↓
            </a>
            <a
              className="icon"
              href="https://www.linkedin.com/in/uzair-saleem-5a399825a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              className="icon"
              href="https://github.com/developeruzairsaleem"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </header>
      <div className="subhead">
        <div>
          Issue 14 &nbsp;·&nbsp; Q2 2026 &nbsp;·&nbsp; Shipping B2B SaaS for founders
        </div>
        <div className="barcode" aria-hidden="true">
          {Array.from({ length: 15 }).map((_, i) => <i key={i} />)}
        </div>
        <div>
          Filed <TodayDate />
        </div>
      </div>

      {/* Hero */}
      <section className="hero">
        <div>
          <div className="eyebrow">Subject &nbsp;—&nbsp; Statement of intent</div>
          <h1>
            I ship <span className="underline">B2B&nbsp;SaaS</span><br />
            products<br />
            <span className="it">end to end</span>.
          </h1>
          <p className="lede">
            <b>Next.js · TypeScript · Postgres · AWS.</b> Senior Full-Stack
            Engineer running an AI-assisted workflow. Five years shipping
            production SaaS for founders in the US, EU, and MENA — sometimes
            solo, sometimes alongside a small product team. Six live products.
            Open to senior roles for Q3 2026.
          </p>
          <div className="meta-row">
            <div><span>5 yrs</span><small>Years shipping</small></div>
            <div><span>6</span><small>Products in production</small></div>
            <div><span>10+</span><small>Founder clients</small></div>
            <div><span>100%</span><small>Remote · async · global</small></div>
          </div>
        </div>

        <div className="polaroid" aria-hidden="false">
          <div className="tape" />
          <Image
            src="/images/main-profile-photo.png"
            alt="Uzair Saleem"
            width={280}
            height={290}
            priority
            style={{ width: "100%", aspectRatio: "1 / 1.05", objectFit: "cover" }}
          />
          <div className="cap">
            <span>Uzair, 2026</span>
            <small>Islamabad</small>
          </div>
        </div>

        <div className="margin-note m1">
          senior contractor →<br />
          (work solo or with<br />
          your product team)
        </div>
        <div className="margin-note m2">read this twice ✶</div>
      </section>

      {/* Index */}
      <div className="rule" id="work">
        <h2>§ I &nbsp; Index of work, by ship date</h2>
        <div className="right">Pages 02 – 07</div>
      </div>
      <ol className="index">
        {PROJECTS.map((p, i) => (
          <li key={p.no} className="row">
            <span className="no">{p.no}</span>
            <span>
              <span className="name">{p.name}</span>
              <span className={`tag${p.statusType === "client" ? " client" : ""}`}>
                // {p.status.toLowerCase()}
              </span>
            </span>
            <span className="dot" />
            <span className="pg">p. 0{i + 2}</span>
          </li>
        ))}
      </ol>

      {/* Project entries */}
      {PROJECTS.map((p) => (
        <article key={p.no} className="entry">
          <div className="stamp">
            <span className={`status ${p.statusType === "shipped" ? "shipped" : p.statusType === "client" ? "client" : ""}`}>
              {p.no} / {p.status}
            </span>
            <span className="date">{p.date}</span>
            <span className={`hand${p.handNoteColor === "red" ? " red" : ""}`}>
              {p.handNote.split("\n").map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </span>
          </div>

          <div className="body">
            <h3>
              <a href={p.live} target="_blank" rel="noopener noreferrer">
                {p.name} <span className="url-bit">↗ {p.url}</span>
              </a>
            </h3>
            <p className="sub">
              {p.description.split(new RegExp(`(${p.highlight})`)).map((part, i) =>
                part === p.highlight ? (
                  <span key={i} className="hl">{part}</span>
                ) : (
                  <span key={i}>{part}</span>
                ),
              )}
            </p>
            <div className="stack">
              {p.stack.map((s) => <span key={s}>{s}</span>)}
            </div>
            <a href={p.caseStudy} target="_blank" rel="noopener noreferrer" className="more">
              Open case study
            </a>
          </div>

          <div className="preview">
            <figure className="frame" style={{ transform: p.no === "002" ? "rotate(1.2deg)" : p.no === "003" ? "rotate(-2deg)" : "rotate(-1.4deg)" }}>
              <a href={p.live} target="_blank" rel="noopener noreferrer">
                <Image
                  src={p.image}
                  alt={`${p.name} screenshot`}
                  width={400}
                  height={250}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </a>
              <figcaption>
                <span>{p.figCaption}</span>
                <span>{p.figNumber}</span>
              </figcaption>
            </figure>
            {p.cornerNote && <div className="note n1">{p.cornerNote}</div>}
          </div>
        </article>
      ))}

      {/* Operating notes */}
      <div className="rule">
        <h2>§ II &nbsp; Operating notes — what hiring me actually looks&nbsp;like</h2>
        <div className="right">p. 08</div>
      </div>
      <section className="notes">
        <div className="n">
          <div className="no">i</div>
          <h3>End-to-end<br />ownership.</h3>
          <p>
            Architecture, backend, frontend, infra, deploys. Six production SaaS shipped — sometimes solo, sometimes alongside a small product team. I think in products, not tickets.
          </p>
          <div className="ann">one head,<br />the whole product ✶</div>
        </div>
        <div className="n">
          <div className="no">ii</div>
          <h3>Correctness<br />first.</h3>
          <p>
            MRR math that matches the bank account. Integer cents. Idempotent webhooks. The bar is the numbers being right, not just the UI looking right.
          </p>
          <div className="ann">numbers that<br />hold up under diligence</div>
        </div>
        <div className="n">
          <div className="no">iii</div>
          <h3>AI as<br />leverage.</h3>
          <p>
            AI in the loop daily — overnight refactors, test backfill, brief-driven feature work. Not as a crutch, as leverage. I still own the architecture and the decisions.
          </p>
          <div className="ann">leverage,<br />not a crutch —</div>
        </div>
      </section>

      {/* Voices / Testimonials */}
      <div className="rule">
        <h2>§ III &nbsp; Voices — what founders say</h2>
        <div className="right">p. 09</div>
      </div>
      <section className="voices">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name}>
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <b>{t.name}</b>
              {t.role}<br />
              {t.company}
            </figcaption>
          </figure>
        ))}
      </section>

      {/* Stack ledger */}
      <div className="rule">
        <h2>§ IV &nbsp; Tools, with hands-on hours</h2>
        <div className="right">p. 10</div>
      </div>
      <section className="ledger">
        <ul className="list">
          {STACK_ITEMS.map((s) => (
            <li key={s.name}>
              <b>{s.name}</b>
              <i>{s.note}</i>
            </li>
          ))}
        </ul>
        <div className="aside">
          Tools are interchangeable — the thinking isn&apos;t. I pick the boring option that holds up under load. If the right answer is <b>not</b> the trendy one, that&apos;s the answer.
          <br /><br />
          Available for <span className="red">B2B SaaS</span>, marketplaces, Stripe-heavy work, and legacy migrations.
        </div>
      </section>

      {/* Writing */}
      <div className="rule" id="writing">
        <h2>§ V &nbsp; Field notes on AI agents</h2>
        <div className="right">p. 11</div>
      </div>
      <div className="posts">
        {POSTS.map((p, i) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="post">
            <span className="no">0{i + 1}</span>
            <div>
              <div className="post-title">{p.title}</div>
              <p className="excerpt">{p.excerpt}</p>
            </div>
            <span className="pg">{p.tag} · {p.readTime} →</span>
          </Link>
        ))}
      </div>

      {/* Memo / About */}
      <div className="rule" id="about">
        <h2>§ VI &nbsp; Memo, addressed to the reader</h2>
        <div className="right">p. 12</div>
      </div>
      <section className="memo">
        <dl className="head">
          <dt>To:</dt><dd>Whoever opened this page</dd>
          <dt>From:</dt><dd>Uzair Saleem, Islamabad PK</dd>
          <dt>Re:</dt><dd>The person behind the code</dd>
        </dl>
        <div className="body">
          <p>
            I&apos;m Uzair — a Full-Stack Engineer in Islamabad. Five years building B2B SaaS end-to-end. Currently at <em>Rocket Devs</em>, leading client builds alongside a small product team. Previously Design&amp;Desktop and Apifiny, where I shipped weekly with product teams across three years.
          </p>
          <p>
            I started coding in 2020 because a friend needed a website and couldn&apos;t afford an agency. That turned into a side hustle, then contracts, then shipping production SaaS for founders — sometimes as the lead engineer on a build, sometimes alongside a small product team. The work I care about most is the part that doesn&apos;t make demo reels but does make customers stay.
          </p>
          <p>
            BS in Artificial Intelligence (SZABIST Islamabad, 2018–2022). Open to senior full-stack roles — remote, any reasonable timezone overlap.
          </p>
        </div>
        <div className="sig">
          <div className="signature">Uzair.</div>
          <div className="stamp-circle">
            Logged<br />·<br />2026<br />·<br />field notes
          </div>
        </div>
      </section>

      {/* Envelope / Contact */}
      <div className="rule" id="contact">
        <h2>§ VII &nbsp; If this is the right kind of work, write</h2>
        <div className="right">p. 14</div>
      </div>
      <section className="envelope">
        <div className="e1">
          <div>
            <h2>Building <em>something?</em><br />Let&apos;s ship it.</h2>
            <p>
              Open to senior full-stack roles and select consulting. Replies inside 24h.
            </p>
          </div>
          <a className="cta" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Book a 30-min intro call <span className="arr">↗</span>
          </a>
        </div>
        <div className="e2">
          <div className="stamp-area">Postage<br />·<br />Paid<br />·<br />Reader</div>
          <div className="addr">
            <b>Uzair Saleem</b>
            Islamabad, Pakistan<br />
            UTC+5 — replies within 24h<br /><br />
            <a href={MAILTO}>{EMAIL}</a><br />
            <a href={RESUME} target="_blank" rel="noopener noreferrer">Download résumé (PDF)</a><br />
            <a href="https://www.linkedin.com/in/uzair-saleem-5a399825a/" target="_blank" rel="noopener noreferrer">linkedin / uzair-saleem</a><br />
            <a href="https://github.com/developeruzairsaleem" target="_blank" rel="noopener noreferrer">github / developeruzairsaleem</a>
          </div>
          <small>Filed under: ship</small>
        </div>
      </section>

      {/* Footer */}
      <footer className="foot">
        <div>© {new Date().getFullYear()} &nbsp;·&nbsp; Set in Instrument Serif &amp; JetBrains Mono</div>
        <div className="pg-num">14</div>
        <div>
          <a href="https://github.com/developeruzairsaleem/personal-portfolio" target="_blank" rel="noopener noreferrer">Source</a>
          &nbsp;·&nbsp; End of issue.
        </div>
      </footer>
    </main>
  );
}

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
    no: "01",
    type: "Client work",
    status: "Live",
    year: "2025–2026",
    url: "indiecator.com",
    live: "https://indiecator.com",
    name: "Indiecator.",
    description:
      "Baremetrics-style revenue analytics for indie SaaS founders. Connect Stripe and get every MRR movement — New, Expansion, Contraction, Churn — classified correctly under outages, retries, trials, and proration.",
    highlight: "Event-sourced from day one",
    stack: ["Next.js 16", "Node.js", "Prisma", "Stripe Connect"],
    image: "/images/indiecator.png",
    metric: "From kickoff to production in ~12 weeks",
    caseStudy: "/case-studies/indiecator.pdf",
  },
  {
    no: "02",
    type: "Client work",
    status: "Live",
    year: "2025",
    url: "diffed.gg",
    live: "https://diffed.gg",
    name: "Diffed.gg.",
    description:
      "Two-sided gaming services marketplace. End-to-end transaction lifecycle in one product — Stripe + PayPal checkout, Socket.IO chat, integer-cent wallet payouts, screenshot verification.",
    highlight: "Full marketplace in one quarter",
    stack: ["Next.js 15", "Socket.IO", "Stripe", "Prisma"],
    image: "/images/diffed.png",
    metric: "Full marketplace shipped end-to-end in one quarter",
    caseStudy: "/case-studies/diffed.pdf",
  },
  {
    no: "03",
    type: "Client work",
    status: "Live · NJ",
    year: "2026",
    url: "satraj.inc",
    live: "https://satraj.inc",
    name: "Sat-Raj.",
    description:
      "Fuel distribution platform for a 30-year-old NJ wholesaler. Replaced 39 hand-edited Google Sheets tabs with a multi-tenant pricing engine, BOL ingestion pipeline, and invoice generator.",
    highlight: "45–60 min → 90 sec",
    stack: ["Next.js 16", "Prisma", "AWS", "Samsara API"],
    image: "/images/satraj.png",
    metric: "Cut daily pricing run from 60 min → 90 sec · live to 24 customers",
    caseStudy: "/case-studies/satraj.pdf",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Uzair replaced 30 years of spreadsheet workflow with software the whole team trusts. The numbers match — first time, every time. He owned every layer of the build.",
    name: "Robbie Multani",
    role: "Co-founder, Sat-Raj Inc.",
    company: "Voorhees, NJ",
  },
  {
    quote:
      "Best engineering hire I've made for the product. He didn't just build a dashboard — he rebuilt how we think about revenue. The architecture doc is now how I explain our business to investors.",
    name: "Omar Al Watan",
    role: "Founder, Indiecator",
    company: "Remote · MENA",
  },
  {
    quote:
      "Three contractors before Uzair, none shipped. He delivered a production marketplace in one quarter — checkout, wallets, chat, admin tooling. Zero hand-holding, money math just works.",
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

const STACK_GROUPS = [
  { no: "01", cat: "Application", items: ["Next.js 15/16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"], notes: "Production" },
  { no: "02", cat: "Services", items: ["Node.js", "Express", "Prisma", "PostgreSQL", "Supabase", "REST APIs"], notes: "Daily" },
  { no: "03", cat: "Commerce", items: ["Stripe Connect", "PayPal", "Webhooks", "Integer-cent accounting"], notes: "Subs · payouts" },
  { no: "04", cat: "Infra & Realtime", items: ["AWS (Amplify, RDS, SES, S3)", "Vercel", "Socket.IO", "NextAuth"], notes: "As needed" },
];

function Clock() {
  const [time, setTime] = useState<string>("—:—");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Asia/Karachi",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
}

export default function Home() {
  return (
    <main>
      {/* Top index */}
      <div className="swiss-grid" style={{ padding: "24px 56px 18px", borderBottom: "1px solid var(--rule)" }}>
        <div className="mono" style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span><b style={{ color: "var(--ink)", fontWeight: 500 }}>Uzair Saleem</b> · Index · v.05</span>
          <span><span style={{ display: "inline-block", width: 8, height: 8, background: "var(--accent)", marginRight: 6, verticalAlign: 1 }} /> Available — Q3 2026 onward</span>
          <span><Clock /> Islamabad UTC+5</span>
        </div>
      </div>

      {/* Table of contents */}
      <div className="swiss-grid" style={{ padding: "18px 56px 36px", borderBottom: "1px solid var(--rule)" }}>
        <ol className="mono" style={{ gridColumn: "1 / -1", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 24 }}>
          <li><b style={{ color: "var(--accent)", fontWeight: 500, marginRight: 10 }}>01</b><a href="#hero" style={{ borderBottom: "1px solid transparent", paddingBottom: 1 }}>Statement</a></li>
          <li><b style={{ color: "var(--accent)", fontWeight: 500, marginRight: 10 }}>02</b><a href="#work">Selected Work</a></li>
          <li><b style={{ color: "var(--accent)", fontWeight: 500, marginRight: 10 }}>03</b><a href="#how">How I Work</a></li>
          <li><b style={{ color: "var(--accent)", fontWeight: 500, marginRight: 10 }}>04</b><a href="#stack">Stack</a></li>
          <li><b style={{ color: "var(--accent)", fontWeight: 500, marginRight: 10 }}>05</b><a href="#writing">Writing</a></li>
          <li><b style={{ color: "var(--accent)", fontWeight: 500, marginRight: 10 }}>06</b><a href="#contact">Contact</a></li>
        </ol>
      </div>

      {/* HERO */}
      <section className="swiss-grid" id="hero" style={{ padding: "140px 56px 96px" }}>
        <h1 className="hero-h1" style={{ gridColumn: "1 / span 12" }}>
          <span className="light">I&nbsp;ship</span><br />
          B2B SaaS<br />
          <span className="light">end to</span> <span className="acc">end.</span>
        </h1>

        <dl className="mono" style={{ gridColumn: "1 / span 4", marginTop: 60, lineHeight: 1.7 }}>
          <dt style={{ color: "var(--accent)", fontWeight: 500 }}>— Role</dt>
          <dd style={{ color: "var(--ink)", marginBottom: 6 }}>Senior Full-Stack Engineer</dd>
          <dt style={{ color: "var(--accent)", fontWeight: 500 }}>— Stack</dt>
          <dd style={{ color: "var(--ink)", marginBottom: 6 }}>Next.js · TypeScript · Postgres · AWS</dd>
          <dt style={{ color: "var(--accent)", fontWeight: 500 }}>— Based</dt>
          <dd style={{ color: "var(--ink)", marginBottom: 6 }}>Islamabad, PK · UTC+5</dd>
          <dt style={{ color: "var(--accent)", fontWeight: 500 }}>— Status</dt>
          <dd style={{ color: "var(--ink)", marginBottom: 6 }}>Open to senior roles · Q3 2026</dd>
        </dl>

        <div style={{ gridColumn: "6 / span 5", marginTop: 60, display: "flex", flexDirection: "column", gap: 24 }}>
          <p className="hero-lede" style={{ maxWidth: "36ch" }}>
            <b>Senior Full-Stack Engineer.</b> I ship production SaaS for founders, <span className="h">at the speed of a small team</span>. Five years. Six live products.
          </p>
          <div style={{ position: "relative", width: 200, height: 240, marginTop: 12 }}>
            <Image
              src="/images/main-profile-photo.png"
              alt="Uzair Saleem, Senior Full-Stack Engineer"
              fill
              priority
              className="object-cover"
              style={{ filter: "grayscale(1) contrast(1.04)", border: "1px solid var(--rule)" }}
              sizes="200px"
            />
          </div>
        </div>

        <div style={{ gridColumn: "1 / -1", borderTop: "1px solid var(--rule)", marginTop: 60, paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "baseline" }} className="mono">
          <span>↓ Selected work — three records</span>
          <span><b style={{ color: "var(--accent)", fontWeight: 500 }}>01</b> · 06</span>
        </div>

        {/* Numbers row */}
        <div style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginTop: 36, borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
          {[
            { v: "5", label: "Years shipping" },
            { v: "6", label: "Products in production" },
            { v: "10+", label: "Founder clients" },
            { v: "100%", label: "Remote · async · global" },
          ].map((s, i, arr) => (
            <div key={s.label} style={{ padding: "28px 0", borderRight: i < arr.length - 1 ? "1px solid var(--rule)" : "none" }}>
              <div className="stat-v"><em>{s.v}</em></div>
              <div className="mono-sm" style={{ marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="swiss-grid">
        <SectionHeader id="work" no="02" lbl="Selected work" title="Three things, " emphasis="shipped" page="02 / 06" />

        {PROJECTS.map((p) => (
          <article key={p.no} style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", columnGap: 24, padding: "38px 0", borderBottom: "1px solid var(--rule)", alignItems: "start" }}>
            <div className="proj-no" style={{ gridColumn: "1 / span 1" }}>{p.no}</div>

            <dl className="mono" style={{ gridColumn: "2 / span 3", lineHeight: 1.7 }}>
              <dt style={{ color: "var(--accent)" }}>Type</dt>
              <dd>{p.type}</dd>
              <dt style={{ color: "var(--accent)", marginTop: 8 }}>Status</dt>
              <dd style={{ color: "var(--accent)" }}>● {p.status}</dd>
              <dt style={{ color: "var(--accent)", marginTop: 8 }}>Year</dt>
              <dd>{p.year}</dd>
              <dt style={{ color: "var(--accent)", marginTop: 8 }}>URL</dt>
              <dd>{p.url}</dd>
            </dl>

            <div style={{ gridColumn: "5 / span 5", display: "flex", flexDirection: "column", gap: 14 }}>
              <h3 className="proj-h3">
                <a href={p.live} target="_blank" rel="noopener noreferrer">{p.name}</a>
              </h3>
              <p className="proj-p" style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: 400, fontSize: 17, lineHeight: 1.5, letterSpacing: "-0.005em", maxWidth: "48ch", color: "var(--ink)" }}>
                {p.description.split(new RegExp(`(${p.highlight})`))[0]}
                <mark>{p.highlight}</mark>
                {p.description.split(new RegExp(`(${p.highlight})`))[2] || ""}
              </p>
              <div className="proj-stack">
                {p.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
              <div className="mono" style={{ color: "var(--ink)", marginTop: 4 }}>
                <span style={{ color: "var(--accent)" }}>→</span> {p.metric}
              </div>
              <a href={p.caseStudy} target="_blank" rel="noopener noreferrer" className="mono-link" style={{ alignSelf: "flex-start", marginTop: 4 }}>
                Read case study →
              </a>
            </div>

            <figure style={{ gridColumn: "10 / span 3" }}>
              <a href={p.live} target="_blank" rel="noopener noreferrer">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={400}
                  height={250}
                  style={{ width: "100%", display: "block", filter: "grayscale(1) contrast(1.02)", border: "1px solid var(--rule)" }}
                />
              </a>
              <figcaption className="mono-sm" style={{ marginTop: 6, display: "flex", justifyContent: "space-between" }}>
                <span>Fig. {p.no}</span>
                <span>{p.url}</span>
              </figcaption>
            </figure>
          </article>
        ))}

        {/* Quote band */}
        <div className="quote-band" style={{ gridColumn: "1 / -1", padding: "96px 0 0" }}>
          <blockquote>Not as a crutch — <em>as leverage.</em></blockquote>
          <cite className="mono" style={{ display: "block", marginTop: 24, fontStyle: "normal" }}>— On AI-assisted development</cite>
        </div>

        {/* HOW I WORK */}
        <SectionHeader id="how" no="03" lbl="How I work" title="Three " emphasis="principles" page="03 / 06" />

        <section style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--rule)", marginTop: 60 }}>
          {[
            { no: "01", h: "End-to-end ownership.", p: "Architecture, backend, frontend, infra, deploys. I think in products, not tickets. Six production SaaS shipped — sometimes solo, sometimes alongside a small product team." },
            { no: "02", h: "Correctness first.", p: "MRR math that matches the bank account. Integer cents. Idempotent webhooks. The bar is the numbers being right." },
            { no: "03", h: "AI as leverage.", p: "AI in the loop daily — overnight refactors, test backfill, brief-driven feature work. Not as a crutch, as leverage. I still own the architecture and the decisions." },
          ].map((pp, i, arr) => (
            <div key={pp.no} style={{ padding: "48px 28px 36px", borderRight: i < arr.length - 1 ? "1px solid var(--rule)" : "none" }}>
              <div className="principle-no" style={{ marginBottom: 18 }}>{pp.no}</div>
              <h3 className="principle-h3">{pp.h}</h3>
              <p style={{ marginTop: 16, fontSize: 15.5, lineHeight: 1.55, maxWidth: "34ch", color: "var(--ink)" }}>{pp.p}</p>
            </div>
          ))}
        </section>

        {/* STACK */}
        <SectionHeader id="stack" no="04" lbl="Stack" title="Tools, " emphasis="hands-on hours" page="04 / 06" />

        <div style={{ gridColumn: "1 / -1", borderTop: "1px solid var(--rule)", marginTop: 60 }}>
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr 120px", gap: 24, padding: "18px 0", borderBottom: "1px solid var(--rule)", alignItems: "baseline" }}>
            <span className="mono" style={{ color: "var(--accent)" }}>№</span>
            <span className="mono" style={{ letterSpacing: "0.18em" }}>Category</span>
            <span className="stack-list">Tools</span>
            <span className="mono" style={{ textAlign: "right" }}>Notes</span>
          </div>
          {STACK_GROUPS.map((g) => (
            <div key={g.no} style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr 120px", gap: 24, padding: "18px 0", borderBottom: "1px solid var(--hair)", alignItems: "baseline" }}>
              <span className="mono" style={{ color: "var(--accent)" }}>{g.no}</span>
              <span className="mono" style={{ letterSpacing: "0.18em" }}>{g.cat}</span>
              <span className="stack-list">
                {g.items.map((t) => <span key={t}>{t}</span>)}
              </span>
              <span className="mono" style={{ textAlign: "right" }}>{g.notes}</span>
            </div>
          ))}
        </div>

        {/* TESTIMONIALS */}
        <SectionHeader id="voices" no="—" lbl="Voices" title="From founders " emphasis="I've shipped for" page="04 / 06" />

        <div style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--rule)", marginTop: 60 }}>
          {TESTIMONIALS.map((t, i, arr) => (
            <figure key={t.name} style={{ padding: "48px 28px 36px", borderRight: i < arr.length - 1 ? "1px solid var(--rule)" : "none", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 280 }}>
              <blockquote style={{ fontFamily: "var(--font-bricolage), sans-serif", fontSize: 19, lineHeight: 1.45, letterSpacing: "-0.012em", color: "var(--ink)" }}>
                <span style={{ color: "var(--accent)", marginRight: 4 }}>&ldquo;</span>{t.quote}<span style={{ color: "var(--accent)", marginLeft: 2 }}>&rdquo;</span>
              </blockquote>
              <figcaption className="mono" style={{ marginTop: 24, lineHeight: 1.7 }}>
                <div style={{ color: "var(--accent)" }}>— {t.name}</div>
                <div style={{ color: "var(--ink)" }}>{t.role}</div>
                <div>{t.company}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* WRITING */}
        <SectionHeader id="writing" no="05" lbl="Writing" title="Notes on " emphasis="AI agents" page="05 / 06" />

        <div style={{ gridColumn: "1 / -1", borderTop: "1px solid var(--rule)", marginTop: 60 }}>
          {POSTS.map((post, i, arr) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <article style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr 120px", gap: 24, padding: "28px 0", borderBottom: i < arr.length - 1 ? "1px solid var(--hair)" : "1px solid var(--rule)", alignItems: "baseline" }}>
                <span className="mono" style={{ color: "var(--accent)" }}>0{i + 1}</span>
                <span className="mono">{post.tag} · {post.date}</span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: 500, fontSize: 24, lineHeight: 1.1, letterSpacing: "-0.018em", maxWidth: "30ch", fontVariationSettings: "'opsz' 32, 'wght' 500" }}>
                    {post.title}
                  </h3>
                  <p style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.5, color: "var(--ink)", maxWidth: "40ch" }}>
                    {post.excerpt}
                  </p>
                </div>
                <span className="mono" style={{ textAlign: "right", color: "var(--accent)" }}>{post.readTime} →</span>
              </article>
            </Link>
          ))}
        </div>

        {/* ABOUT */}
        <SectionHeader id="about" no="06" lbl="About" title="The person " emphasis="behind the code" page="06 / 06" />

        <div style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24, marginTop: 60, paddingTop: 60, borderTop: "1px solid var(--rule)" }}>
          <div className="mono" style={{ gridColumn: "1 / span 4", lineHeight: 1.7 }}>
            <b style={{ display: "block", color: "var(--accent)", fontWeight: 500 }}>— Name</b>
            <span style={{ color: "var(--ink)" }}>Uzair Saleem</span>
            <b style={{ display: "block", color: "var(--accent)", fontWeight: 500, marginTop: 8 }}>— From</b>
            <span style={{ color: "var(--ink)" }}>Islamabad, Pakistan</span>
            <b style={{ display: "block", color: "var(--accent)", fontWeight: 500, marginTop: 8 }}>— Currently</b>
            <span style={{ color: "var(--ink)" }}>Rocket Devs · senior contractor</span>
            <b style={{ display: "block", color: "var(--accent)", fontWeight: 500, marginTop: 8 }}>— Previously</b>
            <span style={{ color: "var(--ink)" }}>Design&amp;Desktop · Apifiny</span>
            <b style={{ display: "block", color: "var(--accent)", fontWeight: 500, marginTop: 8 }}>— Studied</b>
            <span style={{ color: "var(--ink)" }}>BS · Artificial Intelligence</span>
            <b style={{ display: "block", color: "var(--accent)", fontWeight: 500, marginTop: 8 }}>— Working</b>
            <span style={{ color: "var(--ink)" }}>Remote · async · UTC+5</span>
          </div>
          <div className="about-body" style={{ gridColumn: "6 / span 7" }}>
            <p>I&apos;m Uzair — a Full-Stack Engineer in Islamabad. Five years building B2B SaaS end-to-end. Currently at <b style={{ fontWeight: 600 }}>Rocket Devs</b>, leading client builds alongside a small product team.</p>
            <p style={{ marginTop: 18 }}>I started coding in 2020 because a friend needed a website and couldn&apos;t afford an agency. That turned into a side hustle, then contracts, then shipping production SaaS for founders — <em>sometimes as the lead engineer on a build, sometimes alongside a small product team</em>.</p>
            <p style={{ marginTop: 18 }}>The work I care about most is the part that doesn&apos;t make demo reels but does make customers stay.</p>
            <div className="mono" style={{ marginTop: 30, fontVariationSettings: "initial" }}>— U. Saleem, Islamabad, May 2026</div>
          </div>
        </div>

        {/* CONTACT */}
        <section className="contact" id="contact" style={{ gridColumn: "1 / -1", padding: "120px 0 24px", textAlign: "left", borderTop: "1px solid var(--rule)", marginTop: 60 }}>
          <div className="mono" style={{ letterSpacing: "0.18em", marginBottom: 36 }}>— § 06 — Get in touch</div>
          <h2 className="contact-h2">
            Building <em>something?</em><br />
            Let&apos;s <em>ship it.</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24, marginTop: 60, alignItems: "end" }}>
            <div style={{ gridColumn: "1 / span 6" }}>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  background: "var(--accent)",
                  color: "var(--ink)",
                  textDecoration: "none",
                  padding: "22px 24px",
                  fontFamily: "var(--font-plex-mono), monospace",
                  fontSize: 13,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  transition: "background .2s, color .2s",
                }}
              >
                Book a 30-min intro call
                <span style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: 400, fontSize: 28, letterSpacing: "-0.02em", textTransform: "none" }}>↗</span>
              </a>
            </div>
            <div style={{ gridColumn: "8 / span 5", fontFamily: "var(--font-plex-mono), monospace", fontSize: 12.5, letterSpacing: "0.06em", color: "var(--soft)", lineHeight: 2 }}>
              Open to senior full-stack roles and select consulting. <br />
              <a href={MAILTO} style={{ color: "var(--ink)", textDecoration: "none", borderBottom: "1.5px solid var(--accent)" }}>{EMAIL}</a><br />
              <a href={RESUME} target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink)", textDecoration: "none", borderBottom: "1.5px solid var(--accent)" }}>Download résumé (PDF)</a><br />
              <a href="https://www.linkedin.com/in/uzair-saleem-5a399825a/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink)", textDecoration: "none", borderBottom: "1.5px solid var(--accent)" }}>linkedin.com/in/uzair-saleem</a><br />
              <a href="https://github.com/developeruzairsaleem" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink)", textDecoration: "none", borderBottom: "1.5px solid var(--accent)" }}>github.com/developeruzairsaleem</a><br />
              Replies inside 24h · UTC+5
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", marginTop: 14, borderTop: "1px solid var(--rule)", fontFamily: "var(--font-plex-mono), monospace", fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--soft)" }}>
          <span><b style={{ color: "var(--ink)", fontWeight: 500 }}>© {new Date().getFullYear()}</b> · Uzair Saleem · Index v.05</span>
          <span>
            <a href="https://github.com/developeruzairsaleem/personal-portfolio" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>Source on GitHub</a>
            <span style={{ margin: "0 8px" }}>·</span>
            Set in Bricolage Grotesque &amp; IBM Plex Mono
          </span>
          <span>End.</span>
        </footer>
      </section>
    </main>
  );
}

function SectionHeader({ id, no, lbl, title, emphasis, page }: { id: string; no: string; lbl: string; title: string; emphasis: string; page: string }) {
  return (
    <div id={id} style={{ padding: "96px 0 18px", borderBottom: "1px solid var(--rule)", gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "1fr auto 2fr 1fr", alignItems: "end", columnGap: 24 }}>
      <div className="sec-no">{no}</div>
      <div className="mono" style={{ letterSpacing: "0.18em" }}>{lbl}</div>
      <h2 className="sec-h2">{title}<em>{emphasis}</em></h2>
      <div className="mono" style={{ letterSpacing: "0.18em", textAlign: "right" }}>pp. {page}</div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

const EMAIL = "uzairsaleemdev@gmail.com";
const MAILTO = `mailto:${EMAIL}`;
const RESUME = "/uzair-saleem-resume.pdf";
const CALENDLY = "https://calendly.com/uzairsaleemdev/30min";
const GITHUB = "https://github.com/developeruzairsaleem";
const LINKEDIN = "https://www.linkedin.com/in/uzair-saleem-5a399825a/";

type Project = {
  idx: string;
  status: "live" | "shipped" | "client";
  statusText: string;
  name: string;
  href?: string;
  ext?: string;
  role: string;
  lead: ReactNode;
  callLabel: string;
  call: ReactNode;
  stack: string[];
  image?: string;
  cap?: [string, string];
};

const PROJECTS: Project[] = [
  {
    idx: "001",
    status: "live",
    statusText: "Live",
    name: "Indiecator",
    href: "https://indiecator.com",
    ext: "indiecator.com",
    role: "Lead · Rocket Devs · 2025",
    lead: (
      <>
        Revenue analytics for subscription businesses on Stripe and Paddle — MRR, ARR, retention,
        expansion / contraction / churn, with <b>every number drillable to the customer that moved
        it</b>. Three idempotent ingestion flows (live webhooks, a 24-hour catch-up cron, a 2-year
        backfill) feed a multi-tenant Postgres ledger behind row-level security, with per-day ECB
        conversion across 30 currencies and Redis-cached reads.
      </>
    ),
    callLabel: "The hard call",
    call: (
      <>
        Started event-sourced. Stripe only retains 3 months of event history, so historical MRR
        couldn&apos;t be rebuilt from events alone. Switched to an invoice ledger — invoices live
        forever — then merged the two: <b>invoices carry the long tail, live events catch
        proration-accurate plan changes</b> the moment they happen.
      </>
    ),
    stack: ["Next.js", "Node.js", "Prisma", "Postgres / RLS", "Redis", "Stripe", "Paddle"],
    image: "/images/indiecator.png",
    cap: ["indiecator.com", "fig. 1"],
  },
  {
    idx: "002",
    status: "client",
    statusText: "Client · live",
    name: "Sat-Raj",
    href: "https://satraj.inc",
    ext: "satraj.inc",
    role: "Lead · Rocket Devs · 2025",
    lead: (
      <>
        Operations platform for a 30-year-old fuel wholesaler. Replaced 39 hand-edited spreadsheets;
        the daily pricing-and-invoicing run dropped from <b>45–60 minutes to under 90 seconds</b>.
        Per-customer margins, generated price emails, idempotent 3-hour jobs.
      </>
    ),
    callLabel: "The messy part",
    call: (
      <>
        Three sources disagreed on how much fuel moved — Samsara truck telematics, the supplier&apos;s
        BP FTP feed, and delivered gallons. Reconciled them, then fixed the address chaos (drivers
        typed the same stop ten ways) with a <b>3-gate system</b>: dispatch dropdowns, pre-filled
        driver forms, and a Samsara geofence fallback that maps GPS to the right customer. A custom
        .NET app bridges invoices into the team&apos;s on-prem QuickBooks.
      </>
    ),
    stack: ["Next.js", "Node.js", "Postgres", "Samsara API", ".NET", "AWS"],
    image: "/images/satraj.png",
    cap: ["satraj.inc", "fig. 2"],
  },
  {
    idx: "003",
    status: "shipped",
    statusText: "Shipped",
    name: "Diffed.gg",
    href: "https://diffed-swart.vercel.app/",
    ext: "diffed.gg",
    role: "Senior eng · Apifiny · 2 mo, team of 3",
    lead: (
      <>
        Three-sided marketplace where players buy rank-progression help from vetted experts. Stripe +
        PayPal multi-currency wallet with day-of-transaction FX, Socket.IO order chat, fee-split
        payouts, screenshot verification.
      </>
    ),
    callLabel: "The core abstraction",
    call: (
      <>
        Every game ranks players differently — some by tiered divisions (Diamond IV up to
        Grandmaster), some by straight ranks. Built a config-driven engine so admins onboard any game
        and its rank structure without code. The hard part: making a start and target rank comparable
        <i> across</i> games, so pricing and matching worked at all.
      </>
    ),
    stack: ["Next.js", "Node.js", "Socket.IO", "Stripe", "PayPal", "TypeScript"],
    image: "/images/diffed.png",
    cap: ["diffed.gg", "fig. 3"],
  },
  {
    idx: "004",
    status: "client",
    statusText: "Client · DE",
    name: "Design&Desktop",
    role: "Full-stack · 2025 · Germany",
    lead: (
      <>
        Two builds for a German product studio: a browser-based AI reel generator (voice-cloned
        narration) and a parallel scraping platform for restaurant data.
      </>
    ),
    callLabel: "The performance work",
    call: (
      <>
        The reel renderer ran FFmpeg.wasm in the browser, so render times swung 2–10 min across
        devices. Multithreading bought ~50%; moving to MediaBunny cut render time <b>~90%</b>. On the
        scraper, target sites blocked direct HTTP, so I ran a pool of 5 parallel headless Chromium
        workers — <b>~80% more throughput</b> than crawling one at a time.
      </>
    ),
    stack: ["Next.js", "Node.js", "FFmpeg.wasm → MediaBunny", "Headless Chromium", "Supabase"],
  },
];

type Role = {
  when: string;
  dur?: string;
  role: string;
  co: string;
  where: string;
  note: string;
  tags: string[];
};

const EXPERIENCE: Role[] = [
  {
    when: "Jul 2025 — present",
    role: "Full-stack engineer",
    co: "Rocket Devs",
    where: "Remote · US / EU / MENA",
    note: "Lead engineer on Indiecator and Sat-Raj. Owned schema, ingestion, backend, and deploy end to end. Set the architecture; mentor 2 engineers.",
    tags: ["TypeScript", "Node", "Postgres", "Stripe", "Redis"],
  },
  {
    when: "Jan — Jul 2025",
    role: "Full-stack engineer",
    co: "Design&Desktop",
    where: "Remote · Germany",
    note: "Rebuilt a browser render pipeline (FFmpeg.wasm → MediaBunny, ~90% faster) and a parallel headless-Chromium scraper (~80% more throughput).",
    tags: ["Next.js", "FFmpeg.wasm", "MediaBunny", "Chromium"],
  },
  {
    when: "Jan 2022 — Dec 2024",
    role: "Engineer → Senior Engineer",
    co: "Apifiny",
    where: "Islamabad, PK",
    note: "Promoted to senior in 18 months. Shipped Diffed.gg end to end; built the config-driven ranking engine and the multi-currency wallet. Owned schema and admin tooling; mentored 2 juniors.",
    tags: ["Next.js", "Node", "Postgres", "Socket.IO", "Stripe"],
  },
];

const PRINCIPLES = [
  {
    n: "01",
    h: "Correctness first",
    p: "Money in integer cents. Idempotent jobs you can re-run without double-counting. Aggregates that reconcile to source. Shipped isn't the bar — correct is.",
  },
  {
    n: "02",
    h: "End to end",
    p: "Schema, backend, frontend, infra, and the integrations nobody wants — FTP feeds, on-prem QuickBooks, telematics APIs. I own the whole path, not a ticket.",
  },
  {
    n: "03",
    h: "Design for the failure modes",
    p: "The interesting work is what happens when input arrives late, duplicated, or wrong. I build for that case first, not the happy path.",
  },
  {
    n: "04",
    h: "AI in the loop",
    p: "Claude Code for the boilerplate and the refactors. The architecture and the trade-offs stay mine.",
  },
];

const LEDGER = [
  { h: "Languages", items: [["TypeScript", "strict"], ["JavaScript", ""], ["SQL", ""]] },
  { h: "Frontend", items: [["Next.js", "App Router"], ["React", "19"], ["Tailwind", ""], ["Framer Motion", ""]] },
  { h: "Backend", items: [["Node.js", ""], ["Express", ""], ["Prisma", ""], ["REST · webhooks", ""], ["Socket.IO", ""]] },
  { h: "Data", items: [["PostgreSQL", "indexes"], ["Supabase", "RLS"], ["Redis", ""], ["MongoDB", ""]] },
  { h: "Payments · external", items: [["Stripe", "Connect"], ["Paddle · PayPal", ""], ["Samsara", ""], ["QuickBooks", "bridge"], ["ECB FX", ""]] },
  { h: "Infra", items: [["AWS", "EC2·RDS·S3"], ["Cloudflare · Vercel", ""], ["Docker", ""], ["GitHub Actions", ""]] },
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.26 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function usePktClock() {
  const [t, setT] = useState("--:--");
  useEffect(() => {
    const tick = () =>
      setT(
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
  return t;
}

export default function Home() {
  useReveal();
  const clock = usePktClock();

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="brand">uzair-saleem</Link>
          <div className="nav-links">
            <a href="#work">work</a>
            <a href="#experience">experience</a>
            <a href="#about">about</a>
            <Link href="/blog">writing</Link>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="nav-icon" aria-label="GitHub"><GithubIcon /></a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="nav-icon" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href={RESUME} target="_blank" rel="noopener noreferrer" className="nav-cta">résumé</a>
          </div>
        </div>
      </nav>

      {/* MASTHEAD */}
      <header className="masthead">
        <div className="wrap">
          <div className="masthead-top reveal">
            <span className="kicker"><span className="live">● open</span> · remote / relocation</span>
            <span className="kicker">ISB · UTC+5 · <span id="clock">{clock}</span> PKT</span>
          </div>
          <div className="masthead-grid">
            <div className="reveal">
              <h1>I build the parts of the stack that have to be <em>exact</em>.</h1>
              <p className="lede">
                Full-stack engineer, 5 years. Payment ledgers, reconciliation across systems that
                disagree, multi-tenant data with row-level isolation. I work the failure modes:{" "}
                <b>idempotency, integer money, numbers that reconcile to source</b> — not just the
                happy path.
              </p>
              <dl className="spec">
                <div><dt>exp</dt><dd>5 yrs · production systems</dd></div>
                <div><dt>core</dt><dd>TypeScript · Node · Postgres · Stripe</dd></div>
                <div><dt>depth</dt><dd>payments · reconciliation · multi-tenant</dd></div>
                <div><dt>based</dt><dd>Islamabad · UTC+5</dd></div>
              </dl>
            </div>
            <aside className="reveal">
              <div className="portrait">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/main-profile-photo.png" alt="Uzair Saleem" />
                <div className="cap"><span>uzair saleem</span><span>ISB · PK</span></div>
              </div>
              <div className="now">
                <span className="dot" />open to full-stack roles —<br />
                remote or relocation. <b>replies in a day.</b>
              </div>
            </aside>
          </div>
        </div>
      </header>

      {/* WORK */}
      <section className="block" id="work">
        <div className="wrap">
          <div className="head reveal">
            <h2><span className="m">// 01</span> Selected work</h2>
            <span className="x">live + shipped · 04</span>
          </div>
          <div className="work">
            {PROJECTS.map((p) => (
              <article key={p.name} className="entry reveal">
                <div className="side">
                  <span className="idx">{p.idx}</span>
                  <span className={`status ${p.status}`}><span className="d" />{p.statusText}</span>
                  <span className="role">{p.role}</span>
                </div>
                <div className="main">
                  <h3>
                    {p.href ? (
                      <a href={p.href} target="_blank" rel="noopener noreferrer">{p.name}</a>
                    ) : (
                      <span className="nolink">{p.name}</span>
                    )}
                    {p.ext && <span className="ext">↗ {p.ext}</span>}
                  </h3>
                  <p className="lead">{p.lead}</p>
                  <p className="tradeoff">
                    <span className="lbl">{p.callLabel}</span>
                    {p.call}
                  </p>
                  <div className="stack">
                    {p.stack.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </div>
                {p.image ? (
                  <figure className="thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt={`${p.name} screenshot`} />
                    {p.cap && <figcaption><span>{p.cap[0]}</span><span>{p.cap[1]}</span></figcaption>}
                  </figure>
                ) : <div />}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="block alt" id="experience">
        <div className="wrap">
          <div className="head reveal">
            <h2><span className="m">// 02</span> Experience</h2>
            <span className="x">5 yrs · 3 companies</span>
          </div>
          <div className="exp">
            {EXPERIENCE.map((r) => (
              <div className="row reveal" key={r.co + r.when}>
                <span className="when">{r.when}</span>
                <div className="what">
                  <div className="role">{r.role}</div>
                  <div className="co">{r.co}</div>
                  <p>{r.note}</p>
                  <div className="tags">{r.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
                <span className="where">{r.where}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I BUILD */}
      <section className="block" id="approach">
        <div className="wrap">
          <div className="head reveal">
            <h2><span className="m">// 03</span> How I build</h2>
            <span className="x">non-negotiables</span>
          </div>
          <div className="approach-grid">
            <p className="approach-lead reveal">
              The work I&apos;m useful for is the part that <em>breaks quietly</em> when you get it
              wrong — money, reconciliation, data that has to stay consistent across tenants.
            </p>
            <div className="principles reveal stagger">
              {PRINCIPLES.map((pr) => (
                <div className="p" key={pr.n}>
                  <span className="num">{pr.n}</span>
                  <div>
                    <h4>{pr.h}</h4>
                    <p>{pr.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="block" id="stack">
        <div className="wrap">
          <div className="head reveal">
            <h2><span className="m">// 04</span> Stack</h2>
            <span className="x">what I reach for</span>
          </div>
          <div className="ledger">
            <div className="ledger-groups reveal">
              {LEDGER.map((g) => (
                <div className="g" key={g.h}>
                  <h4>{g.h}</h4>
                  <ul>
                    {g.items.map(([name, note]) => (
                      <li key={name}><span>{name}</span>{note && <i>{note}</i>}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="aside reveal">
              Tools are interchangeable. <b>The thinking isn&apos;t.</b> I reach for the boring option
              that holds up under load — and when the right answer isn&apos;t the trendy one,
              that&apos;s still the answer.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="block alt" id="about">
        <div className="wrap">
          <div className="head reveal">
            <h2><span className="m">// 05</span> About</h2>
            <span className="x">Islamabad · UTC+5</span>
          </div>
          <div className="about-grid">
            <div className="about-lead reveal">
              <p>
                Full-stack engineer in Islamabad. Five years on production systems — revenue
                analytics, marketplaces, operations software. Most useful on the correctness-heavy
                parts: payments, reconciliation, multi-tenant data, the jobs that have to be
                idempotent.
              </p>
              <p>
                AI is in my loop daily for the boilerplate and the refactors, <em>not the
                architecture</em>. I read source before I trust a library, and I&apos;d rather ship
                the boring thing that holds than the clever thing that surprises.
              </p>
            </div>
            <div className="about-side reveal">
              <div><span className="k">based</span> · <b>Islamabad, PK</b> (UTC+5)</div>
              <div><span className="k">study</span> · <b>BS Artificial Intelligence</b></div>
              <div><span className="k">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp; SZABIST · 2018–2022</div>
              <div><span className="k">open</span> · remote, or relocation (sponsored)</div>
              <div><span className="k">reply</span> · within a day</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="wrap">
          <div className="reveal">
            <h2>Open to <em>full-stack roles</em>.</h2>
            <p className="sub">Remote, or relocation with sponsorship. The fastest way to reach me is email — I reply within a day.</p>
          </div>
          <div className="contact-actions reveal">
            <a href={MAILTO} className="primary">{EMAIL} <span>→</span></a>
            <div className="contact-links">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer">book a 30-min call <span className="a">↗</span></a>
              <a href={RESUME} target="_blank" rel="noopener noreferrer">résumé <span className="a">pdf</span></a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">linkedin <span className="a">↗</span></a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer">github <span className="a">↗</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="brand">uzair-saleem</span>
          <span>© {new Date().getFullYear()} · Islamabad · Next.js</span>
          <Link href="/blog">writing →</Link>
        </div>
      </footer>
    </>
  );
}

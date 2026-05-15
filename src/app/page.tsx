"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const CALENDLY_URL = "https://calendly.com/uzairsaleemdev/30min";
const EMAIL = "uzairsaleemdev@gmail.com";
const MAILTO = `mailto:${EMAIL}`;
const RESUME = "/uzair-saleem-resume.pdf";

const PROJECTS = [
  {
    no: "N° 01",
    badge: "live" as const,
    badgeText: "● LIVE",
    name: "Indiecator",
    live: "https://indiecator.com",
    liveLabel: "indiecator.com",
    description:
      "Baremetrics-style revenue analytics for indie SaaS founders. Connect Stripe via OAuth and get every MRR movement — New, Expansion, Contraction, Churn — classified correctly under outages, retries, trials, and proration. Event-sourced from day one.",
    stack: ["Next.js 16", "Node.js", "Prisma", "Stripe Connect", "TypeScript"],
    image: "/images/indiecator.png",
    caseStudy: "/case-studies/indiecator.pdf",
  },
  {
    no: "N° 02",
    badge: "ship" as const,
    badgeText: "SHIPPED",
    name: "Diffed.gg",
    live: "https://diffed.gg",
    liveLabel: "diffed.gg",
    description:
      "Two-sided gaming services marketplace. End-to-end transaction lifecycle in one product — Stripe + PayPal checkout, Socket.IO chat, integer-cent wallet payouts, screenshot verification, fee-split admin flows.",
    stack: ["Next.js 15", "React", "Socket.IO", "Stripe", "PayPal", "Prisma"],
    image: "/images/diffed.png",
    caseStudy: "/case-studies/diffed.pdf",
  },
  {
    no: "N° 03",
    badge: "client" as const,
    badgeText: "CLIENT · NJ",
    name: "Sat-Raj",
    live: "https://satraj.inc",
    liveLabel: "satraj.inc",
    description:
      "Fuel distribution platform for a 30-year-old NJ wholesaler. Replaced 39 hand-edited Google Sheets tabs with a multi-tenant pricing engine, BOL ingestion pipeline, and invoice generator. Daily pricing run: 45–60 min → under 90 sec.",
    stack: ["Next.js 16", "Prisma", "AWS", "Samsara API", "PostgreSQL"],
    image: "/images/satraj.png",
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

const STACK_PILLS = [
  "Next.js", "React 19", "TypeScript", "Node.js",
  "PostgreSQL", "Prisma", "Supabase", "Stripe",
  "Tailwind CSS", "AWS", "Socket.IO", "Vercel",
];

const BrandMark = () => (
  <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-label="Uzair Saleem logo">
    <rect x="5" y="7" width="28" height="28" rx="4" fill="#ff5a1f" />
    <rect x="1" y="3" width="28" height="28" rx="4" fill="#0e0d0b" />
    <text x="15" y="23" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="16" fontStyle="italic" fill="#f5e055" textAnchor="middle" letterSpacing="-0.5">u/s</text>
    <circle cx="30" cy="4" r="3.4" fill="#f5e055" stroke="#0e0d0b" strokeWidth="1.5" />
    <line x1="5" y1="19" x2="24" y2="19" stroke="#ff5a1f" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

const FooterMark = () => (
  <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="7" width="28" height="28" rx="4" fill="#ff5a1f" />
    <rect x="1" y="3" width="28" height="28" rx="4" fill="#fbf2d9" />
    <text x="15" y="23" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="16" fontStyle="italic" fill="#0e0d0b" textAnchor="middle" letterSpacing="-0.5">u/s</text>
    <circle cx="30" cy="4" r="3.4" fill="#f5e055" stroke="#0e0d0b" strokeWidth="1.5" />
  </svg>
);

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

function StatCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const numEl = el.querySelector(".num") as HTMLElement;
    const sufEl = el.querySelector(".suf") as HTMLElement;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const run = () => {
      const start = performance.now();
      const dur = 1400;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const v = Math.round(to * easeOut(t));
        numEl.textContent = String(v);
        sufEl.textContent = t > 0.6 ? suffix : "";
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, suffix]);
  return (
    <div ref={ref} className="stat-val">
      <span className="num">0</span>
      <span className="suf"></span>
    </div>
  );
}

export default function Home() {
  // Trigger .loaded + scroll reveal + photo tilt + parallax
  useEffect(() => {
    const trigger = () => document.documentElement.classList.add("loaded");
    requestAnimationFrame(trigger);
    const safety = window.setTimeout(trigger, 1200);

    // Scroll reveal
    const els = document.querySelectorAll(".fade-up, .slide-l, .slide-r, .pop, .cta h2");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));

    // Photo tilt
    const photo = document.querySelector("[data-tilt]") as HTMLElement | null;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (!photo) return;
      const img = photo.querySelector("img") as HTMLElement | null;
      const r = photo.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        photo.style.transform = `perspective(900px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
        if (img) img.style.transform = `scale(1.06) translate(${x * -8}px, ${y * -8}px)`;
      });
    };
    const onLeave = () => {
      if (!photo) return;
      const img = photo.querySelector("img") as HTMLElement | null;
      photo.style.transform = "";
      if (img) img.style.transform = "";
    };
    photo?.addEventListener("pointermove", onMove);
    photo?.addEventListener("pointerleave", onLeave);

    // Parallax-light on blots
    const shapes = document.querySelector(".hero-shapes");
    const blots = shapes?.querySelectorAll(".blot");
    let praf = 0;
    const onScroll = () => {
      cancelAnimationFrame(praf);
      praf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y > 900) return;
        blots?.forEach((r, i) => {
          (r as HTMLElement).style.transform = `translateY(${y * (0.12 + i * 0.04)}px)`;
        });
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(safety);
      io.disconnect();
      photo?.removeEventListener("pointermove", onMove);
      photo?.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-inner">
          <Link href="#" className="brand">
            <span className="brand-mark"><BrandMark /></span>
            <span>Uzair Saleem</span>
          </Link>
          <div className="nav-links">
            <a href="#work">WORK</a>
            <a href="#how">HOW</a>
            <a href="#about">ABOUT</a>
            <a
              href="https://github.com/developeruzairsaleem"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/uzair-saleem-5a399825a/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta nav-cta-secondary"
            >
              DOWNLOAD CV ↓
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta nav-cta-primary"
            >
              BOOK A CALL →
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header className="hero">
        <div className="hero-shapes" aria-hidden="true">
          <div className="ring r1" />
          <div className="ring r2" />
          <div className="blot b2" />
          <div className="blot b3" />
          <div className="stripes" />
        </div>
        <div className="hero-inner">
          <div className="ribbon-row fade-up">
            <span className="ribbon">Full Stack Developer</span>
            <span>Vol. 5 · MMXXVI · ISB → US · EU · MENA</span>
            <a href={MAILTO} className="btn fill-ink ribbon-btn">
              Email me <span className="arrow">→</span>
            </a>
          </div>

          <h1 className="megatype">
            <span className="row l1"><span className="ln-inner">I ship <span className="blob lemon">B2B SaaS</span></span></span>
            <span className="row l2"><span className="ln-inner">products</span></span>
            <span className="row l3"><span className="ln-inner"><span className="blob orange">end</span> <span className="blob outline">to end.</span></span></span>
          </h1>

          <aside className="hero-aside">
            <div className="hero-photo" data-tilt>
              <Image
                src="/images/main-profile-photo.png"
                alt="Uzair Saleem"
                width={240}
                height={300}
                priority
              />
              <div className="tag">
                <span>UZAIR SALEEM</span>
                <span>ISB · PK</span>
              </div>
            </div>
          </aside>

          <div className="hero-lower">
            <p className="lede fade-up">
              <strong>Next.js · TypeScript · Postgres · AWS.</strong> Senior Full-Stack Engineer running an AI-assisted workflow.
              Five years shipping production SaaS — mostly alongside small product teams. Six live products.
            </p>
          </div>
        </div>
      </header>

      {/* ── STATS ── */}
      <section className="stats">
        <div className="stats-inner stagger">
          <div className="stat-cell fade-up">
            <StatCounter to={5} suffix="+" />
            <div className="stat-lbl">Years shipping</div>
          </div>
          <div className="stat-cell alt fade-up">
            <StatCounter to={6} />
            <div className="stat-lbl">Products in production</div>
          </div>
          <div className="stat-cell fade-up">
            <StatCounter to={10} suffix="+" />
            <div className="stat-lbl">Founder clients</div>
          </div>
          <div className="stat-cell alt fade-up">
            <StatCounter to={100} suffix="%" />
            <div className="stat-lbl">Remote · async · global</div>
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section className="work" id="work">
        <div className="work-inner">
          <div className="section-head fade-up">
            <h2>Selected<br />work.</h2>
            <div className="num">SHIPPED <b>03/06</b></div>
          </div>

          {PROJECTS.map((p, i) => (
            <article key={p.name} className={`project ${i % 2 === 0 ? "slide-l" : "slide-r"}`}>
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-thumb">
                <Image src={p.image} alt={`${p.name} screenshot`} fill sizes="(max-width: 900px) 100vw, 1240px" style={{ objectFit: "cover", objectPosition: "top left" }} />
                <span className={`thumb-tag ${p.badge === "live" ? "live" : p.badge === "client" ? "client" : ""}`}>{p.badgeText}</span>
                <span className="thumb-link">{p.liveLabel} ↗</span>
              </a>
              <div className="project-row">
                <div className="pnum">{p.no}</div>
                <div className="pmeta">
                  <span className={`badge ${p.badge}`}>{p.badgeText}</span>
                  <h3><a href={p.live} target="_blank" rel="noopener noreferrer">{p.name}</a></h3>
                  <div className="stack-row">
                    {p.stack.map((s) => <span key={s} className="stack-tag">{s}</span>)}
                  </div>
                  <a href={p.caseStudy} target="_blank" rel="noopener noreferrer" className="link">Case study (PDF) ↗</a>
                </div>
                <p>{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── HOW ── */}
      <section className="how" id="how">
        <div className="how-inner">
          <div className="section-head fade-up">
            <h2>Why founders<br />hire me.</h2>
            <div className="num">MEASURABLE <b>03/03</b></div>
          </div>
          <div className="how-grid stagger">
            <div className="how-card pop">
              <span className="ref">01 / END-TO-END</span>
              <h3>End-to-end ownership.</h3>
              <p>Architecture, backend, frontend, infra, deploys. Six production SaaS shipped — mostly alongside small product teams, sometimes as the lead engineer. I think in products, not tickets.</p>
              <div className="digit">6×</div>
            </div>
            <div className="how-card pop">
              <span className="ref">02 / CORRECTNESS</span>
              <h3>Correctness first.</h3>
              <p>MRR math that matches the bank account. Integer cents. Idempotent webhooks. The bar is the numbers being right, not just the UI looking right.</p>
              <div className="digit">0¢</div>
            </div>
            <div className="how-card pop">
              <span className="ref">03 / AI LEVERAGE</span>
              <h3>AI as leverage.</h3>
              <p>AI in the loop daily — overnight refactors, test backfill, brief-driven feature work. Not as a crutch, as leverage. I still own the architecture and the decisions.</p>
              <div className="digit">3×</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="voices-band" id="voices">
        <div className="voices-inner">
          <div className="section-head fade-up">
            <h2>What founders<br />say.</h2>
            <div className="num">CLIENTS <b>03/03</b></div>
          </div>
          <div className="voices-grid stagger">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="voice-card pop">
                <div className="voice-mark">“</div>
                <blockquote className="voice-quote">{t.quote}</blockquote>
                <figcaption className="voice-attr">
                  <b>{t.name}</b>
                  {t.role}<br />
                  {t.company}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="stack">
        <div className="stack-inner">
          <div className="stack-head fade-up">
            <h2>Tools I<br />ship with.</h2>
            <p>The stack I reach for by default. Battle-tested across six production SaaS — boring, predictable, fast to ship with.</p>
          </div>
          <div className="stack-cloud stagger">
            {STACK_PILLS.map((p) => (
              <span key={p} className="pill pop">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WRITING ── */}
      <section className="writing" id="writing">
        <div className="writing-inner">
          <div className="section-head fade-up">
            <h2>Notes on<br />AI agents.</h2>
            <div className="num">FILED <b>03/03</b></div>
          </div>
          <div className="writing-grid stagger">
            {POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card pop">
                <div className="post-tag">
                  <span>{post.tag}</span>
                  <span className="dot">·</span>
                  <span className="meta">{post.date}</span>
                  <span className="dot">·</span>
                  <span className="meta">{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="arrow">READ →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about" id="about">
        <div className="about-inner">
          <div className="about-head fade-up">
            <h2>The person<br />behind <span className="u">the code.</span></h2>
          </div>
          <div className="about-body fade-up">
            <p>
              I&apos;m Uzair — a Senior Full-Stack Engineer in Islamabad. Five years building B2B SaaS end-to-end.
              Currently at <strong>Rocket Devs</strong>, leading client builds alongside a small product team.
              Previously <strong>Design&amp;Desktop</strong> and <strong>Apifiny</strong>, where I shipped weekly
              with product teams across three years.
            </p>
            <p>
              I started coding in 2020 because a friend needed a website and couldn&apos;t afford an agency. That
              turned into a side hustle, then contracts, then shipping production SaaS for founders — mostly
              alongside small product teams, sometimes as the lead engineer on an end-to-end build. The work I
              care about most is the part that doesn&apos;t make demo reels but does make customers stay.
            </p>
            <p>BS in Artificial Intelligence (SZABIST Islamabad, 2018–2022).</p>
            <div className="about-meta">
              <div><span>BASED</span>Islamabad, PK · UTC+5</div>
              <div><span>STUDIED</span>BS Artificial Intelligence</div>
              <div><span>WORKING WITH</span>US · EU · MENA</div>
              <div><span>STATUS</span>Available · Q3 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta" id="contact">
        <div className="cta-inner">
          <h2>
            <span className="row"><span className="ln-inner">Building</span></span>
            <span className="row"><span className="ln-inner">something? <span className="swap">Let&apos;s</span></span></span>
            <span className="row"><span className="ln-inner"><span className="o">ship</span> <span className="y">it.</span></span></span>
          </h2>
          <div className="cta-lower fade-up">
            <p>Open to senior full-stack roles and select consulting. Replies within 24 hours.</p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="cta-btn">
              Book a 30-min intro call
              <span>→</span>
            </a>
            <div className="cta-links">
              <span>—</span>
              <a href={MAILTO}>{EMAIL}</a>
              <a href={RESUME} target="_blank" rel="noopener noreferrer">Download résumé ↗</a>
              <a href="https://www.linkedin.com/in/uzair-saleem-5a399825a/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href="https://github.com/developeruzairsaleem" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="brand">
            <span className="brand-mark"><FooterMark /></span>
            <span>UZAIR SALEEM</span>
          </span>
          <span>© {new Date().getFullYear()} · Built with Next.js + Tailwind</span>
        </div>
      </footer>
    </>
  );
}

"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const CALENDLY_URL = "https://calendly.com/uzairsaleemdev/30min";
const EMAIL = "uzairsaleemdev@gmail.com";
const MAILTO = `mailto:${EMAIL}`;
const RESUME = "/uzair-saleem-resume.pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* Count-up animated number that triggers when scrolled into view */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v).toString() + suffix);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(value, to, { duration: 1.4, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const PROJECTS = [
  {
    name: "Indiecator",
    tagline: "Baremetrics-style revenue analytics for indie SaaS",
    description:
      "Connect Stripe and get every MRR movement — New, Expansion, Contraction, Churn — classified correctly under outages, retries, trials, and proration. Event-sourced from day one.",
    role: "Solo engineer (contract)",
    metrics: "15+ Prisma models · 3 reconciling sync paths",
    live: "https://indiecator.com",
    liveLabel: "indiecator.com",
    caseStudy: "/case-studies/indiecator.pdf",
    image: "/images/indiecator.png",
    stack: ["Next.js 16", "Node.js", "Prisma", "Stripe Connect"],
    imageBg: "#0a0a0a",
  },
  {
    name: "Diffed.gg",
    tagline: "Two-sided gaming services marketplace",
    description:
      "End-to-end marketplace for gaming services — Stripe + PayPal checkout, Socket.IO chat, integer-cent wallet payouts, screenshot verification, fee-split admin flows.",
    role: "Solo engineer (contract)",
    metrics: "Customer + provider + admin in one product",
    live: "https://diffed.gg",
    liveLabel: "diffed.gg",
    caseStudy: "/case-studies/diffed.pdf",
    image: "/images/diffed.png",
    stack: ["Next.js 15", "Socket.IO", "Stripe", "PayPal"],
    imageBg: "#1a0a1f",
  },
  {
    name: "Sat-Raj",
    tagline: "Fuel distribution platform for a 30-year-old NJ wholesaler",
    description:
      "Replaced 39 Google Sheets tabs with a multi-tenant pricing engine, BOL pipeline, and invoice generator. Pulls costs from DTN, ingests deliveries from Samsara, pushes invoices to QuickBooks.",
    role: "Solo engineer (contract)",
    metrics: "Daily pricing run: 45–60 min → under 90 sec",
    live: "https://satraj.inc",
    liveLabel: "satraj.inc",
    caseStudy: "/case-studies/satraj.pdf",
    image: "/images/satraj.png",
    stack: ["Next.js 16", "Prisma", "AWS", "Samsara API"],
    imageBg: "#0a0a0a",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Uzair replaced 30 years of spreadsheet workflow with software the whole team trusts. The numbers match — first time, every time. He owned every layer of the build.",
    name: "Robbie Multani",
    role: "Co-founder, Sat-Raj Inc.",
    company: "Voorhees, NJ",
    initials: "RM",
  },
  {
    quote:
      "Best engineering hire I&apos;ve made for the product. He didn&apos;t just build a dashboard — he rebuilt how we think about revenue. The architecture doc is now how I explain our business to investors.",
    name: "Omar Al Watan",
    role: "Founder, Indiecator",
    company: "Remote · MENA",
    initials: "OA",
  },
  {
    quote:
      "Three contractors before Uzair, none shipped. He delivered a production marketplace in one quarter — checkout, wallets, chat, admin tooling. Zero hand-holding, money math just works.",
    name: "Daniel Reuter",
    role: "Founder, Diffed.gg",
    company: "Berlin, DE",
    initials: "DR",
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
  {
    label: "Frontend",
    items: ["Next.js 15/16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    label: "Backend & APIs",
    items: ["Node.js", "Express", "Prisma", "Socket.IO", "REST APIs", "NextAuth"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="8" rx="2" />
        <rect x="2" y="13" width="20" height="8" rx="2" />
        <line x1="6" y1="7" x2="6.01" y2="7" />
        <line x1="6" y1="17" x2="6.01" y2="17" />
      </svg>
    ),
  },
  {
    label: "Data & Infra",
    items: ["PostgreSQL", "Supabase", "AWS (Amplify, RDS, SES, S3)", "Vercel"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
      </svg>
    ),
  },
  {
    label: "Payments & Integrations",
    items: ["Stripe Connect", "PayPal", "Samsara API", "DTN feed", "QuickBooks"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="6" y1="15" x2="10" y2="15" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="Uzair Saleem logo" width={34} height={34} />
            <span className="text-xl font-bold text-white tracking-tight">Uzair Saleem</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#writing" className="hover:text-white transition-colors">Writing</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href={RESUME} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Resume</a>
          </div>
          <a
            href={MAILTO}
            className="text-sm bg-[#22c55e] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#16a34a] transition-colors"
          >
            Email me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6 max-w-2xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 text-sm text-white/70">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              Open to Senior Full-Stack Roles
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              I ship <span className="text-[#22c55e]">B2B SaaS</span><br />
              products end to end.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base md:text-lg text-white/60 leading-relaxed">
              Senior Full-Stack Engineer. I ship production SaaS for founders, at the speed of a small team.
              <span className="block mt-1 text-white/40 text-sm font-mono">Next.js · TypeScript · Postgres · AWS</span>
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <a
                href="#work"
                className="px-6 py-3 bg-[#22c55e] text-black font-semibold rounded-lg hover:bg-[#16a34a] transition-colors"
              >
                See My Work
              </a>
              <a
                href={RESUME}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Download Resume
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Book a Call
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Photo — cleaner treatment, no heavy duotone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative w-64 h-72">
              <div className="absolute -inset-3 bg-[#22c55e]/10 rounded-3xl blur-3xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-[#22c55e]/30">
                <Image
                  src="/images/uzair-profile.png"
                  alt="Uzair Saleem, Full-Stack Engineer"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 5, suffix: "", label: "Years Experience" },
            { value: 6, suffix: "", label: "Live SaaS Products Shipped" },
            { value: 10, suffix: "+", label: "Founders I've Worked With" },
            { value: 100, suffix: "%", label: "Remote, Async, Global" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#22c55e]">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Currently */}
      <section className="py-6 px-6 max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/50 border border-white/5 bg-white/[0.02] rounded-xl px-5 py-3">
          <span className="text-[#22c55e] font-mono text-xs">// currently</span>
          <span>
            <strong className="text-white/80">Rocket Devs</strong>, senior contractor for founder clients
            <span className="text-white/30 mx-2" aria-hidden="true">·</span>
            Reading <em>Kill It With Fire</em>
            <span className="text-white/30 mx-2" aria-hidden="true">·</span>
            Open for Q3 2026
          </span>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">// selected work</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-3">
            Selected work
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 max-w-2xl mb-14">
            Three production SaaS products. Shipped solo, end-to-end.
          </motion.p>

          <div className="space-y-20 md:space-y-28">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.name}
                variants={fadeUp}
                className="grid md:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                {/* Image */}
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 hover:border-[#22c55e]/40 transition-colors md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}
                  style={{ backgroundColor: p.imageBg }}
                  aria-label={`Visit ${p.name} live`}
                >
                  <Image
                    src={p.image}
                    alt={`${p.name} — ${p.tagline}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 56vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent pointer-events-none" />
                </a>

                {/* Content */}
                <div className="md:col-span-5 space-y-5">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#22c55e]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" aria-hidden="true" />
                      LIVE
                    </span>
                    <span className="text-white/20" aria-hidden="true">·</span>
                    <span className="text-xs text-white/40 font-mono">0{i + 1} / 03</span>
                    <span className="text-white/20" aria-hidden="true">·</span>
                    <span className="text-xs text-white/40">{p.role}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">{p.name}</h3>
                  <p className="text-[#22c55e]/90 text-sm font-mono">{p.tagline}</p>
                  <p className="text-white/60 text-[15px] leading-relaxed">{p.description}</p>

                  <div className="text-xs text-white/50 font-mono bg-white/[0.03] rounded-md px-3 py-2 border border-white/5">
                    {p.metrics}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.stack.map((tag) => (
                      <span key={tag} className="text-xs bg-white/5 text-white/50 px-2.5 py-1 rounded-md">{tag}</span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <a
                      href={p.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold bg-[#22c55e] hover:bg-[#16a34a] text-black px-5 py-3 rounded-lg transition-colors"
                    >
                      View Case Study
                      <span aria-hidden="true">→</span>
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold border border-white/15 hover:border-white/40 hover:bg-white/5 text-white px-5 py-3 rounded-lg transition-colors"
                    >
                      Live App
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">// what founders say</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-10">From founders I&apos;ve shipped for</motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <motion.figure
                  key={t.name}
                  variants={fadeUp}
                  className="border border-white/10 rounded-2xl p-6 bg-[#0a0a0a]/40 flex flex-col"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-[#22c55e]/40 mb-4">
                    <path d="M7 7h4v4H7c0 3 0 4 3 5v3c-5-1-7-3-7-8V7zm10 0h4v4h-4c0 3 0 4 3 5v3c-5-1-7-3-7-8V7z" fill="currentColor" />
                  </svg>
                  <blockquote className="text-white/70 text-sm leading-relaxed flex-1 mb-6">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-[#22c55e]/15 text-[#22c55e] flex items-center justify-center font-bold text-sm border border-[#22c55e]/30">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{t.name}</div>
                      <div className="text-xs text-white/50">{t.role}</div>
                      <div className="text-[11px] text-white/30 mt-0.5">{t.company}</div>
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">// how it works</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-12">How I work</motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "🏗️", title: "End-to-end ownership", desc: "Architecture, backend, frontend, infra, deploys. I think in products, not tickets." },
                { icon: "🎯", title: "Correctness first", desc: "MRR math that matches the bank account. Integer cents. Idempotent webhooks. The bar is the numbers being right." },
                { icon: "⚡", title: "AI as leverage", desc: "AI in the loop daily — as leverage, not a crutch. I still own the architecture and the decisions." }
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp} className="space-y-3">
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Writing — three equal cards */}
      <section id="writing" className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
              <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono">// writing on AI agents</motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/blog" className="text-sm text-white/40 hover:text-[#22c55e] transition-colors font-mono">
                  All posts →
                </Link>
              </motion.div>
            </div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">
              Notes on building with AI agents
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-5">
              {POSTS.map((post, i) => (
                <motion.article key={post.slug} variants={fadeUp} className="group">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex flex-col h-full border border-white/10 rounded-2xl p-6 hover:border-[#22c55e]/40 transition-colors bg-[#0a0a0a]/40"
                  >
                    <div className="flex items-center gap-2 text-[11px] text-white/40 mb-4 font-mono">
                      <span className="bg-white/5 text-white/60 px-2 py-0.5 rounded">{post.tag}</span>
                      <span>{post.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 leading-snug tracking-tight group-hover:text-[#22c55e] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                    <span className="text-xs text-[#22c55e] font-mono mt-4">Read post →</span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">// tech stack</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-3">Tools I ship with</motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 max-w-2xl mb-10">
            The stack I reach for by default — battle-tested across six production SaaS.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {STACK_GROUPS.map((group) => (
              <motion.div
                key={group.label}
                variants={fadeUp}
                className="group relative border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-[#22c55e]/40 hover:bg-white/[0.04] transition-all"
              >
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#22c55e]/10 text-[#22c55e] flex items-center justify-center group-hover:bg-[#22c55e]/15 transition-colors shrink-0">
                    {group.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-white tracking-tight truncate">{group.label}</div>
                    <div className="text-[11px] text-white/40 font-mono">{group.items.length} tools</div>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/65">
                      <span className="w-1 h-1 rounded-full bg-[#22c55e]/50 mt-2 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl">
            <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">// about</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6">The person behind the code</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-4">
              I&apos;m Uzair — a Full-Stack Engineer in Islamabad. Five years building B2B SaaS
              end-to-end. Currently at <strong className="text-white/80">Rocket Devs</strong> shipping
              for founder clients across the US, EU, and MENA. Previously
              <strong className="text-white/80"> Design&amp;Desktop</strong> and
              <strong className="text-white/80"> Apifiny</strong>.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-4">
              I started coding in 2020 because a friend needed a website and couldn&apos;t afford an
              agency. That turned into a side hustle, then contracts, then shipping real revenue
              products. Somewhere along the way I got obsessed with the part of engineering nobody
              screenshots: the idempotent webhook, the integer-cents wallet, the parity-first
              migration. That&apos;s the bar I hold my work to.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed">
              Outside the editor: cricket whenever Pakistan plays, late-night reading, and badly-photographed
              Islamabad sunsets. BS in Artificial Intelligence, SZABIST Islamabad.
              Open to senior full-stack roles — remote, any reasonable timezone overlap.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">// contact</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4">
              Hiring or building?<br />
              <span className="text-white/40">Let&apos;s talk.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/40 max-w-md mx-auto">
              Senior full-stack roles or select consulting. Replies within 24 hours.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="max-w-lg mx-auto space-y-3">
            <a
              href={MAILTO}
              className="group flex items-center justify-between gap-4 w-full bg-[#22c55e] text-black font-semibold rounded-xl px-6 py-5 hover:bg-[#16a34a] transition-colors"
            >
              <span className="flex items-center gap-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <span className="text-base md:text-lg">Email me</span>
              </span>
              <span className="text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
            <a
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 w-full border border-white/15 text-white font-semibold rounded-xl px-6 py-5 hover:bg-white/5 transition-colors"
            >
              <span className="flex items-center gap-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="18" x2="12" y2="12" />
                  <polyline points="9 15 12 18 15 15" />
                </svg>
                <span className="text-base md:text-lg">Download Resume</span>
              </span>
              <span className="text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 w-full border border-white/15 text-white font-semibold rounded-xl px-6 py-5 hover:bg-white/5 transition-colors"
            >
              <span className="flex items-center gap-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <span className="text-base md:text-lg">Book a 30-min call</span>
              </span>
              <span className="text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-12 pt-8 border-t border-white/5">
            <a href={MAILTO} className="text-sm text-white/40 hover:text-white transition-colors">
              {EMAIL}
            </a>
            <span className="text-white/20" aria-hidden="true">·</span>
            <a href="https://www.linkedin.com/in/uzair-saleem-5a399825a/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors">
              LinkedIn
            </a>
            <span className="text-white/20" aria-hidden="true">·</span>
            <a href="https://github.com/developeruzairsaleem" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors">
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
          <p>© {new Date().getFullYear()} Uzair Saleem · Built in Islamabad 🇵🇰</p>
          <p>
            <a href="https://github.com/developeruzairsaleem/personal-portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
              Source on GitHub
            </a>
            <span className="text-white/20 mx-2" aria-hidden="true">·</span>
            Next.js + Tailwind
          </p>
        </div>
      </footer>
    </main>
  );
}

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
      "Connect Stripe via OAuth and get a fully reconstructed historical view of your business in minutes. The hard part isn't the chart — it's classifying every subscription change as New, Expansion, Contraction, Churn, or Reactivation correctly, under partial outages, webhook retries, trials, and proration math. 15+ Prisma models, three reconciling sync paths, full Baremetrics-style metric suite (MRR, ARR, churn, ARPU, LTV).",
    role: "Solo engineer (contract)",
    metrics: "15+ models · 65 backend files · 149 frontend files",
    live: "https://indiecator.com",
    liveLabel: "indiecator.com",
    caseStudy: "/case-studies/indiecator.pdf",
    image: "/images/indiecator.png",
    stack: ["Next.js 16", "Node.js", "Express", "Prisma", "PostgreSQL", "Stripe Connect", "TypeScript"],
    imageBg: "#0a0a0a",
  },
  {
    name: "Diffed.gg",
    tagline: "Two-sided gaming services marketplace",
    description:
      "End-to-end marketplace connecting gamers with vetted coaches and boosters. Customer, provider, and admin flows in one product — Stripe + PayPal checkout, real-time chat over Socket.IO, in-platform wallets, screenshot proof-of-completion, fee-split payouts, and email-based admin invites. Money handled as integer cents to avoid float drift on multi-provider order splits.",
    role: "Solo engineer (contract)",
    metrics: "3 role-gated flows · Stripe + PayPal · Real-time chat",
    live: "https://diffed.gg",
    liveLabel: "diffed.gg",
    caseStudy: "/case-studies/diffed.pdf",
    image: "/images/diffed.png",
    stack: ["Next.js 15", "Socket.IO", "Stripe", "PayPal", "Prisma", "PostgreSQL", "NextAuth"],
    imageBg: "#1a0a1f",
  },
  {
    name: "Sat-Raj",
    tagline: "Fuel distribution platform for a 30-year-old NJ wholesaler",
    description:
      "Replaced 39 hand-edited Google Sheets tabs with a multi-tenant pricing engine, BOL ingestion pipeline, and invoice generator. Pulls supplier costs from the DTN feed, calculates daily prices for 24 customers across NJ and PA tax structures, sends per-customer emails via SES, ingests bills of lading from the Samsara API, and pushes invoices to QuickBooks.",
    role: "Solo engineer (contract)",
    metrics: "45–60 min → 90 sec daily pricing run · 24 customers automated",
    live: "https://satraj.inc",
    liveLabel: "satraj.inc",
    caseStudy: "/case-studies/satraj.pdf",
    image: "/images/satraj.png",
    stack: ["Next.js 16", "Prisma", "PostgreSQL", "AWS Amplify", "AWS RDS", "AWS SES", "Samsara API", "DTN", "QuickBooks"],
    imageBg: "#0a0a0a",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Uzair replaced 30 years of spreadsheet workflow with software the whole team trusts. The daily price run that used to take an hour now takes under two minutes. Most importantly, the numbers match — first time, every time. He owned every layer of the build, from the pricing engine to the BOL pipeline to the QuickBooks handoff.",
    name: "Robbie Multani",
    role: "Co-founder & Operations, Sat-Raj Inc.",
    company: "Voorhees, NJ",
    initials: "RM",
  },
  {
    quote:
      "Hired Uzair to build the MRR engine that Baremetrics didn't make sense to pay for. He didn't just build a dashboard — he rebuilt how we think about revenue. The architecture doc he wrote is now how I explain our own business to investors. Best engineering hire I've made for the product.",
    name: "Omar Al Watan",
    role: "Founder, Indiecator",
    company: "Remote · MENA",
    initials: "OA",
  },
  {
    quote:
      "We worked with three contractors before Uzair. He's the only one who actually shipped a production marketplace in one quarter — checkout, wallets, real-time chat, admin tooling, the whole thing. Clear communication, zero hand-holding, and the money math just works.",
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
      "Most engineers use AI to type faster. A smaller group uses it to ship faster. The gap between those two is the entire story of what changed about this job in the last 18 months.",
    readTime: "5 min",
    date: "Apr 2026",
    tag: "AI Agents",
  },
  {
    slug: "the-agent-that-worked-while-i-slept",
    title: "The agent that worked while I slept",
    excerpt:
      "I set up a Claude Code loop to refactor a noisy module overnight. I woke up to a clean diff, 47 passing tests, and a commit message funnier than mine usually are. Here's what I learned about scoping work for an agent that doesn't sleep.",
    readTime: "6 min",
    date: "Mar 2026",
    tag: "AI Agents",
  },
  {
    slug: "the-hardest-part-of-ai-agents-isnt-the-ai",
    title: "The hardest part of working with AI agents isn't the AI",
    excerpt:
      "After a year of building with agents in the loop, the bottleneck has stopped being the model and started being me. Specifically: my ability to say what I want clearly enough that an agent can execute it without supervision.",
    readTime: "7 min",
    date: "May 2026",
    tag: "AI Agents",
  },
];

const STACK_GROUPS = [
  { label: "Frontend", items: ["Next.js", "React 19", "TypeScript", "Tailwind", "Framer Motion"] },
  { label: "Backend", items: ["Node.js", "Express", "Prisma", "REST APIs", "Socket.IO"] },
  { label: "Data", items: ["PostgreSQL", "Supabase", "AWS RDS"] },
  { label: "Infra & Auth", items: ["AWS (Amplify, S3, SES)", "Vercel", "NextAuth"] },
  { label: "Payments", items: ["Stripe Connect", "PayPal"] },
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
              Senior Full-Stack Engineer. I&apos;m the engineer founders hire when they need a product
              shipped at the speed of a small team — using AI as leverage, not as a crutch.
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
                  src="/images/uzair-linkedin.jpeg"
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
            { value: 4, suffix: "+", label: "Years Experience" },
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

      {/* Currently / Where I've worked */}
      <section className="py-8 px-6 max-w-6xl mx-auto space-y-3">
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/50 border border-white/5 bg-white/[0.02] rounded-xl px-5 py-4">
          <span className="text-[#22c55e] font-mono text-xs">// currently</span>
          <span>Full-stack engineer at <strong className="text-white/80">Apifiny</strong> shipping AI-powered SaaS. Previously at <strong className="text-white/80">Design&amp;Desktop</strong>. Open to senior full-stack roles for Q3 2026.</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/50 border border-white/5 bg-white/[0.02] rounded-xl px-5 py-4">
          <span className="text-[#22c55e] font-mono text-xs">// reading</span>
          <span><em>Kill It With Fire</em> by Marianne Bellotti — on legacy migration. Highly recommended if you&apos;ve ever inherited a 30-year-old spreadsheet.</span>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">// selected work</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4">
            Selected work
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 max-w-2xl mb-16">
            All three are production SaaS products I shipped end-to-end as the sole engineer
            on contract for the founders below.
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
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">// what founders say</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-12">From the people who paid me to ship</motion.h2>
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
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">// how it works</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-12">How I work</motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "🏗️", title: "End-to-End Ownership", desc: "Architecture, backend, frontend, infra, deploys. Six production SaaS apps shipped for founders prove it. I think in products, not tickets." },
                { icon: "🎯", title: "Correctness First", desc: "MRR math that has to match the bank account. Money handled as integer cents. Idempotent webhooks. The bar is the numbers being right — not just the UI looking right." },
                { icon: "⚡", title: "AI as Leverage", desc: "AI-assisted development daily — not as a crutch, as leverage. I still own the architecture, decisions, and quality. I just don't waste your money on boilerplate." }
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

      {/* Writing — featured layout */}
      <section id="writing" className="py-28 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
              <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono">// writing on AI agents</motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/blog" className="text-sm text-white/40 hover:text-[#22c55e] transition-colors font-mono">
                  All posts →
                </Link>
              </motion.div>
            </div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Notes on building with AI agents
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 max-w-2xl mb-14 text-base md:text-lg">
              I&apos;ve been working with AI in the loop daily for 18 months. Three essays on
              what actually changed about engineering — and what didn&apos;t.
            </motion.p>

            <div className="grid md:grid-cols-5 gap-6">
              {/* Featured (lead) post */}
              <motion.article variants={fadeUp} className="md:col-span-3 group">
                <Link
                  href={`/blog/${POSTS[0].slug}`}
                  className="block relative border border-white/10 rounded-2xl p-8 md:p-10 hover:border-[#22c55e]/40 transition-colors bg-gradient-to-br from-[#0a0a0a] to-[#0a0a0a]/40 h-full overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#22c55e]/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative">
                    <div className="flex items-center gap-3 text-xs text-white/40 mb-5">
                      <span className="bg-[#22c55e]/15 text-[#22c55e] px-2.5 py-1 rounded-full font-mono text-[11px] font-semibold">FEATURED</span>
                      <span className="bg-white/5 text-white/60 px-2 py-0.5 rounded font-mono">{POSTS[0].tag}</span>
                      <span>{POSTS[0].date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{POSTS[0].readTime}</span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold mb-5 group-hover:text-[#22c55e] transition-colors leading-tight tracking-tight">
                      {POSTS[0].title}
                    </h3>
                    <p className="text-white/60 text-base leading-relaxed mb-6">{POSTS[0].excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-sm text-[#22c55e] font-semibold">
                      Read essay
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </motion.article>

              {/* Secondary posts */}
              <div className="md:col-span-2 space-y-6">
                {POSTS.slice(1).map((post) => (
                  <motion.article key={post.slug} variants={fadeUp} className="group h-full">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block border border-white/10 rounded-2xl p-6 hover:border-[#22c55e]/40 transition-colors bg-[#0a0a0a]/40 h-full"
                    >
                      <div className="flex items-center gap-3 text-xs text-white/40 mb-3">
                        <span className="bg-white/5 text-white/60 px-2 py-0.5 rounded font-mono">{post.tag}</span>
                        <span>{post.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-[#22c55e] transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-white/55 text-sm leading-relaxed">{post.excerpt}</p>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">// tech stack</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-10">Tools I ship with</motion.h2>
          <motion.div variants={fadeUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STACK_GROUPS.map((group) => (
              <div key={group.label} className="space-y-3">
                <div className="text-xs font-mono text-[#22c55e]/80 uppercase tracking-wider">{group.label}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 border border-white/10 rounded-md text-sm text-white/70 hover:border-[#22c55e]/30 hover:text-white transition-all cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl">
            <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">// about</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6">The person behind the code</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-4">
              I&apos;m Uzair — a Full-Stack Engineer based in Islamabad, Pakistan. I&apos;ve spent the last
              four-plus years building B2B SaaS products end-to-end. Currently a full-stack developer at
              <strong className="text-white/80"> Apifiny</strong>, working on AI-powered SaaS.
              Previously at <strong className="text-white/80">Design&amp;Desktop</strong>, where I built
              an AI vlog generator and an order-data scraper. Before that, freelance from 2022 onwards
              shipping client products on contract.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-4">
              Alongside my W2 work, I&apos;ve shipped a handful of production SaaS products solo on contract
              for founders in the US, Germany, and the MENA region. The three on this page are the
              ones I&apos;m proudest of: a revenue analytics platform, a two-sided marketplace, and a
              fuel distribution platform that replaced 30 years of spreadsheet workflow.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-4">
              I started writing code because a friend in 2020 wanted a website and couldn&apos;t afford an
              agency. The website turned into a side hustle, the side hustle turned into contracts,
              the contracts turned into shipping real revenue products. Somewhere along the way I got
              obsessed with the part of engineering nobody screenshots: the idempotent webhook handler,
              the integer-cents wallet, the parity-first migration. That&apos;s the bar I hold my work to.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-4">
              Outside the editor: cricket whenever Pakistan plays, late-night reading (most recently
              <em> Kill It With Fire</em>), and the occasional badly-photographed Islamabad sunset on
              my camera roll.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed">
              BS in Artificial Intelligence (SZABIST Islamabad, 2026). Open to senior full-stack roles
              at product-focused companies — remote, any reasonable timezone overlap, full-time or
              long-term contract.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">// contact</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4">
              Hiring or building?<br />
              <span className="text-white/40">Let&apos;s talk.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/40 max-w-md mx-auto">
              Open to senior full-stack roles and select consulting. Replies within 24 hours.
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

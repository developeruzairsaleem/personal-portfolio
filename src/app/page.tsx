"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CALENDLY_URL = "https://calendly.com/uzairsaleemdev/30min";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="US" width={34} height={34} />
            <span className="text-xl font-bold text-white tracking-tight">Uzair Saleem</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="text-sm bg-[#22c55e] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#16a34a] transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 text-sm text-white/70">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              Open to Senior Full-Stack Roles
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              I build <span className="text-[#22c55e]">B2B SaaS</span><br />
              products end to end.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed">
              Product-focused Full-Stack Engineer. Three production SaaS apps shipped solo —
              revenue analytics, a marketplace, and an internal platform for a 30-year-old NJ business.
              Next.js · TypeScript · Postgres · AWS.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#work"
                className="px-6 py-3 bg-[#22c55e] text-black font-semibold rounded-lg hover:bg-[#16a34a] transition-colors"
              >
                See My Work
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

          {/* Hero Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-72 h-80">
              {/* Green glow bg */}
              <div className="absolute -inset-4 bg-[#22c55e]/15 rounded-3xl blur-2xl" />
              {/* Green ring border */}
              <div className="absolute inset-0 rounded-2xl border border-[#22c55e]/30 z-20 pointer-events-none" />
              {/* Photo with duotone CSS effect */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/uzair-linkedin.jpeg"
                  alt="Uzair Saleem - SaaS Developer"
                  fill
                  className="object-cover object-center"
                  style={{ filter: "grayscale(15%) contrast(1.05) brightness(0.95)" }}
                  priority
                />
                {/* Green duotone overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-[#22c55e] opacity-[0.06] mix-blend-color" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-[#0a0a0a] border border-[#22c55e]/40 rounded-xl px-3 py-2 z-30">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                  <span className="text-xs text-white/80 font-medium">Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "4+", label: "Years Experience" },
            { value: "3", label: "Live SaaS Products" },
            { value: "10+", label: "Client Projects Shipped" },
            { value: "🌍", label: "Remote, Global" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[#22c55e]">{stat.value}</div>
              <div className="text-sm text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">// selected work</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-12">
            Products I&apos;ve shipped
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} className="group border border-white/10 rounded-2xl overflow-hidden hover:border-[#22c55e]/40 transition-all bg-white/[0.02] hover:bg-white/[0.04] flex flex-col">
              <a href="https://indiecator.com" target="_blank" rel="noopener noreferrer" className="block relative aspect-[16/8] overflow-hidden bg-[#0a0a0a] border-b border-white/5">
                <Image
                  src="/images/indiecator.png"
                  alt="Indiecator — revenue analytics dashboard preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </a>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold bg-[#22c55e]/15 text-[#22c55e] px-3 py-1 rounded-full">Live · Solo Built</span>
                  <a href="https://indiecator.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white text-xs transition-colors">
                    indiecator.com ↗
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2">Indiecator</h3>
                <p className="text-[#22c55e]/80 text-xs font-mono mb-3">Baremetrics-style revenue analytics for indie SaaS</p>
                <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
                  Connect Stripe via OAuth, get a fully reconstructed historical view in minutes. The hard part isn&apos;t the chart —
                  it&apos;s classifying every subscription change as New / Expansion / Contraction / Churn / Reactivation correctly,
                  under partial outages, webhook retries, trials, and proration math. 15+ Prisma models, 3 reconciling sync paths,
                  full Baremetrics metric suite (MRR, ARR, churn, ARPU, LTV).
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Next.js 16", "Node.js", "Express", "Prisma", "PostgreSQL", "Stripe Connect", "TypeScript"].map((tag) => (
                    <span key={tag} className="text-xs bg-white/5 text-white/40 px-2.5 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
                <a href="/case-studies/indiecator.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-[#22c55e] hover:text-[#16a34a] transition-colors font-mono">
                  → Read case study (PDF)
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="group border border-white/10 rounded-2xl overflow-hidden hover:border-[#22c55e]/40 transition-all bg-white/[0.02] hover:bg-white/[0.04] flex flex-col">
              <a href="https://diffed.gg" target="_blank" rel="noopener noreferrer" className="block relative aspect-[16/8] overflow-hidden bg-[#1a0a1f] border-b border-white/5">
                <Image
                  src="/images/diffed.png"
                  alt="Diffed.gg — gaming services marketplace homepage"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </a>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold bg-[#22c55e]/15 text-[#22c55e] px-3 py-1 rounded-full">Production · Solo Built</span>
                  <a href="https://diffed.gg" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white text-xs transition-colors">
                    diffed.gg ↗
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2">Diffed.gg</h3>
                <p className="text-[#22c55e]/80 text-xs font-mono mb-3">Two-sided gaming services marketplace</p>
                <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
                  End-to-end marketplace connecting gamers with vetted coaches and boosters. Customer, provider, and admin flows
                  in one product — Stripe + PayPal checkout, real-time chat over Socket.IO, in-platform wallets, screenshot
                  proof-of-completion, fee-split payouts, and email-based admin invites. Money handled as integer cents to
                  avoid float drift on multi-provider order splits.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Next.js 15", "Socket.IO", "Stripe", "PayPal", "Prisma", "PostgreSQL", "NextAuth"].map((tag) => (
                    <span key={tag} className="text-xs bg-white/5 text-white/40 px-2.5 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
                <a href="/case-studies/diffed.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-[#22c55e] hover:text-[#16a34a] transition-colors font-mono">
                  → Read case study (PDF)
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="group border border-white/10 rounded-2xl overflow-hidden hover:border-[#22c55e]/40 transition-all bg-white/[0.02] hover:bg-white/[0.04] md:col-span-2 flex flex-col">
              <a href="https://satraj.inc" target="_blank" rel="noopener noreferrer" className="block relative aspect-[16/6] overflow-hidden bg-[#0a0a0a] border-b border-white/5">
                <Image
                  src="/images/satraj.png"
                  alt="Sat-Raj fuel distribution platform homepage"
                  fill
                  sizes="(max-width: 768px) 100vw, 1024px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </a>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold bg-[#22c55e]/15 text-[#22c55e] px-3 py-1 rounded-full">Production · Client Work</span>
                  <a href="https://satraj.inc" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white text-xs transition-colors">
                    satraj.inc ↗
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2">Sat-Raj — Fuel Distribution Platform</h3>
                <p className="text-[#22c55e]/80 text-xs font-mono mb-3">Internal ops platform for a 30-year-old NJ fuel wholesaler</p>
                <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
                  Replaced 39 hand-edited Google Sheets tabs with a multi-tenant pricing engine, BOL ingestion pipeline, and
                  invoice generator. Pulls supplier costs from the DTN feed, calculates daily prices for 24 customers across
                  NJ &amp; PA tax structures, sends per-customer emails via SES, ingests bills of lading from the Samsara API,
                  and pushes invoices to QuickBooks. <span className="text-white/70 font-medium">Cut the daily pricing run
                  from 45–60 minutes of manual work to under 90 seconds.</span> Built end-to-end as the sole engineer.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Next.js 16", "Prisma", "PostgreSQL", "AWS Amplify", "AWS RDS", "AWS SES", "S3", "NextAuth", "Samsara API", "DTN", "QuickBooks"].map((tag) => (
                    <span key={tag} className="text-xs bg-white/5 text-white/40 px-2.5 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
                <a href="/case-studies/satraj.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-[#22c55e] hover:text-[#16a34a] transition-colors font-mono">
                  → Read case study (PDF)
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How I Work */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">// how it works</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-12">How I work</motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "🏗️", title: "End-to-End Ownership", desc: "Architecture, backend, frontend, infra, deploys. Three production SaaS apps shipped solo prove it. I think in products, not tickets." },
                { icon: "🎯", title: "Correctness First", desc: "MRR math that has to match the bank account. Money handled as integer cents. Idempotent webhooks. The bar is the numbers being right, not just the UI looking right." },
                { icon: "⚡", title: "AI as Leverage", desc: "AI-assisted development daily — not as a crutch, as leverage. I still own the architecture, the decisions, the quality. I just don't waste time on boilerplate." }
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

      {/* Stack */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">// tech stack</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-10">Tools I ship with</motion.h2>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {["Next.js", "React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Supabase", "NextAuth", "Stripe Connect", "Socket.IO", "AWS (Amplify, RDS, SES, S3)", "Tailwind CSS", "REST APIs", "Framer Motion"].map((tech) => (
              <span key={tech} className="px-4 py-2 border border-white/10 rounded-lg text-sm text-white/60 hover:border-[#22c55e]/30 hover:text-white transition-all cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl">
            <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">// about</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6">The person behind the code</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-4">
              I&apos;m Uzair — a Full-Stack Engineer based in Islamabad, Pakistan, building B2B SaaS products end to end.
              4+ years shipping Next.js applications for clients in the US and Germany.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-4">
              I think in products, not tickets. The visible thing is a UI. The actual work is making sure the
              MRR math matches the bank account, the webhooks are idempotent, the BOL pipeline doesn&apos;t silently
              misattribute deliveries, and the dashboard tells the truth under partial outages. That&apos;s the bar
              I hold my own SaaS to — and it&apos;s the bar I bring to production work.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed">
              BS in Artificial Intelligence. Currently open to senior full-stack roles at product-focused companies — remote, any time zone with reasonable overlap.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 max-w-5xl mx-auto">
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
              href="mailto:uzairsaleemdev@gmail.com"
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
            <a href="mailto:uzairsaleemdev@gmail.com" className="text-sm text-white/40 hover:text-white transition-colors">
              uzairsaleemdev@gmail.com
            </a>
            <span className="text-white/20">·</span>
            <a href="https://www.linkedin.com/in/uzair-saleem-5a399825a/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors">
              LinkedIn
            </a>
            <span className="text-white/20">·</span>
            <a href="https://github.com/developeruzairsaleem" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors">
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 text-center text-white/20 text-sm">
        <p>© {new Date().getFullYear()} Uzair Saleem · Built with Next.js + Tailwind</p>
      </footer>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Try emailing directly.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/50 mb-1.5">Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#22c55e]/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-white/50 mb-1.5">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@company.com"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#22c55e]/50 transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-white/50 mb-1.5">Message</label>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me what you're building..."
          rows={5}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#22c55e]/50 transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}

      {status === "success" ? (
        <div className="flex items-center gap-2 text-[#22c55e] font-medium">
          <span>✓</span>
          <span>Message sent! I&apos;ll respond within 24 hours.</span>
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3 bg-[#22c55e] text-black font-semibold rounded-lg hover:bg-[#16a34a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      )}
    </form>
  );
}

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-white tracking-tight">Uzair Saleem</span>
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
              Available for Projects
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              I build SaaS products<br />
              <span className="text-white/40">that ship fast.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-white/50 max-w-xl leading-relaxed">
              Full-stack developer specializing in Next.js + Supabase. Trusted by
              founders who need to move fast without building a full team.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#work"
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                See My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Let&apos;s Talk
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
            { value: "10+", label: "Products Shipped" },
            { value: "3x", label: "Faster with AI Dev" },
            { value: "🌍", label: "Global Remote" },
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
            <motion.div variants={fadeUp} className="group border border-white/10 rounded-2xl p-6 hover:border-[#22c55e]/40 transition-all bg-white/[0.02] hover:bg-white/[0.04]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold bg-[#22c55e]/15 text-[#22c55e] px-3 py-1 rounded-full">Live</span>
                <a href="https://indiecator.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white text-xs transition-colors">
                  indiecator.com ↗
                </a>
              </div>
              <h3 className="text-xl font-bold mb-2">Indiecator</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                SaaS analytics for indie hackers. Connects Stripe, LemonSqueezy, Paddle, and Shopify.
                Shows true MRR, take-home revenue after fees, and diligence-ready exports.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Supabase", "Stripe API", "TypeScript"].map((tag) => (
                  <span key={tag} className="text-xs bg-white/5 text-white/40 px-2.5 py-1 rounded-md">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="group border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all bg-white/[0.02] hover:bg-white/[0.04]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold bg-white/10 text-white/60 px-3 py-1 rounded-full">Shipped</span>
                <a href="https://diffed.gg" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white text-xs transition-colors">
                  diffed.gg ↗
                </a>
              </div>
              <h3 className="text-xl font-bold mb-2">Diffed.gg</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Competitive gaming matchmaking and coaching platform. Smart opponent pairing
                + verified coach network. Full-stack from architecture to production.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "Node.js", "WebSockets"].map((tag) => (
                  <span key={tag} className="text-xs bg-white/5 text-white/40 px-2.5 py-1 rounded-md">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="group border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all bg-white/[0.02] hover:bg-white/[0.04] md:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold bg-white/10 text-white/60 px-3 py-1 rounded-full">Client Work</span>
                <span className="text-white/20 text-xs">Germany · Remote</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Scraping API Dashboard</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Real-time data dashboard with batch processing and performance optimization.
                Reduced API response time by 60%. Built for a Germany-based SaaS client with
                role-based access, live metrics, and automated reporting pipelines.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Zustand", "Supabase", "Ant Design", "REST APIs"].map((tag) => (
                  <span key={tag} className="text-xs bg-white/5 text-white/40 px-2.5 py-1 rounded-md">{tag}</span>
                ))}
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
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-12">Why founders hire me</motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "⚡", title: "Ship Fast", desc: "AI-assisted development with Claude Code. Features that take traditional teams weeks ship in days. You're not paying for slow." },
                { icon: "🏗️", title: "End-to-End", desc: "Architecture, frontend, backend, deployment. No handoffs, no communication overhead. One person, full ownership." },
                { icon: "🤝", title: "Stay Honest", desc: "Real timelines. Real updates. You'll never wonder what's happening. I treat your product like it's mine." }
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
            {["Next.js", "React", "TypeScript", "Node.js", "Supabase", "PostgreSQL", "Stripe", "Tailwind CSS", "Vercel", "REST APIs", "Framer Motion", "Zustand"].map((tech) => (
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
              I&apos;m Uzair — a full-stack developer from Islamabad, Pakistan building SaaS products for founders worldwide.
              4+ years shipping Next.js applications for clients in Germany, the US, and beyond.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-4">
              I use AI-assisted development daily to move faster than a traditional dev team.
              Not as a crutch — as leverage. I still own the architecture, the decisions, and the quality.
              I just don&apos;t waste your time on boilerplate.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed">
              Final year of a BS in Artificial Intelligence. Building in public.
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
              Building something?<br />
              <span className="text-white/40">Let&apos;s ship it.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/40">
              Available for remote SaaS projects. Response within 24 hours.
            </motion.p>
          </div>

          <motion.div variants={fadeUp}>
            <ContactForm />
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center gap-6 mt-8 pt-8 border-t border-white/5">
            <a href="mailto:uzairsaleemdev@gmail.com" className="text-sm text-white/40 hover:text-white transition-colors">
              uzairsaleemdev@gmail.com
            </a>
            <span className="text-white/20">·</span>
            <a href="https://www.linkedin.com/in/uzair-saleem-5a399825a/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors">
              LinkedIn
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

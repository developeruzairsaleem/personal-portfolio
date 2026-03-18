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

const stats = [
  { value: "4+", label: "Years Building Products" },
  { value: "6", label: "Resume Projects Highlighted" },
  { value: "35%", label: "API Performance Improvement" },
  { value: "AWS", label: "Cloud and DevOps Experience" },
];

const selectedProjects = [
  {
    name: "Chatalize",
    status: "AI SaaS",
    summary:
      "Built AI-driven automation tools and SaaS workflows using OpenAI integrations, intelligent data pipelines, and end-to-end product ownership.",
    stack: ["OpenAI", "Automation", "Node.js", "SaaS"],
  },
  {
    name: "Thumbffice",
    status: "Analytics Platform",
    summary:
      "Developed a real-time workforce analytics system with WebSockets, RBAC, live tracking, and automated reporting for operational visibility.",
    stack: ["WebSockets", "RBAC", "Analytics", "Reporting"],
  },
  {
    name: "BogoExpress",
    status: "Logistics System",
    summary:
      "Delivered a scalable delivery platform with real-time tracking, route optimization, and automated dispatch workflows for logistics teams.",
    stack: ["MERN", "Realtime Tracking", "Route Optimization", "Dispatching"],
  },
];

const experience = [
  {
    company: "Chatalize Technologies",
    role: "Full Stack Developer",
    period: "Nov 2025 - Feb 2026",
    points: [
      "Built AI-powered automation tools and SaaS workflows for business operations.",
      "Integrated OpenAI APIs for intelligent data processing and decision-making.",
      "Owned delivery from ideation and system design through deployment and optimization.",
    ],
  },
  {
    company: "Routox Solutions",
    role: "Technical Product Manager",
    period: "Jan 2025 - Nov 2025",
    points: [
      "Led a team of 5 developers building a delivery management platform.",
      "Shipped real-time tracking and route optimization for logistics businesses.",
      "Worked across product, engineering, and operations to improve workflow efficiency.",
    ],
  },
  {
    company: "Antelope Developers",
    role: "Senior ERP Engineer",
    period: "Jul 2023 - Jan 2025",
    points: [
      "Built a real-time employee monitoring system with analytics and reporting.",
      "Improved system scalability through API optimization and cloud tuning.",
      "Raised API performance by about 35% using caching, indexing, and query improvements.",
    ],
  },
  {
    company: "CityForce LLC",
    role: "Lead Software Engineer (MERN)",
    period: "Jun 2021 - Apr 2023",
    points: [
      "Led development of scalable MERN applications for production use.",
      "Architected microservices-based systems to improve modularity and performance.",
      "Designed and optimized data models for high availability and fast retrieval.",
    ],
  },
];

const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "FastAPI",
  "Tailwind CSS",
  "ShadCN",
  "MongoDB",
  "OpenAI",
  "AI Workflows",
  "WebSockets",
  "Socket.io",
  "AWS",
  "Docker",
  "CI/CD",
  "RBAC",
  "Microservices",
];

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
      if (!res.ok) {
        throw new Error(data.error || "Failed to send");
      }
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Try emailing directly.",
      );
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
          placeholder="Tell me about the role, product, or problem you want help with..."
          rows={5}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#22c55e]/50 transition-colors resize-none"
        />
      </div>

      {status === "error" && <p className="text-red-400 text-sm">{errorMsg}</p>}

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
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="US" width={34} height={34} />
            <span className="text-xl font-bold text-white tracking-tight">Usama Saleem</span>
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
              Full-Stack &amp; AI Engineer
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              I build SaaS products,
              <br />
              <span className="text-white/40">AI workflows, and real-time systems.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-white/50 max-w-xl leading-relaxed">
              Full-stack engineer focused on MERN, automation systems, cloud delivery,
              and scalable backend architecture. Experienced across SaaS platforms,
              analytics products, logistics systems, and AI-powered workflows.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#work"
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                View Experience
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-72 h-80">
              <div className="absolute -inset-4 bg-[#22c55e]/15 rounded-3xl blur-2xl" />
              <div className="absolute inset-0 rounded-2xl border border-[#22c55e]/30 z-20 pointer-events-none" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/usama-portrait.png"
                  alt="Usama Saleem - Full-Stack and AI Engineer"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-45" />
                <div className="absolute inset-0 bg-[#22c55e] opacity-[0.04] mix-blend-color" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[#0a0a0a] border border-[#22c55e]/40 rounded-xl px-3 py-2 z-30">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                  <span className="text-xs text-white/80 font-medium">Open to opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/5 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[#22c55e]">{stat.value}</div>
              <div className="text-sm text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">selected work</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-12">
            Projects and product work
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {selectedProjects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={fadeUp}
                className={`group border border-white/10 rounded-2xl p-6 transition-all bg-white/[0.02] hover:bg-white/[0.04] ${index === 2 ? "md:col-span-2 hover:border-white/20" : "hover:border-[#22c55e]/40"}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${index === 0 ? "bg-[#22c55e]/15 text-[#22c55e]" : "bg-white/10 text-white/60"}`}>
                    {project.status}
                  </span>
                  <span className="text-white/20 text-xs">Selected from resume</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="text-xs bg-white/5 text-white/40 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">experience</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-12">Recent work experience</motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {experience.map((item) => (
                <motion.div key={item.company} variants={fadeUp} className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-bold">{item.company}</h3>
                      <p className="text-sm text-[#22c55e]">{item.role}</p>
                    </div>
                    <span className="text-xs text-white/30 text-right">{item.period}</span>
                  </div>
                  <div className="space-y-2">
                    {item.points.map((point) => (
                      <p key={point} className="text-sm leading-relaxed text-white/55">
                        {point}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">skills</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-10">Core stack and strengths</motion.h2>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {skills.map((tech) => (
              <span key={tech} className="px-4 py-2 border border-white/10 rounded-lg text-sm text-white/60 hover:border-[#22c55e]/30 hover:text-white transition-all cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">about</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6">Full-stack builder with AI and systems thinking</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-4">
              Usama Saleem is a full-stack and AI-focused engineer based in Islamabad,
              Pakistan, with hands-on experience building analytics platforms, automation
              systems, dynamic form builders, logistics software, and real-time applications.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-4">
              His background spans MERN development, API design, microservices, WebSockets,
              AWS, Docker, CI/CD, and LLM-powered workflow automation. He has also led teams
              and shipped cross-functional products as both an engineer and technical product manager.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed">
              Education: Bachelor of Computer Science, Capital University of Science and Technology
              (2019 - 2023), with coursework in data structures, algorithms, databases,
              operating systems, and software engineering.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-sm text-[#22c55e] font-mono mb-3">contact</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4">
              Need a builder for SaaS, AI, or automation?
              <br />
              <span className="text-white/40">Let&apos;s talk.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/40">
              Open to product engineering roles, consulting work, and full-stack collaboration.
            </motion.p>
          </div>

          <motion.div variants={fadeUp}>
            <ContactForm />
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/5">
            <a href="mailto:itsoxama@gmail.com" className="text-sm text-white/40 hover:text-white transition-colors">
              itsoxama@gmail.com
            </a>
            <span className="text-white/20">·</span>
            <a href="tel:+3150582855" className="text-sm text-white/40 hover:text-white transition-colors">
              +31 50582855
            </a>
          </motion.div>
        </motion.div>
      </section>

      <footer className="border-t border-white/5 py-8 px-6 text-center text-white/20 text-sm">
        <p>© {new Date().getFullYear()} Usama Saleem · Built with Next.js + Tailwind</p>
      </footer>
    </main>
  );
}

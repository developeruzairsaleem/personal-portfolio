import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";

const RESUME = "/uzair-saleem-resume.pdf";
const MAILTO = "mailto:uzairsaleemdev@gmail.com";

export const metadata: Metadata = {
  title: "Field Notes",
  description:
    "Field notes on AI agents, payments engineering, and shipping production SaaS by Uzair Saleem.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Field Notes · Uzair Saleem",
    description: "Field notes on AI agents, payments engineering, and shipping production SaaS.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndex() {
  return (
    <main className="page">
      <header className="masthead">
        <div className="vol">
          <Link href="/" style={{ color: "var(--ink-soft)", textDecoration: "none" }}>← Field Notes</Link>
        </div>
        <Link href="/" className="title">Writing</Link>
        <div className="meta">
          <div className="row1">Islamabad <span className="stamp">PK</span></div>
          <div className="masthead-actions">
            <a className="link" href="mailto:uzairsaleemdev@gmail.com">uzairsaleemdev@gmail.com</a>
            <a className="btn" href={RESUME} target="_blank" rel="noopener noreferrer">Download CV ↓</a>
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
        <div>Issue 14 &nbsp;·&nbsp; Q2 2026 &nbsp;·&nbsp; Field notes on AI agents</div>
        <div className="barcode" aria-hidden="true">
          {Array.from({ length: 15 }).map((_, i) => <i key={i} />)}
        </div>
        <div>{posts.length} entries</div>
      </div>

      <section style={{ position: "relative", padding: "72px 0 24px" }}>
        <div className="eyebrow" style={{ fontFamily: "var(--font-typewriter), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-soft)", marginBottom: 18, display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ width: 42, height: 1, background: "var(--ink)", display: "inline-block" }} />
          Subject — Notes from the build
        </div>
        <h1 style={{
          fontFamily: "var(--font-serif), serif",
          fontWeight: 400,
          fontSize: "clamp(48px, 7vw, 96px)",
          lineHeight: 0.96,
          letterSpacing: "-0.012em",
          color: "var(--ink)",
        }}>
          Field notes on<br />
          <span style={{ fontStyle: "italic", color: "var(--red)" }}>AI agents</span>.
        </h1>
        <p style={{
          fontFamily: "var(--font-typewriter), monospace",
          fontSize: 14.5,
          lineHeight: 1.7,
          letterSpacing: "0.01em",
          color: "var(--ink-soft)",
          maxWidth: 560,
          marginTop: 32,
        }}>
          Essays on the parts of building production SaaS that don&apos;t fit on a Trello card — AI agents in the loop, what changed about this job in the last 18 months, and the skills that survived.
        </p>
      </section>

      <div className="rule">
        <h2>§ &nbsp; All entries</h2>
        <div className="right">{posts.length} filed</div>
      </div>
      <div className="posts">
        {posts.map((p, i) => (
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

      <footer className="foot">
        <div>© {new Date().getFullYear()} &nbsp;·&nbsp; Set in Instrument Serif &amp; JetBrains Mono</div>
        <div className="pg-num">Notes</div>
        <div>
          <Link href="/">← back to Field Notes</Link>
        </div>
      </footer>
    </main>
  );
}

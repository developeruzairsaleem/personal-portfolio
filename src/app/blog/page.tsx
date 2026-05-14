import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";

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
        <div className="title">Writing</div>
        <div className="meta">
          Islamabad <span className="stamp">PK</span>
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
        <div>© {new Date().getFullYear()} &nbsp;·&nbsp; Set in Instrument Serif &amp; Special Elite</div>
        <div className="pg-num">Notes</div>
        <div>
          <Link href="/">← back to Field Notes</Link>
        </div>
      </footer>
    </main>
  );
}

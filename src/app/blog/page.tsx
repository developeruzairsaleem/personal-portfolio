import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";

const RESUME = "/uzair-saleem-resume.pdf";

export const metadata: Metadata = {
  title: "Notes on AI agents",
  description:
    "Field notes on AI agents, payments engineering, and shipping production SaaS by Uzair Saleem.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Notes on AI agents · Uzair Saleem",
    description:
      "Field notes on AI agents, payments engineering, and shipping production SaaS.",
    url: "/blog",
    type: "website",
  },
};

const BrandMark = () => (
  <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-label="Uzair Saleem logo">
    <rect x="5" y="7" width="28" height="28" rx="4" fill="#ff5a1f" />
    <rect x="1" y="3" width="28" height="28" rx="4" fill="#0e0d0b" />
    <text x="15" y="23" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="16" fontStyle="italic" fill="#f5e055" textAnchor="middle" letterSpacing="-0.5">u/s</text>
    <circle cx="30" cy="4" r="3.4" fill="#f5e055" stroke="#0e0d0b" strokeWidth="1.5" />
    <line x1="5" y1="19" x2="24" y2="19" stroke="#ff5a1f" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

export default function BlogIndex() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="brand">
            <span className="brand-mark"><BrandMark /></span>
            <span>Uzair Saleem</span>
          </Link>
          <div className="nav-links">
            <Link href="/#work">WORK</Link>
            <Link href="/blog">WRITING</Link>
            <Link href="/#about">ABOUT</Link>
            <a href={RESUME} target="_blank" rel="noopener noreferrer">DOWNLOAD CV ↓</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-shapes" aria-hidden="true">
          <div className="ring r1" />
          <div className="ring r2" />
          <div className="blot b1" />
          <div className="blot b2" />
          <div className="blot b3" />
          <div className="stripes" />
        </div>
        <div className="hero-inner">
          <div className="ribbon-row">
            <span className="ribbon">Notes · {posts.length} filed</span>
            <span>Vol. 5 · MMXXVI · ISB</span>
            <Link href="/" style={{ color: "var(--ink)" }}>← Back to portfolio</Link>
          </div>
          <h1 className="megatype" style={{ paddingBottom: 36 }}>
            <span className="row l1"><span className="ln-inner">Notes on</span></span>
            <span className="row l2"><span className="ln-inner"><span className="blob orange">AI agents</span>.</span></span>
          </h1>
          <p className="lede" style={{ paddingBottom: 64, maxWidth: 640 }}>
            Engineering essays on the parts of building production SaaS that don&apos;t fit on a Trello card — AI agents in the loop, what changed about this job in the last 18 months, and the skills that survived.
          </p>
        </div>
      </header>

      <section className="writing" style={{ borderTop: "4px solid var(--ink)" }}>
        <div className="writing-inner">
          <div className="section-head">
            <h2>All entries.</h2>
            <div className="num">FILED <b>0{posts.length}/0{posts.length}</b></div>
          </div>
          <div className="writing-grid">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
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

      <footer className="footer">
        <div className="footer-inner">
          <span className="brand">UZAIR SALEEM</span>
          <span>© {new Date().getFullYear()} · Field notes on AI agents</span>
          <Link href="/">← Back to portfolio</Link>
        </div>
      </footer>
    </>
  );
}

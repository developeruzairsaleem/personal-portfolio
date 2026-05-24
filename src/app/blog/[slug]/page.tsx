import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "../posts";

const RESUME = "/uzair-saleem-resume.pdf";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Uzair Saleem"],
      tags: [post.tag],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

const BrandMark = () => (
  <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-label="Uzair Saleem logo">
    <rect x="5" y="7" width="28" height="28" rx="4" fill="#ff5a1f" />
    <rect x="1" y="3" width="28" height="28" rx="4" fill="#0e0d0b" />
    <text x="15" y="23" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="16" fontStyle="italic" fill="#f5e055" textAnchor="middle" letterSpacing="-0.5">u/s</text>
    <circle cx="30" cy="4" r="3.4" fill="#f5e055" stroke="#0e0d0b" strokeWidth="1.5" />
    <line x1="5" y1="19" x2="24" y2="19" stroke="#ff5a1f" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const idx = posts.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? posts[idx - 1] : null;
  const next = idx < posts.length - 1 ? posts[idx + 1] : null;

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
          <div className="blot b1" />
          <div className="blot b2" />
        </div>
        <div className="hero-inner">
          <div className="ribbon-row">
            <span className="ribbon">{post.tag}</span>
            <span>{post.date} · {post.readTime} read</span>
            <Link href="/blog" style={{ color: "var(--ink)" }}>← All entries</Link>
          </div>
          <h1 className="megatype" style={{ paddingBottom: 24, fontSize: "clamp(48px, 7vw, 96px)" }}>
            <span className="row" style={{ fontSize: "inherit" }}>
              <span className="ln-inner" style={{ fontSize: "inherit" }}>{post.title}</span>
            </span>
          </h1>
          <p className="lede" style={{ paddingBottom: 56, maxWidth: 720, fontSize: 19 }}>
            {post.excerpt}
          </p>
        </div>
      </header>

      <section style={{ background: "var(--paper)", padding: "80px var(--pad) 96px", borderTop: "4px solid var(--ink)" }}>
        <article
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        <div style={{ maxWidth: 720, margin: "80px auto 0", paddingTop: 32, borderTop: "2px solid var(--ink)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 40 }}>
            <div style={{ width: 72, height: 90, border: "2px solid var(--ink)", boxShadow: "-6px 6px 0 var(--orange)", overflow: "hidden", flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/main-profile-photo.png" alt="Uzair Saleem" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.04) brightness(0.95)" }} />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: "0.14em", color: "var(--orange)", textTransform: "uppercase", fontWeight: 700, marginBottom: 6 }}>— Written by</div>
              <div style={{ fontWeight: 900, fontSize: 22, letterSpacing: "-0.02em", marginBottom: 4 }}>Uzair Saleem</div>
              <div style={{ fontSize: 14, color: "rgba(14,13,11,0.7)" }}>
                Full-Stack Engineer · Islamabad ·{" "}
                <Link href="/" style={{ borderBottom: "2px solid var(--orange)", color: "var(--ink)" }}>
                  see my work ↗
                </Link>
              </div>
            </div>
          </div>

          {(prev || next) && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 32 }}>
              {prev ? (
                <Link
                  href={`/blog/${prev.slug}`}
                  style={{
                    padding: "20px 22px",
                    border: "2px solid var(--ink)",
                    background: "var(--paper)",
                    color: "var(--ink)",
                    boxShadow: "-6px 6px 0 var(--blue)",
                    transition: "transform .15s, box-shadow .15s",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: "0.14em", color: "var(--orange)", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>← Previous</div>
                  <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{prev.title}</div>
                </Link>
              ) : <div />}
              {next ? (
                <Link
                  href={`/blog/${next.slug}`}
                  style={{
                    padding: "20px 22px",
                    border: "2px solid var(--ink)",
                    background: "var(--paper)",
                    color: "var(--ink)",
                    textAlign: "right",
                    boxShadow: "-6px 6px 0 var(--lemon)",
                    transition: "transform .15s, box-shadow .15s",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: "0.14em", color: "var(--orange)", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>Next →</div>
                  <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{next.title}</div>
                </Link>
              ) : <div />}
            </div>
          )}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <span className="brand">UZAIR SALEEM</span>
          <span>© {new Date().getFullYear()} · Entry 0{idx + 1} of 0{posts.length}</span>
          <Link href="/blog">← All entries</Link>
        </div>
      </footer>
    </>
  );
}

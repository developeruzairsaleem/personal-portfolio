import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "../posts";

const RESUME = "/uzair-saleem-resume.pdf";
const MAILTO = "mailto:uzairsaleemdev@gmail.com";

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

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const idx = posts.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? posts[idx - 1] : null;
  const next = idx < posts.length - 1 ? posts[idx + 1] : null;

  return (
    <>
      <nav className="topnav" aria-label="Primary">
        <div className="inner">
          <div className="brand">
            <Link href="/" className="brand-name">Uzair Saleem.</Link>
            <span className="avail-pill"><span className="led" aria-hidden="true" /> Available — Q3 2026</span>
          </div>
          <div className="links">
            <Link href="/#work">Work</Link>
            <Link href="/blog">Writing</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
          </div>
          <div className="actions">
            <a className="btn outline" href={RESUME} target="_blank" rel="noopener noreferrer">Download CV</a>
            <a className="btn filled" href={MAILTO}>Email me</a>
          </div>
        </div>
      </nav>

      <main className="page">
        <header className="masthead">
        <div className="vol">
          <Link href="/blog" style={{ color: "var(--ink-soft)", textDecoration: "none" }}>← All entries</Link>
        </div>
        <div className="title">Field Note</div>
        <div className="meta">
          <Link href="/" style={{ color: "var(--ink-soft)", textDecoration: "none" }}>Uzair Saleem <span className="stamp">PK</span></Link>
        </div>
      </header>
      <div className="subhead">
        <div>{post.tag} &nbsp;·&nbsp; {post.date} &nbsp;·&nbsp; {post.readTime} read</div>
        <div className="barcode" aria-hidden="true">
          {Array.from({ length: 15 }).map((_, i) => <i key={i} />)}
        </div>
        <div>Entry 0{idx + 1} of 0{posts.length}</div>
      </div>

      <article style={{ padding: "72px 0 24px", maxWidth: 720, marginInline: "auto" }}>
        <div style={{
          fontFamily: "var(--font-typewriter), monospace",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--ink-soft)",
          marginBottom: 18,
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}>
          <span style={{ width: 42, height: 1, background: "var(--ink)", display: "inline-block" }} />
          Field note — {post.tag}
        </div>
        <h1 style={{
          fontFamily: "var(--font-serif), serif",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: "clamp(40px, 5.5vw, 72px)",
          lineHeight: 1.0,
          letterSpacing: "-0.012em",
          color: "var(--ink)",
        }}>
          {post.title}
        </h1>
        <p style={{
          fontFamily: "var(--font-typewriter), monospace",
          fontSize: 15,
          lineHeight: 1.75,
          letterSpacing: "0.01em",
          color: "var(--ink-soft)",
          marginTop: 28,
          maxWidth: "56ch",
          paddingBottom: 36,
          borderBottom: "1.5px solid var(--ink)",
        }}>
          {post.excerpt}
        </p>

        <div
          className="post-body"
          style={{ marginTop: 40 }}
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        <footer style={{ marginTop: 80, paddingTop: 32, borderTop: "1.5px solid var(--ink)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "16px 0" }}>
            <div style={{ width: 80, height: 100, transform: "rotate(-2deg)", background: "#f8f2df", padding: 4, boxShadow: "0 8px 18px -12px rgba(40,20,0,0.4)", flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/main-profile-photo.png"
                alt="Uzair Saleem"
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.02) saturate(0.85) sepia(0.18)" }}
              />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-typewriter), monospace", fontSize: 11, letterSpacing: "0.14em", color: "var(--red)", textTransform: "uppercase" }}>— Written by</div>
              <div style={{ fontFamily: "var(--font-serif), serif", fontStyle: "italic", fontSize: 28, marginTop: 4, color: "var(--ink)" }}>Uzair Saleem.</div>
              <div style={{ fontFamily: "var(--font-typewriter), monospace", fontSize: 12.5, color: "var(--ink-soft)", marginTop: 4 }}>
                Senior Full-Stack Engineer · Islamabad ·{" "}
                <Link href="/" style={{ color: "var(--ink)", borderBottom: "1.5px solid var(--red)", textDecoration: "none" }}>
                  see my work ↗
                </Link>
              </div>
            </div>
          </div>

          {(prev || next) && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 48 }}>
              {prev ? (
                <Link href={`/blog/${prev.slug}`} style={{ textDecoration: "none", color: "inherit", padding: "16px 0", borderTop: "1.5px solid var(--ink)" }}>
                  <div style={{ fontFamily: "var(--font-typewriter), monospace", fontSize: 11, letterSpacing: "0.14em", color: "var(--red)", textTransform: "uppercase", marginBottom: 8 }}>← Previous entry</div>
                  <div style={{ fontFamily: "var(--font-serif), serif", fontStyle: "italic", fontSize: 22, lineHeight: 1.15, color: "var(--ink)" }}>{prev.title}</div>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/blog/${next.slug}`} style={{ textDecoration: "none", color: "inherit", textAlign: "right", padding: "16px 0", borderTop: "1.5px solid var(--ink)" }}>
                  <div style={{ fontFamily: "var(--font-typewriter), monospace", fontSize: 11, letterSpacing: "0.14em", color: "var(--red)", textTransform: "uppercase", marginBottom: 8 }}>Next entry →</div>
                  <div style={{ fontFamily: "var(--font-serif), serif", fontStyle: "italic", fontSize: 22, lineHeight: 1.15, color: "var(--ink)" }}>{next.title}</div>
                </Link>
              ) : <div />}
            </div>
          )}
        </footer>
      </article>

      <footer className="foot">
        <div>© {new Date().getFullYear()} &nbsp;·&nbsp; Field Notes</div>
        <div className="pg-num">{idx + 1}</div>
        <div><Link href="/blog">← all entries</Link></div>
      </footer>
      </main>
    </>
  );
}

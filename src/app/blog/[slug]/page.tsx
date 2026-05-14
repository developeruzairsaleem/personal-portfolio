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
    <main className="page">
      <header className="masthead">
        <div className="vol">
          <Link href="/blog" style={{ color: "var(--ink-soft)", textDecoration: "none" }}>← All entries</Link>
        </div>
        <Link href="/" className="title">Field Note</Link>
        <div className="meta">
          <div className="row1">
            <Link href="/" style={{ color: "var(--ink-soft)", textDecoration: "none" }}>Uzair Saleem <span className="stamp">PK</span></Link>
          </div>
          <div className="masthead-actions">
            <a className="link" href={MAILTO}>uzairsaleemdev@gmail.com</a>
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
  );
}

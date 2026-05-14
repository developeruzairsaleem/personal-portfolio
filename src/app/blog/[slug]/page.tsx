import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "../posts";

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
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
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
    <main>
      {/* Top index */}
      <div className="swiss-grid" style={{ padding: "24px 56px 18px", borderBottom: "1px solid var(--rule)" }}>
        <div className="mono" style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/blog" style={{ color: "var(--ink)", textDecoration: "none" }}>
            <b style={{ color: "var(--ink)", fontWeight: 500 }}>← All writing</b>
          </Link>
          <span>{post.tag} · {post.date} · {post.readTime} read</span>
          <Link href="/" style={{ color: "var(--ink)", textDecoration: "none" }}>Uzair Saleem</Link>
        </div>
      </div>

      <article className="swiss-grid" style={{ padding: "80px 56px 40px" }}>
        <header style={{ gridColumn: "2 / span 10", marginBottom: 56 }}>
          <div className="mono" style={{ marginBottom: 20, color: "var(--accent)" }}>— {post.tag}</div>
          <h1 style={{
            fontFamily: "var(--font-bricolage), sans-serif",
            fontWeight: 500,
            fontSize: "clamp(40px, 6vw, 80px)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            fontVariationSettings: "'opsz' 72, 'wght' 500",
            color: "var(--ink)",
          }}>
            {post.title}
          </h1>
          <p style={{
            marginTop: 28,
            fontSize: 22,
            lineHeight: 1.4,
            color: "var(--ink)",
            maxWidth: "44ch",
            fontWeight: 400,
          }}>
            {post.excerpt}
          </p>
        </header>

        <div
          className="post-body"
          style={{
            gridColumn: "3 / span 8",
            fontFamily: "var(--font-bricolage), sans-serif",
            fontSize: 17.5,
            lineHeight: 1.7,
            color: "var(--ink)",
          }}
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        <footer style={{ gridColumn: "3 / span 8", marginTop: 80, paddingTop: 40, borderTop: "1px solid var(--rule)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, padding: "20px 0", marginBottom: 40 }}>
            <div style={{ width: 56, height: 56, overflow: "hidden", border: "1px solid var(--rule)", flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/main-profile-photo.png" alt="Uzair Saleem" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) contrast(1.04)" }} />
            </div>
            <div>
              <div className="mono" style={{ color: "var(--accent)" }}>— Written by</div>
              <div style={{ fontFamily: "var(--font-bricolage), sans-serif", fontSize: 20, fontWeight: 500, marginTop: 4 }}>Uzair Saleem</div>
              <div style={{ fontSize: 14, color: "var(--soft)", marginTop: 2 }}>
                Senior Full-Stack Engineer · Islamabad ·{" "}
                <Link href="/" style={{ color: "var(--ink)", borderBottom: "1.5px solid var(--accent)", textDecoration: "none" }}>
                  See my work →
                </Link>
              </div>
            </div>
          </div>

          {(prev || next) && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 40 }}>
              {prev ? (
                <Link href={`/blog/${prev.slug}`} style={{ textDecoration: "none", color: "inherit", padding: "20px 0", borderTop: "1px solid var(--rule)" }}>
                  <div className="mono" style={{ marginBottom: 8, color: "var(--accent)" }}>← Previous</div>
                  <div style={{ fontFamily: "var(--font-bricolage), sans-serif", fontSize: 17, fontWeight: 500, lineHeight: 1.3 }}>{prev.title}</div>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/blog/${next.slug}`} style={{ textDecoration: "none", color: "inherit", textAlign: "right", padding: "20px 0", borderTop: "1px solid var(--rule)" }}>
                  <div className="mono" style={{ marginBottom: 8, color: "var(--accent)" }}>Next →</div>
                  <div style={{ fontFamily: "var(--font-bricolage), sans-serif", fontSize: 17, fontWeight: 500, lineHeight: 1.3 }}>{next.title}</div>
                </Link>
              ) : <div />}
            </div>
          )}
        </footer>
      </article>
    </main>
  );
}

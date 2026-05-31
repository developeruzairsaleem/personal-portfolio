import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "../posts";
import { Nav, Footer } from "../../site-chrome";

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
      <Nav />

      <main className="wrap">
        <header className="post-head">
          <p className="post-meta">
            <span>{post.tag}</span>
            <span>{post.date}</span>
            <span>{post.readTime} read</span>
          </p>
          <h1>{post.title}</h1>
          <p className="sub">{post.excerpt}</p>
        </header>

        <article className="post-body" style={{ marginTop: 48 }} dangerouslySetInnerHTML={{ __html: post.body }} />

        <div
          style={{
            marginTop: 56, paddingTop: 28, borderTop: "1px solid var(--line)",
            display: "flex", alignItems: "center", gap: 14,
          }}
        >
          <span style={{ width: 44, height: 44, borderRadius: "50%", overflow: "hidden", border: "1px solid var(--line)", flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/main-profile-photo.png" alt="Uzair Saleem" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </span>
          <span style={{ fontSize: 14, lineHeight: 1.5, color: "var(--muted)" }}>
            <b style={{ color: "var(--ink)", fontWeight: 600 }}>Uzair Saleem</b> — full-stack engineer, Islamabad.{" "}
            <Link href="/" style={{ color: "var(--accent)" }}>see my work →</Link>
          </span>
        </div>

        {(prev || next) && (
          <div className="post-nav">
            {prev ? (
              <Link href={`/blog/${prev.slug}`}>
                <span className="k">← previous</span>
                <span className="t">{prev.title}</span>
              </Link>
            ) : <span />}
            {next ? (
              <Link href={`/blog/${next.slug}`} className="next">
                <span className="k">next →</span>
                <span className="t">{next.title}</span>
              </Link>
            ) : <span />}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

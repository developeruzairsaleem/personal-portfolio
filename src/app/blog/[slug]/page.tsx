import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/portfolio/chrome";
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
    <SiteShell>
      <div className="wrap">
        <div className="article">
          <header className="article-head">
            <Link href="/blog" className="crumb">
              ← All writing
            </Link>
            <p className="post-meta" style={{ marginTop: 36 }}>
              <span>{post.tag}</span>
              <span>{post.date}</span>
              <span>{post.readTime} read</span>
            </p>
            <h1 className="article-title" style={{ marginTop: 14 }}>
              {post.title}
            </h1>
            <p className="article-sub">{post.excerpt}</p>
          </header>

          <article className="prose" dangerouslySetInnerHTML={{ __html: post.body }} />

          <div className="author">
            <Image src="/images/uzair-avatar-hd.jpg" alt="" width={52} height={52} />
            <p>
              <b>Uzair Saleem</b>, full-stack engineer in Islamabad. <Link href="/#work">See my work</Link>
            </p>
          </div>

          {(prev || next) && (
            <nav className="post-pager" aria-label="More writing" style={{ marginBottom: 108 }}>
              {prev ? (
                <Link href={`/blog/${prev.slug}`}>
                  <small>← Previous</small>
                  <strong>{prev.title}</strong>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link href={`/blog/${next.slug}`} className="is-next">
                  <small>Next →</small>
                  <strong>{next.title}</strong>
                </Link>
              ) : (
                <span />
              )}
            </nav>
          )}
        </div>
      </div>
    </SiteShell>
  );
}

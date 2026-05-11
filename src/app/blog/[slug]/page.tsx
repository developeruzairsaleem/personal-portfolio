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

  // Adjacent posts for navigation
  const idx = posts.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? posts[idx - 1] : null;
  const next = idx < posts.length - 1 ? posts[idx + 1] : null;

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      <nav className="border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/blog" className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors">
            <span aria-hidden="true">←</span> All writing
          </Link>
          <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">
            Uzair Saleem
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-20 pb-24">
        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs text-white/40 mb-5 font-mono">
            <span className="bg-[#22c55e]/10 text-[#22c55e] px-2 py-0.5 rounded">{post.tag}</span>
            <span>{post.date}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime} read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">{post.excerpt}</p>
        </header>

        <div
          className="post-body text-white/75 leading-[1.8] text-[17px]"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        <footer className="mt-20 pt-8 border-t border-white/10 space-y-8">
          <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="w-14 h-14 rounded-full overflow-hidden ring-1 ring-[#22c55e]/30 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/uzair-linkedin.jpeg" alt="Uzair Saleem" className="w-full h-full object-cover" />
            </div>
            <div className="text-sm">
              <p className="text-white font-semibold mb-0.5">Written by Uzair Saleem</p>
              <p className="text-white/50">
                Senior Full-Stack Engineer based in Islamabad. I ship B2B SaaS products end-to-end
                for founders. <Link href="/" className="text-[#22c55e] hover:underline">See my work →</Link>
              </p>
            </div>
          </div>

          {(prev || next) && (
            <div className="grid sm:grid-cols-2 gap-4">
              {prev ? (
                <Link
                  href={`/blog/${prev.slug}`}
                  className="block border border-white/10 rounded-xl p-5 hover:border-[#22c55e]/40 transition-colors"
                >
                  <div className="text-xs text-white/40 mb-1">← Previous</div>
                  <div className="text-sm text-white/80 font-semibold">{prev.title}</div>
                </Link>
              ) : <div />}
              {next ? (
                <Link
                  href={`/blog/${next.slug}`}
                  className="block border border-white/10 rounded-xl p-5 hover:border-[#22c55e]/40 transition-colors text-right"
                >
                  <div className="text-xs text-white/40 mb-1">Next →</div>
                  <div className="text-sm text-white/80 font-semibold">{next.title}</div>
                </Link>
              ) : <div />}
            </div>
          )}
        </footer>
      </article>
    </main>
  );
}

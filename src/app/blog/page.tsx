import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes from the build — engineering essays on revenue analytics, marketplace payments, and legacy migrations by Uzair Saleem.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Writing · Uzair Saleem",
    description:
      "Notes from the build — engineering essays on revenue analytics, marketplace payments, and legacy migrations.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndex() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      <nav className="border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors">
            <span aria-hidden="true">←</span> Uzair Saleem
          </Link>
          <Link href="/#contact" className="text-sm text-white/60 hover:text-white transition-colors">
            Get in touch
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-20 pb-32">
        <p className="text-sm text-[#22c55e] font-mono mb-3">// writing</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Notes from the build</h1>
        <p className="text-white/50 leading-relaxed mb-16 max-w-2xl">
          Engineering essays on the parts of building production SaaS that don&apos;t fit on a Trello
          card — revenue analytics, marketplace payments, legacy migrations.
        </p>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex items-center gap-3 text-xs text-white/40 mb-3">
                  <span className="bg-[#22c55e]/10 text-[#22c55e] px-2 py-0.5 rounded font-mono">{post.tag}</span>
                  <span>{post.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight tracking-tight group-hover:text-[#22c55e] transition-colors">
                  {post.title}
                </h2>
                <p className="text-white/55 leading-relaxed mb-2">{post.excerpt}</p>
                <span className="text-sm text-[#22c55e] font-mono">Read post →</span>
              </Link>
            </article>
          ))}
        </div>
      </article>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on AI agents, payments engineering, and shipping production SaaS by Uzair Saleem.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Writing · Uzair Saleem",
    description:
      "Notes on AI agents, payments engineering, and shipping production SaaS.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndex() {
  return (
    <main>
      {/* Top index */}
      <div className="swiss-grid" style={{ padding: "24px 56px 18px", borderBottom: "1px solid var(--rule)" }}>
        <div className="mono" style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ color: "var(--ink)", textDecoration: "none" }}>
            <b style={{ color: "var(--ink)", fontWeight: 500 }}>← Uzair Saleem</b> · Index · v.05
          </Link>
          <span>Writing — Notes</span>
          <Link href="/#contact" style={{ color: "var(--ink)", textDecoration: "none", borderBottom: "1.5px solid var(--accent)" }}>
            Get in touch
          </Link>
        </div>
      </div>

      <article className="swiss-grid" style={{ padding: "80px 56px 120px" }}>
        <div style={{ gridColumn: "1 / -1", marginBottom: 60 }}>
          <div className="mono" style={{ marginBottom: 16, color: "var(--accent)" }}>— § Writing</div>
          <h1 className="hero-h1" style={{ fontSize: "clamp(48px, 8vw, 120px)" }}>
            Notes on <span className="acc">AI&nbsp;agents.</span>
          </h1>
          <p style={{ marginTop: 32, maxWidth: "48ch", fontSize: 19, lineHeight: 1.45, color: "var(--ink)" }}>
            Engineering essays on the parts of building production SaaS that don&apos;t fit on a Trello card — AI agents in the loop, payments correctness, and what changed about this job in the last 18 months.
          </p>
        </div>

        <div style={{ gridColumn: "1 / -1", borderTop: "1px solid var(--rule)" }}>
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <article style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr 120px", gap: 24, padding: "32px 0", borderBottom: "1px solid var(--hair)", alignItems: "baseline" }}>
                <span className="mono" style={{ color: "var(--accent)" }}>0{i + 1}</span>
                <span className="mono">{post.tag} · {post.date}</span>
                <div>
                  <h2 style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: 500, fontSize: 28, lineHeight: 1.05, letterSpacing: "-0.022em", maxWidth: "32ch", fontVariationSettings: "'opsz' 32, 'wght' 500" }}>
                    {post.title}
                  </h2>
                  <p style={{ marginTop: 10, fontSize: 15.5, lineHeight: 1.5, color: "var(--ink)", maxWidth: "44ch" }}>
                    {post.excerpt}
                  </p>
                </div>
                <span className="mono" style={{ textAlign: "right", color: "var(--accent)" }}>{post.readTime} →</span>
              </article>
            </Link>
          ))}
        </div>
      </article>
    </main>
  );
}

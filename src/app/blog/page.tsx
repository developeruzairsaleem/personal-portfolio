import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/portfolio/chrome";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Short essays by Uzair Saleem on shipping production software: payments, data that has to stay correct, and working with AI in the loop.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Writing · Uzair Saleem",
    description: "Short essays on shipping production software: payments, data and working with AI in the loop.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndex() {
  return (
    <SiteShell>
      <header className="page-head">
        <div className="wrap">
          <p className="label">Writing</p>
          <h1 className="page-title">Notes from building things.</h1>
          <p className="page-sub">
            Short essays on payments, data that has to stay correct, and working with AI in the loop.
          </p>
        </div>
      </header>

      <section className="list-end" aria-label="All posts">
        <div className="wrap">
          <ul className="posts">
            {posts.map((p) => (
              <li key={p.slug} className="post-row">
                <p className="post-meta">
                  <span>{p.tag}</span>
                  <span>{p.date}</span>
                  <span>{p.readTime} read</span>
                </p>
                <h2 className="post-name">
                  <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                </h2>
                <p className="post-excerpt">{p.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";
import { Nav, Footer } from "../site-chrome";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on building production software: payments, data, and shipping with AI in the loop. By Uzair Saleem.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Writing · Uzair Saleem",
    description: "Essays on building production software: payments, data, and shipping with AI in the loop.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndex() {
  return (
    <>
      <Nav />

      <main className="wrap">
        <section className="intro">
          <p className="eyebrow fade">writing</p>
          <h1 className="fade d1">Notes on building software.</h1>
          <p className="sub fade d1">
            Short essays on the parts of shipping production software that don&apos;t fit on a ticket:
            payments, data that has to stay correct, and working with AI in the loop.
          </p>
        </section>

        <section className="block">
          <p className="label"><span>all entries</span><span className="x">{posts.length} posts</span></p>
          <div className="post-list">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="post-row">
                <span className="post-meta">
                  <span>{post.tag}</span>
                  <span>{post.date}</span>
                  <span>{post.readTime} read</span>
                </span>
                <span className="post-title">{post.title}</span>
                <span className="post-excerpt">{post.excerpt}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

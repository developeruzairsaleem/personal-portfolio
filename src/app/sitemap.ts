import type { MetadataRoute } from "next";
import { WORK } from "@/components/portfolio/work-data";
import { posts } from "./blog/posts";

const SITE = "https://uzairsaleem.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...WORK.map((w) => ({
      url: `${SITE}/work/${w.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE}/blog`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    ...posts.map((p) => ({
      url: `${SITE}/blog/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}

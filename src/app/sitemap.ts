import type { MetadataRoute } from "next";

const SITE = "https://uzairsaleem.dev";

const POST_SLUGS = [
  "ai-as-leverage-not-autocomplete",
  "the-agent-that-worked-while-i-slept",
  "the-hardest-part-of-ai-agents-isnt-the-ai",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...POST_SLUGS.map((slug) => ({
      url: `${SITE}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}

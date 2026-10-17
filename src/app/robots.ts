import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The résumé lists a phone number. Keep it reachable by link for job
      // applications, but out of search results.
      disallow: ["/resume"],
    },
    sitemap: "https://uzairsaleem.dev/sitemap.xml",
    host: "https://uzairsaleem.dev",
  };
}

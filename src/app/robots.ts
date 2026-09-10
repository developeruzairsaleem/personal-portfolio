import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The résumé stays reachable by direct link for job applications but is
      // not part of the business site; keep crawlers and classifiers off it.
      disallow: ["/resume"],
    },
    sitemap: "https://uzairsaleem.dev/sitemap.xml",
    host: "https://uzairsaleem.dev",
  };
}

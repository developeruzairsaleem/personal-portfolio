import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://uzairsaleem.dev/sitemap.xml",
    host: "https://uzairsaleem.dev",
  };
}

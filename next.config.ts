import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old fuel-sales pages are gone. Links in past emails and applications
  // still land somewhere useful.
  async redirects() {
    return [
      { source: "/demo", destination: "/work/satraj", permanent: true },
      { source: "/fuel", destination: "/", permanent: true },
      { source: "/fuel/demo", destination: "/work/satraj", permanent: true },
    ];
  },
};

export default nextConfig;

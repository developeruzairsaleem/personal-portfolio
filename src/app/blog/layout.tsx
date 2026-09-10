import type { Metadata } from "next";

// The blog predates the fuel-distributor focus (revenue analytics, AI
// tooling). It stays reachable by link but out of the index so search
// engines and AI classifiers describe the business from the service pages.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}

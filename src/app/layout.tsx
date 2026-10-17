import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "@/components/portfolio/portfolio.css";

// Headlines only. Bold, a little quirky, readable at 80px and at 20px.
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

// Body copy.
const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Small labels, dates and tags.
const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://uzairsaleem.dev";
const TITLE = "Uzair Saleem · Full-Stack Engineer";
const DESCRIPTION =
  "Full-stack engineer open to full-time remote roles. I've shipped a billing system, a revenue analytics product and a gaming marketplace with Next.js, TypeScript, Node and Postgres. Based in Islamabad, works US hours.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · Uzair Saleem" },
  description: DESCRIPTION,
  applicationName: "Uzair Saleem · Portfolio",
  authors: [{ name: "Uzair Saleem", url: SITE_URL }],
  creator: "Uzair Saleem",
  publisher: "Uzair Saleem",
  keywords: [
    "full-stack engineer", "remote full-stack engineer", "Next.js engineer", "Node.js engineer",
    "TypeScript", "PostgreSQL", "Stripe integration", "Indiecator", "Diffed", "Sat-Raj", "Uzair Saleem",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_US", url: SITE_URL,
    siteName: "Uzair Saleem", title: TITLE, description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image", title: TITLE, description: DESCRIPTION,
    creator: "@uzairsaleemdev",
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Uzair Saleem",
  jobTitle: "Full-Stack Engineer",
  description:
    "Full-stack engineer who has shipped a billing system, a revenue analytics product and a gaming marketplace.",
  url: SITE_URL,
  image: `${SITE_URL}/images/uzair-portrait-blazer.jpg`,
  email: "uzair@uzairsaleem.dev",
  address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
  sameAs: [
    "https://github.com/developeruzairsaleem",
    "https://www.linkedin.com/in/uzair-saleem-5a399825a/",
  ],
  knowsAbout: [
    "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "SaaS analytics",
    "Marketplace development", "QuickBooks integrations", "n8n workflow automation",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Display + body. The blog and résumé still reference --font-inter, which
// globals.css points at this face so the whole site loads one sans family.
const interTight = Inter_Tight({
  variable: "--font-tight",
  subsets: ["latin"],
  display: "swap",
});

// Accent face: one or two italic words per headline, never body copy.
const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  display: "swap",
});

const jetMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const SITE_URL = "https://uzairsaleem.dev";
const TITLE = "Uzair Saleem · Full-Stack Engineer";
const DESCRIPTION =
  "Full-stack engineer. I build data pipelines, billing workflows and AI automations and ship them to production: Indiecator, Satraj, Diffed.gg. Next.js, Node, PostgreSQL, n8n. Open to full-time remote roles, works US hours.";

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
    "data pipelines", "n8n", "AI automation", "Indiecator", "Diffed", "Satraj", "Uzair Saleem",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0f12" },
  ],
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Uzair Saleem",
  jobTitle: "Full-Stack Engineer",
  description:
    "Builds data pipelines, billing workflows and AI automations in production: SaaS analytics, marketplaces and operations platforms.",
  url: SITE_URL,
  image: `${SITE_URL}/images/uzair-portrait-blazer.jpg`,
  email: "uzair@uzairsaleem.dev",
  address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
  sameAs: [
    "https://github.com/developeruzairsaleem",
    "https://www.linkedin.com/in/uzair-saleem-5a399825a/",
  ],
  knowsAbout: [
    "n8n workflow automation", "LLM integrations", "Next.js", "TypeScript", "PostgreSQL",
    "SaaS analytics", "Marketplace development", "Operations automation", "QuickBooks integrations",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Lets CSS hide scroll-reveal content only when JS can reveal it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className={`${interTight.variable} ${instrumentSerif.variable} ${jetMono.variable} antialiased`}>
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

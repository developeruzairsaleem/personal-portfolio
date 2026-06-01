import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  "Full-stack engineer, five years building web apps in TypeScript, Node, Next.js, and Postgres. Based in Islamabad, open to remote work and relocation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · Uzair Saleem" },
  description: DESCRIPTION,
  applicationName: "Uzair Saleem · Portfolio",
  authors: [{ name: "Uzair Saleem", url: SITE_URL }],
  creator: "Uzair Saleem",
  publisher: "Uzair Saleem",
  keywords: [
    "Full-Stack Engineer", "Next.js Developer", "TypeScript", "SaaS Developer",
    "Full-Stack", "Remote Engineer", "Stripe Integration", "Prisma",
    "PostgreSQL", "AWS", "Pakistan Developer", "Indiecator", "Diffed.gg", "Satraj",
  ],
  alternates: { canonical: SITE_URL },
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
  themeColor: "#f5f6f7",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Uzair Saleem",
  jobTitle: "Full-Stack Engineer",
  url: SITE_URL,
  email: "uzairsaleemdev@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
  sameAs: [
    "https://github.com/developeruzairsaleem",
    "https://www.linkedin.com/in/uzair-saleem-5a399825a/",
  ],
  knowsAbout: [
    "Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "Prisma",
    "Stripe", "AWS", "SaaS Development",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Adds .js so CSS knows to hide elements pre-reveal */}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js');` }} />
      </head>
      <body className={`${inter.variable} ${jetMono.variable} antialiased`}>
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] bg-[#1b1a17] text-[#f4f2ec] font-semibold px-4 py-2"
        >
          Skip to work
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

import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Special_Elite, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const typewriter = Special_Elite({
  variable: "--font-typewriter",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const hand = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://uzairsaleem.dev";
const TITLE = "Uzair Saleem — Field Notes";
const DESCRIPTION =
  "Field notes from a working developer. I ship B2B SaaS products end-to-end for founders. Next.js · TypeScript · Postgres · AWS. 5 years, six live products, remote globally.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · Uzair Saleem" },
  description: DESCRIPTION,
  applicationName: "Uzair Saleem · Field Notes",
  authors: [{ name: "Uzair Saleem", url: SITE_URL }],
  creator: "Uzair Saleem",
  publisher: "Uzair Saleem",
  keywords: [
    "Full-Stack Engineer", "Next.js Developer", "TypeScript", "SaaS Developer",
    "Senior Full-Stack", "Remote Engineer", "Stripe Integration", "Prisma",
    "PostgreSQL", "AWS", "Pakistan Developer", "Indiecator", "Diffed.gg", "Sat-Raj",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website", locale: "en_US", url: SITE_URL,
    siteName: "Uzair Saleem", title: TITLE, description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630,
      alt: "Uzair Saleem — Field Notes" }],
  },
  twitter: {
    card: "summary_large_image", title: TITLE, description: DESCRIPTION,
    images: ["/og.png"], creator: "@uzairsaleemdev",
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#efe6cf",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Uzair Saleem",
  jobTitle: "Senior Full-Stack Engineer",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${serif.variable} ${typewriter.variable} ${mono.variable} ${hand.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] bg-[#a8362b] text-white font-semibold px-4 py-2 rounded-md"
        >
          Skip to main content
        </a>
        <div id="main">{children}</div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}

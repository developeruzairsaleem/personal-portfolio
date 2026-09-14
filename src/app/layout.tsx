import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
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
const TITLE = "Uzair Saleem · Software Engineer for Fuel Distributors";
const DESCRIPTION =
  "Truck ticket to QuickBooks invoice, same day. I design, build, and run back offices for family-run fuel distributors, proven live at Sat-Raj, a New Jersey jobber.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · Uzair Saleem" },
  description: DESCRIPTION,
  applicationName: "Uzair Saleem · Portfolio",
  authors: [{ name: "Uzair Saleem", url: SITE_URL }],
  creator: "Uzair Saleem",
  publisher: "Uzair Saleem",
  keywords: [
    "fuel distributor software", "fuel jobber back office", "QuickBooks Desktop invoicing automation",
    "delivery ticket to QuickBooks", "Samsara BOL automation", "heating oil dealer software",
    "propane dealer invoicing", "petroleum marketer operations", "fuel price sheet automation",
    "fuel tax itemization QuickBooks", "Uzair Saleem", "software engineer for fuel distributors",
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
  themeColor: "#f8f5ef",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Uzair Saleem",
  jobTitle: "Software Engineer for Fuel Distributors",
  description:
    "Designs, builds and runs back-office automation for family-run fuel distributors: delivery tickets matched to customers and prices, invoices created in QuickBooks Desktop with fuel taxes itemized.",
  url: SITE_URL,
  email: "uzairsaleemdev@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
  sameAs: [
    "https://github.com/developeruzairsaleem",
    "https://www.linkedin.com/in/uzair-saleem-5a399825a/",
  ],
  knowsAbout: [
    "Fuel distribution operations", "Petroleum marketers and jobbers", "Heating oil and propane dealers",
    "QuickBooks Desktop invoicing", "Fuel excise tax itemization", "Samsara delivery documents",
    "Bill of lading processing", "Daily fuel pricing", "Next.js", "TypeScript", "PostgreSQL", "AWS",
  ],
};

// What the business is, for crawlers and AI classifiers: a service for fuel
// distributors, not a software product or an analytics company.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Uzair Saleem · Back-office automation for fuel distributors",
  url: SITE_URL,
  description: DESCRIPTION,
  serviceType: "Back-office automation for fuel distributors: delivery ticket capture, price matching, QuickBooks Desktop invoicing with itemized fuel taxes",
  areaServed: { "@type": "Country", name: "United States" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Fuel distributors, petroleum marketers, heating oil and propane dealers",
  },
  founder: { "@type": "Person", name: "Uzair Saleem", url: SITE_URL },
  knowsAbout: ["Fuel distribution", "QuickBooks Desktop", "Samsara", "Fuel excise taxes", "Daily fuel pricing"],
  sameAs: ["https://www.linkedin.com/in/uzair-saleem-5a399825a/"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetMono.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:px-4 focus:py-2 focus:absolute focus:top-2 focus:left-2 focus:z-[60] bg-[#1b1a17] text-[#f4f2ec] font-semibold px-4 py-2"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          id="vtag-ai-js"
          async
          src="https://r2.leadsy.ai/tag.js"
          data-pid="1jUoCufoSSHGmab1O"
          data-version="062024"
        />
      </body>
    </html>
  );
}

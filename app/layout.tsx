import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyGetQuote } from "@/components/sticky-get-quote";
import { WhatsappButton } from "@/components/whatsapp-button";
import { site } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const TITLE = "Deccan Digital Solutions | Android, Web & Software Dev, Kannad";
const DESCRIPTION =
  "Deccan Digital Solutions builds Android apps, websites, web apps, desktop software, and cloud hosting for small businesses across Maharashtra. Based in Kannad. Get a free quote.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: TITLE,
    template: `%s | ${site.name}`
  },
  description: DESCRIPTION,
  keywords: [
    "Deccan Digital Solutions",
    "Android app development Kannad",
    "APK development Maharashtra",
    "web app development Kannad",
    "custom software development Maharashtra",
    "freelance developer Kannad",
    "Next.js developer Maharashtra",
    "cloud hosting small business India",
    "IT consulting Aurangabad"
  ],
  alternates: {
    canonical: site.url
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION
  },
  robots: {
    index: true,
    follow: true
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  founder: { "@type": "Person", name: site.legalName },
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kunjkheda",
    addressLocality: site.addressLocality,
    addressRegion: site.addressRegion,
    postalCode: site.postalCode,
    addressCountry: site.addressCountry
  },
  areaServed: "Maharashtra, India",
  openingHours: "Mo-Sa 10:00-19:00",
  sameAs: [],
  makesOffer: [
    "Android App Development",
    "Web Application Development",
    "Website Development",
    "Desktop Application Development",
    "UI/UX Design",
    "Cloud Hosting",
    "API Development & Integration",
    "Database Design",
    "Custom Software Development",
    "IT Consulting"
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name }
  }))
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SiteHeader />
        <div className="pb-16 md:pb-0">{children}</div>
        <SiteFooter />
        <WhatsappButton />
        <StickyGetQuote />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Digital Solutions for Small Businesses`,
    template: `%s | ${site.name}`
  },
  description:
    "Freelance Next.js websites, custom web apps, hosted dashboards, and downloadable app builds for small businesses in Kannad, Maharashtra.",
  keywords: [
    "Deccan Digital Solutions",
    "freelance developer Kannad",
    "small business websites",
    "Next.js developer Maharashtra",
    "downloadable apps"
  ],
  openGraph: {
    title: `${site.name} | Digital Solutions for Small Businesses`,
    description:
      "Fast apps and websites for local businesses, with hosting, care, and downloadable client apps.",
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Digital Solutions for Small Businesses`,
    description: "Fast apps, websites, and hosted dashboards for small businesses."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

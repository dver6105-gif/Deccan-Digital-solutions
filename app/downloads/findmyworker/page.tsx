import type { Metadata } from "next";

import { FindMyWorkerDetail } from "@/components/findmyworker-detail";
import { findMyWorkerMeta } from "@/lib/apps/findmyworker";
import { site } from "@/lib/site-data";

const TITLE = "FindMyWorker APK Download | Workers & Bazaar App, Aurangabad";
const DESCRIPTION =
  "Download FindMyWorker APK free. Connect with skilled workers, post jobs, and buy or sell in the local bazaar across Chhatrapati Sambhajinagar (Aurangabad) talukas. Marathi & English.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${site.url}/downloads/findmyworker`
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/downloads/findmyworker`,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION
  }
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: findMyWorkerMeta.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "ANDROID",
  softwareVersion: findMyWorkerMeta.version,
  fileSize: findMyWorkerMeta.size,
  inLanguage: ["en", "mr"],
  description: DESCRIPTION,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR"
  },
  publisher: {
    "@type": "Organization",
    name: site.name
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Downloads", item: `${site.url}/downloads` },
    { "@type": "ListItem", position: 3, name: "FindMyWorker", item: `${site.url}/downloads/findmyworker` }
  ]
};

export default function FindMyWorkerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FindMyWorkerDetail />
    </>
  );
}

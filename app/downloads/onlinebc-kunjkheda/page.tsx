import type { Metadata } from "next";

import { OnlineBcDetail } from "@/components/onlinebc-detail";
import { onlineBcMeta } from "@/lib/apps/onlinebc";
import { site } from "@/lib/site-data";

const TITLE = "OnlineBCKunjkheda APK Download | UPI Savings Group App";
const DESCRIPTION =
  "Download OnlineBCKunjkheda APK free. Manage multiple savings (BC) groups, automate UPI payments, and keep transparent ledgers for your community. Marathi & English.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${site.url}/downloads/onlinebc-kunjkheda`
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/downloads/onlinebc-kunjkheda`,
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
  name: onlineBcMeta.name,
  applicationCategory: "FinanceApplication",
  operatingSystem: "ANDROID",
  softwareVersion: onlineBcMeta.version,
  fileSize: onlineBcMeta.size,
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
    { "@type": "ListItem", position: 3, name: "OnlineBCKunjkheda", item: `${site.url}/downloads/onlinebc-kunjkheda` }
  ]
};

export default function OnlineBcPage() {
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
      <OnlineBcDetail />
    </>
  );
}

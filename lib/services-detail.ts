export type ServiceDetail = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  overview: string;
  benefits: string[];
  features: { title: string; description: string }[];
  process: { title: string; description: string }[];
  technologies: string[];
  faqs: { q: string; a: string }[];
};

export const servicesDetail: ServiceDetail[] = [
  {
    slug: "android-app-development",
    name: "Android App Development",
    metaTitle: "Android App Development | Kotlin & Jetpack Compose",
    metaDescription:
      "Native Android app development in Kotlin and Jetpack Compose with Firebase, bilingual Marathi/English UI, and direct APK delivery. Based in Kannad, Maharashtra.",
    tagline: "Native Android apps built the way your business actually works",
    overview:
      "We build native Android apps using Kotlin and Jetpack Compose, backed by Firebase for authentication, storage, and real-time data. Apps are built for local businesses first: bilingual Marathi and English screens, OTP-based login, and reliable performance on budget devices and patchy internet.",
    benefits: [
      "Modern MVVM architecture that's easy to maintain and extend later",
      "Firebase integration for OTP login, push notifications, and cloud storage",
      "Bilingual Marathi and English UI for local users",
      "Direct APK delivery when you don't need Play Store distribution",
      "UPI and Razorpay payment integration where needed"
    ],
    features: [
      { title: "MVVM Architecture", description: "Clean, testable structure that keeps the app maintainable as it grows." },
      { title: "Firebase Auth (OTP)", description: "Phone-number sign-in with OTP verification for trusted, low-friction access." },
      { title: "Offline-first data", description: "Local storage with Room so the app stays usable with weak or no signal." },
      { title: "Push Notifications", description: "Firebase Cloud Messaging for reminders, updates, and announcements." },
      { title: "Payments", description: "UPI deep-link triggers or Razorpay integration for in-app payments." },
      { title: "Role-based Access", description: "Separate admin, member, or staff views inside the same app." }
    ],
    process: [
      { title: "Scope", description: "We map out the exact screens, roles, and data your app needs." },
      { title: "Design", description: "Wireframes and UI in Jetpack Compose, reviewed with you before building." },
      { title: "Build", description: "Core features are built and connected to Firebase." },
      { title: "Test", description: "Tested on real Android devices, not just emulators." },
      { title: "Deliver", description: "APK handover or Play Store publishing, plus post-launch support." }
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Room", "Hilt", "Razorpay / UPI"],
    faqs: [
      {
        q: "Do you publish to the Play Store, or deliver the APK directly?",
        a: "Both are possible. Many clients start with a direct APK to test with real users before deciding on a Play Store launch."
      },
      {
        q: "Can the app work without constant internet access?",
        a: "Yes. We build with offline-first storage so core features keep working, then sync once a connection is available."
      },
      {
        q: "How long does a typical Android app take to build?",
        a: "It depends on scope, but a focused single-purpose app usually takes a few weeks from confirmed requirements to a testable build."
      },
      {
        q: "Do you support Marathi language in the app?",
        a: "Yes, bilingual Marathi and English interfaces are a regular part of the apps we build for this region."
      }
    ]
  },
  {
    slug: "web-development",
    name: "Web Development",
    metaTitle: "Web Development | Next.js Websites & Web Apps",
    metaDescription:
      "SEO-optimized websites and web apps built with Next.js and Vercel. Fast, mobile-first, and easy to maintain. Based in Kannad, Maharashtra.",
    tagline: "Fast, SEO-ready websites and web apps built with Next.js",
    overview:
      "We build websites and web applications with Next.js, deployed on Vercel. That means fast page loads, strong SEO fundamentals from day one, and hosting that's typically free for small business traffic levels.",
    benefits: [
      "Server-rendered pages for fast load times and better SEO",
      "Mobile-first, responsive design out of the box",
      "Free or low-cost hosting on Vercel's infrastructure",
      "WhatsApp-based contact and enquiry flows, no email setup needed",
      "Built-in analytics and performance monitoring"
    ],
    features: [
      { title: "SEO Metadata", description: "Proper titles, meta descriptions, and structured data on every page." },
      { title: "WhatsApp Contact", description: "Enquiry forms that open directly into WhatsApp instead of a backend inbox." },
      { title: "Admin Dashboards", description: "Simple internal tools to manage content, leads, or bookings." },
      { title: "Blog / Content Pages", description: "Structured content sections that are easy for you to keep updated." },
      { title: "Performance Tuning", description: "Image optimization, caching, and Core Web Vitals monitoring." }
    ],
    process: [
      { title: "Discover", description: "Understand what the site needs to do and who it's for." },
      { title: "Design", description: "Layout and content structure reviewed with you before development." },
      { title: "Build", description: "Pages built in Next.js with responsive, accessible components." },
      { title: "Launch", description: "Deployed to Vercel with a custom domain and SSL." },
      { title: "Support", description: "Ongoing updates and monitoring after launch." }
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    faqs: [
      {
        q: "What's the difference between a website and a web app?",
        a: "A website is mostly informational; a web app has logins, dashboards, or interactive tools behind the scenes. We build both."
      },
      { q: "Do you handle hosting after the site is built?", a: "Yes. Hosting is typically set up on Vercel, often at no ongoing cost for small business traffic." },
      { q: "Can you redesign my existing website?", a: "Yes, we can rebuild an existing site with improved performance, SEO, and design while keeping your content." },
      { q: "How long does a typical website take?", a: "A focused business website usually takes one to three weeks depending on the number of pages and content readiness." }
    ]
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    metaTitle: "Custom Software Development | Billing, POS & Community Apps",
    metaDescription:
      "Custom software for billing, inventory, POS, and community savings group management, built around how your business actually works. Based in Kannad, Maharashtra.",
    tagline: "Software built around your workflow, not the other way around",
    overview:
      "Off-the-shelf software often forces your business to adapt to it. We build custom systems instead, billing and inventory tools, POS systems, and community management apps like savings groups, designed around how your team already works.",
    benefits: [
      "Software that matches your exact process instead of a generic template",
      "One-time build instead of ongoing per-user SaaS subscription fees",
      "Local support in Marathi and English",
      "Works reliably on budget devices and inconsistent internet",
      "WhatsApp-based notifications instead of paid SMS gateways"
    ],
    features: [
      { title: "POS & Billing", description: "Point-of-sale systems with stock tracking, flexible payment entry, and receipts." },
      { title: "Inventory Management", description: "Stock counts, purchase records, and low-stock alerts." },
      { title: "Group / Community Tools", description: "Savings groups, chit funds, and member ledgers with admin oversight." },
      { title: "Role-based Admin Access", description: "PIN or OTP-based roles so staff only see what they need to." },
      { title: "WhatsApp Notifications", description: "Zero-cost customer and member updates using wa.me deep links." }
    ],
    process: [
      { title: "Understand", description: "We learn your current process in detail, including edge cases and exceptions." },
      { title: "Design the data model", description: "Structure the system so it matches how your business actually runs." },
      { title: "Build & test", description: "Build with real data from your business, not placeholder examples." },
      { title: "Train your team", description: "Walkthroughs so staff are comfortable before full rollout." },
      { title: "Support", description: "Ongoing fixes and small feature additions as your needs evolve." }
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Next.js", "Firebase", "Room", "SQLite"],
    faqs: [
      {
        q: "Can you digitize a process we currently manage on paper?",
        a: "Yes, this is a common starting point. We map the paper process first, then design the digital version around it."
      },
      { q: "Do you provide training for our staff?", a: "Yes, walkthroughs and basic documentation are included as part of delivery." },
      { q: "What if our business needs change after launch?", a: "The system is built to be extended. Small changes and new features can be added incrementally." },
      { q: "Is our business data kept private?", a: "Yes. Data is stored in your own Firebase project or database, not shared across clients." }
    ]
  },
  {
    slug: "cloud-hosting",
    name: "Cloud Hosting",
    metaTitle: "Cloud Hosting | Vercel & Firebase Deployment",
    metaDescription:
      "Cloud hosting and deployment on Vercel and Firebase with free-tier setups, automatic deployments, SSL, and monitoring. Based in Kannad, Maharashtra.",
    tagline: "Reliable hosting on Vercel and Firebase, kept close to zero cost",
    overview:
      "We deploy and host websites, web apps, and backends on Vercel and Firebase. For most small business workloads, this keeps hosting costs at or near zero, while still giving you a fast, secure, and monitored setup.",
    benefits: [
      "Free-tier hosting setups wherever the workload allows it",
      "Automatic deployments straight from your Git repository",
      "Global CDN delivery for fast load times everywhere",
      "SSL/HTTPS enabled by default on every deployment",
      "Simple scaling path if traffic grows beyond the free tier"
    ],
    features: [
      { title: "Vercel Deployment", description: "Git-based deployment with preview builds for every change." },
      { title: "Firebase Backend", description: "Firestore, Storage, and Cloud Functions for app backends." },
      { title: "Domain & SSL Setup", description: "Custom domain connection with automatic HTTPS." },
      { title: "Uptime Monitoring", description: "Basic monitoring so issues are caught early." },
      { title: "Backups", description: "Regular backups for data stored in Firestore or a database." }
    ],
    process: [
      { title: "Assess", description: "Review your app's expected traffic and hosting needs." },
      { title: "Set up", description: "Configure the Vercel and/or Firebase environment." },
      { title: "Connect domain", description: "Point your domain to the new hosting with SSL enabled." },
      { title: "Monitor", description: "Set up basic uptime and error monitoring." },
      { title: "Maintain", description: "Ongoing checks and adjustments as usage grows." }
    ],
    technologies: ["Vercel", "Firebase", "Google Cloud", "GitHub Actions"],
    faqs: [
      { q: "Is the hosting really free?", a: "For most small business traffic levels, yes, Vercel and Firebase's free tiers are usually enough." },
      { q: "What happens if my app outgrows the free tier?", a: "We move you to a paid tier only when it's actually needed, and explain the cost upfront before doing so." },
      { q: "Do you handle domain setup?", a: "Yes, connecting your existing domain or helping you register a new one is part of the setup." },
      { q: "What if the site goes down?", a: "Monitoring alerts us to outages early, and Vercel/Firebase both have strong uptime track records." }
    ]
  }
];

export function getServiceBySlug(slug: string) {
  return servicesDetail.find((service) => service.slug === slug);
}

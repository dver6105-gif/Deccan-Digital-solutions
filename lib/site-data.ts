import {
  BadgeIndianRupee,
  BarChart3,
  Boxes,
  Building2,
  CloudCog,
  Code2,
  Download,
  Globe2,
  LayoutDashboard,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Store,
  Wrench
} from "lucide-react";

export const site = {
  name: "Deccan Digital Solutions",
  legalName: "Salman Pathan",
  url: "https://deccan-digital-solutions.vercel.app",
  location: "Kannad, Maharashtra",
  addressLine: "Kunjkheda, Kannad, Maharashtra 431103",
  addressLocality: "Kannad",
  addressRegion: "Maharashtra",
  postalCode: "431103",
  addressCountry: "IN",
  email: "indiadn970@gmail.com",
  phone: "+91 9766003144",
  phoneRaw: "919766003144",
  whatsapp: "919766003144",
  hours: "Mon-Sat, 10:00 AM - 7:00 PM IST",
  responseTime: "Usually within a few hours"
};

export const services = [
  {
    title: "Android App Development",
    description: "Native Kotlin & Jetpack Compose apps with Firebase and bilingual UI.",
    icon: Smartphone,
    slug: "android-app-development"
  },
  {
    title: "Web Development",
    description: "SEO-optimized Next.js websites and web apps that load fast and convert visitors.",
    icon: Globe2,
    slug: "web-development"
  },
  {
    title: "Custom Software Development",
    description: "Billing, POS, and community management tools built around your workflow.",
    icon: LayoutDashboard,
    slug: "custom-software-development"
  },
  {
    title: "Cloud Hosting",
    description: "Deploy and host on Vercel and Firebase, at close to zero cost. Free setup included.",
    icon: CloudCog,
    slug: "cloud-hosting"
  }
];

export const portfolio = [
  {
    title: "Retail Billing Desk",
    description: "A fast invoice and inventory dashboard for local stores.",
    tech: ["Next.js", "PostgreSQL", "Razorpay"],
    image: "billing",
    liveUrl: "https://retail-billing-desk-2hhp4lkd0-dver6105-gifs-projects.vercel.app/",
    type: "Web app"
  },
  {
    title: "MGM Vastanvi English School",
    description: "Patient booking, doctor schedule, and SMS follow-up flow.",
    tech: ["React", "Zod", "Twilio"],
    image: "clinic",
    liveUrl: "https://mgm-vastanavi-english-school.vercel.app/",
    type: "SaaS"
  },
  {
    title: "Restaurant Ordering Site",
    description: "Mobile-first menu, WhatsApp ordering, and offer banners.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    image: "restaurant",
    liveUrl: "https://example.com",
    type: "Website"
  },
  {
    title: "School Admin Portal",
    description: "Attendance, fee reminders, reports, and parent updates.",
    tech: ["TypeScript", "Prisma", "Auth"],
    image: "school",
    liveUrl: "https://school-admin-portal-chi.vercel.app/",
    type: "Portal"
  },
  {
    title: "Service Booking CRM",
    description: "Lead tracking and technician assignment for field teams.",
    tech: ["Next.js", "Maps", "PWA"],
    image: "crm",
    liveUrl: "https://example.com",
    type: "CRM"
  },
  {
    title: "Local Brand Storefront",
    description: "A polished catalog with inquiry capture and analytics.",
    tech: ["SEO", "Analytics", "CMS"],
    image: "storefront",
    liveUrl: "https://example.com",
    type: "Storefront"
  }
];

export const processSteps = [
  {
    title: "Plan",
    description: "We map the goal, users, screens, and simplest launch path.",
    icon: Boxes
  },
  {
    title: "Build",
    description: "You get responsive UI, clean admin flows, and practical automation.",
    icon: Code2
  },
  {
    title: "Launch",
    description: "Deployment, domains, analytics, and handover are handled for you.",
    icon: ShieldCheck
  }
];

export const stats = [
  { label: "Typical launch", value: "7-21 days" },
  { label: "Hosting setup", value: "Free" },
  { label: "Lighthouse focus", value: "90+" }
];

export const apps = [
  {
    slug: "findmyworker",
    name: "FindMyWorker",
    tagline: "Workers, job posting & local bazaar for the Aurangabad district",
    version: "1.0.0",
    size: "31 MB",
    icon: Smartphone
  },
  {
    slug: "onlinebc-kunjkheda",
    name: "OnlineBCKunjkheda",
    tagline: "Automated UPI savings & chit fund manager for community groups",
    version: "1.0.0",
    size: "31 MB",
    icon: Smartphone
  }
];

export const downloads = [
  {
    title: "Retail Billing Android App",
    description: "Demo APK for billing, products, and daily sales reports.",
    platform: "Android",
    version: "v1.4.0",
    size: "18 MB",
    href: "/downloads/retail-billing-demo.apk",
    icon: Smartphone
  },
  {
    title: "Inventory Desktop Starter",
    description: "Windows EXE for stock entry, purchase records, and CSV export.",
    platform: "Windows",
    version: "v2.1.0",
    size: "54 MB",
    href: "/downloads/inventory-desktop.exe",
    icon: MonitorSmartphone
  },
  {
    title: "Website Content Kit",
    description: "ZIP template for photos, business details, services, and launch checklist.",
    platform: "ZIP",
    version: "2026.07",
    size: "3 MB",
    href: "/downloads/business-content-kit.zip",
    icon: Download
  }
];

export const clientTypes = [
  { label: "Retail", icon: Store },
  { label: "Clinics", icon: Building2 },
  { label: "Services", icon: Wrench },
  { label: "Reports", icon: BarChart3 },
  { label: "Budgets", icon: BadgeIndianRupee }
];

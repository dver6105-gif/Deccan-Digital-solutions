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
    title: "Custom Web Apps",
    description: "React/Next.js apps with dashboards, payments, admin panels",
    icon: LayoutDashboard
  },
  {
    title: "Business Websites",
    description: "SEO-optimized sites that load fast and convert visitors",
    icon: Globe2
  },
  {
    title: "App Hosting & Care",
    description: "Deploy, monitor, and maintain your apps. Free hosting setup included",
    icon: CloudCog
  }
];

export const portfolio = [
  {
    title: "Retail Billing Desk",
    description: "A fast invoice and inventory dashboard for local stores.",
    tech: ["Next.js", "PostgreSQL", "Razorpay"],
    image: "billing",
    liveUrl: "https://example.com",
    type: "Web app"
  },
  {
    title: "Clinic Appointment Hub",
    description: "Patient booking, doctor schedule, and SMS follow-up flow.",
    tech: ["React", "Zod", "Twilio"],
    image: "clinic",
    liveUrl: "https://example.com",
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
    liveUrl: "https://example.com",
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

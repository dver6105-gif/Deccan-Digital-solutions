import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t bg-slate-950 text-slate-200">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-xl font-bold text-white">{site.name}</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            Freelance web apps, business websites, deployment, and care plans for small teams
            that want practical software without enterprise overhead.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Explore</h3>
          <div className="mt-3 grid gap-2 text-sm text-slate-400">
            <Link href="/#portfolio" className="hover:text-white">Portfolio</Link>
            <Link href="/downloads" className="hover:text-white">Downloads</Link>
            <Link href="/#contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <div className="mt-3 grid gap-2 text-sm text-slate-400">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {site.location}</span>
            <a className="flex items-center gap-2 hover:text-white" href={`mailto:${site.email}`}>
              <Mail className="h-4 w-4" /> {site.email}
            </a>
            <a className="flex items-center gap-2 hover:text-white" href={`tel:${site.phone.replace(/\s/g, "")}`}>
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}. Built for Vercel.
      </div>
    </footer>
  );
}

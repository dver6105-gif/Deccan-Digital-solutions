import Link from "next/link";
import { Download, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-data";

const nav = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "Downloads", href: "/downloads" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/92 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            DD
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <Link href="/downloads">
              <Download className="h-4 w-4" />
              Apps
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/#contact">
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

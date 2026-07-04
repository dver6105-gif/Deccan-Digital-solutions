import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, ShieldCheck } from "lucide-react";

import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apps, downloads } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Download hosted Android APK, Windows EXE, and ZIP app files from Deccan Digital Solutions."
};

export default function DownloadsPage() {
  return (
    <main>
      <section className="border-b bg-white">
        <div className="container py-16">
          <SectionHeading
            eyebrow="Downloads"
            title="Client app files in one Vercel-hosted library"
            description="Host APK, EXE, and ZIP packages for demos, handovers, and small business client delivery."
          />
        </div>
      </section>

      <MotionSection className="container py-16">
        <h2 className="text-xl font-bold tracking-tight">Apps (Marathi & English)</h2>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {apps.map((app) => (
            <Card key={app.slug}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <app.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary">Android APK</Badge>
                </div>
                <CardTitle className="leading-7">{app.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{app.tagline}</p>
                <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground">
                  <span>v{app.version}</span>
                  <span>{app.size}</span>
                </div>
                <Button asChild className="mt-6 w-full">
                  <Link href={`/downloads/${app.slug}`}>
                    View & Download
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="container pb-16">
        <h2 className="text-xl font-bold tracking-tight">Demo Files</h2>
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {downloads.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary">{item.platform}</Badge>
                </div>
                <CardTitle className="leading-7">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground">
                  <span>{item.version}</span>
                  <span>{item.size}</span>
                </div>
                <Button asChild className="mt-6 w-full">
                  <a href={item.href} download>
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </MotionSection>

      <section className="bg-slate-950 py-14 text-white">
        <div className="container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-cyan-300">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em]">Deployment note</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold">Large files should be stored outside Git when they grow.</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              This page is ready for files in the public downloads folder. For bigger production builds,
              connect Vercel Blob, GitHub Releases, or another storage URL while keeping this same UI.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { Download, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Lang } from "@/lib/apps/onlinebc";
import { onlineBcContent, onlineBcMeta } from "@/lib/apps/onlinebc";

export function OnlineBcDetail() {
  const [lang, setLang] = useState<Lang>("en");
  const content = onlineBcContent[lang];
  const meta = onlineBcMeta;

  return (
    <main>
      <section className="border-b bg-white">
        <div className="container py-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Badge variant="secondary">Android APK</Badge>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{meta.name}</h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">{content.tagline}</p>
            </div>
            <div className="flex gap-1 rounded-md border bg-muted p-1">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded px-3 py-1.5 text-sm font-medium transition-colors ${
                  lang === "en" ? "bg-white text-foreground shadow-sm" : "text-muted-foreground"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang("mr")}
                className={`rounded px-3 py-1.5 text-sm font-medium transition-colors ${
                  lang === "mr" ? "bg-white text-foreground shadow-sm" : "text-muted-foreground"
                }`}
              >
                मराठी
              </button>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700">{content.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={`/downloads/${meta.filename}`} download>
                <Download className="h-5 w-5" />
                {content.downloadCta} ({meta.size})
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">{content.installNote}</p>
          </div>
        </div>
      </section>

      <section className="container py-14">
        {content.featureGroups.map((group) => (
          <div key={group.heading} className="mb-10">
            <h2 className="text-xl font-bold tracking-tight">{group.heading}</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {group.items.map((item) => (
                <Card key={item.title}>
                  <CardHeader>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-white py-14">
        <div className="container">
          <h2 className="text-xl font-bold tracking-tight">
            {lang === "en" ? "Getting Started After Downloading" : "डाउनलोड केल्यानंतर सुरुवात कशी करावी"}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {content.installSteps.map((step, index) => (
              <div key={step.title} className="rounded-lg border p-4">
                <span className="text-sm font-bold text-primary">0{index + 1}</span>
                <p className="mt-2 font-semibold">{step.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-xl font-bold tracking-tight">
          {lang === "en" ? "Technical Details" : "तांत्रिक तपशील"}
        </h2>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            [content.techLabels.version, meta.version],
            [content.techLabels.minAndroid, meta.minAndroid],
            [content.techLabels.language, meta.language],
            [content.techLabels.region, meta.region],
            [content.techLabels.size, meta.size]
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</dt>
              <dd className="mt-1 text-sm font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="container flex flex-col gap-4 md:flex-row md:items-start">
          <ShieldCheck className="h-6 w-6 shrink-0 text-cyan-300" />
          <div>
            <h2 className="text-xl font-bold">{content.privacyHeading}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">{content.privacyBody}</p>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-xl font-bold tracking-tight">{content.faqHeading}</h2>
        <div className="mt-6 grid gap-4">
          {content.faqs.map((faq) => (
            <div key={faq.q} className="rounded-lg border p-4">
              <p className="font-semibold">{faq.q}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-6 text-muted-foreground">{content.supportNote}</p>
        <p className="mt-6 text-sm text-muted-foreground">{content.developedBy}</p>
      </section>
    </main>
  );
}

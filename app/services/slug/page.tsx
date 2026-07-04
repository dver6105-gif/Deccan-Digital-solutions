import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServiceBySlug, servicesDetail } from "@/lib/services-detail";
import { site } from "@/lib/site-data";

export function generateStaticParams() {
  return servicesDetail.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  const url = `${site.url}/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription
    }
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const url = `${site.url}/services/${service.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.metaDescription,
    provider: { "@type": "Organization", name: site.name },
    areaServed: "Maharashtra, India",
    url
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/#services` },
      { "@type": "ListItem", position: 3, name: service.name, item: url }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="border-b bg-white">
        <div className="container py-16">
          <p className="text-sm text-muted-foreground">
            <Link href="/#services" className="hover:text-foreground">
              Services
            </Link>{" "}
            / {service.name}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{service.name}</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">{service.tagline}</p>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700">{service.overview}</p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/#contact">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-xl font-bold tracking-tight">Why this approach</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {service.benefits.map((benefit) => (
            <p key={benefit} className="flex items-start gap-2 text-sm leading-6">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {benefit}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container">
          <h2 className="text-xl font-bold tracking-tight">Features</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {service.features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-xl font-bold tracking-tight">Process</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-5">
          {service.process.map((step, index) => (
            <div key={step.title} className="rounded-lg border p-4">
              <span className="text-sm font-bold text-primary">0{index + 1}</span>
              <p className="mt-2 font-semibold">{step.title}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container">
          <h2 className="text-xl font-bold tracking-tight">Technologies</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span key={tech} className="rounded-full border px-3 py-1 text-sm text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-14">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description={`Common questions about ${service.name.toLowerCase()}.`}
        />
        <div className="mx-auto mt-8 grid max-w-3xl gap-4">
          {service.faqs.map((faq) => (
            <div key={faq.q} className="rounded-lg border p-4">
              <p className="font-semibold">{faq.q}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="container flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-bold">Ready to talk about your {service.name.toLowerCase()} project?</h2>
          <Button asChild size="lg" variant="secondary">
            <Link href="/#contact">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

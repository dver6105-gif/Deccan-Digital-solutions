import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Download, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { MotionSection } from "@/components/motion-section";
import { PortfolioCard } from "@/components/portfolio-card";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { clientTypes, portfolio, processSteps, services, site, stats } from "@/lib/site-data";

export default function HomePage() {
  return (
    <main>
      <section className="overflow-hidden border-b bg-[linear-gradient(135deg,#f8fafc_0%,#ecfeff_48%,#fff7ed_100%)]">
        <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-10 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
          <div>
            <Badge variant="secondary" className="mb-5">
              Based in {site.location}
            </Badge>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Digital Solutions for Small Businesses
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              I build fast apps & websites that help local businesses get online and grow. Based in
              Kannad, Maharashtra.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#portfolio">
                  View My Work
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/downloads">
                  <Download className="h-5 w-5" />
                  Download Apps
                </Link>
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-primary pl-4">
                  <p className="text-2xl font-bold text-slate-950">{stat.value}</p>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <DashboardMockup />
        </div>
      </section>

      <MotionSection id="services" className="container py-20">
        <SectionHeading
          eyebrow="Services"
          title="Simple software that moves real work"
          description="Focused builds for small businesses that need practical systems, clean websites, and dependable hosting."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.title} href={`/services/${service.slug}`} className="block">
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{service.description}</p>
                  <p className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </MotionSection>

      <MotionSection id="portfolio" className="bg-white py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Portfolio"
            title="Live web apps and launch-ready systems"
            description="A sample of the dashboards, websites, and business tools available for client demos and production delivery."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((project) => (
              <PortfolioCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="process" className="container py-20">
        <SectionHeading
          eyebrow="Process"
          title="From idea to deployed product"
          description="A clear path for owners who want the result without managing the technical maze."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <Card key={step.title}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-accent-foreground">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-bold text-muted-foreground">0{index + 1}</span>
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-slate-950 py-16 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">Built for local teams</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Websites, dashboards, and app files in one dependable home.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {clientTypes.map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <item.icon className="h-5 w-5 text-amber-300" />
                <p className="mt-3 text-sm font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="contact" className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Badge variant="secondary">Start a project</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Tell me what you want to launch.</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Share your business goal, required screens, and timeline. I will reply with the next step,
              cost range, and a practical launch plan.
            </p>
            <div className="mt-8 grid gap-3 text-sm">
              {["Vercel free-tier friendly", "SEO and performance included", "Client download hosting supported"].map(
                (item) => (
                  <p key={item} className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    {item}
                  </p>
                )
              )}
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate-700">
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 font-medium hover:text-primary">
                <Mail className="h-4 w-4 text-primary" />
                {site.email}
              </a>
              <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-2 font-medium hover:text-primary">
                <Phone className="h-4 w-4 text-primary" />
                {site.phone}
              </a>
              <p className="flex items-center gap-2 font-medium">
                <MapPin className="h-4 w-4 text-primary" />
                {site.addressLine}
              </p>
              <p className="flex items-center gap-2 font-medium">
                <Clock className="h-4 w-4 text-primary" />
                {site.hours} &middot; {site.responseTime}
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </MotionSection>
    </main>
  );
}

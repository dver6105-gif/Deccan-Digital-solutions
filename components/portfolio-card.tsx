import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolio } from "@/lib/site-data";

const palettes: Record<string, string> = {
  billing: "from-cyan-500 via-slate-800 to-emerald-500",
  clinic: "from-rose-500 via-slate-800 to-sky-500",
  restaurant: "from-amber-500 via-stone-800 to-red-500",
  school: "from-indigo-500 via-slate-800 to-teal-500",
  crm: "from-lime-500 via-zinc-800 to-blue-500",
  storefront: "from-fuchsia-500 via-slate-800 to-orange-500"
};

type Project = (typeof portfolio)[number];

export function PortfolioCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden transition-transform hover:-translate-y-1">
      <div className={`h-44 bg-gradient-to-br ${palettes[project.image]} p-4`}>
        <div className="h-full rounded-md border border-white/20 bg-white/92 p-3">
          <div className="flex items-center justify-between">
            <div className="h-3 w-24 rounded bg-slate-900" />
            <div className="h-7 w-7 rounded-md bg-primary" />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="h-16 rounded bg-slate-100" />
            <div className="h-16 rounded bg-slate-100" />
            <div className="h-16 rounded bg-slate-100" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-2 rounded bg-slate-200" />
            <div className="h-2 w-3/4 rounded bg-slate-200" />
            <div className="h-2 w-1/2 rounded bg-slate-200" />
          </div>
        </div>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <Badge variant="secondary">{project.type}</Badge>
          <Link href={project.liveUrl} className="text-muted-foreground hover:text-foreground" aria-label={project.title}>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
        <CardTitle className="leading-7">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

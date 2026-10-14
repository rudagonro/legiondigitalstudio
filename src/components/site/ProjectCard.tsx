import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { CompactCard } from "./CompactCard";
import type { CaseStudy } from "@/lib/site-data";

export function ProjectCard({ project }: { project: CaseStudy }) {
  return (
    <CompactCard title={project.client} label={project.sector} summary={project.summary}
      preview={<span className="project-logo-frame"><img src={project.logo}
        alt={`Logo de ${project.client}`} width={200} height={112} loading="lazy" decoding="async" /></span>}>
      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
        {project.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
      </ul>
      <Link to="/trabajo/$slug/" params={{ slug: project.slug }} className="btn-base btn-outline mt-2">
        Ver el caso completo <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-base btn-primary">
        Visitar sitio <ExternalLink aria-hidden="true" className="h-4 w-4" />
      </a>
    </CompactCard>
  );
}

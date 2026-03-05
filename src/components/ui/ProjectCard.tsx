import { ExternalLink, Trophy } from "lucide-react";
import { Card } from "./card";
import { Badge } from "./badge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-accent/5 hover:shadow-2xl ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-3 flex items-start justify-between gap-2">
          <Badge variant="secondary">{project.category}</Badge>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label={`View ${project.title} on GitHub`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted">{project.description}</p>
        {project.achievement && (
          <div className="mb-4 flex items-center gap-2">
            <Trophy size={14} className="text-amber-400" />
            <Badge variant="achievement">{project.achievement}</Badge>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}

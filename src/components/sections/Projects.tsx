import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="section-reveal bg-surface/50 py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of impactful work across AI, ML, and data science"
        />
        <div className="stagger-children grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

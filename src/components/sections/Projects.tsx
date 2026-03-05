import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="section-reveal bg-surface/50 py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Sticky left heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
              My Work
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-purple-400" />
            <p className="mt-4 text-muted">
              A selection of impactful work across AI, ML, and data science.
            </p>
          </div>

          {/* Right project cards */}
          <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

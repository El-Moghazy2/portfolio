import { Brain, Sparkles, Code, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/skills";

const categoryIcons: Record<string, React.ElementType> = {
  "Machine Learning": Brain,
  "Generative AI": Sparkles,
  "Languages & Tools": Code,
  "Data & Business": BarChart3,
};

export function Skills() {
  return (
    <section id="skills" className="section-reveal bg-surface/30 py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Sticky left heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
              What I Work With
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Skills</h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-purple-400" />
          </div>

          {/* Right skills grid */}
          <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {skillCategories.map((cat) => {
              const Icon = categoryIcons[cat.name] || Code;
              return (
                <div
                  key={cat.name}
                  className="rounded-xl border border-white/5 border-t-2 border-t-accent/50 bg-surface p-6 transition-colors hover:border-accent/30"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <Icon size={20} className="text-accent" />
                    <h3 className="font-semibold text-white">{cat.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <Badge key={skill} className="transition-colors hover:border-accent/40">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

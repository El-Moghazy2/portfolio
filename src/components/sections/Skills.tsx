import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-reveal py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Skills" subtitle="Technologies and areas of expertise" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat) => (
            <Card key={cat.name} className="text-center">
              <h3 className="mb-4 font-semibold text-white">{cat.name}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

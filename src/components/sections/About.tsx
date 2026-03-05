import { Award, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Badge } from "@/components/ui/badge";
import { profile, awards, education } from "@/data/profile";
import { experience } from "@/data/experience";

export function About() {
  return (
    <section id="about" className="section-reveal py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="About Me" subtitle="My journey in data science and AI" />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: bio + awards + education */}
          <div>
            <p className="mb-8 leading-relaxed text-muted">{profile.summary}</p>

            {/* Awards */}
            <div className="mb-8">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                <Award size={18} className="text-amber-400" />
                Awards & Recognition
              </h3>
              <div className="flex flex-wrap gap-2">
                {awards.map((a) => (
                  <Badge key={a.title} variant="achievement">
                    {a.title}
                    {a.detail ? ` - ${a.detail}` : ""}
                    {a.year ? ` (${a.year})` : ""}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                <GraduationCap size={18} className="text-accent" />
                Education
              </h3>
              <div className="space-y-3">
                {education.map((e) => (
                  <div key={e.degree}>
                    <p className="font-medium text-white">{e.degree}</p>
                    <p className="text-sm text-muted">
                      {e.school} &middot; {e.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: experience timeline */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Experience</h3>
            <div>
              {experience.map((exp, i) => (
                <TimelineItem
                  key={exp.company}
                  item={exp}
                  isLast={i === experience.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

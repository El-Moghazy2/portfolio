import { Award, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { profile, awards, education } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="section-reveal py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Sticky left heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
              Who I Am
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">About Me</h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-purple-400" />
          </div>

          {/* Right content */}
          <div className="lg:col-span-8">
            <p className="mb-10 leading-relaxed text-muted">{profile.summary}</p>

            {/* Awards */}
            <div className="mb-10">
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
        </div>
      </div>
    </section>
  );
}

import { Mic, Users } from "lucide-react";
import { talks, leadership } from "@/data/volunteering";

export function Volunteering() {
  return (
    <section id="volunteering" className="section-reveal py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Sticky left heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
              Giving Back
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Volunteering & Leadership
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-purple-400" />
          </div>

          {/* Right content */}
          <div className="space-y-10 lg:col-span-8">
            {/* Tech Talks */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                <Mic size={18} className="text-accent" />
                Tech Talks
              </h3>
              <div className="stagger-children space-y-3">
                {talks.map((t) => (
                  <div
                    key={t.event}
                    className="rounded-xl border border-white/5 bg-surface p-4 transition-colors hover:border-accent/30"
                  >
                    <p className="font-medium text-white">{t.topic}</p>
                    <p className="text-sm text-muted">{t.event}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                <Users size={18} className="text-accent" />
                Leadership
              </h3>
              <div className="stagger-children space-y-4">
                {leadership.map((l) => (
                  <div
                    key={l.organization}
                    className="group rounded-xl border border-white/5 bg-surface p-6 transition-colors hover:border-accent/30"
                  >
                    <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="font-semibold text-white">{l.role}</h4>
                        <p className="text-sm font-medium text-accent-light">
                          {l.organization}
                        </p>
                      </div>
                      <span className="font-mono text-xs rounded-full bg-surface-light px-3 py-1 text-muted">
                        {l.period}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {l.bullets.map((b, i) => (
                        <li key={i} className="text-sm text-muted">
                          {b}
                        </li>
                      ))}
                    </ul>
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

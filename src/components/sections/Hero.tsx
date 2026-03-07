import { ArrowDown, Github, Linkedin, Mail, Calendar, Mic, Users, GraduationCap, Trophy, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const stats = [
  { icon: Calendar, value: "5+", label: "Years Experience" },
  { icon: Mic, value: "6+", label: "Public Talks" },
  { icon: Users, value: "100+", label: "Students Mentored" },
  { icon: GraduationCap, value: "MSc", label: "Data Science & AI" },
  { icon: Trophy, value: "4", label: "Awards" },
  { icon: Presentation, value: "80+", label: "Sessions Delivered" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 lg:pt-0">
      {/* Background gradient orbs */}
      <div className="gradient-orb -left-40 -top-40" />
      <div className="gradient-orb -bottom-40 -right-40" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12">
        {/* Left column */}
        <div className="w-full text-center lg:col-span-7 lg:text-left">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            Welcome to my portfolio
          </p>
          <h1 className="mb-2 text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mb-6 bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
            {profile.title}
          </p>
          <p className="mx-auto mb-8 max-w-xl text-muted lg:mx-0">{profile.tagline}</p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button asChild size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-5 lg:justify-start">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-white"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-muted transition-colors hover:text-white"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Right column — stats panel (desktop only) */}
        <div className="w-full lg:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-xl border border-white/5 bg-surface/80 p-6 backdrop-blur transition-all hover:border-accent/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
              >
                <stat.icon size={20} className="mb-3 text-accent" />
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted lg:block"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}

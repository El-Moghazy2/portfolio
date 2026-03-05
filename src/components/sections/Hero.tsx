import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background gradient orbs */}
      <div className="gradient-orb -left-40 -top-40" />
      <div className="gradient-orb -bottom-40 -right-40" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Welcome to my portfolio
        </p>
        <h1 className="mb-2 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mb-6 bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
          {profile.title}
        </p>
        <p className="mx-auto mb-8 max-w-xl text-muted">{profile.summary}</p>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-5">
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

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}

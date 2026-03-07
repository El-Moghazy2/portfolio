import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abdelrhman-elmoghazy",
    href: profile.linkedin,
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/El-Moghazy2",
    href: profile.github,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-reveal bg-surface/30 py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
              Let's Connect
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Get in Touch</h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-purple-400" />
            <p className="mt-4 text-muted">
              Interested in working together? Feel free to reach out through any of these channels.
            </p>
          </div>

          {/* Right cards */}
          <div className="stagger-children space-y-4 lg:col-span-8">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-xl border border-white/5 bg-surface px-4 py-5 transition-colors hover:border-accent/30 sm:px-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <link.icon size={20} className="text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-white">{link.label}</p>
                  <p className="break-all text-sm text-muted">{link.value}</p>
                </div>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-muted transition-transform group-hover:translate-x-1"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

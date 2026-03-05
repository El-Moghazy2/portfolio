import { Mail, Linkedin, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="section-reveal py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <SectionHeading
          title="Get in Touch"
          subtitle="Interested in working together? Let's connect."
        />
        <div className="flex flex-col items-center gap-6">
          <Button asChild size="lg">
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} />
              {profile.email}
            </a>
          </Button>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="default">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="default">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

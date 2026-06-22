import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyHireMe } from "@/components/WhyHireMe";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { ClientsStrip } from "@/components/ClientsStrip";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { Github, Linkedin, Mail } from "lucide-react";
import { socials, personal } from "@/data/portfolio";

const Divider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
);

const Index = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <WhyHireMe />
      <Divider />
      <Services />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <ClientsStrip />
      <Divider />
      <Experience />
      <Divider />
      <Testimonials />
      <Divider />
      <Contact />

      <footer className="py-10 px-6 bg-background border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-5">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href={socials.email}
                className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              Crafted with <span className="text-primary">💙</span> by {personal.name} — 2026
            </p>
            <p className="text-muted-foreground/60 text-xs">
              Open to remote opportunities worldwide
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;

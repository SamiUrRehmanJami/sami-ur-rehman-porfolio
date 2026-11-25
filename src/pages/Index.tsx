import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyHireMe } from "@/components/WhyHireMe";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { AiTools } from "@/components/AiTools";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { Github, Linkedin, Mail } from "lucide-react";
import { socials, personal } from "@/data/portfolio";

const Index = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyHireMe />
      <Projects />
      <AiTools />
      <Experience />
      <Skills />
      <Testimonials />
      <Contact />

      {/* Footer */}
      <footer className="bg-background border-t border-border py-14 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-[10px] bg-foreground flex items-center justify-center">
                  <span className="text-sm font-bold text-background tracking-tight">SR</span>
                </div>
                <span className="font-bold text-foreground tracking-tight">{personal.name}</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
                Senior full-stack engineer building production-grade web apps and AI products.
                Lahore, Pakistan — remote worldwide.
              </p>
              <div className="mt-5 flex gap-2.5">
                <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="w-9 h-9 rounded-[10px] border border-border grid place-items-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                  <Github className="w-[18px] h-[18px]" />
                </a>
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-9 h-9 rounded-[10px] border border-border grid place-items-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                  <Linkedin className="w-[18px] h-[18px]" />
                </a>
                <a href={socials.email} aria-label="Email"
                  className="w-9 h-9 rounded-[10px] border border-border grid place-items-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                  <Mail className="w-[18px] h-[18px]" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-4">Navigate</h4>
              <nav className="flex flex-col gap-2.5 text-sm">
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
                <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Work</a>
                <a href="#ai-tools" className="text-muted-foreground hover:text-foreground transition-colors">AI Tools</a>
                <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a>
              </nav>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-4">Get in touch</h4>
              <nav className="flex flex-col gap-2.5 text-sm">
                <a href={`mailto:${personal.email}`} className="text-muted-foreground hover:text-foreground transition-colors">{personal.email}</a>
                <a href={`tel:${personal.phoneTel}`} className="text-muted-foreground hover:text-foreground transition-colors">{personal.phone}</a>
                <a href={personal.calendlyUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Book a call</a>
              </nav>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-sm text-muted-foreground/70">
            <span>© 2026 {personal.name}.</span>
            <span>Open to remote opportunities worldwide</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;

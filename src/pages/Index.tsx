import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      <footer className="py-8 px-6 bg-background border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            Crafted with <span className="text-primary">💙</span> by Sami Ur Rehman — 2025
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;

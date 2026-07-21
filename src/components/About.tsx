import { Code2, Heart, Trophy, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/portfolio";

export const About = () => {    
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(                
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: Code2, label: "Code Mentor", color: "text-primary" },
    { icon: Zap, label: "Innovation Driver", color: "text-accent" },
    { icon: Heart, label: "Leadership", color: "text-primary" },
    { icon: Trophy, label: "Problem Solver", color: "text-accent" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 sm:py-16 px-4 sm:px-6 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Who I Am
            </h2>
            <div className="h-1 w-24 bg-gradient-primary rounded-full" />

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Senior Full-Stack Engineer with 6+ years of experience building production SaaS
              platforms, B2B marketplaces, and AI-powered products that real users rely on every day.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Specializing in{" "}
              <span className="text-primary font-semibold">MERN</span> and{" "}
              <span className="text-primary font-semibold">MEAN</span> stacks, I've shipped complete
              web applications — from architecture to deployment — for US-based B2B platforms and AI
              SaaS products used across multiple markets. Currently at SeeBiz, I build and own
              features across three simultaneous production platforms.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              From architecting scalable backend systems and integrating LLM/RAG AI pipelines to
              crafting engaging frontend interfaces, I bring end-to-end ownership to every project.
              I have a remote-first mindset with 5+ years collaborating with US teams across time zones.
              ...
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-card/50 backdrop-blur-glass border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-glass">
                <div className="grid grid-cols-2 gap-6">
                  {highlights.map((item, index) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-secondary/30 backdrop-blur-sm hover:bg-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="p-4 rounded-full bg-gradient-primary group-hover:animate-pulse-glow">
                        <item.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <span className={`text-sm font-semibold text-center ${item.color}`}>
                        {item.label}  
                      </span>
                    </div>
                  ))}
                </div>



                <div className="mt-8 pt-8 border-t border-border">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-3xl font-bold text-primary">{stat.value}</p>
                        <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                        <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

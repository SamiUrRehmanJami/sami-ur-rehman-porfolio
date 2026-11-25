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
    { icon: Code2, label: "Code Mentor" },
    { icon: Zap, label: "Innovation Driver" },
    { icon: Heart, label: "Leadership" },
    { icon: Trophy, label: "Problem Solver" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-muted"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`space-y-5 transition-all duration-1000 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <span className="eyebrow">About me</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Who I am<span className="text-primary">.</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I'm a Senior Full-Stack Engineer with 6+ years of experience building production SaaS
              platforms, B2B marketplaces, and AI-powered products that real users rely on every day.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Specializing in{" "}
              <span className="text-foreground font-semibold">MERN</span> and{" "}
              <span className="text-foreground font-semibold">MEAN</span> stacks, I've shipped complete
              web applications — from architecture to deployment — for US-based B2B platforms and AI
              SaaS products. Currently at SeeBiz, I build and own features across three simultaneous
              production platforms.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              From architecting scalable backend systems and integrating LLM/RAG AI pipelines to
              crafting engaging frontend interfaces, I bring end-to-end ownership to every project.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-glass">
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-muted border border-border hover:-translate-y-1 hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className="p-3.5 rounded-full bg-primary/10 text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-semibold text-center text-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl font-bold text-primary tracking-tight">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

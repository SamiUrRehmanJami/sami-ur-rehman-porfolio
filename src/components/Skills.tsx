import { useEffect, useRef, useState } from "react";
import { skillCategories } from "@/data/portfolio";

export const Skills = () => {
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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-10 sm:mb-12 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Toolbox
          </h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <div className="bg-card/50 backdrop-blur-glass border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-glass hover:shadow-glow transition-all duration-300 h-full">
                <h3 className="text-lg font-bold text-primary mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary text-foreground border border-border hover:border-primary hover:text-primary transition-colors duration-200 cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-10 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-muted-foreground italic text-sm">
            "Continuously learning and evolving with the ever-changing tech landscape"
          </p>
        </div>
      </div>
    </section>
  );
};

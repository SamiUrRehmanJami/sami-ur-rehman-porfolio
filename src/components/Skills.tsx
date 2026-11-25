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
      className="py-20 sm:py-28 px-4 sm:px-6 bg-muted"
    >
      <div className="container mx-auto">
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="eyebrow">Toolbox</span>
          <h2 className="mt-4 mb-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Skills &amp; stack<span className="text-primary">.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            The technologies I reach for across the stack, day to day.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-card border border-border rounded-2xl p-6 sm:p-7 shadow-[0_1px_2px_rgba(17,17,17,.05)] transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${categoryIndex * 130}ms` }}
            >
              <h3 className="text-base font-bold text-foreground mb-5 flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-2 rounded-[10px] text-sm font-medium bg-card text-foreground border border-border shadow-[0_1px_2px_rgba(17,17,17,.04)] hover:border-primary hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

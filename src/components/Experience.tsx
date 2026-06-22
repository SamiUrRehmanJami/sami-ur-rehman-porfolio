import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/data/portfolio";

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of growth, learning, and impactful contributions
          </p>
        </div>

        {/* Timeline — vertical left-aligned on all screens */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical spine */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

          {experiences.map((exp, index) => (
            <div
              key={exp.role + exp.company}
              className={`relative pl-16 sm:pl-24 mb-10 sm:mb-12 transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 sm:left-2 top-5 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow flex-shrink-0 z-10">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>

              {/* Card */}
              <div className="bg-card/70 backdrop-blur-glass border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-glass hover:shadow-glow transition-all duration-500 group hover:border-primary/30">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                      <p className="text-base sm:text-lg text-primary font-semibold">
                        {exp.company}
                      </p>
                      {exp.type && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                          {exp.type}
                        </span>
                      )}
                    </div>
                    <p className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground flex-shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="space-y-1.5">
                  <p className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wide">
                    Key Achievements
                  </p>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

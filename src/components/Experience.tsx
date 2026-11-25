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
      className="py-20 sm:py-28 px-4 sm:px-6 bg-background"
    >
      <div className="container mx-auto">
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="eyebrow">Journey</span>
          <h2 className="mt-4 mb-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Where I've worked<span className="text-primary">.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Six-plus years building and scaling production software — most recent first.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-14 max-w-3xl mx-auto relative">
          <div className="absolute left-6 sm:left-7 top-2 bottom-2 w-px bg-border" />

          {experiences.map((exp, index) => (
            <div
              key={exp.role + exp.company}
              className={`relative pl-16 sm:pl-20 mb-8 transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 180}ms` }}
            >
              {/* dot */}
              <div className="absolute left-0 sm:left-1 top-6 w-12 h-12 rounded-full bg-foreground flex items-center justify-center z-10">
                <Briefcase className="w-5 h-5 text-background" />
              </div>

              {/* card */}
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-7 shadow-[0_1px_2px_rgba(17,17,17,.05)] hover:shadow-glow transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <p className="text-[0.95rem] text-primary font-semibold">
                        {exp.company}
                      </p>
                      {exp.type && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                          {exp.type}
                        </span>
                      )}
                    </div>
                    <p className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mt-1.5">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground flex-shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-[0.95rem] text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-1.5">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef, useState } from "react";
import { platforms } from "@/data/portfolio";

export const ClientsStrip = () => {
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
      id="clients"
      ref={sectionRef}
      className="py-16 px-6 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Platforms I've Built
          </h2>
          <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
        </div>

        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-200 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {platforms.map((name, index) => (
            <span
              key={name}
              className="px-6 py-3 rounded-full bg-card/60 border border-primary/20 text-foreground font-semibold text-sm backdrop-blur-glass shadow-glass hover:border-primary hover:text-primary hover:shadow-glow transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef, useState } from "react";
import { whyHireMe } from "@/data/portfolio";

export const WhyHireMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);


  return (
    <section
      id="why-hire-me"
      ref={sectionRef}
      className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Hire Me
          </h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What international clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {whyHireMe.map((card, index) => (
            <div
              key={card.title}
              className={`transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="group bg-card/60 backdrop-blur-glass border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-glass hover:shadow-glow hover:border-primary/40 transition-all duration-500 h-full hover:scale-[1.02]">
                <div className="flex items-start gap-5">
                  <div className="text-4xl flex-shrink-0 mt-1">{card.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
      className="py-20 sm:py-28 px-4 sm:px-6 bg-muted"
    >
      <div className="container mx-auto">
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="eyebrow">Why work with me</span>
          <h2 className="mt-4 mb-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            A focused engineering partner<span className="text-primary">.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Clear communication, full ownership, and work that's live and serving real users — not
            just slideware.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyHireMe.map((card, index) => (
            <div
              key={card.title}
              className={`bg-card border border-border rounded-2xl p-6 shadow-[0_1px_2px_rgba(17,17,17,.05)] hover:-translate-y-1 hover:shadow-glow transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-muted border border-border grid place-items-center text-xl mb-4">
                {card.icon}
              </div>
              <h3 className="text-[1.15rem] font-bold text-foreground mb-2.5 leading-snug">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

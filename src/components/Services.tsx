import { useEffect, useRef, useState } from "react";
import { services } from "@/data/portfolio";

export const Services = () => {
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

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-background"
    >
      <div className="container mx-auto">
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="eyebrow">Services</span>
          <h2 className="mt-4 mb-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            What I help teams build<span className="text-primary">.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            From MVP to enterprise scale — full-stack product engineering with AI baked in where it
            actually earns its place.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-card border border-border rounded-2xl p-6 shadow-[0_1px_2px_rgba(17,17,17,.05)] hover:-translate-y-1 hover:shadow-glow hover:border-border transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="inline-grid place-items-center min-w-[40px] h-[26px] px-2 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide mb-5">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[1.15rem] font-bold text-foreground mb-2.5 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background font-semibold hover:-translate-y-0.5 hover:shadow-glow transition-all duration-200"
          >
            Discuss your project →
          </button>
        </div>
      </div>
    </section>
  );
};

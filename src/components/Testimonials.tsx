import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/portfolio";

const avatarColors = ["hsl(20 59% 48%)", "#16a34a", "#6366f1", "#0ea5e9"];

export const Testimonials = () => {
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
      id="testimonials"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-background"
    >
      <div className="container mx-auto">
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-4 mb-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            What clients say<span className="text-primary">.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            A few words from people I've shipped with. More references available on request.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`flex flex-col bg-card border border-border rounded-2xl p-7 shadow-[0_1px_2px_rgba(17,17,17,.05)] hover:shadow-glow transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <div className="text-primary tracking-widest text-sm mb-4">★★★★★</div>
              <p className="text-[0.98rem] text-foreground leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <span
                  className="w-10 h-10 rounded-full grid place-items-center font-bold text-sm text-white"
                  style={{ background: avatarColors[index % avatarColors.length] }}
                >
                  {t.initials}
                </span>
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">Client — US</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

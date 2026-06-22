import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
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
      className="py-12 sm:py-16 px-4 sm:px-6 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I Build
          </h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Services I offer to startups and businesses worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-10 group-hover:opacity-25 transition-opacity duration-500`}
                />
                <div className="relative bg-card/60 backdrop-blur-glass border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-glass hover:shadow-glow hover:border-primary/40 transition-all duration-500 h-full hover:scale-[1.02]">
                  <div className="text-4xl mb-5">{service.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-14 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <Button
            size="lg"
            className="bg-gradient-primary text-primary-foreground font-semibold px-10 py-6 text-lg rounded-full shadow-glow hover:shadow-[0_0_60px_hsl(186_100%_42%_/_0.6)] transition-all duration-300 hover:scale-105"
            onClick={scrollToContact}
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

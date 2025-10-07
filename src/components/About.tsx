import { Code2, Heart, Trophy, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: Code2, label: "Code Mentor", color: "text-primary" },
    { icon: Zap, label: "Innovation Driver", color: "text-accent" },
    { icon: Heart, label: "Leadership", color: "text-primary" },
    { icon: Trophy, label: "Problem Solver", color: "text-accent" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Who I Am
            </h2>
            <div className="h-1 w-24 bg-gradient-primary rounded-full" />
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer with extensive experience in building
              scalable web applications using modern technologies. My journey in software
              development has been driven by a love for creating solutions that make a
              real difference.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Specializing in <span className="text-primary font-semibold">MEAN</span> and{" "}
              <span className="text-primary font-semibold">MERN</span> stacks, I bring ideas
              to life through clean code, intuitive design, and seamless user experiences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              From architecting robust backend systems to crafting engaging frontend
              interfaces, I thrive on the challenge of turning complex requirements
              into elegant solutions.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-card/50 backdrop-blur-glass border border-border rounded-3xl p-8 shadow-glass">
                <div className="grid grid-cols-2 gap-6">
                  {highlights.map((item, index) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-secondary/30 backdrop-blur-sm hover:bg-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="p-4 rounded-full bg-gradient-primary group-hover:animate-pulse-glow">
                        <item.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <span className={`text-sm font-semibold text-center ${item.color}`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-primary">5+</p>
                      <p className="text-sm text-muted-foreground mt-1">Years Exp</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">50+</p>
                      <p className="text-sm text-muted-foreground mt-1">Projects</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">100%</p>
                      <p className="text-sm text-muted-foreground mt-1">Dedication</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

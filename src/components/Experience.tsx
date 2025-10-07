import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Seebiz Inc.",
      period: "2022 - Present",
      description:
        "Leading development of enterprise web applications using MEAN and MERN stacks. Architecting scalable solutions and mentoring junior developers.",
      achievements: [
        "Reduced application load time by 40%",
        "Led team of 5 developers on major projects",
        "Implemented CI/CD pipelines",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects using Angular, React, and Node.js. Collaborated with design teams to create intuitive user interfaces.",
      achievements: [
        "Delivered 15+ successful projects",
        "Improved code quality through testing",
        "Optimized database queries for better performance",
      ],
    },
    {
      role: "Frontend Developer",
      company: "StartUp Ventures",
      period: "2018 - 2020",
      description:
        "Built responsive web applications with modern JavaScript frameworks. Focused on creating engaging user experiences and pixel-perfect implementations.",
      achievements: [
        "Created reusable component library",
        "Improved mobile responsiveness",
        "Collaborated with UX designers",
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of growth, learning, and impactful contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.role}
              className={`relative transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              } ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className={`flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 mb-12`}>
                <div className="hidden md:block flex-1" />
                
                <div className="relative">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary to-transparent" />
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                    <Briefcase className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-card/70 backdrop-blur-glass border border-border rounded-3xl p-8 shadow-glass hover:shadow-glow transition-all duration-500 group hover:scale-[1.02]">
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-primary font-semibold mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Key Achievements:</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
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

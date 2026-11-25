import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

const monogram = (title: string) => {
  const first = title.split(/[\s—–-]+/).filter(Boolean)[0] ?? title;
  return first.slice(0, 2).toUpperCase();
};

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-background"
    >
      <div className="container mx-auto">
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="eyebrow">Selected Work</span>
          <h2 className="mt-4 mb-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Things I've built<span className="text-primary">.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Production systems — AI platforms, marketplaces and real-time SaaS — shipped for teams
            that needed them to actually work.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(17,17,17,.05)] hover:-translate-y-1 hover:shadow-glow transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              {/* thumbnail */}
              <div className="relative h-40 bg-muted border-b border-border flex items-center justify-center overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.1]`} />
                {/* monogram fallback (behind the banner image) */}
                <span className="relative text-5xl font-bold tracking-tighter text-foreground/15 select-none">
                  {monogram(project.title)}
                </span>
                {/* live-site banner image (hides itself if it fails to load) */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
                {project.badge && (
                  <span className="absolute top-3.5 left-3.5 z-10 text-xs font-semibold text-foreground bg-background/90 border border-border px-2.5 py-1 rounded-full shadow-[0_1px_2px_rgba(17,17,17,.05)]">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* body */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-[1.1rem] font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-muted-foreground bg-muted border border-border px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                  >
                    View live
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-muted-foreground/70">
                    Private build
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

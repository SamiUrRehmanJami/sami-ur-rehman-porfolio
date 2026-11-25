import { useEffect, useRef, useState } from "react";
import { aiTools } from "@/data/portfolio";

// Monochrome, brand-style marks drawn inline so they adopt the theme color.
const ToolLogo = ({ logo, className }: { logo: string; className?: string }) => {
  switch (logo) {
    case "claude":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M12 12L21.5 12M12 12L20.23 16.75M12 12L16.75 20.23M12 12L12 21.5M12 12L7.25 20.23M12 12L3.77 16.75M12 12L2.5 12M12 12L3.77 7.25M12 12L7.25 3.77M12 12L12 2.5M12 12L16.75 3.77M12 12L20.23 7.25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "openai":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="4" y="9.5" width="16" height="5" rx="2.5" />
            <rect x="4" y="9.5" width="16" height="5" rx="2.5" transform="rotate(60 12 12)" />
            <rect x="4" y="9.5" width="16" height="5" rx="2.5" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );
    case "gemini":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M12 2c.35 5.1 4.9 9.65 10 10-5.1.35-9.65 4.9-10 10-.35-5.1-4.9-9.65-10-10 5.1-.35 9.65-4.9 10-10z"
            fill="currentColor"
          />
        </svg>
      );
    case "windsurf":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M3 8h11a3 3 0 1 0-3-3" />
            <path d="M3 12h15a3 3 0 1 1-3 3" />
            <path d="M3 16h9" />
          </g>
        </svg>
      );
    case "cursor":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M5 3l14 7.2-6.1 1.9-1.9 6.1z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
};

export const AiTools = () => {
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
      id="ai-tools"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-muted"
    >
      <div className="container mx-auto">
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="eyebrow">Creative Edge</span>
          <h2 className="mt-4 mb-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            AI-assisted development<span className="text-primary">.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            I pair strong engineering fundamentals with a modern AI toolchain — shipping faster
            without losing control of the codebase.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {aiTools.map((tool, index) => (
            <div
              key={tool.name}
              className={`group bg-card border border-border rounded-2xl p-6 shadow-[0_1px_2px_rgba(17,17,17,.05)] hover:-translate-y-1 hover:shadow-glow transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-muted border border-border grid place-items-center text-foreground group-hover:text-primary transition-colors mb-4">
                <ToolLogo logo={tool.logo} className="w-6 h-6" />
              </div>
              <h3 className="text-[1.1rem] font-bold text-foreground mb-2">
                {tool.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
            </div>
          ))}

          {/* closing accent card */}
          <div
            className={`rounded-2xl p-6 shadow-glow transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ background: "hsl(20 8% 11%)", animationDelay: `${aiTools.length * 110}ms` }}
          >
            <div className="w-11 h-11 rounded-xl grid place-items-center mb-4"
              style={{ background: "rgba(255,255,255,.08)", color: "#e9b48f" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" />
              </svg>
            </div>
            <h3 className="text-[1.1rem] font-bold text-white mb-2">Engineering first</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.72)" }}>
              AI accelerates the work — the architecture, review and judgment stay human. Clean,
              maintainable code every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { personal, socials } from "@/data/portfolio";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number; y: number; size: number;
      speedX: number; speedY: number; opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 130, 235, ${p.opacity})`;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-0" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="animate-fade-in-up space-y-5 sm:space-y-6">

          {/* Profile photo */}
          <div className="flex justify-center">
            {/* TODO: Replace with your real photo */}
            <img
              src="/placeholder-avatar.jpg"
              alt="Sami Ur Rehman"
              className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover ring-2 ring-primary shadow-glow"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = "none";
              }}
            />
          </div>

          <div className="inline-block">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-foreground to-primary bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent mb-3 leading-tight">
              {personal.name}
            </h1>
            <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-primary rounded-full shadow-glow" />
          </div>

          {/* Availability badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {personal.availability}
            </span>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90">
            {personal.title}
          </p>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light px-2">
            {personal.subtitle}
          </p>

          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto italic px-4">
            "{personal.tagline}"
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center pt-2 sm:pt-4 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-5 text-base rounded-full shadow-glow hover:shadow-[0_0_60px_hsl(224_85%_65%_/_0.6)] transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-primary/50 text-foreground hover:bg-primary/10 backdrop-blur-sm font-semibold px-8 py-5 text-base rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-primary/50 text-foreground hover:bg-primary/10 backdrop-blur-sm font-semibold px-8 py-5 text-base rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => {
                const link = document.createElement("a");
                link.href = personal.cvUrl;
                link.download = "Sami-Ur-Rehman.pdf";
                link.click();
              }}
            >
              Download CV
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-5 text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
              onClick={() => window.open(personal.calendlyUrl, "_blank")}
            >
              Book a Call
            </Button>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 justify-center pt-1 sm:pt-2">
            <a href={socials.github} target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow">
              <Github className="w-5 h-5 text-foreground" />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow">
              <Linkedin className="w-5 h-5 text-foreground" />
            </a>
            <a href={socials.email}
              className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow">
              <Mail className="w-5 h-5 text-foreground" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-10"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
      </button>
    </section>
  );
};

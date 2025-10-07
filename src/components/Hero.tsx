import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

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
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
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

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 194, 215, ${particle.opacity})`;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-0" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up space-y-8">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-foreground to-primary bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent mb-4">
              Sami Ur Rehman
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-primary rounded-full shadow-glow" />
          </div>

          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90">
            Full Stack Developer
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            MEAN & MERN Stack Specialist
          </p>

          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto italic">
            "Transforming complex ideas into intuitive digital experiences"
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-glow hover:shadow-[0_0_60px_hsl(186_100%_42%_/_0.6)] transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 text-foreground hover:bg-primary/10 backdrop-blur-sm font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 text-foreground hover:bg-primary/10 backdrop-blur-sm font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '../public/Sami-Ur-Rehman.pdf';
                link.download = '../public/Sami-Ur-Rehman.pdf';
                link.click();
              }}
            >
              Download CV
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            {/* <a
              href="https://github.com/samiurrehman"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Github className="w-6 h-6 text-foreground" />
            </a> */}
            <a
              href="https://www.linkedin.com/in/sami-ur-rehman-jami-760b51175/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Linkedin className="w-6 h-6 text-foreground" />
            </a>
            <a
              href="mailto:samiakbar680@gmail.com"
              className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Mail className="w-6 h-6 text-foreground" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-10"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

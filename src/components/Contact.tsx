import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { personal } from "@/data/portfolio";

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-muted"
    >
      <div className="container mx-auto">
        {/* Dark CTA card */}
        <div
          className={`relative overflow-hidden rounded-[28px] p-8 sm:p-14 mb-14 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ background: "hsl(20 8% 11%)" }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(600px 300px at 85% 10%, hsl(20 59% 48% / 0.28), transparent 55%)" }}
          />
          <div className="relative max-w-xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.14em] px-3.5 py-1.5 rounded-full" style={{ color: "#e9b48f", background: "rgba(255,255,255,.08)" }}>
              Available for collaboration
            </span>
            <h2 className="mt-4 mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Let's work <span style={{ color: "#e9b48f" }}>together.</span>
            </h2>
            <p className="text-base sm:text-lg mb-8" style={{ color: "rgba(255,255,255,.72)" }}>
              Tell me what you're building. I'll help turn it into a focused, production-ready web app
              or AI product — shipped, scaled, and actually serving users.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-foreground font-semibold hover:-translate-y-0.5 transition-all duration-200"
              >
                Email me →
              </a>
              <button
                onClick={() => window.open(personal.calendlyUrl, "_blank")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white border transition-all duration-200 hover:-translate-y-0.5"
                style={{ borderColor: "rgba(255,255,255,.28)", background: "transparent" }}
              >
                Book a call
              </button>
            </div>
          </div>
        </div>

        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 mb-3 text-3xl sm:text-4xl font-bold text-foreground">
            Let's build something<span className="text-primary">.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Have a project in mind? Send a message and I'll get back to you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-glass h-full">
              <h3 className="text-xl font-bold text-foreground mb-6">Get in touch</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                    Your Name
                  </label>
                  <Input id="name" placeholder="Your Name" className="bg-muted border-border focus:border-primary transition-colors" required />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="you@example.com" className="bg-muted border-border focus:border-primary transition-colors" required />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell me about your project..." className="bg-muted border-border focus:border-primary transition-colors min-h-[150px]" required />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-foreground text-background font-semibold py-6 rounded-full hover:bg-foreground/90 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Info */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="space-y-5 h-full flex flex-col justify-center">
              <ContactCard icon={<Mail className="w-5 h-5" />} title="Email">
                <a href={`mailto:${personal.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {personal.email}
                </a>
              </ContactCard>

              <ContactCard icon={<Phone className="w-5 h-5" />} title="Phone">
                <a href={`tel:${personal.phoneTel}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {personal.phone}
                </a>
              </ContactCard>

              <ContactCard icon={<MapPin className="w-5 h-5" />} title="Location">
                <p className="text-muted-foreground">{personal.location}</p>
                <p className="text-sm text-muted-foreground/70 mt-1">{personal.locationSub}</p>
              </ContactCard>

              <div className="p-6 bg-card border border-border rounded-2xl">
                <p className="text-muted-foreground italic text-center">{personal.closingQuote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-card border border-border rounded-2xl p-6 shadow-[0_1px_2px_rgba(17,17,17,.05)] hover:shadow-glow transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10 text-primary">{icon}</div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        {children}
      </div>
    </div>
  </div>
);

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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
      className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Build Something
          </h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="bg-card/70 backdrop-blur-glass border border-border rounded-3xl p-8 shadow-glass h-full">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Sami Ur Rehman"
                    className="bg-secondary/50 border-border focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="sami@example.com"
                    className="bg-secondary/50 border-border focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="bg-secondary/50 border-border focus:border-primary transition-colors min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary text-primary-foreground font-semibold py-6 rounded-full shadow-glow hover:shadow-[0_0_60px_hsl(186_100%_42%_/_0.6)] transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="space-y-6 h-full flex flex-col justify-center">
              <div className="bg-card/70 backdrop-blur-glass border border-border rounded-3xl p-6 shadow-glass hover:shadow-glow transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gradient-primary group-hover:animate-pulse-glow">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href="mailto:sami@example.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      samiakbar680@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card/70 backdrop-blur-glass border border-border rounded-3xl p-6 shadow-glass hover:shadow-glow transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gradient-primary group-hover:animate-pulse-glow">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +92 (306) 6122021
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card/70 backdrop-blur-glass border border-border rounded-3xl p-6 shadow-glass hover:shadow-glow transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gradient-primary group-hover:animate-pulse-glow">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-card/50 backdrop-blur-glass border border-primary/20 rounded-3xl">
                <p className="text-muted-foreground italic text-center">
                  "Open to exciting opportunities and collaborations. Let's create something amazing together!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

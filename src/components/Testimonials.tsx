import { Button } from "@/components/ui/button";

export const Testimonials = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-glass hover:shadow-glow hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow">
              <span className="text-2xl">🤝</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              References Available on Request
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I work with clients who value quality over speed. Reach out and I'll connect you directly with past collaborators.
            </p>
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-5 rounded-full shadow-glow hover:shadow-[0_0_60px_hsl(224_85%_65%_/_0.6)] transition-all duration-300 hover:scale-105"
              onClick={scrollToContact}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

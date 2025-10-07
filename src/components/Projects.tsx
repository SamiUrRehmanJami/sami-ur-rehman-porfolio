import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
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

  const projects = [
   
    {
      title: "SeeBiz(B2B Marketplace)",
      description:
        "Scalable B2B networking and wholesale marketplace (SeeBiz.com) that enables manufacturers, distributors, and retailers to connect, collaborate, and trade seamlessly within a unified digital ecosystem.",
      tech: ["Angular", "Node.js", "PostgreSQL", "TypeScript", "RxJS", "AWS", "Redis", "ElasticSearch"],
      gradient: "from-violet-500 to-purple-500",
      demoUrl: "https://seebiz.com/",
    },
    {
      title: "Krub.ai",
      description:
        "B2B community platform similar to nas.io, enabling businesses to create and manage their own branded communities with membership management, content sharing, and engagement features.",
      tech: ["Next.js", "React", "Node.js", "MongoDB", "AWS", "Real-time Chat"],
      gradient: "from-purple-500 to-pink-500",
      demoUrl: "https://krub.ai",
    },
    {
      title: "Refino.se",
      description:
        "A property listing website for Swedish real estate with filtering, bookmarking, and agent contact features. Built with modern tech stack for optimal performance.",
      tech: ["React", "TypeScript", "Tailwind CSS", "REST API", "AWS"],
      gradient: "from-blue-500 to-indigo-500",
      demoUrl: "https://refino.se",
    },
    {
      title: "Beltravel.lv",
      description:
        "A travel platform for booking hotels and European tours, with search filtering and secure payment gateway integration for seamless booking experience.",
      tech: ["React", "Material UI", "Stripe", "REST API", "Node.js"],
      gradient: "from-green-500 to-emerald-500",
      demoUrl: "https://beltravel.lv/en/",
    },
    {
      title: "Turtt Communities",
      description:
        "A comprehensive community platform built with Next.js and MERN stack, featuring real-time interactions, user management, and advanced content moderation.",
      tech: ["Next.js", "React", "Node.js", "MongoDB", "Express", "Socket.io", "AWS"],
      gradient: "from-cyan-500 to-blue-500",
      demoUrl: "https://turtt.com",
    },
    {
      title: "Books Management System",
      description:
        "A book inventory system built for bookstores and institutions. Includes stock tracking, order logs, and user authentication with responsive interface.",
      tech: ["React", "TypeScript", "Firebase", "AWS EC2"],
      gradient: "from-orange-500 to-red-500",
      demoUrl: "https://books.seebiz.com/",
    },
    {
      title: "POS System",
      description:
        "Modern Point of Sale system built with Angular and MongoDB, featuring inventory management, sales tracking, and real-time reporting capabilities.",
      tech: ["Angular", "MongoDB", "Node.js", "Express", "Material UI"],
      gradient: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Things I've Built
          </h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing a selection of projects that demonstrate my expertise and passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                
                <div className="relative bg-card/70 backdrop-blur-glass border border-border rounded-3xl p-8 shadow-glass hover:shadow-glow transition-all duration-500 h-full flex flex-col group-hover:scale-[1.02]">
                  <div className="mb-6">
                    <div className={`w-16 h-1 bg-gradient-to-r ${project.gradient} rounded-full mb-4`} />
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3">
                    {project.demoUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/50 hover:bg-primary/10 transition-all duration-300"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <Button
            size="lg"
            className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-glow hover:shadow-[0_0_60px_hsl(186_100%_42%_/_0.6)] transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

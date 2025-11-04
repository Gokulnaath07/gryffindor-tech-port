import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Database, Rocket, TestTube, Brain, Box, Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>(0.2);
  const highlights = [
    {
      icon: Shield,
      title: "Secure APIs & Auth",
      description: "Building robust authentication systems with 90% reduction in unauthorized access",
    },
    {
      icon: Database,
      title: "Database Design & Performance",
      description: "Optimizing queries and schemas for 50%+ performance improvements",
    },
    {
      icon: Rocket,
      title: "Deployment & CI/CD",
      description: "Docker + GitLab CI pipelines reducing deployment time by 60%",
    },
    {
      icon: TestTube,
      title: "Test Automation",
      description: "Playwright E2E suites raising reliability by 70%, reducing QA time by 40%",
    },
    {
      icon: Brain,
      title: "ML & RAG Exploration",
      description: "Leveraging LLMs and Retrieval-Augmented Generation for innovative solutions",
    },
    {
      icon: Box,
      title: "VR/AR & 3D Experiences",
      description: "End-to-end immersive apps with 3D design, animation, and interactive UX",
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className={`py-20 bg-muted/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-secondary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4 animate-fade-in">
              <p className="text-muted-foreground leading-relaxed">
                I started in <span className="text-foreground font-semibold">Mechatronics</span>—building <span className="text-foreground font-semibold">line followers and mini AGVs</span> for fun—then fell in love with the software that makes hardware feel alive. Today I’m an <span className="text-foreground font-semibold">international CS Master’s student</span> at Wright State University who enjoys turning messy requirements into dependable systems and solving brain‑twisting problems with code.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Over the last <span className="text-secondary font-semibold">1.5 years</span>, I’ve worked across the stack through internships and projects—shipping APIs, data models, and deployments end‑to‑end. A favorite: helping build a secure, scalable backend for an Android evidence‑management platform at <span className="text-foreground font-semibold">PorterLee</span> (remote).
                My toolkit: <span className="text-foreground font-semibold">Java & Spring Boot</span>, <span className="text-foreground font-semibold">Python</span>, <span className="text-foreground font-semibold">PostgreSQL/MongoDB</span>, <span className="text-foreground font-semibold">Docker & AWS (RDS)</span>, and <span className="text-foreground font-semibold">Playwright</span> for reliability. I’ve shipped to health tech, education, and real‑estate analytics.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Currently, I’m a <span className="text-secondary font-semibold">Software Engineering Intern at AriesView</span>, contributing across frontend, backend, databases, and automation. I’m actively learning <span className="text-foreground font-semibold">RAG</span> and modern LLM tooling to grow toward an AI‑focused engineer. I’m open to roles where I can deliver impact quickly—backend, platform, or AI‑enabled products.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I also design and build <span className="text-foreground font-semibold">VR/AR applications</span> end‑to‑end — from <span className="text-foreground font-semibold">3D asset design and animation</span> to interaction models and performance tuning (Unity / Blender).
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {highlights.slice(0, 3).map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <Card
                    key={index}
                    className="p-4 border-border bg-card hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <Icon className="text-secondary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">{highlight.title}</h3>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {highlights.slice(3).map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={index}
                  className="p-4 border-border bg-card hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] animate-fade-in"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-secondary/10">
                      <Icon className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">{highlight.title}</h3>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Database, Rocket, TestTube, Brain, Download } from "lucide-react";
import useScrollAnimation from "@/hooks/use-scroll-animation";

const About = () => {
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
  ];

  const { ref, isVisible } = useScrollAnimation<HTMLElement>(0.2);
  return (
    <section
      ref={ref}
      id="about"
      className={`py-20 bg-muted/30 interactive-section transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      data-proximity="far"
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
                I'm a <span className="text-foreground font-semibold">Master's student in Computer Science</span> at Wright State University, with hands-on experience in backend development, API design, and machine learning. I bring{" "}
                <span className="text-secondary font-semibold">1.5 years of combined academic and internship experience</span>, including a remote Programming Internship at PorterLee Corporation building secure, scalable backend systems for an Android-based evidence management platform.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My toolkit: <span className="text-foreground font-semibold">Java, Spring Boot, Python, RESTful APIs, PostgreSQL, Docker, AWS (RDS), MongoDB</span>. I work in Agile teams and ship production-ready software across health tech, education, and real estate analytics.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I'm currently interning at <span className="text-secondary font-semibold">AriesView as a Software Engineering Intern</span> contributing across frontend, backend, DB management, and automation testing. I'm actively learning RAG to grow toward an AI Engineer role.
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

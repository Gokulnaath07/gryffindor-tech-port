import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Database, Shield, Download, Mail, FolderKanban } from "lucide-react";
import resumeUrl from "@/assets/Govindaraj_Resume_R1.pdf";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>(0.2);

  const heroHook =
    "Backend + ML engineer building production systems designed for scale, reliability, and measurable impact.";

  const aboutParagraphs = [
    `I build backend systems and ML infrastructure that handle production scale. Currently at AriesView, where I've deployed RAG-powered document intelligence pipelines that cut hallucinations by 30%, built Node.js APIs processing 500+ concurrent financial queries with 90% fewer data errors, and containerized microservices that reduced developer setup time by 40%.`,
    `My work includes hybrid retrieval systems (BM25 + vector search) with sub-200ms p99 latency, citation-grounded LLM outputs for financial documents, and PostgreSQL schemas designed for high-concurrency workloads. I've improved API performance by 20%, optimized database queries reducing p95 latency by 25%, and trained BERT-based classifiers hitting 84% F1 with proper cross-validation.`,
    `Beyond the day job, I've built end-to-end ML systems—from NLP sentiment classifiers processing Twitter data with 84% weighted F1-score to medical prediction models with 85% clinician approval. I've also shipped full-stack platforms: geo-indexed navigation systems with optimized spatial queries, and Android evidence management APIs with JWT auth and async operations that improved sync reliability by 20%.`,
    `I care about systems that stay up under load, that you can debug at 2am, and that don't become legacy nightmares six months later. Testing, monitoring, and documentation aren't optional—they're how you ship systems that actually scale.`,
    `Finishing my MS in Computer Science at Wright State this December. Looking for Backend Software Engineer or ML Engineer roles building high-throughput systems that millions of people depend on.`,
  ];

  const whyMe = [
    {
      icon: Brain,
      title: "Production ML at scale",
      description:
        "Architected end-to-end RAG pipelines with hybrid retrieval, vector search (Weaviate), and LLM orchestration—reducing error rates by 30% across financial workflows (evaluated on 1000+ query test sets).",
    },
    {
      icon: Database,
      title: "Distributed systems experience",
      description:
        "Built REST APIs with transactional guarantees processing 500+ QPS, optimized database queries reducing p95 latency by 25%, and designed schemas for concurrent write-heavy workloads.",
    },
    {
      icon: Shield,
      title: "Engineering excellence",
      description:
        "Comprehensive testing (unit, integration, E2E with Playwright), CI/CD automation, API contracts (OpenAPI/Swagger), and observability—because systems that scale need instrumentation, not hope.",
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
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-secondary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </div>

          {/* Hero Hook */}
          <Card className="p-5 border-border bg-card/70 mb-10">
            <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
              {heroHook}
            </p>
          </Card>

          {/* Main grid (Summary + Why Me) */}
          <div className="grid lg:grid-cols-2 gap-10 mb-10">
            {/* LEFT: Summary */}
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-xl font-semibold text-foreground">
                Summary
              </h3>

              {aboutParagraphs.map((p, idx) => (
                <p key={idx} className="text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* RIGHT: Why Me */}
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Why <span className="text-secondary">Me</span>
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {whyMe.map((item, index) => {
                  const Icon = item.icon;
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
                          <h4 className="font-semibold mb-1 text-foreground">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA BLOCK (separate, clear) */}
          <Card className="p-5 border-border bg-card/70 animate-fade-in">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Let’s talk</h3>
                <p className="text-sm text-muted-foreground">
                  Explore my systems design projects below, review my technical resume, or let’s discuss building
                  infrastructure that scales.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="gap-2">
                  <a href="#projects">
                    <FolderKanban size={18} />
                    View Projects
                  </a>
                </Button>

                <Button asChild variant="secondary" className="gap-2">
                  <a href={resumeUrl} target="_blank" rel="noreferrer">
                    <Download size={18} />
                    Resume
                  </a>
                </Button>

                <Button asChild variant="outline" className="gap-2">
                  <a href="#contact">
                    <Mail size={18} />
                    Contact
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

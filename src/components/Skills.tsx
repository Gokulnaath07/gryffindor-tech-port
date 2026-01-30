import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Skills = () => {
  const skillCategories = [
    // 1️⃣ Identity: Core engineering (above the fold)
    {
      title: "Core Backend Engineering",
      skills: [
        "Python (Flask, FastAPI)",
        "Java (Spring Boot)",
        "Node.js (Express)",
        "REST API Design",
        "Concurrency & Backpressure",
        "Transactional Systems",
      ],
    },

    // 2️⃣ Data layer (paired with backend)
    {
      title: "Databases & Storage",
      skills: [
        "PostgreSQL (Indexing, Pooling, Transactions)",
        "MongoDB",
        "MySQL",
      ],
    },

    // 3️⃣ Applied AI – your differentiator
    {
      title: "Applied AI & LLM Systems",
      skills: [
        "Retrieval-Augmented Generation (RAG)",
        "OCR Ingestion & Document Parsing",
        "Semantic & Section-based Chunking",
        "Hybrid Retrieval (BM25 + Vector Search)",
        "Embeddings",
        "Citation-grounded Answers",
        "Hallucination Mitigation",
      ],
    },

    // 4️⃣ Performance & reliability (big green flag)
    {
      title: "Performance & Reliability",
      skills: [
        "k6 Load Testing",
        "Tail Latency (p95 / p99) Analysis",
        "Throughput Optimization",
        "Gunicorn Worker Tuning",
        "Timeout & Saturation Failure Modes",
      ],
    },

    // 5️⃣ ML foundations (kept, but de-emphasized)
    {
      title: "ML Foundations",
      skills: [
        "scikit-learn",
        "PyTorch",
        "Pandas",
        "NumPy",
        "Dask (Parallel Computing)",
      ],
    },

    // 6️⃣ DevOps & deployment
    {
      title: "DevOps & Cloud",
      skills: [
        "Docker",
        "GitHub Actions",
        "GitLab CI/CD",
        "AWS",
        "Railway",
      ],
    },

    // 7️⃣ Testing & quality
    {
      title: "Testing & Tooling",
      skills: [
        "JUnit",
        "Playwright",
        "Selenium",
        "Postman",
        "Swagger / OpenAPI",
      ],
    },

    // 8️⃣ Frontend (supporting, not identity)
    {
      title: "Frontend (Supporting)",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "HTML",
        "CSS",
      ],
    },

    // 9️⃣ Platforms & extras (lowest priority)
    {
      title: "Platforms & Extras",
      skills: [
        "Android (Java)",
        "Unity",
        "Blender",
      ],
    },
  ];

  const { ref, isVisible } = useScrollAnimation<HTMLElement>(0.2);

  return (
    <section
      ref={ref}
      id="skills"
      className={`py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-secondary">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Backend and applied AI engineering focused on scalable APIs,
              performance-critical systems, and production-ready LLM workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 border-border bg-card hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground border-b border-border pb-2">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted text-foreground hover:bg-secondary/20 hover:text-secondary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

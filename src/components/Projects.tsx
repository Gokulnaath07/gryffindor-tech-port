import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2);
  const [disableAnimations, setDisableAnimations] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqMobile = window.matchMedia("(max-width: 768px)");

    const check = () =>
      setDisableAnimations(mqMotion.matches || mqMobile.matches);

    check();
    mqMotion.addEventListener?.("change", check);
    mqMobile.addEventListener?.("change", check);

    return () => {
      mqMotion.removeEventListener?.("change", check);
      mqMobile.removeEventListener?.("change", check);
    };
  }, []);

  const projects = [
    {
      title: "Financial Document Intelligence & RAG System",
      period: "Present",
      description:
        "Designed an API-first Retrieval-Augmented Generation (RAG) system for answering numeric- and clause-sensitive questions over financial documents such as tax forms, pay stubs, and lease agreements.",
      metrics: [
        "Citation-grounded answers",
        "Hybrid retrieval (BM25 + vector)",
        "OCR-based ingestion pipeline",
        "Hallucination mitigation",
      ],
      tech: [
        "Python",
        "FastAPI",
        "RAG",
        "OCR",
        "Embeddings",
        "Hybrid Retrieval",
        "Vector Search",
        "PostgreSQL / Weaviate",
      ],
      githubUrl:
        "https://github.com/Gokulnaath07/Financial_rag", 
    },
    {
      title: "State-of-the-Art NLP Model: BERT",
      period: "Nov 2025 – Dec 2025",
      description:
        "End-to-end NLP pipeline for Twitter sentiment analysis. Compared classical ML models with LSTM and BERT; BERT achieved the best performance.",
      metrics: [
        "End-to-end NLP pipeline",
        "LogReg / DT / LSTM / BERT comparison",
        "Accuracy 84%, Weighted F1 0.84",
        "Handled short text & class imbalance",
      ],
      tech: [
        "Python",
        "Pandas",
        "NumPy",
        "NLTK",
        "scikit-learn",
        "PyTorch",
        "Transformers",
      ],
      githubUrl:
        "https://github.com/Gokulnaath07/MachineLearning/tree/main/NLP%20Project",
    },
    {
      title: "Multi-Disease Prediction + Doctor Matching",
      period: "Jan 2024 – Apr 2024",
      description:
        "Built an ML-driven system to predict diseases and map them to doctor specialties, exposed via REST APIs and integrated with Android.",
      metrics: [
        "End-to-end ML pipeline",
        "Doctor–specialty matching",
        "REST API inference",
        "Model comparison & selection",
      ],
      tech: [
        "Python",
        "scikit-learn",
        "Dask",
        "Flask",
        "Postman",
        "Android",
      ],
      githubUrl:
        "https://github.com/Gokulnaath07/MachineLearning/tree/main/Multiple%20Disease%20Prediction",
    },
    {
      title: "Navigation-Based Web Application",
      period: "Aug 2024 – Jun 2025",
      description:
        "Full-stack navigation platform using Spring Boot REST APIs and PostgreSQL, deployed with Docker and Railway.",
      metrics: [
        "+60% client–server efficiency",
        "+50% query performance",
        "−60% deployment time",
      ],
      tech: [
        "Spring Boot",
        "PostgreSQL",
        "AWS RDS",
        "Docker",
        "Railway",
        "Netlify",
      ],
      githubUrl: "https://github.com/Gokulnaath07/Geosyncra_Backend",
      githubUrlFrontend:
        "https://github.com/Gokulnaath07/Frontend_geoSyncra",
    },
    {
      title: "Game Character Balancing with ML & RL",
      period: "Jan 2025 – Apr 2025",
      description:
        "Combined supervised learning with a custom reinforcement learning environment (DQN) to balance game characters.",
      metrics: [
        "88% classification accuracy",
        "35% reduction in win-rate variance",
      ],
      tech: [
        "Python",
        "PyTorch",
        "Reinforcement Learning",
        "DQN",
        "Random Forest",
        "Decision Tree",
      ],
      githubUrl:
        "https://github.com/Gokulnaath07/MachineLearning/tree/main/FinalProject",
    },
    {
      title: "Hanni’s Home Tour – VR Escape Experience",
      period: "Jan 2024 – Apr 2024",
      description:
        "VR escape-room experience built in Unity with procedural environments and interactive puzzle mechanics.",
      metrics: [
        "Full VR immersion",
        "Procedural generation",
        "Interactive puzzles",
      ],
      tech: ["Unity", "Blender", "VR", "C#", "Procedural Generation"],
      driveUrl:
        "https://drive.google.com/drive/folders/1P7X_pQ0f9-ohoycVYiC9XKpIzxHx-Tbi",
      caseStudyUrl:
        "https://docs.google.com/document/d/1H9A_wg1QvMP5Vs8sv4TUut4Ei_JZbQb0",
    },
    {
      title: "Personal Portfolio Website",
      period: "Nov 2025 – Present",
      description:
        "Personal portfolio showcasing projects, experience, and skills with a focus on performance and clean UI.",
      metrics: [
        "Responsive design",
        "SEO optimization",
        "Accessible UI",
      ],
      tech: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
      githubUrl:
        "https://github.com/Gokulnaath07/gryffindor-tech-port",
    },
    {
      title: "TaskManager",
      period: "Jun 2025 – Present",
      description:
        "Production-ready task management backend with JWT-secured APIs, RBAC, and file uploads using PostgreSQL and MongoDB GridFS.",
      metrics: [
        "JWT auth + RBAC",
        "CRUD with pagination & search",
        "File uploads via GridFS",
      ],
      tech: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "PostgreSQL",
        "MongoDB",
        "JWT",
      ],
      githubUrl: "https://github.com/Gokulnaath07/TaskManager",
    },
    {
      title: "NYC Airbnb Price & Demand Modeling",
      period: "2024",
      description:
        "ML models for price prediction and demand classification with time-series forecasting and geospatial visualizations.",
      metrics: [
        "RMSE / R² evaluation",
        "Demand classification",
        "Interactive maps & heatmaps",
      ],
      tech: [
        "Python",
        "Pandas",
        "scikit-learn",
        "Prophet",
        "Folium",
        "Matplotlib",
        "Seaborn",
      ],
      githubUrl:
        "https://github.com/Gokulnaath07/MachineLearning/tree/main/Project",
    },
    {
      title: "Game Pathfinding Algorithms (A* & BFS)",
      period: "2024",
      description:
        "Implemented and compared A* and BFS algorithms for intelligent pathfinding in grid-based game environments.",
      metrics: [
        "Reusable A* & BFS modules",
        "Heuristic optimization",
        "Performance visualization",
      ],
      tech: ["Python", "A*", "BFS", "Game AI", "OOP"],
      githubUrl: "https://github.com/Gokulnaath07/Games",
    },
    {
      title: "Blackjack Web Game",
      period: "2024",
      description:
        "Interactive Blackjack game implementing deck logic, scoring rules, and responsive UI.",
      metrics: [
        "Full game logic",
        "Responsive UI",
        "Real-time gameplay",
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Gokulnaath07/Blackjack_man",
    },
    {
      title: "Spiderman Counter Web App",
      period: "2024",
      description:
        "Fun interactive counter app with real-time DOM updates and themed styling.",
      metrics: [
        "Responsive UI",
        "DOM manipulation",
        "Smooth interactions",
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Gokulnaath07/Spiderman_counter",
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className={`py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-secondary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 flex flex-col border-border bg-card hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] ${
                disableAnimations ? "" : "animate-fade-in"
              }`}
              style={
                disableAnimations
                  ? undefined
                  : { animationDelay: `${index * 100}ms` }
              }
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-secondary mb-3">
                  {project.period}
                </p>

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">
                    Key Metrics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-secondary/20 text-secondary"
                      >
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-secondary/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-4 justify-end">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="View source code on GitHub"
                    title="View source code on GitHub"
                    onClick={() =>
                      window.open(project.githubUrl!, "_blank")
                    }
                  >
                    <Github size={16} />
                  </Button>
                )}

                {project.githubUrlFrontend && (
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="View frontend code on GitHub"
                    title="View frontend code"
                    onClick={() =>
                      window.open(
                        project.githubUrlFrontend!,
                        "_blank"
                      )
                    }
                  >
                    <Github size={16} />
                  </Button>
                )}

                {project.driveUrl && (
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Open project files"
                    title="Project files"
                    onClick={() =>
                      window.open(project.driveUrl!, "_blank")
                    }
                  >
                    <ExternalLink size={16} />
                  </Button>
                )}

                {project.caseStudyUrl && (
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Open case study"
                    title="Case study"
                    onClick={() =>
                      window.open(
                        project.caseStudyUrl!,
                        "_blank"
                      )
                    }
                  >
                    <FileText size={16} />
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

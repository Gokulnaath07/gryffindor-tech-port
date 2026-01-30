import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
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
      title: "State-of-the-Art NLP Model: BERT",
      period: "Nov 2025 – Dec 2025",
      description:
        "Implemented a full NLP pipeline for sentiment classification on Twitter data. Compared classical ML models with deep learning approaches (LSTM, BERT). BERT achieved the best performance.",
      metrics: [
        "End-to-end NLP pipeline",
        "LogReg, DT, LSTM, BERT comparison",
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
        "Built an end-to-end ML system to predict diseases and map them to doctor specialties. Exposed inference through REST APIs and integrated with an Android client.",
      metrics: [
        "End-to-end ML pipeline",
        "Doctor-specialty matching",
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
        "Full-stack navigation platform using Spring Boot REST APIs and PostgreSQL, deployed via Docker and Railway.",
      metrics: [
        "+60% client-server efficiency",
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
        "Combined supervised learning models with a custom reinforcement learning environment using DQN to balance game characters.",
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
        "VR-based escape-room experience built in Unity featuring procedural environments and interactive puzzles.",
      metrics: [
        "Full VR immersion",
        "Procedural environment generation",
        "Interactive puzzle mechanics",
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
        "Built a personal portfolio to showcase projects, experience, and technical skills with a focus on performance and responsiveness.",
      metrics: [
        "Responsive design",
        "SEO optimization",
        "Interactive UI elements",
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
        "JWT authentication + RBAC",
        "CRUD with pagination & search",
        "File uploads with GridFS",
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
        "Built ML models to predict listing prices and classify high-demand listings. Added time-series forecasting and interactive geospatial visualizations.",
      metrics: [
        "Price prediction (RMSE / R²)",
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
        "Algorithm performance visualization",
      ],
      tech: [
        "Python",
        "A*",
        "BFS",
        "Pathfinding",
        "Game AI",
        "OOP",
      ],
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
        "Fun interactive counter app inspired by Spider-Man with real-time DOM updates.",
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
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
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

              <div className="flex gap-2 mt-4">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() =>
                      window.open(project.githubUrl!, "_blank")
                    }
                  >
                    Code
                  </Button>
                )}

                {project.githubUrlFrontend && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() =>
                      window.open(
                        project.githubUrlFrontend!,
                        "_blank"
                      )
                    }
                  >
                    Frontend
                  </Button>
                )}

                {!project.githubUrl && project.driveUrl && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() =>
                        window.open(project.driveUrl!, "_blank")
                      }
                    >
                      <ExternalLink size={14} />
                      Files
                    </Button>

                    {project.caseStudyUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() =>
                          window.open(
                            project.caseStudyUrl!,
                            "_blank"
                          )
                        }
                      >
                        <FileText size={14} />
                        Case Study
                      </Button>
                    )}
                  </>
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

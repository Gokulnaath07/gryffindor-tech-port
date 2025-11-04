import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import vrGameImage from "@/assets/vr-game.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2);
  const projects = [
    {
      title: "Multi‑Disease Prediction + Doctor Matching",
      period: "Jan 2024 – Apr 2024",
      description:
        "Built an end‑to‑end ML pipeline: EDA → feature engineering → model training & comparison (LogReg/RandomForest/others) → best‑model selection → REST API for inference. The service predicts likely conditions and maps them to doctor specialties; responses are returned via a GET endpoint (tested in Postman). Also integrated with an Android client.",
      metrics: [
        "End‑to‑end ML pipeline",
        "Doctor matching by specialty",
        "REST API inference",
        "Model comparison & selection",
      ],
      tech: [
        "Python",
        "scikit‑learn",
        "Dask (parallel)",
        "Pandas",
        "NumPy",
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
        "Full-stack web application with Spring Boot REST APIs and PostgreSQL on AWS RDS, deployed via Railway and Docker.",
      metrics: ["+60% client-server efficiency", "+50% query performance", "−60% deployment time"],
      tech: ["Spring Boot", "PostgreSQL", "AWS RDS", "Docker", "Railway", "Netlify", "REST APIs"],
      githubUrl: "https://github.com/Gokulnaath07/Geosyncra_Backend",
      githubUrlFrontend: "https://github.com/Gokulnaath07/Frontend_geoSyncra",
    },
    {
      title: "Game Character Balancing with ML & RL",
      period: "Jan 2025 – Apr 2025",
      description:
        "Supervised learning (RF/DT/LogReg) combined with custom reinforcement learning environment using DQN to balance game characters.",
      metrics: ["88% classification accuracy", "35% reduction in win-rate variance"],
      tech: ["Python", "PyTorch", "Reinforcement Learning", "DQN", "Random Forest", "Decision Tree"],
      githubUrl:
        "https://github.com/Gokulnaath07/MachineLearning/tree/main/FinalProject",
    },
    {
      title: "Hanni's Home Tour - VR Escape Experience",
      period: "Jan 2024 – Apr 2024",
      description:
        "VR-based interactive experience set in a procedurally generated haunted house.",
      metrics: ["Full VR immersion", "Procedural generation", "Interactive puzzle mechanics"],
      tech: ["Unity", "Blender", "VR", "C#", "Procedural Generation"],
      driveUrl:
        "https://drive.google.com/drive/folders/1P7X_pQ0f9-ohoycVYiC9XKpIzxHx-Tbi",
      caseStudyUrl:
        "https://docs.google.com/document/d/1H9A_wg1QvMP5Vs8sv4TUut4Ei_JZbQb0/edit?usp=drive_link&ouid=107306715248065629975&rtpof=true&sd=true",
    },
    {
      title: "Personal Portfolio Website",
      period: "Nov 2025 – Present",
      description:
        "Built a personal portfolio website to showcase my projects and skills.",
      metrics: ["Responsive design", "SEO optimization", "Interactive elements"],
      tech: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/Gokulnaath07/gryffindor-tech-port",
    },
    {
      title: "TaskManager",
      period: "Jun 2025 – Present",
      description:
        "Built a production-ready task management backend with JWT-secured APIs, role-based access, and file uploads for task assets. Uses PostgreSQL for core data and MongoDB (GridFS) for images/documents.",
      metrics: [
        "JWT auth + RBAC",
        "CRUD + search/pagination",
        "File uploads to GridFS",
        
      ],
      tech: [
        "Java", "Spring Boot", "Spring Security", "JPA/Hibernate",
        "PostgreSQL", "MongoDB", "JWT"
      ],
      githubUrl: "https://github.com/Gokulnaath07/TaskManager"
    },
    {
      title: "NYC Airbnb Price & Demand Modeling",
      period: "2024",
      description:
        "Built an end-to-end ML workflow to predict listing prices and classify high-demand listings. Performed data cleaning, feature engineering (encoding, review time features), and model selection (Linear/Random Forest for price; Logistic/Random Forest for demand). Added Prophet time-series forecasts of monthly prices and Folium maps for listing distribution, price heatmap, and demand hotspots.",
      metrics: [
        "Train/val/test splits with RMSE/R² & classification report",
        "Feature importance analysis",
        "Interactive maps (distribution, heatmap, demand)"
      ],
      tech: [
        "Python","Pandas","NumPy","scikit-learn",
        "RandomForest","Linear/Logistic Regression",
        "Prophet","Matplotlib","Seaborn","Folium"
      ],
      githubUrl: "https://github.com/Gokulnaath07/MachineLearning/tree/main/Project"
    },
    {
      title: "Game Pathfinding Algorithms (A* & BFS)",
      period: "2024",
      description:
        "Implemented and compared A* and Breadth-First Search (BFS) algorithms for intelligent pathfinding in grid-based games. Designed modular Python scripts to simulate puzzle and movement logic, optimizing traversal efficiency, heuristic evaluation, and decision-making accuracy in game AI scenarios.",
      metrics: [
        "Developed reusable A* and BFS modules for grid navigation",
        "Improved pathfinding efficiency with heuristic tuning",
        "Visualized and tested algorithm performance on sample maps"
      ],
      tech: [
        "Python", "A* Algorithm", "BFS", "Pathfinding", "Game AI", "OOP", "Heuristics"
      ],
      githubUrl: "https://github.com/Gokulnaath07/Games"
    },
    {
      title: "Blackjack Web Game",
      period: "2024",
      description:
        "Created an interactive Blackjack game with a simple web interface that handles deck shuffling, card dealing, score calculation, and win/loss logic. Designed a clean and responsive page to provide an engaging user experience while accurately following classic Blackjack rules.",
      metrics: [
        "Implemented full game logic for player vs dealer",
        "Built responsive front-end for real-time play",
        "Handled deck, score, and restart functionality"
      ],
      tech: [
        "HTML", "CSS", "JavaScript"
      ],
      githubUrl: "https://github.com/Gokulnaath07/Blackjack_man"
    },
    {
      title: "Spiderman Counter Web App",
      period: "2024",
      description:
        "Developed a fun and interactive web counter inspired by Spider-Man’s theme. Designed a responsive interface with simple button interactions for increment, decrement, and reset functionality, showcasing DOM manipulation and clean front-end design principles.",
      metrics: [
        "Built responsive UI with themed styling",
        "Implemented real-time counter updates via DOM manipulation",
        "Enhanced usability with smooth transitions and reset logic"
      ],
      tech: [
        "HTML", "CSS", "JavaScript"
      ],
      githubUrl: "https://github.com/Gokulnaath07/Spiderman_counter"
    }
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className={`py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-secondary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world applications showcasing measurable impact and technical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 border-border bg-card hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-1">
                  {/* {project.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md" />
                    </div>
                  )} */}

                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground leading-tight">{project.title}</h3>
                  </div>

                  <p className="text-sm text-secondary mb-3">{project.period}</p>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Metrics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, i) => (
                        <Badge key={i} variant="secondary" className="bg-secondary/20 text-secondary border border-secondary/30">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-secondary/30 text-foreground hover:bg-secondary hover:text-destructive hover:border-secondary transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="flex-1 hover:border-secondary/50 hover:text-secondary transition-colors" onClick={() => window.open(project.githubUrl as string, "_blank")}> 
                      <img src="https://cdn.simpleicons.org/github/000000" alt="GitHub" style={{ width: 14, height: 14 }} className="inline-block mr-2" />
                      {project.githubUrlFrontend ? "Backend" : "Code"}
                    </Button>
                  )}

                  {project.githubUrlFrontend && (
                    <Button variant="outline" size="sm" className="flex-1 hover:border-secondary/50 hover:text-secondary transition-colors" onClick={() => window.open(project.githubUrlFrontend as string, "_blank")}> 
                      <img src="https://cdn.simpleicons.org/github/000000" alt="GitHub" style={{ width: 14, height: 14 }} className="inline-block mr-2" />
                      Frontend
                    </Button>
                  )}

                  {!project.githubUrl && project.driveUrl && (
                    <>
                      <Button variant="outline" size="sm" className="flex-1 hover:border-secondary/50 hover:text-secondary transition-colors" onClick={() => window.open(project.driveUrl as string, "_blank")}>
                        <ExternalLink size={14} />
                        Game Files
                      </Button>
                      {project.caseStudyUrl && (
                        <Button variant="outline" size="sm" className="flex-1 hover:border-secondary/50 hover:text-secondary transition-colors" onClick={() => window.open(project.caseStudyUrl as string, "_blank")}>
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
      </div>
    </section>
  );
};

export default Projects;
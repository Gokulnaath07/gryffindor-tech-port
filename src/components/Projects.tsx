import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";
import vrGameImage from "@/assets/vr-game.png";

const Projects = () => {
  const projects = [
    {
      title: "Multiple Disease Prediction Android App with ML",
      period: "Jan 2024 – Apr 2024",
      description:
        "Android app using Logistic Regression + Random Forest for condition prediction; contributed to 15% reduction in unnecessary doctor visits (study context).",
      metrics: ["88% accuracy", "15% reduction in doctor visits"],
      tech: ["Android", "Machine Learning", "Python", "Logistic Regression", "Random Forest", "Dask", "Pandas"],
      githubUrl: "https://github.com/Gokulnaath07/MachineLearning/tree/main/Multiple%20Disease%20Prediction",
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
      githubUrl: "https://github.com/Gokulnaath07/MachineLearning/tree/main/FinalProject",
    },
    {
      title: "Hanni's Home Tour - VR Escape Experience",
      period: "Jan 2024 – Apr 2024",
      description:
        "VR-based interactive experience set in a procedurally generated haunted house. Escape from Hannibal's residence by finding and using tools strategically placed throughout the environment.",
      metrics: ["Full VR immersion", "Procedural generation", "Interactive puzzle mechanics"],
      tech: ["Unity", "Blender", "VR", "C#", "Procedural Generation"],
      image: vrGameImage,
    },
  ];

  return (
    <section id="projects" className="py-20">
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
                  {project.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-secondary mb-3">{project.period}</p>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Metrics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-secondary/20 text-secondary border border-secondary/30"
                        >
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
                          className="border-border text-muted-foreground text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:border-secondary/50 hover:text-secondary transition-colors" 
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={14} />
                      {project.githubUrlFrontend ? "Backend" : "Code"}
                    </Button>
                  )}
                  {project.githubUrlFrontend && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:border-secondary/50 hover:text-secondary transition-colors" 
                      onClick={() => window.open(project.githubUrlFrontend, '_blank')}
                    >
                      <Github size={14} />
                      Frontend
                    </Button>
                  )}
                  {!project.githubUrl && (
                    <>
                      <Button variant="outline" size="sm" className="flex-1" disabled>
                        <Github size={14} />
                        Code
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1" disabled>
                        <ExternalLink size={14} />
                        Demo
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1" disabled>
                        <FileText size={14} />
                        Case Study
                      </Button>
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

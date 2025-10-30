import { Card } from "@/components/ui/card";
import { Server, Database, Container, TestTube2, Eye, Cloud } from "lucide-react";
<<<<<<< HEAD
import useScrollAnimation from "@/hooks/use-scroll-animation";
=======
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
>>>>>>> 7fc7a0ec442d544334b98c8f74db737ee228b1e8

const Services = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const services = [
    {
      icon: Server,
      title: "RESTful API Design",
      description: "Secure authentication & authorization, scalable endpoint architecture",
    },
    {
      icon: Database,
      title: "Database Optimization",
      description: "Schema design, query tuning, and performance enhancements",
    },
    {
      icon: Container,
      title: "Dockerized Deployment",
      description: "Containerization, orchestration, and production-ready configurations",
    },
    {
      icon: TestTube2,
      title: "CI/CD Integration",
      description: "Automated pipelines with GitLab CI, GitHub Actions, and deployment automation",
    },
    {
      icon: Eye,
      title: "E2E Test Scaffolding",
      description: "Playwright test suites with shared auth and comprehensive coverage",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "AWS RDS, Railway setup, and minimal observability hooks",
    },
  ];
  const { ref, isVisible } = useScrollAnimation<HTMLElement>(0.2);
  return (
<<<<<<< HEAD
    <section
      ref={ref}
      id="services"
      className={`py-20 bg-muted/30 interactive-section transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      data-proximity="far"
=======
    <section 
      ref={ref}
      id="services" 
      className={`py-20 bg-muted/30 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
>>>>>>> 7fc7a0ec442d544334b98c8f74db737ee228b1e8
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-secondary">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Backend development services focused on security, performance, and scalability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border-border bg-card hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                      <Icon className="text-secondary" size={24} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

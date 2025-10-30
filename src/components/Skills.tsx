import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      title: "Frameworks & Platforms",
      skills: ["Spring Boot", "Flask", "Android (Java)", "React", "TypeScript", "Next.js"],
    },
    {
      title: "Version Control & DevOps",
      skills: ["Git", "Docker", "AWS (RDS)", "Railway"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      title: "IDE & Tools",
      skills: ["Jira", "Postman", "JUnit", "Playwright", "Selenium"],
    },
    {
      title: "Methodologies",
      skills: ["Agile (Scrum)", "Kanban", "CI/CD", "OOP", "RESTful APIs", "SDLC", "RAG"],
    },
  ];

  return (
    <section 
      ref={ref}
      id="skills" 
      className={`py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-secondary">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building secure, scalable, and performant applications
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

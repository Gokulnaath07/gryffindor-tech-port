import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Experience = () => {
  const experiences = [
    {
  company: "AriesView",
  role: "Software Engineering Intern",
  period: "Aug 2025 – Present",
  location: "Boston, MA",
  achievements: [
    "Co-developed Node.js/Express REST APIs and Python/Flask financial-calculation microservice; improved response time by 45% and maintainability by 30%",
    "Delivered Financial Hub with Next.js/React/TypeScript (Tailwind); enhanced page performance by 35% and accessibility compliance by 50%",
    "Built Playwright E2E suites with shared auth, role-based locators, and network assertions; raised reliability by 70%, reduced QA time by 40%",
    "PR reviews, Docker images, GitLab CI pipelines; values stored in Dockerized PostgreSQL"
  ],
  tech: ["TypeScript", "React", "Next.js", "Node.js", "Python", "Flask", "Playwright", "Docker", "GitLab CI/CD", "PostgreSQL"]
},
{
  company: "Accelerate UConn NSF I-Corps Program",
  role: "Technical Team Lead",
  period: "Aug 2024 – Sept 2024",
  location: "University of Connecticut",
  achievements: [
    "Led technical planning for peer mentoring platform using Hugging Face-powered LLM via Spring Boot + Spring AI",
    "Conducted customer discovery and co-authored proposal for NSF I-Corps"
  ],
  tech: ["Spring Boot", "Spring AI", "Hugging Face", "LLM"]
},
{
  company: "Porter Lee Corporation",
  role: "Software Programming Intern",
  period: "May 2024 – Aug 2024",
  location: "Schaumburg, IL",
  achievements: [
    "Backend services for Android-based Evidence Management System (Java); improved data processing speed/security by 55%",
    "Designed secure REST APIs with advanced authz/authn; boosted data exchange efficiency by 40%, reduced unauthorized access attempts by 90%",
    "Debugging/troubleshooting + comprehensive API/system/deployment docs; decreased critical issues by 60%, cut onboarding time by 35%"
  ],
  tech: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "Android", "AWS"]
},
{
  company: "Wright State University – Office of Disability Services (ODS)",
  role: "Personal Assistant",
  period: "Jan 2024 – Dec 2025",
  location: "Dayton, OH",
  achievements: [
    "Assist a student with physical disabilities during lectures and lab sessions by providing mobility support and helping navigate the campus environment",
    "Set up classroom or lab materials as needed to ensure safe and comfortable participation in all scheduled sessions",
    "Coordinate with ODS staff to address logistical needs and ensure smooth day-to-day access to facilities",
    "Maintain a respectful and supportive presence, prioritizing the student’s independence, comfort, and dignity"
  ],
  tech: ["Accessibility Support", "Logistics Coordination", "Communication"]
},
{
  company: "Cognizant",
  role: "Programmer Analyst Trainee",
  period: "Oct 2022 – Dec 2022",
  location: "Chennai, Tamil Nadu, India",
  achievements: [
    "Completed intensive training in Core Java, Selenium, XML, and JavaScript with a focus on OOP and automated testing",
    "Developed and executed Selenium test scripts for web applications, validating user flows and improving test coverage",
    "Gained hands-on experience in test case design, automation frameworks, and debugging for end-to-end reliability",
    "Collaborated in real-world QA simulations to enhance application stability and process efficiency"
  ],
  tech: ["Java", "Selenium", "JavaScript", "XML", "Automation Testing", "OOP"]
}


  ];

  const { ref, isVisible } = useScrollAnimation<HTMLElement>(0.2);
  return (
    <section
      ref={ref}
      id="experience"
      className={`py-20 bg-muted/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="text-secondary">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 border-l-4 border-l-secondary bg-card animate-fade-in hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1 flex items-center gap-2">
                      <Briefcase className="text-secondary" size={20} />
                      {exp.role}
                    </h3>
                    <p className="text-lg text-secondary font-semibold">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground flex gap-2">
                      <span className="text-secondary mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-secondary/30 text-foreground hover:bg-secondary hover:text-destructive hover:border-secondary transition-colors"
                    >
                      {tech}
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

export default Experience;

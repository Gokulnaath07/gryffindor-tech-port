import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Experience = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  /* ============================
     ENGINEERING EXPERIENCE
  ============================ */

  const engineeringExperience = [
    {
      company: "AriesView",
      role: "Software Engineer – Intern",
      period: "Aug 2025 – Present",
      location: "Boston, MA",
      keyImpact: [
        "9× p95 latency reduction",
        "30–40% faster onboarding",
        "Production RAG system shipped",
      ],
      summary: [
        "Built and shipped backend services and AI-powered features for financial workflows",
        "Owned performance validation, reliability testing, and CI/CD quality gates",
      ],
      details: [
        "Designed and optimized Flask APIs under sustained load (~2k RPS), diagnosing throughput collapse caused by PostgreSQL connection pool exhaustion",
        "Reduced p95 latency from ~1.8s to ~200ms by tuning Gunicorn workers and aligning concurrency with database limits",
        "Eliminated write-time race conditions using transactional upserts (INSERT ON CONFLICT) under high contention",
        "Built OCR-driven ingestion pipelines with semantic and section-aware chunking for financial documents",
        "Integrated Retrieval-Augmented Generation (RAG) with citation-backed answers, reducing fallback errors by ~30%",
        "Developed Playwright E2E test suites with shared authentication and network assertions, cutting QA time by ~40%",
        "Maintained Docker images and GitLab CI pipelines for containerized PostgreSQL-backed services",
      ],
      tech: [
        "Python",
        "Flask",
        "Node.js",
        "PostgreSQL",
        "Docker",
        "GitLab CI/CD",
        "Playwright",
        "RAG",
      ],
    },
    {
      company: "Accelerate UConn NSF I-Corps Program",
      role: "Technical Contributor",
      period: "Aug 2024 – Sept 2024",
      location: "University of Connecticut",
      keyImpact: [
        "Backend architecture defined",
        "LLM-powered prototype delivered",
      ],
      summary: [
        "Contributed to technical planning and AI integration for a peer mentoring platform",
      ],
      details: [
        "Defined backend architecture and API-first design using Spring Boot",
        "Integrated Hugging Face–powered LLMs via Spring AI for conversational workflows",
        "Collaborated with product and customer discovery teams for NSF I-Corps proposal development",
      ],
      tech: ["Spring Boot", "Spring AI", "Hugging Face", "LLMs"],
    },
    {
      company: "Porter Lee Corporation",
      role: "Programming Intern",
      period: "May 2024 – Aug 2024",
      location: "Schaumburg, IL",
      keyImpact: [
        "40% faster API data exchange",
        "90% reduction in unauthorized access attempts",
      ],
      summary: [
        "Developed secure backend services for an Android-based Evidence Management System",
      ],
      details: [
        "Built RESTful backend services in Java to support evidence ingestion and retrieval workflows",
        "Implemented authentication and authorization mechanisms to harden sensitive data access",
        "Optimized JSON payload handling, improving mobile sync and refresh performance by ~20%",
        "Authored API, system, and deployment documentation, reducing onboarding time by ~35%",
      ],
      tech: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "Android", "AWS"],
    },
    {
      company: "Cognizant Technology Solutions",
      role: "Programmer Analyst Trainee",
      period: "Oct 2022 – Dec 2022",
      location: "Chennai, Tamil Nadu, India",
      keyImpact: ["Enterprise QA & automation exposure"],
      summary: [
        "Completed enterprise training in Java-based automation and testing practices",
      ],
      details: [
        "Developed Selenium automation scripts to validate end-to-end web application flows",
        "Strengthened understanding of OOP, test design, and debugging in enterprise-style environments",
      ],
      tech: ["Java", "Selenium", "Automation Testing"],
    },
  ];

  /* ============================
     OTHER EXPERIENCE
  ============================ */

  const otherExperience = [
    {
      company: "Wright State University – Office of Disability Services",
      role: "Personal Assistant",
      period: "Jan 2024 – Dec 2025",
      location: "Dayton, OH",
      summary: [
        "Provided academic and mobility support for a student with physical disabilities",
        "Coordinated with faculty and ODS staff to ensure accessible learning environments",
      ],
    },
  ];

  const { ref, isVisible } = useScrollAnimation<HTMLElement>(0.2);

  const ExperienceCard = (exp: any, index: number) => (
    <Card
      key={index}
      className="p-6 border-l-4 border-l-secondary bg-card transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
    >
      <div className="flex flex-col md:flex-row md:justify-between mb-3">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Briefcase size={18} className="text-secondary" />
            {exp.role}
          </h3>
          <p className="text-secondary font-semibold">{exp.company}</p>
        </div>
        <div className="text-sm text-muted-foreground mt-2 md:mt-0 space-y-1">
          <div className="flex items-center gap-2">
            <Calendar size={14} /> {exp.period}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} /> {exp.location}
          </div>
        </div>
      </div>

      {exp.keyImpact && (
        <div className="flex flex-wrap gap-2 mb-3">
          {exp.keyImpact.map((impact: string) => (
            <Badge
              key={impact}
              className="bg-secondary/15 text-secondary"
            >
              {impact}
            </Badge>
          ))}
        </div>
      )}

      <ul className="space-y-2 mb-3">
        {exp.summary.map((item: string, i: number) => (
          <li key={i} className="text-muted-foreground flex gap-2">
            <span className="text-secondary">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {exp.details && (
        <>
          <button
            onClick={() => setExpanded(expanded === index ? null : index)}
            className="flex items-center gap-2 text-sm text-secondary hover:underline mb-3"
          >
            {expanded === index ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
            {expanded === index
              ? "Hide technical details"
              : "Show technical details"}
          </button>

          {expanded === index && (
            <ul className="space-y-2 mb-3">
              {exp.details.map((detail: string, i: number) => (
                <li key={i} className="text-muted-foreground flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      {exp.tech && (
        <div className="flex flex-wrap gap-2">
          {exp.tech.map((tech: string) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-secondary/30 hover:bg-secondary hover:text-destructive transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      )}
    </Card>
  );

  return (
    <section
      ref={ref}
      id="experience"
      className={`py-20 bg-muted/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 max-w-5xl space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="text-secondary">Experience</span>
        </h2>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Engineering Experience</h3>
          {engineeringExperience.map(ExperienceCard)}
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Other Experience</h3>
          {otherExperience.map((exp, i) => (
            <Card key={i} className="p-6 bg-card">
              <h4 className="font-bold">{exp.role}</h4>
              <p className="text-secondary">{exp.company}</p>
              <ul className="mt-2 space-y-1">
                {exp.summary.map((s: string, j: number) => (
                  <li key={j} className="text-muted-foreground">
                    • {s}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

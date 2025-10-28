import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const skills = [
    "Java",
    "Spring Boot",
    "Python",
    "REST APIs",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Playwright",
    "RAG",
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
              <div className="mb-6">
                <span className="text-secondary text-sm font-mono tracking-widest uppercase">
                  Full-Stack Developer
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                  Gokulnaath Govindaraj
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-semibold">
                Backend & Software Engineer
              </p>

              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl lg:mx-0 mx-auto leading-relaxed">
                Master's student in Computer Science at Wright State University with 1.5 years combined
                academic + internship experience across backend development, API design, automation
                testing, and ML/RAG. Currently Software Engineering Intern at AriesView.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-secondary/50 text-secondary hover:bg-secondary/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button
                  size="lg"
                  variant="hero"
                  onClick={() => scrollToSection("contact")}
                  className="text-base"
                >
                  Contact Me
                </Button>
                <Button
                  size="lg"
                  variant="gold"
                  onClick={() => scrollToSection("projects")}
                  className="text-base"
                >
                  View Projects
                </Button>
              </div>

              {/* Scroll Indicator */}
              <button
                onClick={() => scrollToSection("about")}
                className="inline-flex flex-col items-center text-muted-foreground hover:text-secondary transition-colors animate-pulse-glow lg:ml-0"
                aria-label="Scroll to about section"
              >
                <span className="text-sm mb-2">Explore</span>
                <ArrowDown size={24} />
              </button>
            </div>

            {/* Profile Image */}
            <div className="relative animate-fade-in order-1 lg:order-2" style={{ animationDelay: "200ms" }}>
              <div className="relative mx-auto w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-primary animate-gradient-shift bg-[length:200%_200%] p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img
                      src={profileImage}
                      alt="Gokulnaath Govindaraj - Backend & Software Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-secondary rounded-full opacity-50" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-primary rounded-full opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

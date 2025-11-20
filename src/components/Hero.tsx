import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const skills = [
    "Java",
    "Spring Boot",
    "Python",
    "Flask",
    "REST APIs",
    "JavaScript",
    "TypeScript",
    "React",
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
      ref={ref}
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
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

              {/* Scroll Indicator (moved to centered CTA) */}
            </div>

            {/* Profile Image */}
            <div className="relative animate-fade-in order-1 lg:order-2" style={{ animationDelay: "200ms" }}>
              <div className="relative mx-auto w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] group">
                {/* Gryffindor-style ring: half gold, half red with glow */}
                <div className="absolute inset-0 rounded-full p-1 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.6),0_0_60px_rgba(220,38,38,0.4)]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary via-secondary to-transparent" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-l from-red-600 via-red-600 to-transparent" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }} />
                  
                  <div className="w-full h-full rounded-full overflow-hidden bg-background relative">
                    <img
                      src={profileImage}
                      alt="Gokulnaath Govindaraj - Backend & Software Engineer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-secondary rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-red-600 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
            {/* Centered Scroll Indicator (now positioned above the bottom) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-28 md:bottom-20 z-20">
            <button
              onClick={() => scrollToSection("about")}
              className="group inline-flex flex-col items-center gap-2 px-8 py-5 rounded-full border-2 border-secondary/30 bg-gradient-to-br from-secondary/10 to-red-600/10 hover:from-secondary/20 hover:to-red-600/20 hover:border-secondary/60 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(212,175,55,0.4),0_0_30px_rgba(220,38,38,0.3)] animate-pulse-glow"
              aria-label="Scroll to about section"
            >
              <span className="text-base font-bold text-red-600 group-hover:text-red-700 tracking-wider">Explore</span>
              <ArrowDown className="text-red-600 animate-bounce" size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* single centered Explore CTA preserved above; duplicate pulsing CTA removed during merge resolution */}
    </section>
  );
};

export default Hero;

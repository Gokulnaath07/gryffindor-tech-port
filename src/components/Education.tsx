import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Wright State University",
      period: "Aug 2023 – Dec 2025 (Expected)",
      location: "Dayton, Ohio",
    },
    {
      degree: "Bachelor of Engineering in Mechatronics Engineering",
      school: "Chennai Institute of Technology",
      period: "Aug 2018 – Apr 2022",
      location: "Chennai, India",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-secondary">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 border-l-4 border-l-secondary bg-card animate-fade-in hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-3 mb-2 md:mb-0">
                    <div className="p-2 rounded-lg bg-secondary/10 mt-1">
                      <GraduationCap className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-lg text-secondary font-semibold">{edu.school}</p>
                      <p className="text-sm text-muted-foreground mt-1">{edu.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground md:ml-4">
                    <Calendar size={14} />
                    {edu.period}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

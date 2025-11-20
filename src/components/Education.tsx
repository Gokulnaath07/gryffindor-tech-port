import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, University, MapPin } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Wright State University",
      period: "Aug 2023 – Dec 2025 (Expected)",
      location: "Dayton, Ohio",
      icon: University,
      iconLabel: "WSU",
        coursework: [
          "Algorithms Design and Analysis",
          "Machine Learning",
          "Software Engineering",
          "Information retrieval",
          "Distributed Computing",
          "Coding Theory",
          "Reverse Engineering",
          "Foundations of Data Science",
          "Foundations of AI",
        ],
    },
    {
      degree: "Bachelor of Engineering in Mechatronics",
      school: "Anna University",
      period: "Aug 2018 – Apr 2022",
      location: "Chennai, India",
      icon: University,
      iconLabel: "Anna University",
    },
  ];

  const { ref, isVisible } = useScrollAnimation<HTMLElement>(0.2);
  return (
    <section
      ref={ref}
      id="education"
      className={`py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-secondary">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </div>

          <TooltipProvider>
            <div className="space-y-6">
              {education.map((edu, index) => {
                const IconComponent = edu.icon;
                return (
                  <Popover
                    key={index}
                    open={undefined}
                  >
                    <PopoverTrigger asChild>
                      <Card
                        className="p-6 border-l-4 border-l-secondary bg-card animate-fade-in hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300 cursor-pointer"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                          <div className="flex items-start gap-3 mb-2 md:mb-0">
                            <div className="p-2 rounded-lg bg-secondary/10 mt-1">
                              <GraduationCap className="text-secondary" size={20} />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span className="text-lg text-secondary font-semibold flex items-center gap-2">
                                    {edu.school}
                                    <IconComponent size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <div className="flex items-center gap-2">
                                    <IconComponent size={16} />
                                    <span>{edu.iconLabel}</span>
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                              <p className="text-sm text-muted-foreground mt-1">{edu.location}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground md:ml-4">
                            <Calendar size={14} />
                            {edu.period}
                          </div>
                        </div>
                      </Card>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 pb-2 border-b border-border">
                          <IconComponent className="text-secondary" size={20} />
                          <h4 className="font-semibold text-foreground">{edu.school}</h4>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <Calendar size={16} className="text-secondary mt-0.5" />
                            <div>
                              <p className="text-xs text-muted-foreground">Duration</p>
                              <p className="text-sm text-foreground">{edu.period}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <MapPin size={16} className="text-secondary mt-0.5" />
                            <div>
                              <p className="text-xs text-muted-foreground">Location</p>
                              <p className="text-sm text-foreground">{edu.location}</p>
                            </div>
                          </div>
                          {edu.coursework && edu.coursework.length > 0 && (
                            <div className="pt-1">
                              <p className="text-xs text-muted-foreground">Relevant Coursework</p>
                              <p className="text-sm text-foreground leading-relaxed">
                                {edu.coursework.join(", ")}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                );
              })}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default Education;

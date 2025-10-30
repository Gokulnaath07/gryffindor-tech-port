import { Card } from "@/components/ui/card";
<<<<<<< HEAD
import { GraduationCap, Calendar } from "lucide-react";
import useScrollAnimation from "@/hooks/use-scroll-animation";
=======
import { GraduationCap, Calendar, University, Building2, MapPin } from "lucide-react";
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
>>>>>>> 7fc7a0ec442d544334b98c8f74db737ee228b1e8

const Education = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Wright State University",
      period: "Aug 2023 – Dec 2025 (Expected)",
      location: "Dayton, Ohio",
      icon: University,
      iconLabel: "University",
    },
    {
      degree: "Bachelor of Engineering in Mechatronics Engineering",
      school: "Chennai Institute of Technology",
      period: "Aug 2018 – Apr 2022",
      location: "Chennai, India",
      icon: Building2,
      iconLabel: "Institute",
    },
  ];

  const { ref, isVisible } = useScrollAnimation<HTMLElement>(0.2);
  return (
<<<<<<< HEAD
    <section
      ref={ref}
      id="education"
      className={`py-20 interactive-section transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      data-proximity="far"
=======
    <section 
      ref={ref}
      id="education" 
      className={`py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
>>>>>>> 7fc7a0ec442d544334b98c8f74db737ee228b1e8
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
                          <Popover>
                            <PopoverTrigger asChild>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button className="text-lg text-secondary font-semibold hover:text-secondary/80 transition-colors flex items-center gap-2 group">
                                    {edu.school}
                                    <IconComponent size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <div className="flex items-center gap-2">
                                    <IconComponent size={16} />
                                    <span>{edu.iconLabel}</span>
                                  </div>
                                </TooltipContent>
                              </Tooltip>
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
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                          <p className="text-sm text-muted-foreground mt-1">{edu.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground md:ml-4">
                        <Calendar size={14} />
                        {edu.period}
                      </div>
                    </div>
                  </Card>
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

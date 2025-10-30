import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data with Zod
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast.error(firstError.message);
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_4scfd69",
        "template_t43xyhk",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "Y8fZVLw13P5eBT3bt"
      );
      
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try emailing me directly at gokulnaathgovindaraj07@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gokulnaathgovindaraj07@gmail.com",
      href: "mailto:gokulnaathgovindaraj07@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (224) 587-4888",
      href: "tel:+12245874888",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Fairborn, Ohio, US",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/gokulnaathg/",
      href: "https://linkedin.com/in/gokulnaathg/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/Gokulnaath07",
      href: "https://github.com/Gokulnaath07",
    },
  ];

  return (
    <section 
      ref={ref}
      id="contact" 
      className={`py-20 bg-muted/30 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="text-secondary">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how I can contribute to your team's success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-6 border-border bg-card animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="p-4 border-border bg-card hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 group"
                      >
                        <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                          <Icon className="text-secondary" size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="text-foreground font-medium group-hover:text-secondary transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-secondary/10">
                          <Icon className="text-secondary" size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="text-foreground font-medium">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

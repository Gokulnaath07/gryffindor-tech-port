import { Card } from "@/components/ui/card";
import { Shield, Database, Brain, AlertTriangle, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import resumeUrl from "@/assets/Govindaraj_Resume.pdf";

const About = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>(0.2);

  const optimizeFor = [
    "Predictable latency you can trust",
    "Correctness over quick hacks",
    "Metrics that explain failures clearly",
    "Concurrency models simple enough to reason about",
  ];

  const avoid = [
    "Systems held together by prayer and retry logic",
    "Eventually consistent as a design default",
    "ML pipelines evaluated by vibes",
    "Shipping without knowing failure modes",
    "Any sentence containing just or simply",
  ];


  return (
    <section
      ref={ref}
      id="about"
      className={`py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 max-w-5xl space-y-12">
        {/* HERO */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-secondary">Me</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Backend engineer who believes systems should fail politely,
            predictably, and with a detailed apology note. I work on APIs and
            data pipelines where it works on my machine is the beginning of the
            conversation, not the end.
          </p>
        </div>

        {/* HOW I WORK */}
        <Card className="p-6 bg-card/70">
          <h3 className="text-xl font-semibold mb-3">How I Work</h3>
          <p className="text-muted-foreground leading-relaxed">
            I spend my days preventing 3AM pages by being paranoid at 3PM. 
            Load testing APIs until they cry, tracing where databases start
            sweating, and fixing race conditions before they become intermittent
            issues that only show up in production during a demo.
          </p>

          <p className="text-muted-foreground leading-relaxed mt-3">
            I design backend flows end to end because I do not trust future me to
            debug what past me was thinking. Schema, transactions, concurrency
            model, and API behavior are planned before the first commit. When
            performance tanks, I want stack traces, not theories.
          </p>
        </Card>

        {/* WHAT I BUILD */}
        <Card className="p-6 bg-card/70">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Database className="text-secondary" size={20} />
            What I Build
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            High throughput backend services and applied AI systems that work
            when you turn them on. Retrieval augmented generation pipelines that
            understand the difference between net thirty and net worth. Hybrid
            retrieval where numbers matter. APIs that enforce data integrity
            instead of playing fast and loose with customer records.
          </p>

          <p className="text-muted-foreground leading-relaxed mt-3">
            Also systems that survive the demo and the week after launch.
          </p>
        </Card>

        {/* OPTIMIZE FOR */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-card/70">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Shield className="text-secondary" size={20} />
              What I Optimize For
            </h3>

            <ul className="space-y-2 text-muted-foreground">
              {optimizeFor.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-secondary">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          {/* AVOID */}
          <Card className="p-6 bg-card/70">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="text-secondary" size={20} />
              What I Avoid
            </h3>

            <ul className="space-y-2 text-muted-foreground">
              {avoid.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-secondary">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* What I'm Looking For */}
          <Card className="p-6 bg-card/70">
            <h3 className="text-xl font-semibold mb-3">
              What I Am Looking For
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              Backend or infrastructure teams where how does this fail is a design
              question, not a retrospective. Systems engineered for scale, not
              accidentally discovered at one hundred times traffic while everyone is
              on vacation.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-3">
              If you are building infrastructure that has to survive actual users
              doing actual unexpected things, we should talk.
            </p>
          </Card>

          {/* LET'S TALK */}
          <Card className="p-6 bg-card/70 border border-secondary/40">
            <h3 className="text-xl font-semibold mb-4">
              Let’s Talk
            </h3>

            <p className="text-muted-foreground mb-4">
              If this sounds like the kind of engineering you care about,
              I would love to connect.
            </p>

            <div className="flex flex-col gap-3">
              {/* Resume Button */}
              <Button asChild className="gap-2">
                <a href={resumeUrl} target="_blank" rel="noreferrer">
                  <Download size={18} />
                  View Resume
                </a>
              </Button>

              {/* Contact Button */}
              <Button asChild variant="outline" className="gap-2">
                <a href="#contact">
                  <Mail size={18} />
                  Contact Me
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

import { AnimatedText } from "@/components/animated-text";
import { SkillCard } from "@/components/skill-card";
import { Button } from "@v1/ui/button";
import {
  ArrowRight,
  Code2,
  Cog,
  Database,
  Download,
  Factory,
  Gauge,
  Github,
  Laptop,
  Linkedin,
  Mail,
  Server,
  Settings,
  Twitter,
  View,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
        {/* Enhanced Background Animations */}
        <div className="absolute inset-0">
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="animate-float-slow absolute -top-4 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="animate-float-slower absolute top-1/3 right-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
          </div>

          {/* Grid Animation */}
          <div className="absolute -top-[118px] inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4.5rem_2rem] -z-10 [transform:perspective(1000px)_rotateX(-63deg)] h-[80%] pointer-events-none animate-[grid_20s_linear_infinite]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none -z-10" />

        <div className="container px-4 mx-auto text-center">
          <h1 className="font-departure text-[40px] md:text-[84px] relative z-10 text-center leading-tight mb-6">
            <AnimatedText text="Christopher Celaya" />
          </h1>

          <h2 className="text-2xl md:text-3xl text-muted-foreground font-semibold mb-4 animate-fade-up [animation-delay:200ms]">
            Mechatronics Technician & Software Developer
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up [animation-delay:400ms]">
            Designing innovative web applications and automation solutions,
            blending technical precision with seamless user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-up [animation-delay:600ms]">
            <Button size="lg" className="gap-2 button-glow" asChild>
              <a
                href="https://cal.com/chriscelaya/30min"
                target="_blank"
                rel="noreferrer"
              >
                Get in Touch <ArrowRight size={16} />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 button-glow"
              asChild
            >
              <a href="/chris-celaya-resume.pdf">
                Download Resume <Download size={16} />
              </a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 button-glow"
              asChild
            >
              <Link href="/webxr">
                View More in VR <View size={16} />
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-up [animation-delay:800ms]">
            <a
              href="https://github.com/while-basic"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-all hover:-translate-y-1 duration-300"
            >
              <Github size={24} />
            </a>
            {/* <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Twitter size={24} />
            </a> */}
            <a
              href="https://linkedin.com/in/christophercelaya"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-all hover:-translate-y-1 duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:chris@chriscelaya.com"
              className="flex items-center gap-2 hover:opacity-80 transition-all hover:-translate-y-1 duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute -bottom-[280px] inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4.5rem_2rem] -z-10 [transform:perspective(560px)_rotateX(63deg)] pointer-events-none animate-[grid_20s_linear_infinite]" />
        <div className="absolute w-full bottom-[100px] h-1/2 bg-gradient-to-b from-background to-transparent pointer-events-none -z-10" />
      </div>

      {/* What I Do Section */}
      <div className="container px-4 mx-auto py-24">
        <h2 className="text-3xl font-bold mb-12 text-center animate-fade-up">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-lg border bg-card text-card-foreground hover:bg-accent/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <Button
                  variant="ghost"
                  className="gap-2 group-hover:translate-x-2 transition-transform duration-300"
                  asChild
                >
                  <a href={service.link}>
                    Learn More{" "}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="container px-4 mx-auto py-24">
        <h2 className="text-3xl font-bold mb-12 text-center animate-fade-up">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCard
            title="Electrical Systems"
            description="Comprehensive expertise in industrial electrical systems, maintenance, and troubleshooting."
            technologies={[
              "Power Distribution",
              "Motor Controls",
              "VFDs",
              "Circuit Analysis",
              "Electrical Safety",
            ]}
            icon={<Zap className="w-6 h-6 text-primary" />}
          />
          <SkillCard
            title="Preventative Maintenance"
            description="Implementing comprehensive maintenance programs to maximize equipment reliability and minimize downtime."
            technologies={[
              "Equipment Diagnostics",
              "Maintenance Planning",
              "Root Cause Analysis",
              "Reliability Engineering",
              "TPM",
            ]}
            icon={<Wrench className="w-6 h-6 text-primary" />}
          />
          <SkillCard
            title="Manufacturing Systems"
            description="Operating and maintaining complex manufacturing systems with focus on efficiency and quality."
            technologies={[
              "Production Lines",
              "Assembly Systems",
              "Quality Control",
              "Process Optimization",
              "Lean Manufacturing",
            ]}
            icon={<Factory className="w-6 h-6 text-primary" />}
          />
          <SkillCard
            title="Mechanical Systems"
            description="Expertise in mechanical system maintenance, troubleshooting, and optimization."
            technologies={[
              "Hydraulics",
              "Pneumatics",
              "Bearings",
              "Power Transmission",
              "Lubrication Systems",
            ]}
            icon={<Cog className="w-6 h-6 text-primary" />}
          />
          <SkillCard
            title="Process Control"
            description="Implementing and maintaining industrial process control systems for optimal operation."
            technologies={[
              "PID Control",
              "Instrumentation",
              "Flow Control",
              "Temperature Control",
              "Pressure Systems",
            ]}
            icon={<Gauge className="w-6 h-6 text-primary" />}
          />
          <SkillCard
            title="Frontend Development"
            description="Building modern, responsive web applications with a focus on performance and user experience."
            technologies={[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Redux",
            ]}
            icon={<Code2 className="w-6 h-6 text-primary" />}
          />
          <SkillCard
            title="Backend Development"
            description="Designing and implementing scalable server-side solutions and APIs."
            technologies={["Node.js", "Python", "Java", "REST APIs", "GraphQL"]}
            icon={<Server className="w-6 h-6 text-primary" />}
          />
          <SkillCard
            title="DevOps & Cloud"
            description="Managing cloud infrastructure and implementing CI/CD pipelines for efficient deployment."
            technologies={[
              "AWS",
              "Docker",
              "Kubernetes",
              "GitHub Actions",
              "Linux",
            ]}
            icon={<Settings className="w-6 h-6 text-primary" />}
          />
          <SkillCard
            title="Industrial Automation"
            description="Implementing and maintaining industrial control systems and automation solutions."
            technologies={[
              "PLC",
              "SCADA",
              "HMI",
              "Industrial IoT",
              "Control Systems",
            ]}
            icon={<Laptop className="w-6 h-6 text-primary" />}
          />
          <SkillCard
            title="Database & Storage"
            description="Designing and optimizing database schemas and data storage solutions."
            technologies={["PostgreSQL", "MongoDB", "Redis", "MySQL"]}
            icon={<Database className="w-6 h-6 text-primary" />}
          />
          <SkillCard
            title="System Integration"
            description="Connecting and integrating various systems and protocols in industrial and software environments."
            technologies={[
              "API Integration",
              "Protocol Implementation",
              "IoT",
              "Middleware",
            ]}
            icon={<Settings className="w-6 h-6 text-primary" />}
          />
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="container px-4 mx-auto py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-up">
            Let's Connect
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up [animation-delay:200ms]">
            Schedule a 30-minute call to discuss potential opportunities and how
            I can contribute to your team.
          </p>
          <div className="flex flex-col items-center gap-6 animate-fade-up [animation-delay:400ms]">
            <div className="text-center mb-8 bg-card p-8 rounded-lg border hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">What to expect:</h3>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  Discussion of your team needs and requirements
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  Overview of my technical skills and experience
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  Exploration of potential role fit
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  Q&A about my background and approach
                </li>
              </ul>
            </div>
            <Button size="lg" className="button-glow" asChild>
              <a
                href="https://cal.com/chriscelaya/30min"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a Call <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    title: "SYSTEMS INTEGRATION",
    description:
      "Specializing in connecting integrated systems, from industrial machinery to modern software platforms, ensuring seamless operation and optimal performance.",
    link: "/projects/system-integration",
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    description:
      "Self-taught programmer, creating efficient solutions that solve real-world problems.",
    link: "/projects/software-development",
  },
  {
    title: "INDUSTRIAL TECHNOLOGY",
    description:
      "Experienced in maintaining and optimizing pneumatic, hydraulic, water, and electrical systems, bringing reliability to complex industrial operations.",
    link: "/projects/industrial-technology",
  },
  {
    title: "AUDIO ENGINEERING & MUSIC PRODUCTION",
    description:
      "Passionate about crafting high-quality sound experiences through recording, mixing, and music production, combining technical expertise with creative vision.",
    link: "/projects/audio-engineering",
  },
];

const skills = [
  {
    title: "Programming Languages",
    description:
      "Python, JavaScript, TypeScript, CSS, Tailwind, HTML, Java, C/C++, SQL",
  },
  {
    title: "Web Technologies",
    description: "React, Next.js, Node.js, HTML5, Tailwind CSS",
  },
  {
    title: "Industrial & Automation",
    description:
      "PLC Programming, SCADA Systems, Industrial IoT, Robotics, Control Systems, HMI Development",
  },
  {
    title: "DevOps & Cloud",
    description: "Git, Docker, AWS, Google Cloud, Azure, Linux, Bash Scripting",
  },
  {
    title: "Machine Learning & AI",
    description:
      "Large Language Models, Computer Vision, Natural Language Processing, TensorFlow, PyTorch",
  },
  {
    title: "Project Management",
    description:
      "Team Leadership, Problem Solving, Technical Documentation, Process Optimization",
  },
];

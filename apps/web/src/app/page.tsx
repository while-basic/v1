import { AnimatedText } from "@/components/animated-text";
import { Button } from "@v1/ui/button";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
        <div className="absolute -top-[118px] inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4.5rem_2rem] -z-10 [transform:perspective(1000px)_rotateX(-63deg)] h-[80%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none -z-10" />

        <div className="container px-4 mx-auto text-center">
          <h1 className="font-departure text-[40px] md:text-[84px] relative z-10 text-center leading-tight mb-6">
            <AnimatedText text="Christopher Celaya" />
          </h1>

          <h2 className="text-2xl md:text-3xl text-muted-foreground font-semibold mb-4">
            Mechatronics Technician & Software Developer
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Designing innovative web applications and automation solutions,
            blending technical precision with seamless user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="gap-2" asChild>
              <a
                href="https://cal.com/chriscelaya/30min"
                target="_blank"
                rel="noreferrer"
              >
                Get in Touch <ArrowRight size={16} />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="/resume.pdf">
                Download Resume <Download size={16} />
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/christophercelaya"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Github size={24} />
            </a>
            <a
              href="https://twitter.com/christophercelaya"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://linkedin.com/in/christophercelaya"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:hello@chriscelaya.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute -bottom-[280px] inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4.5rem_2rem] -z-10 [transform:perspective(560px)_rotateX(63deg)] pointer-events-none" />
        <div className="absolute w-full bottom-[100px] h-1/2 bg-gradient-to-b from-background to-transparent pointer-events-none -z-10" />
      </div>

      {/* What I Do Section */}
      <div className="container px-4 mx-auto py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <Button variant="ghost" className="gap-2" asChild>
                <a href={service.link}>
                  Learn More <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="container px-4 mx-auto py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="container px-4 mx-auto py-24">
        <h2 className="text-3xl font-bold mb-8 text-center">Let's Connect</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          Schedule a 30-minute call to discuss potential opportunities and how I
          can contribute to your team.
        </p>
        <div className="flex flex-col items-center gap-6">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">What to expect:</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Discussion of your team needs and requirements</li>
              <li>• Overview of my technical skills and experience</li>
              <li>• Exploration of potential role fit</li>
              <li>• Q&A about my background and approach</li>
            </ul>
          </div>
          <Button size="lg" asChild>
            <a
              href="https://cal.com/chriscelaya/30min"
              target="_blank"
              rel="noreferrer"
            >
              Schedule an Call
            </a>
          </Button>
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
    description: "Python, JavaScript, TypeScript, Java, C/C++, SQL",
  },
  {
    title: "Web Technologies",
    description: "React, Next.js, Node.js, HTML5, CSS3/Sass, Tailwind CSS",
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

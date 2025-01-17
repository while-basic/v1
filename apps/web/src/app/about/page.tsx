import { Button } from "@v1/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title:
    "About Christopher Celaya | Software Developer & Mechatronic Technician in El Paso",
  description:
    "Learn about Christopher Celaya, a software developer and mechatronic technician in El Paso, Texas. Specializing in industrial automation, web development, and system integration.",
};

const technologies = [
  {
    title: "Software Development",
    items: [
      "Python",
      "JavaScript/TypeScript",
      "React",
      "Node.js",
      "Next.js",
      "MongoDB",
      "Docker",
      "Git",
    ],
  },
  {
    title: "Industrial Automation",
    items: [
      "PLCs",
      "SCADA",
      "HMIs",
      "Industrial IoT",
      "Robotic Processes",
      "Vision Inspection",
      "AGVs",
    ],
  },
  {
    title: "Mechanical Systems",
    items: [
      "Chillers",
      "Hydraulics",
      "Compressors",
      "Air Handling",
      "Pneumatics",
      "Conveyors",
      "Cooling Towers",
    ],
  },
  {
    title: "Electrical Systems",
    items: [
      "Power Distribution",
      "Transformers",
      "Circuit Breakers",
      "Electric Motors",
      "VFDs",
      "Control Panels",
    ],
  },
];

const interests = [
  "Machine Learning",
  "Artificial Intelligence",
  "Virtual Reality",
  "Blockchain",
  "Data Centers",
  "Manufacturing",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="prose dark:prose-invert">
              <p className="text-lg text-muted-foreground">
                As a mechatronic technologist and software developer based in El
                Paso, Texas, I specialize in bridging the gap between industrial
                manufacturing and modern software solutions. With over 11 years
                of experience, I've developed a unique blend of skills in both
                hardware and software domains, allowing me to create
                comprehensive solutions for complex industrial challenges.
              </p>
              <p className="text-lg text-muted-foreground">
                My journey began in music production, where I honed my attention
                to detail and creative problem-solving abilities. During the
                COVID-19 pandemic, I successfully released my first album on
                major streaming platforms, demonstrating my ability to adapt and
                deliver results in changing circumstances.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, I focus on developing innovative solutions at the
                intersection of industrial automation and software development.
                My expertise spans from maintaining complex electromechanical
                systems to creating sophisticated software applications, always
                with an eye toward efficiency and reliability.
              </p>
            </div>

            <div className="flex justify-start">
              <Button className="gap-2" asChild>
                <a href="/projects">
                  View Projects <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Core Technologies</h2>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech) => (
                  <div
                    key={tech.title}
                    className="p-4 rounded-lg border bg-card"
                  >
                    <h3 className="font-medium mb-2">{tech.title}</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {tech.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Areas of Interest</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {interests.map((interest) => (
                  <div
                    key={interest}
                    className="p-4 rounded-lg border bg-card text-center text-sm"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

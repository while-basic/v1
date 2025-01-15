import { Button } from "@v1/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="prose dark:prose-invert">
              <p className="text-lg text-muted-foreground">
                I am a mechatronic technologist and software developer, where I
                work on industrial manufacturing equipment, software, and web
                development. Before my obsession with technology, I was
                primarily focused on music production. During COVID-19, I
                distributed my first album on streaming services such as Apple
                Music and Spotify.
              </p>
              <p className="text-lg text-muted-foreground">
                In my spare time, I enjoy investing in learning new things,
                building web apps, and further expand my ideas. I am
                particularly interested in complex projects with artificial
                intelligence, virtual reality, industrial manufacturing, data
                centers, and blockchain technology.
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
              <h2 className="text-2xl font-semibold mb-4">Interests</h2>
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

const technologies = [
  {
    title: "Software Development",
    items: [
      "Python",
      "JavaScript",
      "React",
      "Node.js",
      "TypeScript",
      "Next.js",
    ],
  },
  {
    title: "Industrial Automation",
    items: [
      "PLCs",
      "SCADA",
      "HMIs",
      "Industrial IoT",
      "Robotics",
      "Control Systems",
    ],
  },
  {
    title: "DevOps & Cloud",
    items: ["AWS", "Docker", "Git", "CI/CD", "Linux", "Azure"],
  },
  {
    title: "Machine Learning",
    items: [
      "TensorFlow",
      "PyTorch",
      "Computer Vision",
      "NLP",
      "Large Language Models",
    ],
  },
];

const interests = [
  "Artificial Intelligence",
  "Virtual Reality",
  "Industrial Manufacturing",
  "Data Centers",
  "Blockchain",
  "Music Production",
];

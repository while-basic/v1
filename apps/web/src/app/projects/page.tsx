import { Button } from "@v1/ui/button";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Projects</h1>
        <p className="text-xl text-muted-foreground mb-12">
          A showcase of my recent work and side projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-lg border bg-card overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github size={16} /> Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="gap-2" asChild>
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "MedChat",
    description: "An AI-powered chatbot designed to assist medical professionals with real-time diagnosis and medical literature recommendations.",
    image: "/images/projects/medchat.png",
    technologies: ["Next.js", "Node.js", "Supabase", "Llama2"],
    github: "https://github.com/while-basic/",
    demo: "https://",
  },
  {
    title: "Law-GPT",
    description: "A GPT-based legal assistant providing case law summaries, legal precedent analysis, and document drafting.",
    image: "/images/projects/law-gpt.png",
    technologies: ["OpenAI", "LangChain", "Next.js"],
    github: "https://github.com/christophercelaya/",
    demo: "https://",
  },
  {
    title: "Chattersync",
    description: "A multi-channel real-time chat application for teams, with AI-powered suggestions and insights.",
    image: "/images/projects/chattersync.png",
    technologies: ["WebSocket", "React", "Node.js"],
    github: "https://github.com/while-basic/ChatterSync",
    demo: "https://chatter-sync.vercel.app",
  },
  {
    title: "Gemini Pro Vision",
    description: "A next-generation image processing tool with AI enhancements for photographers and videographers.",
    image: "/images/projects/gemini.png",
    technologies: ["Python", "Gemini Pro", "Computer Vision"],
    github: "https://github.com/while-basic/gemini/",
    demo: "https://gemini-three-indol.vercel.app",
  },
]; 
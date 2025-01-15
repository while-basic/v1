"use client";

import { Button } from "@v1/ui/button";
import {
  ArrowRight,
  Brain,
  Code,
  Cpu,
  ExternalLink,
  Github,
  Play,
  Rocket,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  category: string;
  videoUrl?: string;
  thumbnailUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "AI-Powered Manufacturing Analytics",
    description:
      "Real-time monitoring and predictive maintenance system for industrial equipment using machine learning algorithms and IoT sensors.",
    category: "Industrial",
    videoUrl: "YOUR_VIDEO_ID_1",
    thumbnailUrl: "/projects/manufacturing-thumb.jpg",
    githubUrl: "https://github.com/christophercelaya/manufacturing-analytics",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "AWS"],
    featured: true,
  },
  {
    title: "Virtual Reality Training Platform",
    description:
      "Immersive VR training solution for industrial operators, featuring realistic equipment simulations and interactive tutorials.",
    category: "VR/AR",
    videoUrl: "YOUR_VIDEO_ID_2",
    thumbnailUrl: "/projects/vr-training-thumb.jpg",
    liveUrl: "https://vr-training-demo.com",
    technologies: ["Unity", "C#", "WebXR", "Three.js"],
    featured: true,
  },
  {
    title: "Blockchain Supply Chain",
    description:
      "Decentralized supply chain management system using blockchain technology for transparent and secure tracking.",
    category: "Blockchain",
    videoUrl: "YOUR_VIDEO_ID_3",
    thumbnailUrl: "/projects/blockchain-thumb.jpg",
    githubUrl: "https://github.com/christophercelaya/supply-chain",
    technologies: ["Solidity", "Ethereum", "React", "Web3.js"],
    featured: true,
  },
  {
    title: "Smart Factory Dashboard",
    description:
      "Comprehensive dashboard for monitoring and controlling automated manufacturing processes in real-time.",
    category: "Industrial",
    thumbnailUrl: "/projects/dashboard-thumb.jpg",
    liveUrl: "https://dashboard-demo.com",
    technologies: ["Next.js", "TypeScript", "WebSocket", "MongoDB"],
  },
  {
    title: "AI Music Generator",
    description:
      "Machine learning model that generates original music compositions based on various musical styles and parameters.",
    category: "AI/ML",
    videoUrl: "YOUR_VIDEO_ID_4",
    thumbnailUrl: "/projects/ai-music-thumb.jpg",
    githubUrl: "https://github.com/christophercelaya/ai-music",
    technologies: ["Python", "PyTorch", "Web Audio API", "React"],
  },
];

const stats = [
  { label: "Projects Completed", value: "25+" },
  { label: "Technologies Used", value: "100+" },
  { label: "Years Experience", value: "8+" },
  { label: "Client Satisfaction", value: "100%" },
];

const skills = [
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "Building scalable web applications with modern technologies and best practices.",
    technologies: ["React", "Node.js", "TypeScript", "Next.js", "PostgreSQL"],
  },
  {
    icon: Cpu,
    title: "Industrial Automation",
    description:
      "Implementing smart manufacturing solutions and industrial control systems.",
    technologies: ["PLCs", "SCADA", "IoT", "Robotics", "HMI"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Developing intelligent systems and predictive analytics solutions.",
    technologies: [
      "TensorFlow",
      "PyTorch",
      "Computer Vision",
      "NLP",
      "Deep Learning",
    ],
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = Array.from(
    new Set(projects.map((project) => project.category)),
  );

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="absolute inset-0 bg-[url('/projects/hero-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Featured Projects
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Exploring the intersection of technology and industry through
              innovative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground">
              Combining software development, industrial automation, and
              artificial intelligence to create innovative solutions for complex
              problems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="p-6 rounded-lg border bg-card hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 gap-12">
            {featuredProjects.map((project) => (
              <div key={project.title} className="group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    {project.videoUrl ? (
                      <a
                        href={`https://youtube.com/watch?v=${project.videoUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative"
                      >
                        <Image
                          src={project.thumbnailUrl}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-16 h-16 text-white" />
                        </div>
                      </a>
                    ) : (
                      <Image
                        src={project.thumbnailUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                          >
                            <Github className="w-4 h-4" /> View Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                          >
                            <ExternalLink className="w-4 h-4" /> Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Development Process</h2>
            <p className="text-muted-foreground">
              A systematic approach to turning ideas into reality through
              careful planning, development, and deployment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding requirements and defining project scope",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Creating architecture and technical specifications",
              },
              {
                step: "03",
                title: "Development",
                description: "Building and testing the solution iteratively",
              },
              {
                step: "04",
                title: "Deployment",
                description: "Launching and maintaining the project",
              },
            ].map((phase) => (
              <div
                key={phase.step}
                className="relative p-6 rounded-lg border bg-card"
              >
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <h2 className="text-3xl font-bold mb-6 md:mb-0">All Projects</h2>
            <div className="flex gap-4 flex-wrap">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects
              .filter((p) => !p.featured)
              .map((project) => (
                <div
                  key={project.title}
                  className="group rounded-lg border bg-card overflow-hidden hover:border-primary transition-colors"
                >
                  <div className="aspect-video relative">
                    <Image
                      src={project.thumbnailUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    {project.videoUrl && (
                      <a
                        href={`https://youtube.com/watch?v=${project.videoUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Youtube className="w-12 h-12 text-white" />
                      </a>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-muted-foreground mb-8">
              Let's collaborate to bring your ideas to life using cutting-edge
              technology and industry best practices.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <a href="/contact">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { Button } from "@v1/ui/button";
import {
  ArrowRight,
  Brain,
  Code,
  Cpu,
  ExternalLink,
  Factory,
  Github,
  Globe,
  Layers,
  Play,
  Rocket,
  Server,
  Settings,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  featured?: boolean;
  details?: string[];
}

const categories = [
  "All",
  "AI & Machine Learning",
  "Web Development",
  "Game Development",
  "3D & Animation",
  "Healthcare",
];

const projects: Project[] = [
  {
    title: "MedChat",
    description:
      "An AI-powered healthcare assistant designed to help individuals with diagnosis suggestions.",
    category: "Healthcare",
    image: "/images/projects/medchat.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Python", "Ollama", "Llama 2"],
    featured: true,
    details: [
      "Custom medical knowledge base",
      "Real-time medical assistance",
      "Saved conversation history",
    ],
  },
  {
    title: "Midi Saber",
    description: "A custom made MIDI controlloer for creating Beat Saber maps.",
    category: "Game Development",
    image: "/images/projects/midi-saber.png",
    liveUrl: "https://www.youtube.com/watch?v=fW6c3pb60kE",
    technologies: ["Unity", "C#", "Steam VR"],
    details: [
      "Launchpad MIDI controller",
      "Real-time beat mapping",
      "Plug and play support",
    ],
  },
  {
    title: "Law-GPT",
    description:
      "An AI-powered legal assistant that helps individuals with legal information and case law research via Apple Watch and voice input.",
    category: "AI & Machine Learning",
    image: "/images/projects/law-gpt.png",
    liveUrl: "https://www.youtube.com/watch?v=19iWJPfot6k",
    technologies: ["Swift", "GPT-4"],
    featured: true,
    details: [
      "Real-time voice input",
      "Secure data encryption",
      "Apple Watch integration",
    ],
  },
  {
    title: "AI Tamagotchi",
    description:
      "A modern take on the classic virtual pet, powered by AI to create more dynamic and personalized pet interactions.",
    category: "AI & Machine Learning",
    image: "",
    githubUrl: "",
    technologies: [
      "React Native",
      "TensorFlow.js",
      "Node.js",
      "WebGL",
      "Three.js",
    ],
    details: [
      "Emotional AI system",
      "Events (feed, play, sleep, etc.)",
      "Native web application",
    ],
  },
  {
    title: "ChatterSync",
    description: "An instances of two chatbots communicating with each other.",
    category: "AI & Machine Learning",
    image: "/images/projects/chatter-sync.png",
    technologies: [
      "Python",
      "WebRTC",
      "React",
      "FastAPI",
      "TensorFlow",
      "WebSocket",
    ],
    details: ["No human intervention", "Low latency processing"],
  },
  {
    title: "Celaya Solutions",
    description:
      "Corporate website and service platform showcasing software development and consulting services.",
    category: "Web Development",
    image: "/images/projects/celaya-solutions.png",
    liveUrl: "https://celaya-solutions.vercel.app/",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Vercel",
    ],
    details: [
      "Modern UI/UX design",
      "Responsive layout",
      "Service integration",
      "Performance optimization",
      "SEO optimization",
    ],
  },
  {
    title: "Stable Diffusion Artwork",
    description: "A collection of AI-generated artwork using Stable Diffusion.",
    category: "AI & Machine Learning",
    image: "/images/projects/old-man.webp",
    technologies: ["Stable Diffusion", "Python", "CUDA", "PyTorch", "React"],
    details: [
      "Generative artwork creation",
      "NFT integration",
      "Artist marketplace",
      "Custom model training",
      "Style transfer capabilities",
    ],
  },
  {
    title: "Amica",
    description:
      "Healthcare management platform for medical practices, focusing on patient care and practice administration.",
    category: "Healthcare",
    image: "/images/projects/amica.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    details: ["TTS support", "Voice assistant", "Multimodal support"],
  },
  {
    title: "Top Level Blockchain Domain Name Service",
    description:
      "A decentralized top-level domain name service for blockchain domains.",
    category: "Web Development",
    image: "/images/projects/tld.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Polygon", "Solidity", "Web3.js", "React", "Node.js"],
    featured: false,
    details: [
      "Top-level domain name service",
      "Blockchain domain registration",
      "Decentralized DNS",
      "Smart contract integration",
      "Multi-chain support",
    ],
  },
  {
    title: "3D Animation Portfolio",
    description:
      "A collection of 3D animations and visual effects created for various projects.",
    category: "3D & Animation",
    image: "/images/projects/blender.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Blender", "3D Animation", "Python", "After Effects"],
    featured: false,
    details: [
      "Photorealistic materials and textures",
      "Realistic lighting and camera angles",
      "Particle effects",
      "Character rigging and animation",
      "Motion graphics",
    ],
  },
  {
    title: "Forest Environment",
    description:
      "A fully immersive forest environment created using Unreal Engine 5 with dynamic weather and lighting.",
    category: "Game Development",
    image: "/images/projects/forest.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Unreal Engine 5", "C++", "Blueprints", "Quixel Megascans"],
    featured: false,
    details: [
      "Fully immersive forest environment",
      "Dynamic weather system",
      "Realistic lighting and shadows",
      "Advanced particle effects",
      "Procedural vegetation",
    ],
  },
  {
    title: "Cross-Platform Game",
    description:
      "A multi-platform adventure game developed using Unity with cross-platform save functionality.",
    category: "Game Development",
    image: "/images/projects/unity.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Unity", "C#", "Blender", "Firebase"],
    featured: false,
    details: [
      "Cross-platform compatibility",
      "Cloud save system",
      "Advanced AI pathfinding",
      "Custom shader effects",
      "Integrated analytics",
    ],
  },
  {
    title: "Gemini Pro Vision",
    description:
      "An interactive website leveraging Google's Gemini Pro Vision API for advanced image analysis and generation.",
    category: "AI & Machine Learning",
    image: "/images/projects/gemini.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Gemini", "React", "Next.js", "Tailwind", "Vercel"],
    featured: false,
    details: [
      "AI-powered image analysis",
      "Voice recognition integration",
      "Real-time text to speech",
      "Multimodal model support",
      "Advanced image processing",
    ],
  },
  {
    title: "chriscelaya.com",
    description:
      "Professional portfolio website showcasing projects, skills, and services.",
    category: "Web Development",
    image: "/images/projects/chris-celaya.png",
    githubUrl: "",
    liveUrl: "https://chriscelaya.com",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    featured: false,
    details: [
      "Professional portfolio",
      "Project showcase",
      "Interactive UI elements",
      "Contact form integration",
      "Advanced SEO optimization",
    ],
  },
  {
    title: "chriscelaya.xyz",
    description:
      "Personal blog and experimental project showcase with interactive features.",
    category: "Web Development",
    image: "/images/projects/chris-celaya-xyz.png",
    githubUrl: "",
    liveUrl: "https://chriscelaya.xyz",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    featured: false,
    details: [
      "Personal blog platform",
      "Interactive project demos",
      "Dynamic content loading",
      "Performance optimization",
      "Analytics integration",
    ],
  },
  {
    title: "E-Commerce Online Store",
    description:
      "A full-featured e-commerce platform for the Dead Rose brand with advanced shopping features.",
    category: "Web Development",
    image: "/images/projects/e-commerce.png",
    githubUrl: "",
    liveUrl: "https://storefront-production-5192.up.railway.app/us",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Stripe", "Vercel"],
    featured: true,
    details: [
      "Full e-commerce functionality",
      "Inventory management",
      "Secure payment processing",
      "User authentication",
      "Order tracking system",
    ],
  },
  {
    title: "Chatbot Dashboard",
    description:
      "A comprehensive chatbot management system with advanced analytics and user management.",
    category: "Web Development",
    image: "/images/projects/chat-bot-dashboard.png",
    githubUrl: "https://github.com/while-basic/celaya-chatbot",
    liveUrl: "https://celaya-chatbot.vercel.app",
    technologies: ["Next.js", "TypeScript", "Tailwind", "OpenAI", "Vercel"],
    featured: true,
    details: [
      "Multi-user authentication",
      "Real-time chat functionality",
      "Analytics dashboard",
      "Conversation history",
      "Bot training interface",
    ],
  },
  {
    title: "El Paso Hearts",
    description:
      "A modern dating platform specifically designed for the El Paso community.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Firebase", "Vercel"],
    featured: false,
    details: [
      "Location-based matching",
      "Real-time messaging",
      "Profile verification",
      "Event organization",
      "Community features",
    ],
  },
  {
    title: "Digital Illustrations Portfolio",
    description:
      "A curated collection of digital artwork and illustrations showcasing various styles and techniques.",
    category: "Digital Illustrations",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Figma", "Vectornator", "Procreate", "Adobe Creative Suite"],
    featured: false,
    details: [
      "Vector illustrations",
      "Digital paintings",
      "Character designs",
      "Brand illustrations",
      "Motion graphics",
    ],
  },
];

const skills = [
  {
    title: "Industrial Automation",
    description:
      "Expertise in PLC programming, SCADA systems, and industrial control systems integration.",
    icon: Factory,
    technologies: ["PLCs", "SCADA", "HMIs", "Industrial IoT"],
  },
  {
    title: "Software Development",
    description:
      "Full-stack development with modern frameworks and cloud technologies.",
    icon: Code,
    technologies: ["React", "Node.js", "Python", "AWS"],
  },
  {
    title: "System Integration",
    description:
      "Seamless integration of hardware and software systems for industrial applications.",
    icon: Settings,
    technologies: ["APIs", "Protocols", "Databases", "Middleware"],
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory,
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center rounded-3xl overflow-hidden mb-12">
        {/* Background layers */}
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
          style={{ backgroundPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/50 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />

        {/* Content */}
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-sm">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground mb-8 drop-shadow-lg max-w-2xl mx-auto">
              Explore my portfolio of innovative projects spanning software
              development, audio production, and creative technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <div
                  key={project.title}
                  className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
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
              ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/5">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-sm text-muted-foreground">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  {project.details && (
                    <ul className="space-y-2 mb-4">
                      {project.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <ArrowRight className="w-4 h-4 text-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
                      >
                        {tech}
                      </span>
                    ))}
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

      {/* Technical Expertise */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground">
              Combining industrial automation, software development, and system
              integration to create innovative solutions for complex challenges.
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

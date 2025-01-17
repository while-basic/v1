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
    title: "Med-Chat",
    description:
      "An AI-powered healthcare assistant designed to help medical professionals with patient care, diagnosis suggestions, and medical literature recommendations.",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    githubUrl: "https://github.com/christophercelaya/med-chat",
    liveUrl: "https://med-chat.celayasolutions.com",
    technologies: [
      "Python",
      "OpenAI",
      "React",
      "Next.js",
      "Tailwind",
      "Supabase",
    ],
    featured: true,
    details: [
      "Real-time medical assistance",
      "Integration with medical databases",
      "Secure patient data handling",
      "Custom medical knowledge base",
      "HIPAA compliance",
    ],
  },
  {
    title: "Midi Saber",
    description:
      "A VR rhythm game that combines lightsaber combat with music, turning MIDI files into dynamic gameplay elements.",
    category: "Game Development",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    technologies: [
      "Unity",
      "C#",
      "MIDI.js",
      "VR Toolkit",
      "Blender",
      "Steam VR",
    ],
    details: [
      "Dynamic MIDI integration",
      "Custom VR controls",
      "Real-time beat mapping",
      "Multiplayer support",
      "Cross-platform VR compatibility",
    ],
  },
  {
    title: "Law-GPT",
    description:
      "An AI-powered legal assistant that helps lawyers and legal professionals with case research, document analysis, and legal precedent search.",
    category: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73",
    githubUrl: "https://github.com/christophercelaya/law-gpt",
    technologies: [
      "Python",
      "GPT-4",
      "TypeScript",
      "Next.js",
      "Prisma",
      "PostgreSQL",
    ],
    featured: true,
    details: [
      "Legal document analysis",
      "Case law research",
      "Automated document generation",
      "Legal precedent matching",
      "Secure data encryption",
    ],
  },
  {
    title: "AI Tamagotchi",
    description:
      "A modern take on the classic virtual pet, powered by AI to create more dynamic and personalized pet interactions.",
    category: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce",
    githubUrl: "https://github.com/christophercelaya/ai-tamagotchi",
    technologies: [
      "React Native",
      "TensorFlow.js",
      "Node.js",
      "WebGL",
      "Three.js",
    ],
    details: [
      "Personality evolution",
      "Emotional AI system",
      "Interactive 3D graphics",
      "Cross-platform support",
      "Real-time pet behavior adaptation",
    ],
  },
  {
    title: "ChatterSync",
    description:
      "Real-time natural language translation platform with support for multiple languages and dialects.",
    category: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011",
    technologies: [
      "Python",
      "WebRTC",
      "React",
      "FastAPI",
      "TensorFlow",
      "WebSocket",
    ],
    details: [
      "Real-time translation",
      "Voice recognition",
      "Multi-language support",
      "Low latency processing",
      "Dialect recognition",
    ],
  },
  {
    title: "Celaya Solutions",
    description:
      "Corporate website and service platform showcasing software development and consulting services.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    liveUrl: "https://celayasolutions.com",
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
    description:
      "A platform for creating, showcasing, and trading AI-generated artwork using Stable Diffusion.",
    category: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a",
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
    title: "Amica Medical",
    description:
      "Healthcare management platform for medical practices, focusing on patient care and practice administration.",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AWS",
      "HIPAA Compliance",
    ],
    details: [
      "Patient management",
      "Appointment scheduling",
      "Medical records",
      "Billing integration",
      "Insurance verification",
    ],
  },
  {
    title: "Top Level Blockchain Domain Name Service",
    description:
      "A decentralized top-level domain name service for blockchain domains.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
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
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2",
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
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d",
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
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914",
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
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
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
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
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
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
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
    title: "Dead Rose Online Store",
    description:
      "A full-featured e-commerce platform for the Dead Rose brand with advanced shopping features.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
    githubUrl: "",
    liveUrl: "",
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
    title: "AI Chatbot Dashboard",
    description:
      "A comprehensive chatbot management system with advanced analytics and user management.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Next.js", "TypeScript", "Tailwind", "OpenAI", "Vercel"],
    featured: false,
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
    title: "Mental Health Assistant",
    description:
      "An AI-powered platform providing mental health support and resources to users.",
    category: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    githubUrl: "",
    liveUrl: "",
    technologies: [
      "Python",
      "OpenAI",
      "React",
      "Next.js",
      "Tailwind",
      "Supabase",
    ],
    featured: false,
    details: [
      "Personalized AI assistance",
      "Resource recommendations",
      "Progress tracking",
      "Crisis intervention protocols",
      "Professional referral system",
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Featured Projects
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Exploring the intersection of AI, healthcare, gaming, and web
              technologies through innovative full-stack solutions.
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

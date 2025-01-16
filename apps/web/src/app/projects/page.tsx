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

const projects: Project[] = [
  {
    title: "Industrial IoT Platform",
    description: "Real-time monitoring and predictive maintenance system for manufacturing equipment using IoT sensors and machine learning.",
    category: "Industrial Automation",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    githubUrl: "https://github.com/christophercelaya/iiot-platform",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "AWS IoT", "MongoDB"],
    featured: true,
    details: [
      "Real-time data collection from 100+ IoT sensors",
      "Predictive maintenance algorithms with 95% accuracy",
      "Custom dashboard for equipment monitoring",
      "Automated alert system for maintenance teams"
    ]
  },
  {
    title: "VR Training Simulator",
    description: "Immersive virtual reality training platform for industrial operators with realistic equipment simulations.",
    category: "Virtual Reality",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac",
    liveUrl: "https://vr-training-demo.com",
    technologies: ["Unity", "C#", "WebXR", "Three.js", "WebGL", "TypeScript"],
    featured: true,
    details: [
      "Interactive 3D equipment models",
      "Step-by-step training procedures",
      "Performance tracking and analytics",
      "Multi-user training sessions"
    ]
  },
  {
    title: "Smart Factory Dashboard",
    description: "Comprehensive manufacturing analytics dashboard for real-time production monitoring and optimization.",
    category: "Industrial Automation",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232",
    liveUrl: "https://factory-dashboard.demo",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Grafana"],
    featured: true,
    details: [
      "Real-time production metrics",
      "Quality control monitoring",
      "Resource utilization tracking",
      "Automated reporting system"
    ]
  },
  {
    title: "Blockchain Supply Chain",
    description: "Decentralized supply chain management system using blockchain technology for transparency and traceability.",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f",
    githubUrl: "https://github.com/christophercelaya/blockchain-supply",
    technologies: ["Solidity", "React", "Web3.js", "Node.js", "IPFS", "Ethereum"],
    details: [
      "Smart contract automation",
      "Real-time tracking system",
      "Supplier verification",
      "Digital documentation"
    ]
  },
  {
    title: "AI Quality Inspector",
    description: "Computer vision system for automated quality control in manufacturing processes.",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    technologies: ["Python", "OpenCV", "TensorFlow", "PyTorch", "Docker", "FastAPI"],
    details: [
      "Real-time defect detection",
      "Automated quality reporting",
      "Integration with PLC systems",
      "Custom vision algorithms"
    ]
  },
  {
    title: "Energy Management System",
    description: "Smart energy monitoring and optimization platform for industrial facilities.",
    category: "Industrial Automation",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369",
    technologies: ["Python", "InfluxDB", "React", "Node.js", "MQTT", "Grafana"],
    details: [
      "Real-time energy monitoring",
      "Predictive load balancing",
      "Cost optimization algorithms",
      "Automated reporting"
    ]
  }
];

const categories = [
  "All",
  "Industrial Automation",
  "Virtual Reality",
  "Machine Learning",
  "Blockchain",
];

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "15+", label: "Industrial Clients" },
  { value: "99.9%", label: "System Uptime" },
  { value: "24/7", label: "Support Coverage" },
];

const skills = [
  {
    title: "Industrial Automation",
    description: "Expertise in PLC programming, SCADA systems, and industrial control systems integration.",
    icon: Factory,
    technologies: ["PLCs", "SCADA", "HMIs", "Industrial IoT"],
  },
  {
    title: "Software Development",
    description: "Full-stack development with modern frameworks and cloud technologies.",
    icon: Code,
    technologies: ["React", "Node.js", "Python", "AWS"],
  },
  {
    title: "System Integration",
    description: "Seamless integration of hardware and software systems for industrial applications.",
    icon: Settings,
    technologies: ["APIs", "Protocols", "Databases", "Middleware"],
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory
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
              Innovative solutions in industrial automation, software development, and system integration.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.featured).map((project) => (
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
                      {project.details.map((detail, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
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

      {/* Technical Expertise */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground">
              Combining industrial automation, software development, and system integration
              to create innovative solutions for complex challenges.
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

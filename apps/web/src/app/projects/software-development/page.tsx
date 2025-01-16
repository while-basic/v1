import { Button } from "@v1/ui/button";
import {
  ArrowRight,
  Cloud,
  Code,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Server,
  Terminal,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Software Development | Christopher Celaya",
  description:
    "Full-stack software development and cloud architecture solutions by Christopher Celaya",
};

export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Grid */}
      <div className="relative min-h-[80vh] pt-24 flex items-center">
        {/* Animated background with industrial pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4.5rem_2rem] animate-[grid_20s_linear_infinite] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

        <div className="container relative z-10 px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
                <Code className="w-4 h-4 text-primary animate-spin-slow" />
                <span className="text-primary font-semibold">
                  Modern Development
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Software
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                  Development
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Christopher Celaya is a seasoned full-stack developer with
                extensive experience in building scalable applications, cloud
                architectures, and enterprise solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  View Portfolio <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Technical Blog
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-6 rounded-lg border bg-card hover:bg-primary/5 transition-all"
                  >
                    <metric.icon className="w-8 h-8 text-primary mb-4" />
                    <div className="text-2xl font-bold mb-2">
                      {metric.value}
                    </div>
                    <div className="text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Competencies */}
      <div className="container px-4 mx-auto py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Core Competencies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full software development
            lifecycle
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competencies.map((competency) => (
            <div
              key={competency.title}
              className="p-6 rounded-lg border bg-card hover:bg-primary/5 transition-all"
            >
              <competency.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">{competency.title}</h3>
              <p className="text-muted-foreground mb-6">
                {competency.description}
              </p>
              <ul className="space-y-2">
                {competency.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <div className="bg-gradient-to-b from-background to-primary/5 py-24">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative rounded-lg overflow-hidden"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="container px-4 mx-auto py-24">
        <h2 className="text-3xl font-bold text-center mb-16">
          Technology Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-bold text-lg capitalize">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-t from-background to-primary/5 py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your Next Project</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Partner with Christopher to bring your software vision to life
              with modern technologies and best practices.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const codeSnippets = [
  "const optimizePerformance = async () => {",
  "  const metrics = await analyze(system);",
  "  return enhance(metrics);",
  "}",
  "interface Solution {",
  "  scalable: boolean;",
  "  efficient: boolean;",
  "  maintainable: boolean;",
  "}",
];

const metrics = [
  { icon: Globe, label: "Projects Delivered", value: "100+" },
  { icon: GitBranch, label: "Code Commits", value: "5000+" },
  { icon: Server, label: "Cloud Deployments", value: "200+" },
  { icon: Terminal, label: "Technologies", value: "25+" },
];

const competencies = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "Expert in building scalable web applications with modern frameworks and technologies.",
    skills: [
      "React/Next.js",
      "Node.js/Express",
      "TypeScript",
      "API Development",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "Experienced in designing and implementing cloud-native solutions.",
    skills: ["AWS/Azure/GCP", "Serverless", "Microservices", "DevOps"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Proficient in designing efficient data pipelines and storage solutions.",
    skills: [
      "SQL/NoSQL",
      "Data Modeling",
      "ETL Pipelines",
      "Real-time Processing",
    ],
  },
];

const projects = [
  {
    title: "Enterprise SaaS Platform",
    description:
      "Scalable multi-tenant application serving 10,000+ daily users",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Real-time Analytics Dashboard",
    description:
      "High-performance data visualization platform processing millions of events",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Next.js", "GraphQL", "TimescaleDB", "WebSocket"],
  },
];

const techStack = {
  frontend: ["React/Next.js", "TypeScript", "Tailwind CSS", "WebGL/Three.js"],
  backend: ["Node.js", "Python", "Go", "GraphQL"],
  cloud: ["AWS Suite", "Azure Services", "Kubernetes", "Terraform"],
  databases: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
};

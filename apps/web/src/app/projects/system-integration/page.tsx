import { Button } from "@v1/ui/button";
import {
  ArrowRight,
  Database,
  Network,
  Server,
  Settings,
  Code,
  Globe,
  GitBranch,
  Terminal,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "System Integration | Christopher Celaya",
  description: "Enterprise system integration solutions by Christopher Celaya",
};

export default function SystemIntegration() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Grid Pattern */}
      <div className="relative min-h-[80vh] pt-24 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4.5rem_2rem] z-20" />
        <div className="relative z-30 h-full flex items-center">
          <div className="container relative z-10 px-4 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
                  <Settings className="w-4 h-4 text-primary animate-spin-slow" />
                  <span className="text-primary font-semibold">
                    Industrial Automation
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  System
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                    Integration
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  Christopher Celaya specializes in industrial automation and control systems integration 
                  for factories, warehouses, cannabis facilities, data centers, and critical infrastructure.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    Explore Solutions <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    View Case Studies
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
      </div>

      {/* Core Competencies */}
      <div className="container px-4 mx-auto py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Core Competencies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Christopher's comprehensive expertise in enterprise system integration and modern architecture
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
                {competency.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
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
            <h2 className="text-3xl font-bold mb-6">
              Transform Your Facility
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with Christopher to discuss how industrial automation and system integration
              can optimize your facility's operations and ensure regulatory compliance.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Schedule a Call <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const metrics = [
  { icon: Globe, label: "Facilities Automated", value: "50+" },
  { icon: GitBranch, label: "Control Systems", value: "100+" },
  { icon: Server, label: "Years Experience", value: "10+" },
  { icon: Terminal, label: "Industries Served", value: "12+" },
];

const competencies = [
  {
    icon: Network,
    title: "Industrial Automation",
    description:
      "Expert in designing and implementing automated control systems for manufacturing, warehousing, and specialized facilities.",
    features: [
      "PLC Programming",
      "SCADA Systems",
      "Motion Control",
      "Process Automation",
    ],
  },
  {
    icon: Server,
    title: "Facility Integration",
    description:
      "Specialized in connecting and optimizing systems for data centers, cannabis facilities, and critical infrastructure.",
    features: [
      "Environmental Controls",
      "Security Systems",
      "Energy Management",
      "Compliance Monitoring",
    ],
  },
  {
    icon: Database,
    title: "Data & Controls",
    description:
      "Comprehensive experience in implementing data collection and control systems for industrial environments.",
    features: [
      "Real-time Monitoring",
      "Production Analytics",
      "Quality Control",
      "Regulatory Compliance",
    ],
  },
];

const projects = [
  {
    title: "Cannabis Facility Automation",
    description:
      "Implemented comprehensive environmental control and monitoring systems across multiple cultivation facilities, ensuring optimal growing conditions and compliance",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    technologies: ["Allen Bradley", "Ignition SCADA", "EtherNet/IP", "SQL"],
  },
  {
    title: "Warehouse Management System",
    description:
      "Designed and deployed an automated material handling and inventory management system, increasing throughput by 200% and reducing errors by 98%",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    technologies: ["Siemens PLC", "WinCC", "Profinet", "ASi"],
  },
];

const techStack = {
  automation: ["Allen Bradley", "Siemens", "Omron", "Beckhoff"],
  networking: ["EtherNet/IP", "Profinet", "Modbus TCP", "OPC-UA"],
  scada: ["Ignition", "WinCC", "FactoryTalk", "Wonderware"],
  safety: ["Safety PLCs", "Light Curtains", "Safety IO", "E-Stops"],
};

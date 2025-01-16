import { Button } from "@v1/ui/button";
import {
  ArrowRight,
  Bot,
  Cog,
  Cpu,
  Factory,
  Gauge,
  Power,
  Settings,
  Workflow,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Systems Integration | Christopher Celaya",
  description:
    "Expert systems integration and industrial automation solutions by Christopher Celaya",
};

export default function IndustrialTechnology() {
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
                <Settings className="w-4 h-4 text-primary animate-spin-slow" />
                <span className="text-primary font-semibold">
                  Industry 4.0 Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Industrial
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                  Technology
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Christopher Celaya brings over a decade of expertise in systems
                integration, specializing in connecting legacy industrial
                systems with modern cloud platforms and smart manufacturing
                solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  Explore Solutions <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4 mb-8">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-6 rounded-lg border bg-card hover:bg-primary/5 transition-all"
                  >
                    <metric.icon className="w-8 h-8 text-primary mb-4" />
                    <div className="text-2xl font-bold mb-2">{metric.value}</div>
                    <div className="text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-background/80 backdrop-blur-sm p-4 rounded-lg"
                  >
                    <div className="text-2xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Capabilities with 3D Cards */}
      <div className="container px-4 mx-auto py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leveraging cutting-edge technology to transform industrial
            operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group relative p-8 rounded-lg border bg-card hover:bg-primary/5 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute -inset-px bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{capability.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {capability.description}
                </p>
                <ul className="space-y-2">
                  {capability.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Cog className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solutions Showcase */}
      <div className="bg-gradient-to-b from-background to-primary/5 py-24">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Industrial Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <div key={solution.title} className="relative">
                <div className="relative h-[300px] rounded-lg overflow-hidden mb-6">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Stack with Animated Border */}
      <div className="container px-4 mx-auto py-24">
        <div className="relative p-8 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-primary/10 animate-gradient" />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category} className="space-y-4">
                  <h3 className="font-bold text-lg capitalize">{category}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Power className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-t from-background to-primary/5 py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Transform Your Industrial Operations
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Partner with Christopher to modernize your industrial systems and
              achieve unprecedented levels of efficiency and automation.
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

const metrics = [
  { icon: Factory, label: "Facilities Automated", value: "100+" },
  { icon: Cpu, label: "Control Systems", value: "500+" },
  { icon: Bot, label: "Years Experience", value: "15+" },
  { icon: Workflow, label: "Industries Served", value: "12+" },
];

const stats = [
  { label: "Projects Completed", value: "75+" },
  { label: "Years Experience", value: "10+" },
  { label: "Industries Served", value: "12+" },
];

const capabilities = [
  {
    icon: Bot,
    title: "Systems Architecture",
    description:
      "Christopher specializes in designing and implementing robust industrial system architectures.",
    features: [
      "Enterprise System Design",
      "Legacy System Integration",
      "Cloud Migration Strategy",
      "Scalable Architecture",
    ],
  },
  {
    icon: Cpu,
    title: "Industrial IoT",
    description:
      "Expert implementation of IIoT solutions with proven success in various industries.",
    features: [
      "Sensor Integration",
      "Edge Computing",
      "Real-time Analytics",
      "Predictive Maintenance",
    ],
  },
  {
    icon: Gauge,
    title: "Process Automation",
    description:
      "End-to-end automation solutions that drive operational excellence.",
    features: [
      "Workflow Automation",
      "Data Pipeline Design",
      "System Optimization",
      "Custom Integration APIs",
    ],
  },
];

const solutions = [
  {
    title: "Enterprise Integration Platform",
    description:
      "Successfully implemented enterprise-wide integration platform connecting 20+ systems.",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Smart Factory Implementation",
    description:
      "Led digital transformation project resulting in 40% efficiency improvement.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
  },
];

const techStack = {
  development: ["Python", "Node.js", "C#/.NET", "Go"],
  integration: ["RESTful APIs", "GraphQL", "Message Queues", "ESB/iPaaS"],
  cloud: ["AWS IoT", "Azure IoT Hub", "Google Cloud IoT", "Edge Computing"],
  tools: ["Docker/K8s", "CI/CD Pipelines", "Terraform", "Monitoring Suites"],
};

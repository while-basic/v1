"use client";

import { Button } from "@v1/ui/button";
import {
  Award,
  BookOpen,
  type BriefcaseIcon,
  Building2,
  Download,
  GraduationCap,
  Headphones,
  LineChart,
  Mail,
  Medal,
  PlayCircle,
  Settings,
  Wrench,
  WrenchIcon,
} from "lucide-react";
import Image from "next/image";

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  location: string;
  description?: string;
  responsibilities: string[];
  technologies?: string[];
  icon: typeof BriefcaseIcon;
}

interface AudioContent {
  title: string;
  duration: string;
  url: string;
}

const workExperience: WorkExperience[] = [
  {
    title: "Data Center Technician II",
    company: "T5 Data Centers",
    period: "2021-2022",
    location: "San Antonio, Texas",
    responsibilities: [
      "Maintain and operate both critical and non-critical data center infrastructure, equipment, and systems",
      "Collaborate with a team of Critical Facilities Technician (CFT) to ensure total availability (100% uptime) while minimizing risks",
      "Utilize a Computerized Maintenance Management System (CMMS) for managing scheduled and unscheduled data center tasks",
      "Conduct preventive maintenance on electrical and mechanical equipment within the data center",
      "Troubleshoot and document technical problems, escalate when necessary, and ensure resolution",
      "Supervise external contractors, ensuring adherence to critical facility work rules",
    ],
    technologies: [
      "CMMS",
      "Data Center Infrastructure",
      "Critical Systems",
      "Preventive Maintenance",
    ],
    icon: Building2,
  },
  {
    title: "Mechatronics Technician",
    company: "CN Wire",
    period: "2018-2021",
    location: "Santa Teresa, New Mexico",
    responsibilities: [
      "Troubleshoot, maintain electrical repairs and installations on factory equipment",
      "Interpret diagrams, schematics, and electrical code specification",
      "Install and repair electrical commutators, electronic sensors, and Human Machine Interface (HMI) touch panels",
      "Maintain cooling, compression and emulsion systems required for facility operation",
      "Update manufacturing records, process work orders, and installation reports",
      "Manage end-to-end electrical projects, minimizing downtime, and ensuring production safety",
    ],
    technologies: [
      "PLC",
      "HMI",
      "Industrial IoT",
      "Electrical Systems",
      "Automation",
    ],
    icon: Settings,
  },
  {
    title: "Wiring Technician | Quality Assurance",
    company: "Schneider Electric",
    period: "2016-2017",
    location: "El Paso, Texas",
    responsibilities: [
      "Troubleshoot electrical and electromechanical operations",
      "Interpret point-to-point diagrams, bill of materials, and wiring schematics",
      "Collaborate with engineering and assembly teams to resolve problems",
      "Use various tools and software for ground fault detection",
      "Oversee testing and assembly of low voltage electronic products for clients",
    ],
    technologies: [
      "Quality Control",
      "Electrical Systems",
      "Technical Documentation",
    ],
    icon: WrenchIcon,
  },
  {
    title: "Maintenance Technician",
    company: "Delfingen",
    period: "2015-2016",
    location: "El Paso, Texas",
    responsibilities: [
      "Manage maintenance on powered industrial equipment, including pneumatic, hydraulic, water, and electrical power",
      "Carry out tasks including PVC cutter repair, electrical troubleshooting, and preventative maintenance",
      "Determine and resolve issues with corrugated screws, cutters, pullers, and printing systems",
      "Complete additional duties such as welding, fabrication, including building maintenance",
    ],
    technologies: [
      "Industrial Equipment",
      "Preventive Maintenance",
      "Fabrication",
    ],
    icon: Wrench,
  },
  {
    title: "Maintenance Technician III",
    company: "Dal-Tile",
    period: "2013-2015",
    location: "El Paso, Texas",
    responsibilities: [
      "Install and maintain hydraulic press, electrical panels and mechanical components",
      "Acknowledge machine malfunctions, install electro-mechanical valves, and perform routine maintenance",
      "Carry out routine maintenance on raw material conveyors, dust, compression, and cooling systems",
      "Operate industrial hydraulic systems, serve oil changes, and routine die-block quality checks",
      "Manage materials processing and storage, including silos, spray dryers, ball mills, and vibrating screens",
      "Monitor material transportation utilizing pneumatic, belt, and elevator conveying systems",
    ],
    technologies: [
      "Hydraulic Systems",
      "Mechanical Systems",
      "Industrial Maintenance",
    ],
    icon: Settings,
  },
];

const audioContent: AudioContent[] = [
  {
    title: "AI Podcast | Cover Letter",
    duration: "3:56",
    url: "#",
  },
  {
    title: "AI Podcast | Resume",
    duration: "6:43",
    url: "#",
  },
];

const skills = {
  programming: [
    "Python",
    "JavaScript",
    "Java",
    "C",
    "C#",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "Next.js",
  ],
  database: [
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "Google Cloud",
    "Azure",
    "Docker",
    "Git",
    "Version Control",
    "CI/CD",
  ],
  industrial: [
    "PLC Programming",
    "HMI Integration",
    "SCADA Systems",
    "Electrical Systems",
    "Mechanical Systems",
    "Pneumatics",
    "Hydraulics",
    "Industrial IoT",
  ],
  professional: [
    "Project Management",
    "Preventative Maintenance",
    "Quality Assurance",
    "Technical Documentation",
    "Problem Solving",
    "Team Leadership",
    "Cross-functional Collaboration",
    "Process Optimization",
  ],
  ai: [
    "Large Language Models",
    "Computer Vision",
    "Natural Language Processing",
    "TensorFlow",
    "PyTorch",
    "Neural Networks",
  ],
};

const education = [
  {
    degree: "Computer Programming & Computer Science",
    institution: "El Paso Community College",
  },
  {
    degree: "Electrical Engineering",
    institution: "University of Texas at El Paso",
  },
];

const certifications = [
  {
    name: "NFPA 70E: Electrical Safety",
    issuer: "National Fire Protection Association",
  },
  {
    name: "OSHA 10: Construction Safety",
    issuer: "Occupational Safety and Health Administration",
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Christopher Celaya
            </h1>
            <p className="text-2xl text-muted-foreground mb-6">
              Mechatronic Technician | Software Developer | Audio Engineer
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Results-driven and innovative technician with extensive experience
              in computer science. Expertise in software development and project
              management, complemented by a strong background in preventative
              maintenance and industrial manufacturing.
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Button size="lg" className="gap-2">
                <Mail className="w-4 h-4" /> Contact Me
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="w-4 h-4" /> Download Resume
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {audioContent.map((audio) => (
                <div
                  key={audio.title}
                  className="p-4 rounded-lg border bg-card"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <PlayCircle className="w-6 h-6 text-primary" />
                    <h3 className="font-medium">{audio.title}</h3>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Duration: {audio.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-bold mb-4 capitalize">
                  {category.replace("_", " ")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Work Experience
          </h2>
          <div className="space-y-12">
            {workExperience.map((job) => (
              <div
                key={job.title}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-lg border bg-card hover:border-primary transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <job.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold">{job.title}</h3>
                  </div>
                  <p className="text-lg font-medium mb-2">{job.company}</p>
                  <p className="text-muted-foreground mb-1">{job.period}</p>
                  <p className="text-muted-foreground mb-4">{job.location}</p>
                  {job.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="md:col-span-2">
                  {job.description && (
                    <p className="text-muted-foreground mb-4">
                      {job.description}
                    </p>
                  )}
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex items-start gap-2"
                      >
                        <Medal className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Education & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-lg border bg-card">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.degree}>
                    <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-lg border bg-card">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-6">
                {certifications.map((cert) => (
                  <div key={cert.name}>
                    <h4 className="text-lg font-bold mb-1">{cert.name}</h4>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Looking for an experienced technician to join your team or help
              with a project? Let's discuss how I can contribute to your
              success.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Mail className="w-4 h-4" /> Contact Me
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="w-4 h-4" /> Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Button } from "@v1/ui/button";
import { ArrowRight, Building2, Calendar } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Experience</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Professional experience and career highlights
        </p>

        <div className="space-y-12">
          {experience.map((job) => (
            <div
              key={job.title}
              className="rounded-lg border bg-card p-6 space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">{job.title}</h2>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Building2 className="w-4 h-4" />
                    <span>{job.company}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{job.period}</span>
                </div>
              </div>

              <div className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                {job.technologies && (
                  <div className="flex flex-wrap gap-2 pt-4">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const experience = [
  {
    title: "Data Center Technician II",
    company: "T5 Data Centers",
    location: "San Antonio, Texas",
    period: "2021-2022",
    responsibilities: [
      "Maintain and operate both critical and non-critical data center infrastructure, equipment, and systems",
      "Collaborate with a team of Critical Facilities Technician (CFT) to ensure total availability (100% uptime) while minimizing risks",
      "Utilize a Computerized Maintenance Management System (CMMS) for managing scheduled and unscheduled data center tasks",
      "Conduct preventive maintenance on electrical and mechanical equipment within the data center",
      "Troubleshoot and document technical problems, escalate when necessary, and ensure resolution",
      "Supervise external contractors, ensuring adherence to critical facility work rules",
    ],
    technologies: ["CMMS", "Data Center Infrastructure", "Critical Systems", "Preventive Maintenance"],
  },
  {
    title: "Mechatronics Technician",
    company: "CN Wire",
    location: "Santa Teresa, New Mexico",
    period: "2018-2021",
    responsibilities: [
      "Troubleshoot, maintain electrical repairs and installations on factory equipment",
      "Interpret diagrams, schematics, and electrical code specification",
      "Install and repair electrical commutators, electronic sensors, and Human Machine Interface (HMI) touch panels",
      "Maintain cooling, compression and emulsion systems required for facility operation",
      "Update manufacturing records, process work orders, and installation reports",
      "Manage end-to-end electrical projects, minimizing downtime, and ensuring production safety",
    ],
    technologies: ["PLC", "HMI", "Industrial IoT", "Electrical Systems", "Automation"],
  },
  {
    title: "Wiring Technician | Quality Assurance",
    company: "Schneider Electric",
    location: "El Paso, Texas",
    period: "2016-2017",
    responsibilities: [
      "Troubleshoot electrical and electromechanical operations",
      "Interpret point-to-point diagrams, bill of materials, and wiring schematics",
      "Collaborate with engineering and assembly teams to resolve problems",
      "Ensure quality standards through thorough testing and documentation",
      "Maintain detailed records of quality control processes and outcomes",
    ],
    technologies: ["Quality Control", "Electrical Systems", "Technical Documentation"],
  },
]; 
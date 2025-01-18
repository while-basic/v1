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
  Play,
  Pause,
} from "lucide-react";
import { useState } from "react";
import { AudioPlayerWithSlider } from "@/components/audio-player-with-slider";
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
  image: string;
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
    url: "/cover-letter.wav",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "AI Podcast | Resume",
    duration: "6:43",
    url: "/resume.wav",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop",
  },
];

const skills = {
  programming: [
    "Python",
    "JavaScript",
    "Java",
    "C",
    "C++",
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
    degree: "Electrical Engineering & Computer Science",
    institution: "El Paso Community College",
  },
  {
    degree: "Electrical Engineering",
    institution: "University of Texas at El Paso",
  },
  {
    degree: "Accounting & Finance",
    institution: "University of Texas at Austin",
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
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleDownloadResume = () => {
    window.open("/chris-celaya-resume.pdf", "_blank");
  };

  const handleContact = () => {
    window.location.href = "mailto:chris@chriscelaya.com";
  };

  const handlePlayAudio = (url: string, index: number) => {
    // If clicking the same audio that's currently playing, toggle play/pause
    if (currentUrl === url && isPlaying) {
      setIsPlaying(false);
    } else {
      // Play new audio
      setCurrentUrl(url);
      setCurrentIndex(index);
      setIsPlaying(true);
    }
  };

  const handlePrevTrack = () => {
    if (currentIndex === null) return;
    const newIndex = currentIndex > 0 ? currentIndex - 1 : audioContent.length - 1;
    const track = audioContent[newIndex];
    if (!track) return;
    setCurrentIndex(newIndex);
    setCurrentUrl(track.url);
    setIsPlaying(true);
  };

  const handleNextTrack = () => {
    if (currentIndex === null) return;
    const newIndex = currentIndex < audioContent.length - 1 ? currentIndex + 1 : 0;
    const track = audioContent[newIndex];
    if (!track) return;
    setCurrentIndex(newIndex);
    setCurrentUrl(track.url);
    setIsPlaying(true);
  };

  const handleTrackEnded = () => {
    handleNextTrack();
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Over a decade of hands-on experience in industrial automation, software development,
              and system integration. My career spans from maintaining complex manufacturing systems
              to developing modern software solutions.
            </p>
          </div>
          <Button onClick={handleDownloadResume} className="mt-4 md:mt-0 gap-2">
            Download Resume <Download size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Work Experience Section */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <LineChart className="h-6 w-6" /> Work Experience
              </h2>
              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {job.company === "T5 Data Centers" ? (
                          <Image
                            src="/images/companies/t5.jpeg"
                            alt="T5 Data Centers Logo"
                            width={24}
                            height={24}
                            className="rounded"
                          />
                        ) : job.company === "CN Wire" ? (
                          <Image
                            src="/images/companies/cnwire.jpeg"
                            alt="CN Wire Logo"
                            width={24}
                            height={24}
                            className="rounded"
                          />
                        ) : (
                          <job.icon className="h-6 w-6 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="text-muted-foreground">
                          {job.company} • {job.period}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          {job.location}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground mb-4">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                        {job.technologies && (
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Audio Content */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Headphones className="h-6 w-6" /> Audio Content
              </h2>
              <div className="space-y-4">
                {audioContent.map((content, index) => (
                  <AudioPlayerWithSlider
                    key={index}
                    isPlaying={currentIndex === index && isPlaying}
                    currentTrack={content.url}
                    title={content.title}
                    onEnded={() => {
                      setIsPlaying(false);
                      setCurrentIndex(null);
                      setCurrentUrl(null);
                    }}
                    onPlayPause={() => {
                      if (currentIndex === index) {
                        setIsPlaying(!isPlaying);
                      } else {
                        setCurrentIndex(index);
                        setCurrentUrl(content.url);
                        setIsPlaying(true);
                      }
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Award className="h-6 w-6" /> Skills
              </h2>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-lg font-medium capitalize mb-3">
                      {category.replace("_", " ")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6" /> Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <h3 className="font-medium">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Medal className="h-6 w-6" /> Certifications
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <h3 className="font-medium">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

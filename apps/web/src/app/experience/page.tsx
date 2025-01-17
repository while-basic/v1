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
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center rounded-3xl overflow-hidden mb-12">
        {/* Background layers */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
          style={{ backgroundPosition: "center 40%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/50 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
        
        {/* Content */}
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-sm">
              Experience
            </h1>
            <p className="text-xl text-muted-foreground mb-8 drop-shadow-lg max-w-2xl mx-auto">
              A journey through my professional career, showcasing key projects and achievements in software development and audio production.
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the experience page content */}
    </div>
  );
}

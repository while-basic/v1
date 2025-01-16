import { Button } from "@v1/ui/button";
import {
  ArrowRight,
  Headphones,
  Info,
  Mic2,
  Music,
  Play,
  Radio,
  Settings,
  Volume2,
  Waves,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Audio Engineering & Music Production | Christopher Celaya",
  description:
    "Professional audio engineering, sound design, and music production services",
};

export default function AudioEngineering() {
  return (
    <main className="relative min-h-screen">
      <div className="container mx-auto px-4 pt-8">
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-primary">
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4" />
            <div className="font-medium">Under Construction</div>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            This section is currently being enhanced. Music samples and portfolio pieces will be available soon. Check back for updates!
          </div>
        </div>
      </div>
      
      {/* Hero Section with Animated Grid */}
      <div className="relative min-h-[80vh] pt-24 flex items-center">
        {/* Animated background with industrial pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4.5rem_2rem] animate-[grid_20s_linear_infinite] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

        <div className="container relative z-10 px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
                <Waves className="w-4 h-4 text-primary animate-spin-slow" />
                <span className="text-primary font-semibold">
                  Professional Audio
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Audio Engineering
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                  & Music Production
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Specializing in modern music production, sound design, and audio
                post-production with a focus on electronic and hybrid musical
                elements.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2" asChild>
                  <a
                    href="https://cal.com/chriscelaya/30min"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book Studio Time <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Listen to Samples
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
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"
                  alt="Recording Studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                {/* Studio Features */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-4 bg-background/80 backdrop-blur-sm p-6 rounded-lg border">
                    {studioFeatures.map((feature) => (
                      <div key={feature.label} className="text-center">
                        <feature.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="text-sm font-medium">{feature.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section with Interactive Cards */}
      <div className="container px-4 mx-auto py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Audio Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive audio solutions for musicians, podcasters, and content
            creators
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-lg border bg-card hover:bg-primary/5 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <div className="relative">
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Play className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Equipment Showcase */}
      <div className="bg-gradient-to-b from-background to-primary/5 py-24">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Studio Equipment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(equipment).map(([category, items]) => (
              <div key={category} className="p-6 rounded-lg border bg-card">
                <h3 className="font-bold text-lg mb-4 capitalize">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Work */}
      <div className="container px-4 mx-auto py-24">
        <h2 className="text-3xl font-bold text-center mb-16">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentWork.map((work) => (
            <div key={work.title} className="group relative">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline" size="lg" className="gap-2">
                    Listen Now <Play className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-1">{work.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-primary/10" />
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's bring your musical vision to life with professional audio
              production and engineering services.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Book a Session <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


const studioFeatures = [
  { icon: Headphones, label: "Pro Monitoring" },
  { icon: Mic2, label: "Premium Mics" },
  { icon: Settings, label: "Top-tier Gear" },
];

const services = [
  {
    icon: Mic2,
    title: "Music Production",
    description:
      "Modern production techniques for electronic and hybrid music.",
    features: [
      "Electronic Music Production",
      "Sound Design",
      "Arrangement & Composition",
      "Virtual Instrument Programming",
    ],
  },
  {
    icon: Waves,
    title: "Audio Engineering",
    description:
      "Professional mixing and sound shaping for contemporary productions.",
    features: [
      "Digital Audio Mixing",
      "Sound Processing",
      "Electronic Music Mixing",
      "Spatial Audio Design",
    ],
  },
  {
    icon: Volume2,
    title: "Post Production",
    description: "Comprehensive audio post-production for various media.",
    features: [
      "Sound Design",
      "Audio Restoration",
      "Podcast Production",
      "Audio Programming",
    ],
  },
];

const equipment = {
  software: ["Ableton Live", "Pro Tools", "Logic Pro X", "Max/MSP"],
  plugins: [
    "Native Instruments",
    "Fabfilter Suite",
    "Soundtoys Bundle",
    "Waves Plugins",
  ],
  hardware: [
    "Universal Audio Apollo",
    "Ableton Push 2",
    "Native Instruments Komplete",
    "Elektron Digitakt",
  ],
  instruments: [
    "Moog Subsequent 37",
    "Dave Smith Prophet",
    "Roland TR-8S",
    "Eurorack Modular",
  ],
};

const recentWork = [
  {
    title: "Electronic EP Production",
    description: "Full production and mixing for electronic music release",
    image:
      "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Sound Design Project",
    description: "Custom sound design for interactive media",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Hybrid Music Production",
    description: "Electronic and acoustic fusion project",
    image:
      "https://images.unsplash.com/photo-1598520106830-8c45c2035460?q=80&w=2070&auto=format&fit=crop",
  },
];

const metrics = [
  { icon: Music, label: "Projects Completed", value: "500+" },
  { icon: Headphones, label: "Studio Hours", value: "10k+" },
  { icon: Radio, label: "Tracks Mixed", value: "1000+" },
  { icon: Volume2, label: "Years Experience", value: "15+" },
];

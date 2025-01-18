"use client";

import Image from "next/image";
import { Button } from "@v1/ui/button";
import { Dialog, DialogContent } from "@v1/ui/dialog";
import { useState } from "react";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "CNC Machine Maintenance",
    description: "Comprehensive preventative maintenance on Haas VF-2 CNC machine, including spindle service, way lubrication system check, and coolant system optimization.",
    imageUrl: "https://images.unsplash.com/photo-1565439371467-61c8dd0ddd2f?q=80&w=2000",
    category: "Manufacturing",
    tags: ["CNC", "Maintenance", "Haas", "Precision Machining"],
  },
  {
    id: "2",
    title: "Automated Assembly Line Integration",
    description: "Implementation of a fully automated assembly line system with robotic arms and conveyor integration, improving production efficiency by 40%.",
    imageUrl: "https://images.unsplash.com/photo-1565439371467-61c8dd0ddd2f?q=80&w=2000",
    category: "Automation",
    tags: ["Robotics", "PLC", "Industry 4.0", "Assembly"],
  },
  {
    id: "3",
    title: "Hydraulic System Overhaul",
    description: "Complete hydraulic system rebuild on industrial press brake, including pump replacement, valve maintenance, and pressure optimization.",
    imageUrl: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2000",
    category: "Maintenance",
    tags: ["Hydraulics", "Preventative Maintenance", "Industrial"],
  },
  {
    id: "4",
    title: "PLC Control System Upgrade",
    description: "Modernization of legacy control systems with Allen-Bradley ControlLogix PLC implementation, including HMI design and network integration.",
    imageUrl: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2000",
    category: "Automation",
    tags: ["PLC", "Control Systems", "HMI", "Allen-Bradley"],
  },
  {
    id: "5",
    title: "Quality Control Implementation",
    description: "Development and implementation of automated quality control systems using machine vision and laser measurement technology.",
    imageUrl: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2000",
    category: "Quality Assurance",
    tags: ["QC", "Machine Vision", "Metrology", "Automation"],
  },
  {
    id: "6",
    title: "Robotic Welding Cell",
    description: "Installation and programming of FANUC robotic welding cell, including safety system integration and process optimization.",
    imageUrl: "https://images.unsplash.com/photo-1565439371467-61c8dd0ddd2f?q=80&w=2000",
    category: "Manufacturing",
    tags: ["Robotics", "Welding", "FANUC", "Automation"],
  },
  {
    id: "7",
    title: "Predictive Maintenance System",
    description: "Implementation of IoT-based predictive maintenance system using vibration analysis and temperature monitoring for critical equipment.",
    imageUrl: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2000",
    category: "Maintenance",
    tags: ["IoT", "Predictive Maintenance", "Industry 4.0", "Sensors"],
  },
  {
    id: "8",
    title: "SCADA System Integration",
    description: "Design and implementation of plant-wide SCADA system for real-time monitoring and control of manufacturing processes.",
    imageUrl: "https://images.unsplash.com/photo-1565439371467-61c8dd0ddd2f?q=80&w=2000",
    category: "Automation",
    tags: ["SCADA", "Industrial Networks", "Process Control", "HMI"],
  },
  {
    id: "9",
    title: "Energy Efficiency Upgrade",
    description: "Facility-wide energy efficiency improvement project, including VFD installations, compressed air system optimization, and lighting upgrades.",
    imageUrl: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2000",
    category: "Sustainability",
    tags: ["Energy Efficiency", "VFD", "Sustainability", "Industrial"],
  }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = Array.from(new Set(galleryItems.map((item) => item.category)));
  const filteredItems = selectedCategory
    ? galleryItems.filter((item) => item.category === selectedCategory)
    : galleryItems;

  return (
    <>
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0">
          {selectedImage && (
            <div className="relative aspect-video w-full">
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center rounded-3xl overflow-hidden mb-12">
          {/* Background layers */}
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000')] bg-cover bg-center"
            style={{ backgroundPosition: "center 25%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/50 to-background/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
          
          {/* Content */}
          <div className="container px-4 mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-sm">
                Professional Gallery
              </h1>
              <p className="text-xl text-muted-foreground mb-8 drop-shadow-lg max-w-2xl mx-auto">
                Showcasing expertise in manufacturing, maintenance, and industrial technology through visual documentation
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
              <h2 className="text-3xl font-bold mb-6 md:mb-0">
                Project Gallery
              </h2>
              <div className="flex gap-4 flex-wrap">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </Button>
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-lg border bg-card overflow-hidden hover:border-primary transition-colors"
                >
                  <div 
                    className="aspect-video relative bg-gradient-to-br from-primary/10 to-secondary/10 cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="text-xs text-muted-foreground px-2 py-1 rounded-full border">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-accent rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 
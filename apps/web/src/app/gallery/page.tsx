"use client";

import { Button } from "@v1/ui/button";
import { Dialog, DialogContent } from "@v1/ui/dialog";
import { AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { toast } from "sonner";

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
    title: "Electrical Distribution Panels",
    description:
      "Wired the electrical distribution panels for the new manufacturing facility, ensuring compliance with all safety standards and regulations.",
    imageUrl:
      "https://images.unsplash.com/photo-1565439371467-61c8dd0ddd2f?auto=format&fit=crop&w=2000&q=80",
    category: "Electrical",
    tags: ["Electrical", "Manufacturing"],
  },
  {
    id: "2",
    title: "Automated Assembly Line Integration",
    description:
      "Implementation of a fully automated assembly line system with robotic arms and conveyor integration, improving production efficiency by 40%.",
    imageUrl:
      "https://images.unsplash.com/photo-1565439371467-61c8dd0ddd2f?auto=format&fit=crop&w=2000&q=80",
    category: "Automation",
    tags: ["Robotics", "PLC", "Industry 4.0", "Assembly"],
  },
  {
    id: "3",
    title: "Hydraulic System Overhaul",
    description:
      "Complete hydraulic system rebuild on industrial press brake, including pump replacement, valve maintenance, and pressure optimization.",
    imageUrl:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=2000&q=80",
    category: "Maintenance",
    tags: ["Hydraulics", "Preventative Maintenance", "Industrial"],
  },
  {
    id: "4",
    title: "PLC Control System Upgrade",
    description:
      "Modernization of legacy control systems with Allen-Bradley ControlLogix PLC implementation, including HMI design and network integration.",
    imageUrl:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=2000&q=80",
    category: "Automation",
    tags: ["PLC", "Control Systems", "HMI", "Allen-Bradley"],
  },
  {
    id: "5",
    title: "Quality Control Implementation",
    description:
      "Development and implementation of automated quality control systems using machine vision and laser measurement technology.",
    imageUrl:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=2000&q=80",
    category: "Quality Assurance",
    tags: ["QC", "Machine Vision", "Metrology", "Automation"],
  },
  {
    id: "6",
    title: "Robotic Welding Cell",
    description:
      "Installation and programming of FANUC robotic welding cell, including safety system integration and process optimization.",
    imageUrl:
      "https://images.unsplash.com/photo-1565439371467-61c8dd0ddd2f?auto=format&fit=crop&w=2000&q=80",
    category: "Manufacturing",
    tags: ["Robotics", "Welding", "FANUC", "Automation"],
  },
  {
    id: "7",
    title: "Predictive Maintenance System",
    description:
      "Implementation of IoT-based predictive maintenance system using vibration analysis and temperature monitoring for critical equipment.",
    imageUrl:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=2000&q=80",
    category: "Maintenance",
    tags: ["IoT", "Predictive Maintenance", "Industry 4.0", "Sensors"],
  },
  {
    id: "8",
    title: "SCADA System Integration",
    description:
      "Design and implementation of plant-wide SCADA system for real-time monitoring and control of manufacturing processes.",
    imageUrl:
      "https://images.unsplash.com/photo-1565439371467-61c8dd0ddd2f?auto=format&fit=crop&w=2000&q=80",
    category: "Automation",
    tags: ["SCADA", "Industrial Networks", "Process Control", "HMI"],
  },
  {
    id: "9",
    title: "Energy Efficiency Upgrade",
    description:
      "Facility-wide energy efficiency improvement project, including VFD installations, compressed air system optimization, and lighting upgrades.",
    imageUrl:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=2000&q=80",
    category: "Sustainability",
    tags: ["Energy Efficiency", "VFD", "Sustainability", "Industrial"],
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const toastShown = useRef(false);

  useEffect(() => {
    if (!toastShown.current) {
      toast.info("Gallery Update in Progress", {
        description:
          "We are currently uploading high-quality images and detailed descriptions. Please check back soon for the complete gallery experience.",
        duration: 5000,
      });
      toastShown.current = true;
    }
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : galleryItems.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < galleryItems.length - 1 ? prev + 1 : 0));
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
  };

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    trackMouse: false,
    preventScrollOnSwipe: true,
    swipeDuration: 500,
    delta: 50, // minimum swipe distance
  });

  return (
    <>
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-7xl w-full p-0">
          {selectedImage && (
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                priority
                quality={85}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center rounded-3xl overflow-hidden mb-12">
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"
            style={{ backgroundPosition: "center 25%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/50 to-background/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />

          <div className="container px-4 mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-sm">
                Professional Gallery
              </h1>
              <p className="text-xl text-muted-foreground mb-8 drop-shadow-lg max-w-2xl mx-auto">
                Showcasing expertise in manufacturing, maintenance, and
                industrial technology
              </p>
            </div>
          </div>
        </section>

        {/* Main Gallery */}
        <div className="py-12" role="region" aria-label="Gallery">
          <div className="relative max-w-6xl mx-auto">
            <div
              {...swipeHandlers}
              className="relative aspect-[16/9] w-full rounded-lg overflow-hidden touch-pan-y"
              role="button"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onClick={() => {
                // Handle click if needed
              }}
            >
              {galleryItems[currentIndex] && (
                <Image
                  src={galleryItems[currentIndex].imageUrl}
                  alt={galleryItems[currentIndex].title}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  priority
                  quality={85}
                />
              )}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/80 hover:bg-background/90 md:flex hidden"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/80 hover:bg-background/90 md:flex hidden"
              onClick={handleNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Mobile Swipe Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 md:hidden">
              {galleryItems.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-white"
                      : "w-1.5 bg-white/60"
                  }`}
                />
              ))}
            </div>

            {/* Image Info */}
            <div className="mt-8 text-center max-w-2xl mx-auto">
              {galleryItems[currentIndex] && (
                <>
                  <h2 className="text-2xl font-bold mb-4">
                    {galleryItems[currentIndex].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {galleryItems[currentIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {galleryItems[currentIndex].tags.map((tag) => (
                      <span
                        key={`${galleryItems[currentIndex].id}-${tag}`}
                        className="px-3 py-1 bg-accent rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <section className="py-12">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer ${
                  index === currentIndex ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform hover:scale-110 duration-300"
                  sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 16vw"
                  quality={75}
                />
                <div
                  className={`absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors ${
                    index === currentIndex ? "bg-black/10" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

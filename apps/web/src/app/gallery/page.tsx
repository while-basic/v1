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
  // Electrical Distribution & Wiring
  {
    id: "1",
    title: "Electrical Distribution Panels",
    description: "Installation and wiring of industrial electrical distribution panels, ensuring compliance with NEC standards and safety regulations.",
    imageUrl: "/images/electrical/panel1.jpg",
    category: "Electrical",
    tags: ["Electrical", "Distribution", "Industrial"],
  },
  {
    id: "2",
    title: "Secondary Distribution Panel",
    description: "Secondary electrical distribution panel installation with proper wire management and labeling.",
    imageUrl: "/images/electrical/panel2.jpg",
    category: "Electrical",
    tags: ["Electrical", "Distribution", "Panel"],
  },
  {
    id: "3",
    title: "Power Distribution System",
    description: "Main power distribution system installation with circuit protection and monitoring capabilities.",
    imageUrl: "/images/electrical/dist1.jpg",
    category: "Electrical",
    tags: ["Power Distribution", "Industrial", "Electrical"],
  },
  {
    id: "4",
    title: "Industrial Wiring Implementation",
    description: "Complex industrial wiring implementation following best practices and safety standards.",
    imageUrl: "/images/electrical/wiring-1.jpg",
    category: "Electrical",
    tags: ["Industrial", "Wiring", "Installation"],
  },
  {
    id: "5",
    title: "Control Panel Wiring",
    description: "Detailed control panel wiring with organized cable management and clear labeling.",
    imageUrl: "/images/electrical/wiring-2.jpg",
    category: "Electrical",
    tags: ["Control Panel", "Wiring", "Industrial"],
  },
  
  // Mechanical Systems
  {
    id: "6",
    title: "Engine Build",
    description: "Comprehensive engine system analysis and maintenance procedures.",
    imageUrl: "/images/mechanical/engine1.jpg",
    category: "Mechanical",
    tags: ["Engine", "Maintenance", "Mechanical"],
  },
  {
    id: "7",
    title: "Engine VQ35HR Build",
    description: "Precision installation of critical engine components and systems.",
    imageUrl: "/images/mechanical/engine.jpg",
    category: "Mechanical",
    tags: ["Engine", "Installation", "Components"],
  },
  {
    id: "8",
    title: "Mechanical System Integration",
    description: "Integration of complex mechanical systems with precise alignment and calibration.",
    imageUrl: "/images/mechanical/engine3.jpg",
    category: "Mechanical",
    tags: ["Integration", "Mechanical", "Systems"],
  },
  {
    id: "9",
    title: "Engine Performance Optimization",
    description: "Performance tuning and optimization of engine systems for maximum efficiency.",
    imageUrl: "/images/mechanical/engine4.jpg",
    category: "Mechanical",
    tags: ["Performance", "Optimization", "Engine"],
  },
  
  // Additional Electrical Projects
  {
    id: "10",
    title: "Distribution System Layout",
    description: "Strategic layout and implementation of power distribution systems.",
    imageUrl: "/images/electrical/dist4.jpg",
    category: "Electrical",
    tags: ["Distribution", "Layout", "Power Systems"],
  },
  {
    id: "11",
    title: "Advanced Control Wiring",
    description: "Sophisticated control system wiring with integrated safety features.",
    imageUrl: "/images/electrical/wiring-5.jpg",
    category: "Electrical",
    tags: ["Control Systems", "Wiring", "Safety"],
  },
  {
    id: "12",
    title: "Industrial Power Systems",
    description: "High-capacity industrial power system installation and configuration.",
    imageUrl: "/images/electrical/dist6.jpg",
    category: "Electrical",
    tags: ["Industrial", "Power Systems", "Installation"],
  }
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
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
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
                    {galleryItems[currentIndex].tags.map((tag) => {
                      const key = `${galleryItems[currentIndex]?.id ?? ""}-${tag}`;
                      return (
                        <span
                          key={key}
                          className="px-3 py-1 bg-accent rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      );
                    })}
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
              <button
                type="button"
                key={item.id}
                className={`relative aspect-square rounded-lg overflow-hidden ${
                  index === currentIndex ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setCurrentIndex(index);
                  }
                }}
                aria-label={`View ${item.title}`}
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
              </button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

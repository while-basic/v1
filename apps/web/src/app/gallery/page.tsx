"use client";

import { Button } from "@v1/ui/button";
import { Dialog, DialogContent } from "@v1/ui/dialog";
import { 
  AlertCircle, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  ExternalLink,
  Filter,
  Grid,
  Maximize2
} from "lucide-react";
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'slider'>('grid');

  // Get unique categories
  const categories = Array.from(new Set(galleryItems.map(item => item.category)));

  // Filter items based on selected category
  const filteredItems = selectedCategory
    ? galleryItems.filter(item => item.category === selectedCategory)
    : galleryItems;

  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage(item);
  };

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
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-white/80">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center rounded-3xl overflow-hidden mb-12">
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"
            style={{ backgroundPosition: "center 25%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/50 to-background/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />

          <div className="container px-4 mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-sm">
                Project Gallery
              </h1>
              <p className="text-xl text-muted-foreground mb-8 drop-shadow-lg max-w-2xl mx-auto">
                A visual journey through industrial automation, mechanical systems, and technical innovations
              </p>
              <Button size="lg" className="gap-2" asChild>
                <a 
                  href="https://celaya-photo-blog-h96u2vgni-celaya.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Photo Blog <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <div className="flex gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                size="sm"
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'slider' ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode('slider')}
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(item)}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Slider View */}
        {viewMode === 'slider' && (
          <div className="relative max-w-6xl mx-auto">
            <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden">
              {filteredItems[currentIndex] && (
                <Image
                  src={filteredItems[currentIndex].imageUrl}
                  alt={filteredItems[currentIndex].title}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  priority
                  quality={85}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {filteredItems[currentIndex]?.title}
                </h3>
                <p className="text-white/80 max-w-2xl">
                  {filteredItems[currentIndex]?.description}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/80 hover:bg-background/90 md:flex hidden"
              onClick={() => setCurrentIndex(prev => 
                prev > 0 ? prev - 1 : filteredItems.length - 1
              )}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/80 hover:bg-background/90 md:flex hidden"
              onClick={() => setCurrentIndex(prev => 
                prev < filteredItems.length - 1 ? prev + 1 : 0
              )}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        )}

        {/* Photo Blog CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Explore More Photography</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Visit my dedicated photo blog for an extensive collection of photography work, including landscapes, portraits, and creative projects.
          </p>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a 
              href="https://celaya-photo-blog-h96u2vgni-celaya.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Camera className="w-4 h-4" /> Visit Photo Blog
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}

"use client";

import { AudioPlayer } from "@/components/audio-player";
import { Button } from "@v1/ui/button";
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Track {
  title: string;
  artist: string;
  duration: string;
  cover: string;
  description?: string;
  category: string;
  audioUrl: string;
}

interface VideoContent {
  title: string;
  description: string;
  youtubeId: string;
  thumbnailUrl?: string;
}

const tracks: Track[] = [
  {
    title: "Ambient Dreams",
    artist: "Christopher Celaya",
    duration: "3:45",
    cover: "/music/ambient-dreams.jpg",
    description:
      "A journey through atmospheric soundscapes and ethereal textures.",
    category: "Electronic",
    audioUrl: "/music/ambient-dreams.mp3",
  },
  {
    title: "Electronic Journey",
    artist: "Christopher Celaya",
    duration: "4:20",
    cover: "/music/electronic-journey.jpg",
    description:
      "Modern electronic beats mixed with classic synthesizer sounds.",
    category: "Electronic",
    audioUrl: "/music/electronic-journey.mp3",
  },
  {
    title: "Midnight Synthesis",
    artist: "Christopher Celaya",
    duration: "5:15",
    cover: "/music/midnight-synthesis.jpg",
    description: "Deep, evolving synthesizer textures with ambient undertones.",
    category: "Ambient",
    audioUrl: "/music/midnight-synthesis.mp3",
  },
  {
    title: "Urban Echoes",
    artist: "Christopher Celaya",
    duration: "4:30",
    cover: "/music/urban-echoes.jpg",
    description:
      "City-inspired rhythms blended with atmospheric field recordings.",
    category: "Experimental",
    audioUrl: "/music/urban-echoes.mp3",
  },
  {
    title: "Digital Dreams",
    artist: "Christopher Celaya",
    duration: "6:10",
    cover: "/music/digital-dreams.jpg",
    description:
      "An exploration of generative music and algorithmic composition.",
    category: "Experimental",
    audioUrl: "/music/digital-dreams.mp3",
  },
  {
    title: "Neural Waves",
    artist: "Christopher Celaya",
    duration: "4:45",
    cover: "/music/neural-waves.jpg",
    description:
      "AI-assisted composition merging human creativity with machine learning.",
    category: "Electronic",
    audioUrl: "/music/neural-waves.mp3",
  },
];

export default function AudioPage() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleTrackEnded = () => {
    handleNextTrack();
  };

  const handlePrevTrack = () => {
    setCurrentTrack((prev) => (prev > 0 ? prev - 1 : tracks.length - 1));
  };

  const handleNextTrack = () => {
    setCurrentTrack((prev) => (prev < tracks.length - 1 ? prev + 1 : 0));
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTrackClick = (index: number) => {
    if (currentTrack === index) {
      togglePlay();
    } else {
      setCurrentTrack(index);
      setIsPlaying(true);
    }
  };

  const filteredTracks = selectedCategory
    ? tracks.filter((track) => track.category === selectedCategory)
    : tracks;

  const categories = Array.from(new Set(tracks.map((track) => track.category)));

  const currentTrackData = tracks[currentTrack];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="absolute inset-0 bg-[url('/music/studio-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Audio Production
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Exploring the intersection of technology and music through
              electronic and ambient soundscapes
            </p>
            <Button size="lg" className="gap-2" onClick={togglePlay}>
              {isPlaying ? (
                <>
                  <Pause className="w-5 h-5" /> Pause Featured Track
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" /> Play Featured Track
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Tracks with Category Filter */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <h2 className="text-3xl font-bold mb-6 md:mb-0">Featured Tracks</h2>
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
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTracks.map((track, index) => (
              <div
                key={track.title}
                className="group relative rounded-lg border bg-card overflow-hidden hover:border-primary transition-colors cursor-pointer"
                onClick={() => handleTrackClick(tracks.indexOf(track))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleTrackClick(tracks.indexOf(track));
                  }
                }}
                tabIndex={0}
                role="button"
              >
                <div className="aspect-video relative bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {currentTrack === tracks.indexOf(track) && isPlaying ? (
                        <Pause className="w-8 h-8" />
                      ) : (
                        <Play className="w-8 h-8 ml-1" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{track.title}</h3>
                    <span className="text-xs text-muted-foreground px-2 py-1 rounded-full border">
                      {track.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {track.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{track.artist}</span>
                    <span>{track.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Persistent Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={handlePrevTrack}>
                  <SkipBack className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-full"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </Button>
                <Button variant="ghost" size="icon" onClick={handleNextTrack}>
                  <SkipForward className="w-5 h-5" />
                </Button>
              </div>
              <div>
                <div className="font-medium">
                  {currentTrackData?.title || 'No track selected'}
                </div>
                <div className="text-sm text-muted-foreground">
                  {currentTrackData?.artist || 'Unknown artist'}
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Volume2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <AudioPlayer
        isPlaying={isPlaying}
        currentTrack={currentTrackData?.audioUrl || ''}
        onEnded={handleTrackEnded}
      />
    </div>
  );
}

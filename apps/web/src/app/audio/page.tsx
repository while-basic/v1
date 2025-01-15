"use client";

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
import { useState } from "react";

interface Track {
  title: string;
  artist: string;
  duration: string;
  cover: string;
  description?: string;
  category: string;
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
  },
  {
    title: "Electronic Journey",
    artist: "Christopher Celaya",
    duration: "4:20",
    cover: "/music/electronic-journey.jpg",
    description:
      "Modern electronic beats mixed with classic synthesizer sounds.",
    category: "Electronic",
  },
  {
    title: "Midnight Synthesis",
    artist: "Christopher Celaya",
    duration: "5:15",
    cover: "/music/midnight-synthesis.jpg",
    description: "Deep, evolving synthesizer textures with ambient undertones.",
    category: "Ambient",
  },
  {
    title: "Urban Echoes",
    artist: "Christopher Celaya",
    duration: "4:30",
    cover: "/music/urban-echoes.jpg",
    description:
      "City-inspired rhythms blended with atmospheric field recordings.",
    category: "Experimental",
  },
  {
    title: "Digital Dreams",
    artist: "Christopher Celaya",
    duration: "6:10",
    cover: "/music/digital-dreams.jpg",
    description:
      "An exploration of generative music and algorithmic composition.",
    category: "Experimental",
  },
  {
    title: "Neural Waves",
    artist: "Christopher Celaya",
    duration: "4:45",
    cover: "/music/neural-waves.jpg",
    description:
      "AI-assisted composition merging human creativity with machine learning.",
    category: "Electronic",
  },
];

const videos: VideoContent[] = [
  {
    title: "Studio Tour & Setup",
    description:
      "A detailed walkthrough of my music production setup and workflow.",
    youtubeId: "YOUR_YOUTUBE_ID_1",
    thumbnailUrl: "/music/studio-tour-thumb.jpg",
  },
  {
    title: "Sound Design Tutorial",
    description: "Creating atmospheric textures using hardware synthesizers.",
    youtubeId: "YOUR_YOUTUBE_ID_2",
    thumbnailUrl: "/music/tutorial-thumb.jpg",
  },
  {
    title: "Live Performance",
    description:
      "Live electronic music performance using hardware synthesizers and controllers.",
    youtubeId: "YOUR_YOUTUBE_ID_3",
    thumbnailUrl: "/music/live-thumb.jpg",
  },
];

const defaultTrack: Track = {
  title: "No Track Selected",
  artist: "Unknown Artist",
  duration: "0:00",
  cover: "/music/default-cover.jpg",
  description: "Select a track to start playing",
  category: "None",
};

export default function AudioPage() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handlePrevTrack = () => {
    setCurrentTrack((prev) => (prev > 0 ? prev - 1 : tracks.length - 1));
  };

  const handleNextTrack = () => {
    setCurrentTrack((prev) => (prev < tracks.length - 1 ? prev + 1 : 0));
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const currentTrackData = tracks[currentTrack] || defaultTrack;

  const filteredTracks = selectedCategory
    ? tracks.filter((track) => track.category === selectedCategory)
    : tracks;

  const categories = Array.from(new Set(tracks.map((track) => track.category)));

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
            <Button
              size="lg"
              className="gap-2"
              onClick={togglePlay}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  togglePlay();
                }
              }}
            >
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

      {/* About Music Section */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">My Musical Journey</h2>
              <div className="prose dark:prose-invert">
                <p className="text-lg text-muted-foreground">
                  My journey in music production began with a fascination for
                  electronic music and sound design. What started as a hobby
                  quickly evolved into a passion for creating immersive sonic
                  experiences.
                </p>
                <p className="text-lg text-muted-foreground">
                  During the global pandemic, I took the opportunity to focus on
                  my music production, resulting in my first album release on
                  major streaming platforms including Apple Music and Spotify.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/music/studio-setup.jpg"
                alt="Studio Setup"
                fill
                className="object-cover"
              />
            </div>
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
                className="group relative rounded-lg border bg-card overflow-hidden hover:border-primary transition-colors"
                onClick={() => {
                  setCurrentTrack(tracks.indexOf(track));
                  setIsPlaying(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setCurrentTrack(tracks.indexOf(track));
                    setIsPlaying(true);
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

      {/* Video Content */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12">Behind the Music</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.title}
                className="rounded-lg border bg-card overflow-hidden"
              >
                <div className="aspect-video relative bg-gradient-to-br from-primary/10 to-secondary/10">
                  {video.thumbnailUrl ? (
                    <Image
                      src={video.thumbnailUrl}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Youtube className="w-12 h-12 text-muted-foreground" />
                    </div>
                  )}
                  <a
                    href={`https://youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity"
                  >
                    <Youtube className="w-12 h-12 text-white" />
                  </a>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                  <p className="text-muted-foreground">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Process */}
      <section className="py-24 bg-gradient-to-t from-background to-secondary/5">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12">Equipment & Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipment.map((item) => (
              <div key={item.title} className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {item.items.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Persistent Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePrevTrack}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handlePrevTrack();
                    }
                  }}
                >
                  <SkipBack className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-full"
                  onClick={togglePlay}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      togglePlay();
                    }
                  }}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleNextTrack}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleNextTrack();
                    }
                  }}
                >
                  <SkipForward className="w-5 h-5" />
                </Button>
              </div>
              <div>
                <div className="font-medium">{currentTrackData.title}</div>
                <div className="text-sm text-muted-foreground">
                  {currentTrackData.artist}
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Volume2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const equipment = [
  {
    title: "Digital Audio Workstation",
    items: [
      "Ableton Live 11 Suite",
      "Logic Pro X",
      "Pro Tools",
      "Native Instruments Komplete",
    ],
  },
  {
    title: "Hardware",
    items: [
      "Universal Audio Apollo",
      "Moog Subsequent 37",
      "Roland TR-8S",
      "Arturia KeyLab 61 MKII",
    ],
  },
  {
    title: "Monitoring",
    items: [
      "Adam Audio A7X",
      "Sennheiser HD650",
      "Focal Clear MG",
      "Sonarworks Reference 4",
    ],
  },
];

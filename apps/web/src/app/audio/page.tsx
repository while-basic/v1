"use client";

import { Button } from "@v1/ui/button";
import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useState } from "react";

interface Track {
  title: string;
  artist: string;
  duration: string;
  cover: string;
}

const defaultTrack: Track = {
  title: "No Track Selected",
  artist: "Unknown Artist",
  duration: "0:00",
  cover: "/music/default-cover.jpg",
};

const tracks: Track[] = [
  {
    title: "Ambient Dreams",
    artist: "Christopher Celaya",
    duration: "3:45",
    cover: "/music/ambient-dreams.jpg",
  },
  {
    title: "Electronic Journey",
    artist: "Christopher Celaya",
    duration: "4:20",
    cover: "/music/electronic-journey.jpg",
  },
];

export default function AudioPage() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePrevTrack = () => {
    setCurrentTrack((prev) => (prev > 0 ? prev - 1 : tracks.length - 1));
  };

  const handleNextTrack = () => {
    setCurrentTrack((prev) => (prev < tracks.length - 1 ? prev + 1 : 0));
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeClick = () => {
    // Volume control functionality would go here
  };

  // Get the current track with a fallback to the default track
  const currentTrackData = tracks[currentTrack] || defaultTrack;

  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Audio Production
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          A collection of my music production work and audio engineering
          projects
        </p>

        {/* Featured Track Player */}
        <div className="mb-16">
          <div className="rounded-lg border bg-card p-6">
            <div className="aspect-[16/5] relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="w-16 h-16 rounded-full"
                    onClick={togglePlay}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        togglePlay();
                      }
                    }}
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8" />
                    ) : (
                      <Play className="w-8 h-8 ml-1" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">{currentTrackData.title}</h3>
                <p className="text-muted-foreground">
                  {currentTrackData.artist}
                </p>
              </div>
              <div className="flex items-center gap-4">
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
                  <SkipBack className="w-6 h-6" />
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
                  <SkipForward className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleVolumeClick}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleVolumeClick();
                    }
                  }}
                >
                  <Volume2 className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Track List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <div
              key={track.title}
              className="rounded-lg border bg-card overflow-hidden hover:border-primary transition-colors cursor-pointer"
              onClick={() => {
                setCurrentTrack(index);
                setIsPlaying(true);
              }}
            >
              <div className="aspect-square relative bg-gradient-to-br from-primary/10 to-secondary/10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute inset-0 w-full h-full rounded-none"
                >
                  {currentTrack === index && isPlaying ? (
                    <Pause className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8 ml-1" />
                  )}
                </Button>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-1">{track.title}</h3>
                <p className="text-sm text-muted-foreground">{track.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

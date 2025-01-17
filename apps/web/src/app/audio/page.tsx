"use client";

import { AudioPlayerWithSlider } from "@/components/audio-player-with-slider";
import { Button } from "@v1/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@v1/ui/dialog";
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  Shuffle
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { tracks } from "./constants";

export default function AudioPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isShuffleMode, setIsShuffleMode] = useState(false);

  const handleTrackEnded = () => {
    if (isShuffleMode) {
      playRandomTrack();
    } else {
      handleNextTrack();
    }
  };

  const handlePrevTrack = () => {
    setCurrentTrackIndex((prev) => (prev > 0 ? prev - 1 : tracks.length - 1));
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev < tracks.length - 1 ? prev + 1 : 0));
  };

  const playRandomTrack = () => {
    const availableTracks = selectedCategory
      ? tracks.filter((track) => track.category === selectedCategory)
      : tracks;

    if (availableTracks.length === 0) return;

    const randomIndex = Math.floor(Math.random() * availableTracks.length);
    const selectedTrackIndex = tracks.findIndex(
      (track) => track === availableTracks[randomIndex]
    );
    
    setCurrentTrackIndex(selectedTrackIndex);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (!isPlaying && currentTrackIndex === 0) {
      playRandomTrack();
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleShuffle = () => {
    setIsShuffleMode(!isShuffleMode);
  };

  const handleTrackClick = (index: number) => {
    if (currentTrackIndex === index) {
      togglePlay();
    } else {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
    }
  };

  const filteredTracks = selectedCategory
    ? tracks.filter((track) => track.category === selectedCategory)
    : tracks;

  const categories = Array.from(new Set(tracks.map((track) => track.category)));

  const currentTrackData = tracks[currentTrackIndex];

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Audio Optimization in Progress</DialogTitle>
            <DialogDescription>
              We're currently optimizing our audio files for better streaming performance.
              Some tracks may take longer to load while this process is ongoing.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center rounded-3xl overflow-hidden mb-12">
          {/* Background layers */}
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
            style={{ backgroundPosition: "center 25%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/50 to-background/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
          
          {/* Content */}
          <div className="container px-4 mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-sm">
                Audio Production
              </h1>
              <p className="text-xl text-muted-foreground mb-8 drop-shadow-lg max-w-2xl mx-auto">
                Exploring the intersection of technology and music through
                electronic and ambient soundscapes
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow" onClick={togglePlay}>
                  {isPlaying ? (
                    <>
                      <Pause className="w-5 h-5" /> Pause Track
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" /> {currentTrackIndex === 0 ? "Play Random Track" : "Play Track"}
                    </>
                  )}
                </Button>
                <Button
                  size="icon"
                  variant={isShuffleMode ? "default" : "outline"}
                  className="w-12 h-12 shadow-lg hover:shadow-xl transition-shadow"
                  onClick={toggleShuffle}
                >
                  <Shuffle className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tracks with Category Filter */}
        <section className="py-24">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
              <h2 className="text-3xl font-bold mb-6 md:mb-0">
                Music Catalog
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
                  className={`group relative rounded-lg border bg-card overflow-hidden hover:border-primary transition-colors cursor-pointer ${
                    currentTrackIndex === tracks.indexOf(track) ? "border-primary" : ""
                  }`}
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
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${track.cover})` }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center ${
                          currentTrackIndex === tracks.indexOf(track) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        } transition-opacity`}>
                          {currentTrackIndex === tracks.indexOf(track) && isPlaying ? (
                            <Pause className="w-8 h-8" />
                          ) : (
                            <Play className="w-8 h-8 ml-1" />
                          )}
                        </div>
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
        <AudioPlayerWithSlider
          isPlaying={isPlaying}
          currentTrack={currentTrackData?.audioUrl || ""}
          title={currentTrackData?.title || "No track selected"}
          artist={currentTrackData?.artist}
          onEnded={handleTrackEnded}
          onPrevious={handlePrevTrack}
          onNext={handleNextTrack}
          onPlayPause={togglePlay}
        />
      </div>
    </>
  );
}

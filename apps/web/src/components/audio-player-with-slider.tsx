"use client";

import { Button } from "@v1/ui/button";
import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface AudioPlayerWithSliderProps {
  isPlaying: boolean;
  currentTrack: string;
  title: string;
  artist?: string;
  onEnded: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  onPlayPause: () => void;
}

export function AudioPlayerWithSlider({
  isPlaying,
  currentTrack,
  title,
  artist,
  onEnded,
  onPrevious,
  onNext,
  onPlayPause,
}: AudioPlayerWithSliderProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = document.createElement('audio');
      audioRef.current.preload = 'metadata';
    }

    const audio = audioRef.current;

    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => {
      setCurrentTime(0);
      onEnded();
    };

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [onEnded]);

  // Handle track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = currentTrack;
    
    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Playback failed:", error);
        });
      }
    }
  }, [currentTrack, isPlaying]);

  // Handle play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying && !isLoading) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Playback failed:", error);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, isLoading]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col py-4">
          <div className="w-full mb-4">
            <input
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              disabled={isLoading}
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {onPrevious && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={onPrevious}
                    disabled={isLoading}
                  >
                    <SkipBack className="w-5 h-5" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-full"
                  onClick={onPlayPause}
                  disabled={isLoading}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </Button>
                {onNext && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={onNext}
                    disabled={isLoading}
                  >
                    <SkipForward className="w-5 h-5" />
                  </Button>
                )}
              </div>
              <div>
                <div className="font-medium">{title}</div>
                {artist && (
                  <div className="text-sm text-muted-foreground">{artist}</div>
                )}
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
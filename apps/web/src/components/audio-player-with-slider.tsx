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

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(currentTrack);
      audioRef.current.onended = onEnded;
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current?.duration || 0);
      };
      audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
      };
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentTrack, onEnded]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        void audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

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
                  <Button variant="ghost" size="icon" onClick={onPrevious}>
                    <SkipBack className="w-5 h-5" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-full"
                  onClick={onPlayPause}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </Button>
                {onNext && (
                  <Button variant="ghost" size="icon" onClick={onNext}>
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
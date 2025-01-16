"use client";

import { useEffect, useRef } from "react";

interface AudioPlayerProps {
  isPlaying: boolean;
  currentTrack: string;
  onEnded: () => void;
  volume?: number;
}

export function AudioPlayer({
  isPlaying,
  currentTrack,
  onEnded,
  volume = 1,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(currentTrack);
      audioRef.current.volume = volume;
      audioRef.current.onended = onEnded;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentTrack, onEnded, volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return null;
}

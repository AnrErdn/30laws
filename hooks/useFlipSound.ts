"use client";
import { useCallback, useRef } from "react";

export function useFlipSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = useCallback(() => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio("/sounds/page-flip.mp3");
        audioRef.current.volume = 0.7;
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    } catch {
      // blocked — ignore
    }
  }, []);

  return play;
}

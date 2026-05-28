"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export const TRACKS = [
  { title: "Starry Night",    artist: "Jordan Critz",                    file: "/music/starry-night.mp3"    },
  { title: "Idea 25",         artist: "Gibran Alcocer & Andrea Vanzo",   file: "/music/idea-25.mp3"         },
  { title: "Drive Me Crazy",  artist: "Myles Lloyd",                     file: "/music/drive-me-crazy.mp3"  },
  { title: "Time And Trust",  artist: "Naomi Sharon",                    file: "/music/time-and-trust.mp3"  },
] as const;

export function useMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [trackIdx, setTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialise audio on mount
  useEffect(() => {
    const audio = new Audio(TRACKS[0].file);
    audio.volume = 0.35;
    audio.loop = false;
    audioRef.current = audio;
    return () => { audio.pause(); audio.src = ""; };
  }, []);

  // Switch track when trackIdx changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const wasPlaying = !audio.paused;
    audio.src = TRACKS[trackIdx].file;
    audio.load();
    if (wasPlaying) audio.play().catch(() => {});
  }, [trackIdx]);

  // Auto-advance to next track
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnded = () => {
      setTrackIdx(i => (i + 1) % TRACKS.length);
    };
    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  const next = useCallback(() => {
    setTrackIdx(i => (i + 1) % TRACKS.length);
  }, []);

  const prev = useCallback(() => {
    setTrackIdx(i => (i - 1 + TRACKS.length) % TRACKS.length);
  }, []);

  const selectTrack = useCallback((idx: number) => {
    setTrackIdx(idx);
    const audio = audioRef.current;
    if (!audio) return;
    // Give the src change a tick to propagate
    setTimeout(() => {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }, 50);
  }, []);

  return { trackIdx, isPlaying, toggle, next, prev, selectTrack };
}

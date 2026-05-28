"use client";
import { useCallback, useRef } from "react";

export function useFlipSound() {
  const ctxRef = useRef<AudioContext | null>(null);

  const play = useCallback(() => {
    try {
      if (!ctxRef.current) {
        ctxRef.current = new AudioContext();
      }
      const ctx = ctxRef.current;

      const duration = 0.35;
      const rate = ctx.sampleRate;
      const frames = Math.floor(rate * duration);
      const buffer = ctx.createBuffer(1, frames, rate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < frames; i++) {
        const t = i / frames;
        // white noise shaped with a quick attack and exponential decay
        const envelope = Math.pow(1 - t, 1.8) * Math.pow(t < 0.05 ? t / 0.05 : 1, 0.5);
        data[i] = (Math.random() * 2 - 1) * envelope;
      }

      const src = ctx.createBufferSource();
      src.buffer = buffer;

      // bandpass filter — paper rustle sits around 800–3000 Hz
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = 1400;
      bp.Q.value = 0.6;

      // second filter for warmth
      const hp = ctx.createBiquadFilter();
      hp.type = "highpass";
      hp.frequency.value = 400;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.28, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      src.connect(bp);
      bp.connect(hp);
      hp.connect(gain);
      gain.connect(ctx.destination);
      src.start(ctx.currentTime);
    } catch {
      // AudioContext blocked — ignore
    }
  }, []);

  return play;
}

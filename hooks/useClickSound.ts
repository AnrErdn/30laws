"use client";
import { useCallback, useRef } from "react";

export function useClickSound() {
  const ctxRef = useRef<AudioContext | null>(null);

  const play = useCallback(() => {
    try {
      if (!ctxRef.current) ctxRef.current = new AudioContext();
      const ctx = ctxRef.current;
      const now = ctx.currentTime;
      const dur = 0.055;

      // Layer 1: filtered noise — the "click" transient
      const frames = Math.floor(ctx.sampleRate * dur);
      const buf = ctx.createBuffer(1, frames, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < frames; i++) {
        const t = i / frames;
        const env = Math.pow(1 - t, 3) * (t < 0.03 ? t / 0.03 : 1);
        data[i] = (Math.random() * 2 - 1) * env;
      }
      const noiseSrc = ctx.createBufferSource();
      noiseSrc.buffer = buf;

      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = 1100;
      bp.Q.value = 1.1;

      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 3200;

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.16, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + dur);

      noiseSrc.connect(bp);
      bp.connect(lp);
      lp.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      noiseSrc.start(now);

      // Layer 2: descending sine — warm body under the click
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(720, now);
      osc.frequency.exponentialRampToValueAtTime(380, now + 0.045);

      const oscGain = ctx.createGain();
      oscGain.gain.setValueAtTime(0.055, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // AudioContext blocked — ignore
    }
  }, []);

  return play;
}

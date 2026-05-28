"use client";
import { useEffect, useRef, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the progress bar via JS so it's not dependent on CSS loading order
    const bar = barRef.current;
    if (!bar) return;

    let start: number | null = null;
    const duration = 1700;

    const step = (ts: number) => {
      if (!start) start = ts;
      const pct = Math.min((ts - start) / duration, 1);
      bar.style.width = `${pct * 100}%`;
      if (pct < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);

    // Fade out after bar completes + small pause
    const t1 = setTimeout(() => setOpacity(0), 1900);
    const t2 = setTimeout(() => setVisible(false), 2500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "28px",
        opacity,
        transition: "opacity 0.6s ease",
        pointerEvents: opacity < 1 ? "none" : "all",
      }}
    >
      {/* Wordmark */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1 }}>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(3rem, 9vw, 5.5rem)",
          color: "#F0EDE6",
          letterSpacing: "0.06em",
          display: "block",
        }}>
          30
        </span>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(3rem, 9vw, 5.5rem)",
          color: "#F0EDE6",
          letterSpacing: "0.06em",
          display: "block",
        }}>
          LAWS
        </span>
      </div>

      {/* Progress bar */}
      <div style={{
        width: "148px",
        height: "2px",
        background: "#1a1a18",
        borderRadius: "2px",
        overflow: "hidden",
      }}>
        <div
          ref={barRef}
          style={{
            width: "0%",
            height: "100%",
            background: "#F0EDE6",
            borderRadius: "2px",
          }}
        />
      </div>
    </div>
  );
}

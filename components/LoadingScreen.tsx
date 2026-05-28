"use client";
import { useEffect, useRef, useState } from "react";

function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const arm = 22;
  const paths = {
    tl: `M ${arm} 0 L 0 0 L 0 ${arm}`,
    tr: `M 0 0 L ${arm} 0 L ${arm} ${arm}`,
    bl: `M ${arm} ${arm} L 0 ${arm} L 0 0`,
    br: `M 0 ${arm} L ${arm} ${arm} L ${arm} 0`,
  };
  const placement: Record<string, React.CSSProperties> = {
    tl: { top: 32, left: 32 },
    tr: { top: 32, right: 32 },
    bl: { bottom: 32, left: 32 },
    br: { bottom: 32, right: 32 },
  };
  return (
    <svg
      width={arm}
      height={arm}
      viewBox={`0 0 ${arm} ${arm}`}
      style={{ position: "absolute", ...placement[pos] }}
    >
      <path d={paths[pos]} fill="none" stroke="rgba(240,237,230,0.18)" strokeWidth="0.75" />
    </svg>
  );
}

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    const t1 = setTimeout(() => setOpacity(0), 1900);
    const t2 = setTimeout(() => setVisible(false), 2500);
    return () => { cancelAnimationFrame(raf); clearTimeout(t1); clearTimeout(t2); };
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
        gap: "32px",
        opacity,
        transition: "opacity 0.6s ease",
        pointerEvents: opacity < 1 ? "none" : "all",
      }}
    >
      {/* Corner frames */}
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />

      {/* Wordmark — Playfair Display italic, book-cover style */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
        <span style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(1rem, 3vw, 1.6rem)",
          color: "rgba(240,237,230,0.35)",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          display: "block",
        }}>
          Laws of UX
        </span>
        <span style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(3.5rem, 10vw, 6.5rem)",
          fontWeight: 700,
          color: "#F0EDE6",
          letterSpacing: "-0.02em",
          lineHeight: 0.92,
          display: "block",
        }}>
          30
        </span>
        <span style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(3.5rem, 10vw, 6.5rem)",
          fontWeight: 700,
          color: "#F0EDE6",
          letterSpacing: "-0.02em",
          lineHeight: 0.92,
          display: "block",
        }}>
          Laws
        </span>
      </div>

      {/* Progress bar */}
      <div style={{
        width: "140px",
        height: "1px",
        background: "#1e1e1c",
        borderRadius: "1px",
        overflow: "hidden",
      }}>
        <div
          ref={barRef}
          style={{ width: "0%", height: "100%", background: "rgba(240,237,230,0.6)", borderRadius: "1px" }}
        />
      </div>
    </div>
  );
}

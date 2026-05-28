"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1900);
    const t2 = setTimeout(() => setDone(true), 2450);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (done) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.55s ease",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      {/* Wordmark */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 0.88 }}>
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(3rem, 9vw, 5.5rem)",
            color: "#F0EDE6",
            letterSpacing: "0.04em",
          }}
        >
          30
        </span>
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(3rem, 9vw, 5.5rem)",
            color: "#F0EDE6",
            letterSpacing: "0.04em",
          }}
        >
          LAWS
        </span>
      </div>

      {/* Progress bar — Mac style */}
      <div
        style={{
          width: 152,
          height: 2,
          background: "#1E1E1C",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          className="loading-progress"
          style={{ height: "100%", background: "#F0EDE6", borderRadius: 2 }}
        />
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { useMusicPlayer, TRACKS } from "@/hooks/useMusicPlayer";

export default function MusicPlayer() {
  const { trackIdx, isPlaying, toggle, next, prev, selectTrack } = useMusicPlayer();
  const [open, setOpen] = useState(false);
  const track = TRACKS[trackIdx];

  return (
    <div className="fixed top-6 left-6 z-50 flex flex-col items-start gap-2">
      {/* Playlist panel */}
      {open && (
        <div
          className="mb-1 w-52 rounded-sm overflow-hidden"
          style={{
            background: "rgba(8,8,6,0.92)",
            backdropFilter: "blur(12px)",
            border: "1px solid #2A2A26",
          }}
        >
          {TRACKS.map((t, i) => (
            <button
              key={t.file}
              onClick={() => { selectTrack(i); }}
              className="w-full text-left px-4 py-2.5 flex flex-col gap-0.5 transition-colors"
              style={{
                background: i === trackIdx ? "rgba(240,237,230,0.06)" : "transparent",
                borderBottom: i < TRACKS.length - 1 ? "1px solid #2A2A26" : "none",
              }}
            >
              <span
                className="font-serif leading-tight"
                style={{
                  fontSize: "0.62rem",
                  color: i === trackIdx ? "#F0EDE6" : "#6B6B65",
                  letterSpacing: "0.02em",
                }}
              >
                {t.title}
              </span>
              <span
                className="font-mono"
                style={{ fontSize: "0.5rem", color: "#6B6B65", letterSpacing: "0.08em" }}
              >
                {t.artist}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Player bar */}
      <div
        className="flex items-center gap-3 px-3 py-2 rounded-sm"
        style={{
          background: "rgba(8,8,6,0.88)",
          backdropFilter: "blur(12px)",
          border: "1px solid #2A2A26",
        }}
      >
        {/* Vinyl record */}
        <button
          onClick={() => setOpen(v => !v)}
          className="flex-shrink-0 relative"
          style={{ width: 28, height: 28 }}
          aria-label="Toggle playlist"
        >
          <svg
            viewBox="0 0 28 28"
            width="28"
            height="28"
            className={isPlaying ? "vinyl-spinning" : ""}
          >
            {/* Vinyl body */}
            <circle cx="14" cy="14" r="13" fill="#111110" />
            {/* Grooves */}
            {[10.5, 8.5, 6.5].map(r => (
              <circle key={r} cx="14" cy="14" r={r} fill="none" stroke="#2A2A28" strokeWidth="0.4" />
            ))}
            {/* Label */}
            <circle cx="14" cy="14" r="4.5" fill="#1C1C1A" />
            {/* Center hole */}
            <circle cx="14" cy="14" r="1.2" fill="#080806" />
            {/* Playing indicator on label */}
            {isPlaying && <circle cx="14" cy="14" r="3" fill="none" stroke="#F0EDE6" strokeWidth="0.5" strokeDasharray="2 2" />}
          </svg>
        </button>

        {/* Track info */}
        <button
          onClick={() => setOpen(v => !v)}
          className="flex flex-col items-start min-w-0"
          style={{ maxWidth: 110 }}
          aria-label="Toggle playlist"
        >
          <span
            className="font-serif leading-tight truncate w-full"
            style={{ fontSize: "0.6rem", color: "#F0EDE6", letterSpacing: "0.02em" }}
          >
            {track.title}
          </span>
          <span
            className="font-mono truncate w-full"
            style={{ fontSize: "0.48rem", color: "#6B6B65", letterSpacing: "0.08em" }}
          >
            {track.artist}
          </span>
        </button>

        {/* Controls */}
        <div className="flex items-center gap-1.5">
          <button onClick={prev} className="text-white/25 hover:text-white/60 transition-colors" aria-label="Previous">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
              <polygon points="10,1 4,5 10,9" />
              <rect x="0" y="1" width="2" height="8" />
            </svg>
          </button>

          <button
            onClick={toggle}
            className="flex items-center justify-center rounded-full transition-colors"
            style={{
              width: 20, height: 20,
              background: isPlaying ? "#F0EDE6" : "transparent",
              border: "1px solid #6B6B65",
              color: isPlaying ? "#080806" : "#6B6B65",
            }}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg width="6" height="8" viewBox="0 0 6 8" fill="currentColor">
                <rect x="0" y="0" width="2" height="8" />
                <rect x="4" y="0" width="2" height="8" />
              </svg>
            ) : (
              <svg width="6" height="8" viewBox="0 0 6 8" fill="currentColor" style={{ marginLeft: 1 }}>
                <polygon points="0,0 6,4 0,8" />
              </svg>
            )}
          </button>

          <button onClick={next} className="text-white/25 hover:text-white/60 transition-colors" aria-label="Next">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
              <polygon points="0,1 6,5 0,9" />
              <rect x="8" y="1" width="2" height="8" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}

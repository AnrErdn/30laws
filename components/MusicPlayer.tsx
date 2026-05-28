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
          className="mb-1 w-64 rounded-sm overflow-hidden"
          style={{
            background: "rgba(8,8,6,0.95)",
            backdropFilter: "blur(16px)",
            border: "1px solid #2A2A26",
          }}
        >
          {TRACKS.map((t, i) => (
            <button
              key={t.file}
              onClick={() => selectTrack(i)}
              className="w-full text-left px-5 py-3.5 flex flex-col gap-1 transition-colors"
              style={{
                background: i === trackIdx ? "rgba(240,237,230,0.07)" : "transparent",
                borderBottom: i < TRACKS.length - 1 ? "1px solid #2A2A26" : "none",
              }}
            >
              <span
                className="font-serif leading-tight"
                style={{
                  fontSize: "0.78rem",
                  color: i === trackIdx ? "#F0EDE6" : "#6B6B65",
                  letterSpacing: "0.02em",
                }}
              >
                {t.title}
              </span>
              <span
                className="font-mono"
                style={{ fontSize: "0.58rem", color: "#6B6B65", letterSpacing: "0.08em" }}
              >
                {t.artist}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Player bar */}
      <div
        className="flex items-center gap-4 px-4 py-3 rounded-sm"
        style={{
          background: "rgba(8,8,6,0.92)",
          backdropFilter: "blur(16px)",
          border: "1px solid #2A2A26",
        }}
      >
        {/* Vinyl record */}
        <button
          onClick={() => setOpen(v => !v)}
          className="flex-shrink-0"
          style={{ width: 44, height: 44 }}
          aria-label="Toggle playlist"
        >
          <svg
            viewBox="0 0 44 44"
            width="44"
            height="44"
            className={isPlaying ? "vinyl-spinning" : ""}
          >
            <circle cx="22" cy="22" r="21" fill="#111110" />
            {[17, 14, 11].map(r => (
              <circle key={r} cx="22" cy="22" r={r} fill="none" stroke="#2A2A28" strokeWidth="0.5" />
            ))}
            <circle cx="22" cy="22" r="7" fill="#1C1C1A" />
            <circle cx="22" cy="22" r="2" fill="#080806" />
            {isPlaying && (
              <circle cx="22" cy="22" r="5" fill="none" stroke="#F0EDE6" strokeWidth="0.6" strokeDasharray="2.5 2" />
            )}
          </svg>
        </button>

        {/* Track info */}
        <button
          onClick={() => setOpen(v => !v)}
          className="flex flex-col items-start min-w-0"
          style={{ maxWidth: 145 }}
          aria-label="Toggle playlist"
        >
          <span
            className="font-serif leading-tight truncate w-full"
            style={{ fontSize: "0.78rem", color: "#F0EDE6", letterSpacing: "0.02em" }}
          >
            {track.title}
          </span>
          <span
            className="font-mono truncate w-full"
            style={{ fontSize: "0.6rem", color: "#6B6B65", letterSpacing: "0.08em", marginTop: 3 }}
          >
            {track.artist}
          </span>
        </button>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button onClick={prev} className="text-white/25 hover:text-white/60 transition-colors" aria-label="Previous">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
              <polygon points="13,1 5.5,6.5 13,12" />
              <rect x="0" y="1" width="2.5" height="11" />
            </svg>
          </button>

          <button
            onClick={toggle}
            className="flex items-center justify-center rounded-full transition-colors flex-shrink-0"
            style={{
              width: 28, height: 28,
              background: isPlaying ? "#F0EDE6" : "transparent",
              border: "1px solid #6B6B65",
              color: isPlaying ? "#080806" : "#6B6B65",
            }}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg width="7" height="9" viewBox="0 0 7 9" fill="currentColor">
                <rect x="0" y="0" width="2.5" height="9" />
                <rect x="4.5" y="0" width="2.5" height="9" />
              </svg>
            ) : (
              <svg width="7" height="9" viewBox="0 0 7 9" fill="currentColor" style={{ marginLeft: 1 }}>
                <polygon points="0,0 7,4.5 0,9" />
              </svg>
            )}
          </button>

          <button onClick={next} className="text-white/25 hover:text-white/60 transition-colors" aria-label="Next">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
              <polygon points="0,1 7.5,6.5 0,12" />
              <rect x="10.5" y="1" width="2.5" height="11" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

interface CoverPageProps {
  onNext: () => void;
}

export default function CoverPage({ onNext }: CoverPageProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center bg-cover-bg texture-cover cursor-pointer select-none"
      onClick={onNext}
    >
      {/* Abstract geometric backdrop — tonal, very low opacity */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 800 800"
          className="w-full h-full max-w-3xl opacity-[0.04]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Large concentric circles — embossed feel */}
          <circle cx="400" cy="400" r="350" stroke="white" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="300" stroke="white" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="240" stroke="white" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="170" stroke="white" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="90" stroke="white" strokeWidth="0.5" />
          {/* Cross lines */}
          <line x1="50" y1="400" x2="750" y2="400" stroke="white" strokeWidth="0.5" />
          <line x1="400" y1="50" x2="400" y2="750" stroke="white" strokeWidth="0.5" />
          <line x1="155" y1="155" x2="645" y2="645" stroke="white" strokeWidth="0.3" />
          <line x1="645" y1="155" x2="155" y2="645" stroke="white" strokeWidth="0.3" />
          {/* Outer rectangle */}
          <rect x="60" y="60" width="680" height="680" stroke="white" strokeWidth="0.4" />
        </svg>
      </div>

      {/* Main title block */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        {/* "30 LAWS" — massive display */}
        <h1
          className="font-display text-text-primary leading-none tracking-[-0.02em] select-none"
          style={{ fontSize: "clamp(5rem, 22vw, 20rem)" }}
        >
          30 LAWS
        </h1>

        {/* Thin rule */}
        <div
          className="w-full h-px mt-4 mb-5"
          style={{ background: "rgba(240,237,230,0.2)" }}
        />

        {/* Subtitle */}
        <p
          className="font-sans text-text-muted uppercase tracking-widest"
          style={{ fontSize: "0.7rem", letterSpacing: "0.35em" }}
        >
          Laws of UX
        </p>
      </motion.div>

      {/* Bottom detail */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 flex justify-between items-end px-10 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <span
          className="font-mono text-text-muted"
          style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}
        >
          A VIRTUAL BOOK
        </span>
        <span
          className="font-mono text-text-muted"
          style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}
        >
          MMXXV · FIRST EDITION
        </span>
      </motion.div>

      {/* "Click to open" hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="text-text-muted animate-bounce"
        >
          <path
            d="M8 4L8 20M8 20L3 15M8 20L13 15"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="font-sans text-text-muted"
          style={{ fontSize: "0.55rem", letterSpacing: "0.2em" }}
        >
          CLICK TO OPEN
        </span>
      </motion.div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Law } from "@/types/law";
import { useClickSound } from "@/hooks/useClickSound";

const CATEGORY_ORDER = [
  "behavior-emotion",
  "cognitive-load",
  "decision-making",
  "perception-gestalt",
  "system-engineering",
];

const CATEGORY_LABELS: Record<string, string> = {
  "behavior-emotion": "Behavior & Emotion",
  "cognitive-load": "Cognitive Load",
  "decision-making": "Decision Making",
  "perception-gestalt": "Perception & Gestalt",
  "system-engineering": "System & Engineering",
};

const CATEGORY_COLORS: Record<string, string> = {
  "behavior-emotion": "#B04A4A",
  "cognitive-load": "#4A6FA5",
  "decision-making": "#C4872A",
  "perception-gestalt": "#3D7A6F",
  "system-engineering": "#6B7A3A",
};

interface TocOverlayProps {
  laws: Law[];
  isOpen: boolean;
  onClose: () => void;
  onSelectLaw: (id: number) => void;
}

export default function TocOverlay({ laws, isOpen, onClose, onSelectLaw }: TocOverlayProps) {
  const playClick = useClickSound();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const byCategory = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    laws: laws.filter((l) => l.category === cat).sort((a, b) => a.id - b.id),
  }));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ background: "rgba(8,8,6,0.97)" }}
        >
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            className="relative z-10 w-full h-full flex flex-col p-10 overflow-hidden"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-end justify-between mb-10 flex-shrink-0">
              <div>
                <p className="category-tag text-text-muted mb-2" style={{ letterSpacing: "0.25em" }}>
                  Contents
                </p>
                <h2
                  className="font-display text-text-primary leading-none"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
                >
                  30 LAWS
                </h2>
              </div>
              <button
                onClick={onClose}
                className="font-sans text-text-muted hover:text-text-primary transition-colors pb-2"
                style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}
              >
                ESC / ХААХ ×
              </button>
            </div>

            {/* Law grid */}
            <div className="flex-1 overflow-y-auto right-page-scroll">
              <div
                className="grid gap-x-8 gap-y-0"
                style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
              >
                {byCategory.map(({ category, laws: catLaws }) => (
                  <div key={category} className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: CATEGORY_COLORS[category] }}
                      />
                      <span
                        className="font-sans uppercase"
                        style={{
                          fontSize: "0.55rem",
                          letterSpacing: "0.2em",
                          color: CATEGORY_COLORS[category],
                          opacity: 0.7,
                        }}
                      >
                        {CATEGORY_LABELS[category]}
                      </span>
                    </div>

                    {catLaws.map((law) => (
                      <button
                        key={law.id}
                        onClick={() => { playClick(); onSelectLaw(law.id); }}
                        className="group w-full flex items-baseline gap-4 py-2 border-b transition-all duration-150 text-left"
                        style={{ borderColor: "rgba(42,42,38,0.4)" }}
                      >
                        <span
                          className="font-mono text-text-muted group-hover:text-text-primary transition-colors flex-shrink-0"
                          style={{ fontSize: "0.55rem", letterSpacing: "0.1em", minWidth: "1.6rem" }}
                        >
                          {String(law.id).padStart(2, "0")}
                        </span>
                        <span
                          className="font-serif transition-all"
                          style={{
                            fontSize: "0.85rem",
                            color: "rgba(240,237,230,0.75)",
                          }}
                        >
                          <span className="group-hover:text-text-primary transition-colors">
                            {law.title}
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Keyboard hint */}
            <div className="flex-shrink-0 mt-6 flex gap-8">
              <span className="font-sans text-text-muted" style={{ fontSize: "0.55rem", letterSpacing: "0.12em" }}>
                ← → ХУУДАС ЭРГҮҮЛЭХ
              </span>
              <span className="font-sans text-text-muted" style={{ fontSize: "0.55rem", letterSpacing: "0.12em" }}>
                T АГУУЛГА
              </span>
              <span className="font-sans text-text-muted" style={{ fontSize: "0.55rem", letterSpacing: "0.12em" }}>
                ESC ХААХ
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Law } from "@/types/law";
import CoverPage from "./CoverPage";
import ContentsPage from "./ContentsPage";
import LawPage from "./LawPage";
import TocOverlay from "./TocOverlay";

type PageView =
  | { type: "cover" }
  | { type: "contents" }
  | { type: "law"; id: number };

interface BookClientProps {
  laws: Law[];
}

const pageVariants = {
  enterFromRight: {
    x: "100%",
    opacity: 0,
    rotateY: -8,
  },
  enterFromLeft: {
    x: "-100%",
    opacity: 0,
    rotateY: 8,
  },
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
  },
  exitToLeft: {
    x: "-100%",
    opacity: 0,
    rotateY: 8,
  },
  exitToRight: {
    x: "100%",
    opacity: 0,
    rotateY: -8,
  },
};

const transition = {
  duration: 0.65,
  ease: "easeInOut" as const,
};

export default function BookClient({ laws }: BookClientProps) {
  const [current, setCurrent] = useState<PageView>({ type: "cover" });
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [tocOpen, setTocOpen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const getPageIndex = useCallback(
    (view: PageView): number => {
      if (view.type === "cover") return -1;
      if (view.type === "contents") return 0;
      return view.id;
    },
    []
  );

  const navigate = useCallback(
    (next: PageView) => {
      if (isFlipping) return;
      const currentIdx = getPageIndex(current);
      const nextIdx = getPageIndex(next);
      setDirection(nextIdx >= currentIdx ? "forward" : "backward");
      setIsFlipping(true);
      setCurrent(next);
      setTimeout(() => setIsFlipping(false), 700);
    },
    [current, getPageIndex, isFlipping]
  );

  const goNext = useCallback(() => {
    if (current.type === "cover") navigate({ type: "contents" });
    else if (current.type === "contents") navigate({ type: "law", id: 1 });
    else if (current.type === "law" && current.id < laws.length)
      navigate({ type: "law", id: current.id + 1 });
  }, [current, laws.length, navigate]);

  const goPrev = useCallback(() => {
    if (current.type === "contents") navigate({ type: "cover" });
    else if (current.type === "law" && current.id === 1)
      navigate({ type: "contents" });
    else if (current.type === "law" && current.id > 1)
      navigate({ type: "law", id: current.id - 1 });
  }, [current, navigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "t" || e.key === "T") setTocOpen((v) => !v);
      if (e.key === "Escape") setTocOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const pageKey =
    current.type === "cover"
      ? "cover"
      : current.type === "contents"
        ? "contents"
        : `law-${current.id}`;

  const currentLaw =
    current.type === "law"
      ? laws.find((l) => l.id === current.id)
      : undefined;

  return (
    <div className="relative w-screen h-screen overflow-hidden book-perspective bg-page-bg">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pageKey}
          className={`absolute inset-0 ${isFlipping ? "flipping" : ""}`}
          initial={
            direction === "forward" ? "enterFromRight" : "enterFromLeft"
          }
          animate="center"
          exit={direction === "forward" ? "exitToLeft" : "exitToRight"}
          variants={pageVariants}
          transition={transition}
          style={{ transformStyle: "preserve-3d" }}
        >
          {current.type === "cover" && (
            <CoverPage onNext={goNext} />
          )}
          {current.type === "contents" && (
            <ContentsPage
              laws={laws}
              onSelectLaw={(id) => navigate({ type: "law", id })}
              onBack={goPrev}
              onNext={goNext}
            />
          )}
          {current.type === "law" && currentLaw && (
            <LawPage
              law={currentLaw}
              onNext={goNext}
              onPrev={goPrev}
              hasNext={currentLaw.id < laws.length}
              hasPrev={true}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* TOC overlay button — hidden on cover */}
      {current.type !== "cover" && (
        <button
          onClick={() => setTocOpen(true)}
          className="fixed bottom-8 right-8 z-50 w-10 h-10 flex items-center justify-center border border-rule text-text-muted hover:text-text-primary hover:border-text-muted transition-colors duration-200"
          aria-label="Open table of contents (T)"
          title="Table of contents (T)"
        >
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect x="0" y="0" width="16" height="1.5" fill="currentColor" />
            <rect x="0" y="5.25" width="11" height="1.5" fill="currentColor" />
            <rect x="0" y="10.5" width="16" height="1.5" fill="currentColor" />
          </svg>
        </button>
      )}

      {/* Navigation arrows */}
      {current.type !== "cover" && (
        <>
          {(current.type === "contents" ||
            (current.type === "law" && current.id > 1)) && (
            <button
              onClick={goPrev}
              className="fixed left-6 top-1/2 -translate-y-1/2 z-40 w-8 h-8 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors duration-200"
              aria-label="Previous page"
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
          {(current.type === "contents" ||
            (current.type === "law" && current.id < laws.length)) && (
            <button
              onClick={goNext}
              className="fixed right-6 top-1/2 -translate-y-1/2 z-40 w-8 h-8 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors duration-200"
              aria-label="Next page"
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </>
      )}

      <TocOverlay
        laws={laws}
        isOpen={tocOpen}
        onClose={() => setTocOpen(false)}
        onSelectLaw={(id) => {
          setTocOpen(false);
          navigate({ type: "law", id });
        }}
      />
    </div>
  );
}

"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import type { Law } from "@/types/law";
import { useFlipSound } from "@/hooks/useFlipSound";
import SpreadLayout from "./book/SpreadLayout";
import FlippingPage from "./book/FlippingPage";
import TocOverlay from "./TocOverlay";
import MusicPlayer from "./MusicPlayer";

// Spread content components
import CoverSpread from "./spreads/CoverSpread";
import BackCoverSpread from "./spreads/BackCoverSpread";
import TocSpread from "./spreads/TocSpread";
import Law01Spread1 from "./spreads/law01/Spread1";
import Law01Spread2 from "./spreads/law01/Spread2";
import Law01Spread3 from "./spreads/law01/Spread3";
import Law01Spread4 from "./spreads/law01/Spread4";
import DefaultLawSpread from "./spreads/DefaultLawSpread";

interface SpreadDef {
  id: string;
  left: React.ReactNode;
  right: React.ReactNode;
  pageNum?: number; // displayed on left page
}

function buildSpreads(laws: Law[]): SpreadDef[] {
  const spreads: SpreadDef[] = [];

  // 0: Cover
  spreads.push({ id: "cover", left: <CoverSpread.Left />, right: <CoverSpread.Right /> });

  // 1: TOC
  spreads.push({ id: "toc", left: <TocSpread.Left />, right: <TocSpread.Right laws={laws} /> });

  // 2–5: Law 01 (4 spreads)
  const law01 = laws[0];
  spreads.push({ id: "law01-s1", left: <Law01Spread1.Left law={law01} />, right: <Law01Spread1.Right law={law01} />, pageNum: 1 });
  spreads.push({ id: "law01-s2", left: <Law01Spread2.Left />, right: <Law01Spread2.Right law={law01} />, pageNum: 3 });
  spreads.push({ id: "law01-s3", left: <Law01Spread3.Left />, right: <Law01Spread3.Right law={law01} />, pageNum: 5 });
  spreads.push({ id: "law01-s4", left: <Law01Spread4.Left law={law01} />, right: <Law01Spread4.Right law={law01} />, pageNum: 7 });

  // 6+: Laws 02–30 (1 spread each)
  let pg = 9;
  for (let i = 1; i < laws.length; i++) {
    const law = laws[i];
    spreads.push({
      id: `law-${law.id}`,
      left: <DefaultLawSpread.Left law={law} pageNum={pg} />,
      right: <DefaultLawSpread.Right law={law} pageNum={pg + 1} />,
      pageNum: pg,
    });
    pg += 2;
  }

  // Last: Back cover
  spreads.push({ id: "back-cover", left: <BackCoverSpread.Left />, right: <BackCoverSpread.Right /> });

  return spreads;
}

interface BookEngineProps {
  laws: Law[];
}

type FlipState = "idle" | "forward" | "backward";

export default function BookEngine({ laws }: BookEngineProps) {
  const spreads = useRef(buildSpreads(laws)).current;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipState, setFlipState] = useState<FlipState>("idle");
  const [targetIdx, setTargetIdx] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);
  const playSound = useFlipSound();

  const canGoForward = currentIdx < spreads.length - 1 && flipState === "idle";
  const canGoBack = currentIdx > 0 && flipState === "idle";

  const flipTo = useCallback((idx: number) => {
    if (flipState !== "idle") return;
    if (idx === currentIdx) return;
    const dir: FlipState = idx > currentIdx ? "forward" : "backward";
    setTargetIdx(idx);
    setFlipState(dir);
    playSound();
  }, [flipState, currentIdx, playSound]);

  const goNext = useCallback(() => { if (canGoForward) flipTo(currentIdx + 1); }, [canGoForward, flipTo, currentIdx]);
  const goPrev = useCallback(() => { if (canGoBack) flipTo(currentIdx - 1); }, [canGoBack, flipTo, currentIdx]);

  const handleFlipComplete = useCallback(() => {
    setCurrentIdx(targetIdx);
    setFlipState("idle");
  }, [targetIdx]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "t" || e.key === "T") setTocOpen(v => !v);
      if (e.key === "Escape") setTocOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const current = spreads[currentIdx];
  const target = spreads[targetIdx];
  const isFlipping = flipState !== "idle";

  // What to show in each slot during and after animation
  // Forward: right page flips; we reveal target's right underneath
  // Backward: left page flips; we reveal target's left underneath (handled by FlippingPage on left)
  const leftPage = isFlipping && flipState === "backward"
    ? target.left   // after flip resolves, left will be target's left
    : current.left; // static

  const rightPage = isFlipping && flipState === "forward"
    ? target.right  // revealed behind the flipping page
    : current.right;

  // The flipping element covers either right (forward) or left (backward)
  const flipFront = flipState === "forward" ? current.right : current.left;
  const flipBack  = flipState === "forward" ? target.left   : target.right;

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black book-perspective overflow-hidden">
      {/* Book shadow */}
      <div
        className="absolute"
        style={{
          width: "var(--book-w)",
          height: "var(--page-h)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.9), 0 8px 30px rgba(0,0,0,0.7)",
          borderRadius: "1px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* The book */}
      <div className="relative" style={{ zIndex: 1, width: "var(--book-w)", height: "var(--page-h)" }}>
        <SpreadLayout
          leftPage={leftPage}
          rightPage={rightPage}
          rightSlot={isFlipping && flipState === "forward" ? target.right : undefined}
        />

        {/* The flipping page overlay */}
        {isFlipping && (
          <div
            className="absolute top-0 preserve-3d"
            style={{
              // forward: covers right side; backward: covers left side
              left: flipState === "forward"
                ? "calc(var(--page-w) + var(--spine-w))"
                : "0",
              width: "var(--page-w)",
              height: "var(--page-h)",
              zIndex: 30,
              overflow: "visible",
            }}
          >
            <FlippingPage
              frontContent={flipFront}
              backContent={flipBack}
              direction={flipState}
              isFlipping={isFlipping}
              onComplete={handleFlipComplete}
            />
          </div>
        )}

        {/* Left-side reveal during backward flip */}
        {isFlipping && flipState === "backward" && (
          <div
            className="absolute top-0 overflow-hidden"
            style={{
              left: 0,
              width: "var(--page-w)",
              height: "var(--page-h)",
              zIndex: 15,
            }}
          >
            {target.left}
          </div>
        )}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goPrev}
        disabled={!canGoBack}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 w-8 h-8 flex items-center justify-center text-white/20 hover:text-white/60 transition-colors disabled:opacity-0"
        aria-label="Previous"
      >
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
          <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button
        onClick={goNext}
        disabled={!canGoForward}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 w-8 h-8 flex items-center justify-center text-white/20 hover:text-white/60 transition-colors disabled:opacity-0"
        aria-label="Next"
      >
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
          <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* TOC button */}
      {currentIdx > 0 && (
        <button
          onClick={() => setTocOpen(true)}
          className="fixed bottom-7 right-7 z-50 w-9 h-9 flex items-center justify-center border border-white/10 text-white/25 hover:text-white/60 hover:border-white/25 transition-all"
          aria-label="Contents (T)"
        >
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
            <rect x="0" y="0" width="14" height="1.4" fill="currentColor"/>
            <rect x="0" y="4.8" width="9" height="1.4" fill="currentColor"/>
            <rect x="0" y="9.6" width="14" height="1.4" fill="currentColor"/>
          </svg>
        </button>
      )}

      <MusicPlayer />

      <TocOverlay
        laws={laws}
        isOpen={tocOpen}
        onClose={() => setTocOpen(false)}
        onSelectLaw={(id) => {
          setTocOpen(false);
          // find the spread for this law
          const targetId = id === 1 ? "law01-s1" : `law-${id}`;
          const idx = spreads.findIndex(s => s.id === targetId);
          if (idx !== -1) flipTo(idx);
        }}
      />
    </div>
  );
}

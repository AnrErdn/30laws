"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import type { Law } from "@/types/law";
import { useFlipSound } from "@/hooks/useFlipSound";
import { useClickSound } from "@/hooks/useClickSound";
import SpreadLayout from "./book/SpreadLayout";
import FlippingPage from "./book/FlippingPage";
import TocOverlay from "./TocOverlay";
import MusicPlayer from "./MusicPlayer";
import LoadingScreen from "./LoadingScreen";

// Spread content components
import CoverSpread from "./spreads/CoverSpread";
import BackCoverSpread from "./spreads/BackCoverSpread";
import TocSpread from "./spreads/TocSpread";
import Law01Spread1 from "./spreads/law01/Spread1";
import Law01Spread2 from "./spreads/law01/Spread2";
import Law01Spread3 from "./spreads/law01/Spread3";
import Law01Spread4 from "./spreads/law01/Spread4";
import Law02Spread1 from "./spreads/law02/Spread1";
import Law02Spread2 from "./spreads/law02/Spread2";
import Law02Spread3 from "./spreads/law02/Spread3";
import Law02Spread4 from "./spreads/law02/Spread4";
import Law03Spread1 from "./spreads/law03/Spread1";
import Law03Spread2 from "./spreads/law03/Spread2";
import Law03Spread3 from "./spreads/law03/Spread3";
import Law03Spread4 from "./spreads/law03/Spread4";
import Law04Spread1 from "./spreads/law04/Spread1";
import Law04Spread2 from "./spreads/law04/Spread2";
import Law04Spread3 from "./spreads/law04/Spread3";
import Law04Spread4 from "./spreads/law04/Spread4";
import Law05Spread1 from "./spreads/law05/Spread1";
import Law05Spread2 from "./spreads/law05/Spread2";
import Law05Spread3 from "./spreads/law05/Spread3";
import Law05Spread4 from "./spreads/law05/Spread4";
import Law06Spread1 from "./spreads/law06/Spread1";
import Law06Spread2 from "./spreads/law06/Spread2";
import Law06Spread3 from "./spreads/law06/Spread3";
import Law06Spread4 from "./spreads/law06/Spread4";
import Law07Spread1 from "./spreads/law07/Spread1";
import Law07Spread2 from "./spreads/law07/Spread2";
import Law07Spread3 from "./spreads/law07/Spread3";
import Law07Spread4 from "./spreads/law07/Spread4";
import Law08Spread1 from "./spreads/law08/Spread1";
import Law08Spread2 from "./spreads/law08/Spread2";
import Law08Spread3 from "./spreads/law08/Spread3";
import Law08Spread4 from "./spreads/law08/Spread4";
import Law09Spread1 from "./spreads/law09/Spread1";
import Law09Spread2 from "./spreads/law09/Spread2";
import Law09Spread3 from "./spreads/law09/Spread3";
import Law09Spread4 from "./spreads/law09/Spread4";
import Law10Spread1 from "./spreads/law10/Spread1";
import Law10Spread2 from "./spreads/law10/Spread2";
import Law10Spread3 from "./spreads/law10/Spread3";
import Law10Spread4 from "./spreads/law10/Spread4";
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

  // Laws 02–10 (4 spreads each)
  const fullLawSpreads: [Law, React.ComponentType<{law: Law}>, React.ComponentType<{law: Law}>, React.ComponentType<{law: Law}>, React.ComponentType<{law: Law}>, React.ComponentType<{law: Law}>, React.ComponentType<{law: Law}>, React.ComponentType<{law: Law}>, React.ComponentType<{law: Law}>][] = [
    [laws[1], Law02Spread1.Left, Law02Spread1.Right, Law02Spread2.Left, Law02Spread2.Right, Law02Spread3.Left, Law02Spread3.Right, Law02Spread4.Left, Law02Spread4.Right],
    [laws[2], Law03Spread1.Left, Law03Spread1.Right, Law03Spread2.Left, Law03Spread2.Right, Law03Spread3.Left, Law03Spread3.Right, Law03Spread4.Left, Law03Spread4.Right],
    [laws[3], Law04Spread1.Left, Law04Spread1.Right, Law04Spread2.Left, Law04Spread2.Right, Law04Spread3.Left, Law04Spread3.Right, Law04Spread4.Left, Law04Spread4.Right],
    [laws[4], Law05Spread1.Left, Law05Spread1.Right, Law05Spread2.Left, Law05Spread2.Right, Law05Spread3.Left, Law05Spread3.Right, Law05Spread4.Left, Law05Spread4.Right],
    [laws[5], Law06Spread1.Left, Law06Spread1.Right, Law06Spread2.Left, Law06Spread2.Right, Law06Spread3.Left, Law06Spread3.Right, Law06Spread4.Left, Law06Spread4.Right],
    [laws[6], Law07Spread1.Left, Law07Spread1.Right, Law07Spread2.Left, Law07Spread2.Right, Law07Spread3.Left, Law07Spread3.Right, Law07Spread4.Left, Law07Spread4.Right],
    [laws[7], Law08Spread1.Left, Law08Spread1.Right, Law08Spread2.Left, Law08Spread2.Right, Law08Spread3.Left, Law08Spread3.Right, Law08Spread4.Left, Law08Spread4.Right],
    [laws[8], Law09Spread1.Left, Law09Spread1.Right, Law09Spread2.Left, Law09Spread2.Right, Law09Spread3.Left, Law09Spread3.Right, Law09Spread4.Left, Law09Spread4.Right],
    [laws[9], Law10Spread1.Left, Law10Spread1.Right, Law10Spread2.Left, Law10Spread2.Right, Law10Spread3.Left, Law10Spread3.Right, Law10Spread4.Left, Law10Spread4.Right],
  ];

  let pg = 9;
  fullLawSpreads.forEach(([law, L1, R1, L2, R2, L3, R3, L4, R4]) => {
    spreads.push({ id: `law0${law.id}-s1`, left: <L1 law={law} />, right: <R1 law={law} />, pageNum: pg });
    spreads.push({ id: `law0${law.id}-s2`, left: <L2 law={law} />, right: <R2 law={law} />, pageNum: pg + 2 });
    spreads.push({ id: `law0${law.id}-s3`, left: <L3 law={law} />, right: <R3 law={law} />, pageNum: pg + 4 });
    spreads.push({ id: `law0${law.id}-s4`, left: <L4 law={law} />, right: <R4 law={law} />, pageNum: pg + 6 });
    pg += 8;
  });

  // Laws 11–30 (1 spread each)
  for (let i = 10; i < laws.length; i++) {
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
  const playClick = useClickSound();

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
    <>
    <LoadingScreen />
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
          onClick={() => { playClick(); setTocOpen(true); }}
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

      {/* Cover open hint — only on cover, pulsing */}
      {currentIdx === 0 && flipState === "idle" && (
        <div
          className="fixed z-50 pointer-events-none animate-pulse"
          style={{
            bottom: "2rem",
            left: "calc(50% + 3rem)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "rgba(240,237,230,0.28)",
            fontFamily: "var(--font-dm-mono)",
            fontSize: "0.55rem",
            letterSpacing: "0.35em",
          }}
        >
          OPEN
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M0 4H8M8 4L5 1M8 4L5 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}

      {/* Page count — hidden on cover and back cover */}
      {currentIdx > 0 && currentIdx < spreads.length - 1 && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            bottom: "1.75rem",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "var(--font-dm-mono)",
            fontSize: "0.5rem",
            letterSpacing: "0.2em",
            color: "rgba(240,237,230,0.2)",
          }}
        >
          {currentIdx} / {spreads.length - 1}
        </div>
      )}

      <MusicPlayer />

      <TocOverlay
        laws={laws}
        isOpen={tocOpen}
        onClose={() => setTocOpen(false)}
        onSelectLaw={(id) => {
          setTocOpen(false);
          let targetId: string;
          if (id <= 10) {
            targetId = `law${String(id).padStart(2, "0")}-s1`;
          } else {
            targetId = `law-${id}`;
          }
          const idx = spreads.findIndex(s => s.id === targetId);
          if (idx !== -1) flipTo(idx);
        }}
      />
    </div>
    </>
  );
}

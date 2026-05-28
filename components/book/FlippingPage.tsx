"use client";
import { useEffect, useRef } from "react";
import { ReactNode } from "react";

interface FlippingPageProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  direction: "forward" | "backward";
  isFlipping: boolean;
  onComplete: () => void;
}

/*
 * Forward flip: page positioned on RIGHT, rotates -180° around left edge (spine).
 * Backward flip: page positioned on LEFT, rotates +180° around right edge (spine).
 *
 * The CSS trick:
 *   - transform-style: preserve-3d on the wrapper
 *   - front face: backface-visibility hidden
 *   - back face: rotateY(180deg) + backface-visibility hidden
 */
export default function FlippingPage({
  frontContent,
  backContent,
  direction,
  isFlipping,
  onComplete,
}: FlippingPageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || !isFlipping) return;

    // start → trigger → listen for end
    el.style.transition = "none";
    el.style.transform = "rotateY(0deg)";

    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = "transform 0.7s cubic-bezier(0.645, 0.045, 0.355, 1.000)";
        el.style.transform = direction === "forward" ? "rotateY(-180deg)" : "rotateY(180deg)";
      });
    });

    const onEnd = () => {
      onComplete();
    };
    el.addEventListener("transitionend", onEnd, { once: true });

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("transitionend", onEnd);
    };
  }, [isFlipping, direction, onComplete]);

  // Shadow overlay that darkens the page mid-flip (simulates light angle)
  return (
    <div
      ref={wrapperRef}
      className="absolute inset-0 preserve-3d no-select"
      style={{
        transformOrigin: direction === "forward" ? "left center" : "right center",
        zIndex: 20,
        transform: "rotateY(0deg)",
        willChange: "transform",
      }}
    >
      {/* Front face */}
      <div
        className="absolute inset-0 backface-hidden overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {frontContent}
        {/* Gradient that darkens as page sweeps (always darkens toward spine-side) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: direction === "forward"
              ? "linear-gradient(90deg, rgba(0,0,0,0.35) 0%, transparent 60%)"
              : "linear-gradient(270deg, rgba(0,0,0,0.35) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Back face — rotated 180° so it reads correctly */}
      <div
        className="absolute inset-0 backface-hidden overflow-hidden"
        style={{ transform: "rotateY(180deg)", zIndex: 1 }}
      >
        {backContent}
        {/* Gradient on back face — darkens the just-turned edge */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: direction === "forward"
              ? "linear-gradient(270deg, rgba(0,0,0,0.3) 0%, transparent 55%)"
              : "linear-gradient(90deg, rgba(0,0,0,0.3) 0%, transparent 55%)",
          }}
        />
      </div>
    </div>
  );
}

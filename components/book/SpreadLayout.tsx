"use client";
import { ReactNode } from "react";

interface SpreadLayoutProps {
  leftPage: ReactNode;
  rightPage: ReactNode;
  rightSlot?: ReactNode; // layered on top of right area during flip
  className?: string;
}

export default function SpreadLayout({ leftPage, rightPage, rightSlot, className = "" }: SpreadLayoutProps) {
  return (
    <div
      className={`flex relative ${className}`}
      style={{ width: "var(--book-w)", height: "var(--page-h)" }}
    >
      {/* Left page */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{ width: "var(--page-w)", height: "var(--page-h)" }}
      >
        {leftPage}
      </div>

      {/* Spine */}
      <div
        className="flex-shrink-0 relative z-10"
        style={{
          width: "var(--spine-w)",
          height: "var(--page-h)",
          background: "linear-gradient(90deg, #050504 0%, #111110 35%, #0a0a09 60%, #060605 100%)",
          boxShadow: "inset -1px 0 3px rgba(0,0,0,0.8), inset 1px 0 2px rgba(255,255,255,0.03)",
        }}
      />

      {/* Right page area */}
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{ width: "var(--page-w)", height: "var(--page-h)" }}
      >
        {/* The page that gets revealed underneath during flip */}
        {rightSlot && (
          <div className="absolute inset-0 z-0 overflow-hidden">{rightSlot}</div>
        )}
        {/* Normal right page (z-1 so flip can go over it) */}
        <div className="absolute inset-0 z-10 overflow-hidden">{rightPage}</div>
      </div>

      {/* Page-edge depth — right side */}
      <div
        className="absolute right-0 top-0 bottom-0 pointer-events-none z-20"
        style={{
          width: "6px",
          background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.35))",
        }}
      />
      {/* Page-edge depth — left side */}
      <div
        className="absolute left-0 top-0 bottom-0 pointer-events-none z-20"
        style={{
          width: "6px",
          background: "linear-gradient(270deg, transparent, rgba(0,0,0,0.25))",
        }}
      />
    </div>
  );
}

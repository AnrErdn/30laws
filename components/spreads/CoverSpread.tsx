"use client";

function Left() {
  return (
    <div className="w-full h-full" style={{ background: "#000000" }} />
  );
}

function Right() {
  return (
    <div className="relative w-full h-full texture-cover overflow-hidden">
      <div className="page-content flex flex-col justify-between p-10 h-full">
        {/* Top: subtle label */}
        <div>
          <p className="category-tag text-white/30" style={{ letterSpacing: "0.3em" }}>
            Laws of UX
          </p>
        </div>

        {/* Center: "30 LAWS" */}
        <div className="flex flex-col">
          <h1
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(4rem, 14vw, 9rem)", letterSpacing: "-0.02em" }}
          >
            30<br/>LAWS
          </h1>
          <div className="mt-4 h-px w-full bg-white/15"/>
        </div>

        {/* Bottom detail */}
        <div className="flex justify-between items-end">
          <span className="font-mono text-white/25" style={{ fontSize: "0.5rem", letterSpacing: "0.15em" }}>
            A VIRTUAL BOOK
          </span>
          <span className="font-mono text-white/25" style={{ fontSize: "0.5rem", letterSpacing: "0.15em" }}>
            MMXXV · I
          </span>
        </div>
      </div>
    </div>
  );
}

const CoverSpread = { Left, Right };
export default CoverSpread;

"use client";

function Left() {
  return (
    <div className="relative w-full h-full texture-cover overflow-hidden">
      <div className="page-content flex items-end justify-start p-8 h-full">
        {/* Decorative endpaper — subtle tonal geometric */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 440 620" fill="none" preserveAspectRatio="xMidYMid slice">
          {[60,120,180,240,300,360].map(r => (
            <circle key={r} cx="220" cy="310" r={r} stroke="white" strokeWidth="0.4"/>
          ))}
          <line x1="0" y1="310" x2="440" y2="310" stroke="white" strokeWidth="0.3"/>
          <line x1="220" y1="0" x2="220" y2="620" stroke="white" strokeWidth="0.3"/>
        </svg>
        <span className="font-mono text-white/15" style={{ fontSize: "0.5rem", letterSpacing: "0.18em" }}>
          LAWS OF UX
        </span>
      </div>
    </div>
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

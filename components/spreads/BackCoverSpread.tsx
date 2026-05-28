"use client";

function Left() {
  return (
    <div className="relative w-full h-full texture-cover overflow-hidden">
      <div className="page-content flex flex-col justify-between p-10 h-full">
        {/* Logo mark */}
        <div>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="1" y="1" width="30" height="30" stroke="rgba(240,237,230,0.4)" strokeWidth="0.8"/>
            <text x="16" y="22" textAnchor="middle" fontFamily="var(--font-bebas)" fontSize="16" fill="rgba(240,237,230,0.5)" letterSpacing="1">30L</text>
          </svg>
        </div>

        {/* Back cover text */}
        <div className="space-y-6">
          <p className="font-serif text-white/70 italic leading-relaxed" style={{ fontSize: "0.8rem", maxWidth: "240px" }}>
            &ldquo;Дизайн бол зүгээр харагдах зүйл биш —
            хүнийг мэдрүүлдэг зүйл.&rdquo;
          </p>
          <div className="h-px bg-white/10"/>
          <div className="space-y-1">
            <p className="font-sans text-white/35" style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Зохиогч
            </p>
            <p className="font-serif text-white/60" style={{ fontSize: "0.85rem" }}>
              Anar-Erdene G.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-sans text-white/35" style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Хичээл
            </p>
            <p className="font-sans text-white/50" style={{ fontSize: "0.7rem" }}>
              Design Class · 2025
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div>
          <p className="font-mono text-white/20" style={{ fontSize: "0.5rem", letterSpacing: "0.18em" }}>
            30 LAWS OF UX · FIRST EDITION · MMXXV
          </p>
        </div>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="relative w-full h-full texture-cover overflow-hidden">
      <div className="page-content flex items-end justify-end p-8 h-full">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 440 620" fill="none" preserveAspectRatio="xMidYMid slice">
          {[40,90,150,220,300].map(r => (
            <circle key={r} cx="220" cy="310" r={r} stroke="white" strokeWidth="0.5"/>
          ))}
        </svg>
        <span className="font-mono text-white/10" style={{ fontSize: "0.5rem", letterSpacing: "0.18em" }}>
          END
        </span>
      </div>
    </div>
  );
}

const BackCoverSpread = { Left, Right };
export default BackCoverSpread;

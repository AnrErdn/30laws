"use client";

export default function StripeUIDiagram({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 320 290" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Dashboard window frame */}
      <rect x="30" y="20" width="260" height="190" rx="6" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.04"/>

      {/* Title bar */}
      <rect x="30" y="20" width="260" height="22" rx="6" fill={color} fillOpacity="0.08"/>
      <rect x="30" y="33" width="260" height="9" fill={color} fillOpacity="0.08"/>

      {/* Window controls */}
      <circle cx="44" cy="31" r="3" stroke={color} strokeWidth="0.5" strokeOpacity="0.3" fill="none"/>
      <circle cx="53" cy="31" r="3" stroke={color} strokeWidth="0.5" strokeOpacity="0.3" fill="none"/>
      <circle cx="62" cy="31" r="3" stroke={color} strokeWidth="0.5" strokeOpacity="0.3" fill="none"/>

      {/* URL bar text placeholder */}
      <rect x="100" y="27" width="120" height="8" rx="2" fill={color} fillOpacity="0.08"/>

      {/* Sidebar */}
      <rect x="30" y="42" width="55" height="168" fill={color} fillOpacity="0.05"/>
      <line x1="85" y1="42" x2="85" y2="210" stroke={color} strokeWidth="0.4" strokeOpacity="0.2"/>

      {/* Sidebar nav items */}
      {[58, 72, 86, 100, 114].map((y, i) => (
        <rect key={y} x="38" y={y} width={i === 0 ? 38 : 30} height="6" rx="1"
          fill={color} fillOpacity={i === 0 ? 0.35 : 0.1}/>
      ))}

      {/* Main content area */}
      {/* Big metric card - Revenue */}
      <rect x="93" y="50" width="80" height="46" rx="3" stroke={color} strokeWidth="0.5" strokeOpacity="0.25" fill={color} fillOpacity="0.06"/>
      <rect x="100" y="57" width="30" height="5" rx="1" fill={color} fillOpacity="0.2"/>
      <text x="100" y="82" fontFamily="var(--font-bebas), sans-serif" fontSize="14" fill={color} fillOpacity="0.6" letterSpacing="0">$48,293</text>
      <rect x="100" y="88" width="20" height="3" rx="1" fill={color} fillOpacity="0.15"/>

      {/* Second metric — Volume */}
      <rect x="181" y="50" width="80" height="46" rx="3" stroke={color} strokeWidth="0.5" strokeOpacity="0.25" fill={color} fillOpacity="0.06"/>
      <rect x="188" y="57" width="26" height="5" rx="1" fill={color} fillOpacity="0.2"/>
      <text x="188" y="82" fontFamily="var(--font-bebas), sans-serif" fontSize="14" fill={color} fillOpacity="0.6" letterSpacing="0">1,284</text>
      <rect x="188" y="88" width="16" height="3" rx="1" fill={color} fillOpacity="0.15"/>

      {/* Chart area */}
      <rect x="93" y="104" width="168" height="55" rx="3" stroke={color} strokeWidth="0.4" strokeOpacity="0.2" fill={color} fillOpacity="0.03"/>
      {/* Chart line */}
      <polyline
        points="100,148 115,140 130,143 145,132 160,128 175,135 190,122 205,118 220,124 235,112 250,108"
        stroke={color} strokeWidth="1.2" strokeOpacity="0.6" fill="none" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Chart fill */}
      <polygon
        points="100,148 115,140 130,143 145,132 160,128 175,135 190,122 205,118 220,124 235,112 250,108 250,154 100,154"
        fill={color} fillOpacity="0.06"
      />
      {/* Chart grid lines */}
      {[115, 130, 145].map(x => (
        <line key={x} x1={x} y1="107" x2={x} y2="156" stroke={color} strokeWidth="0.3" strokeOpacity="0.1" strokeDasharray="2,3"/>
      ))}

      {/* Recent transactions list */}
      <rect x="93" y="167" width="168" height="7" rx="1" fill={color} fillOpacity="0.15"/>
      {[0,1,2].map(i => (
        <g key={i}>
          <circle cx="100" cy={182 + i*11} r="3" stroke={color} strokeWidth="0.5" strokeOpacity="0.3"/>
          <rect x="108" y={179 + i*11} width="60" height="4" rx="1" fill={color} fillOpacity="0.12"/>
          <rect x="230" y={179 + i*11} width="25" height="4" rx="1" fill={color} fillOpacity="0.2"/>
        </g>
      ))}

      {/* "Stripe" wordmark bottom */}
      <text x="160" y="230" textAnchor="middle" fontFamily="sans-serif" fontSize="6.5" fill={color} fillOpacity="0.3" letterSpacing="3">DASHBOARD UI</text>

      {/* Trust signal: lock icon */}
      <rect x="145" y="240" width="30" height="20" rx="3" stroke={color} strokeWidth="0.5" strokeOpacity="0.2" fill="none"/>
      <path d="M150 240 Q150 232 160 232 Q170 232 170 240" stroke={color} strokeWidth="0.5" strokeOpacity="0.3" fill="none"/>
      <circle cx="160" cy="252" r="2" fill={color} fillOpacity="0.25"/>
      <text x="160" y="272" textAnchor="middle" fontFamily="sans-serif" fontSize="5.5" fill={color} fillOpacity="0.25" letterSpacing="1">TRUSTED BY DESIGN</text>
    </svg>
  );
}

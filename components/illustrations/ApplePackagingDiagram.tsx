"use client";

export default function ApplePackagingDiagram({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Box base */}
      <rect x="60" y="160" width="200" height="90" rx="2" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.05"/>

      {/* Box lid — slightly lifted/open */}
      <path d="M60 160 L60 90 L260 90 L260 160" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.08"/>
      {/* Lid top face */}
      <rect x="60" y="82" width="200" height="12" rx="1" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.12"/>

      {/* Lid open hinge effect — shadow line */}
      <line x1="60" y1="160" x2="260" y2="160" stroke={color} strokeWidth="0.5" opacity="0.4"/>

      {/* Inside of box — clean grid */}
      <rect x="75" y="170" width="80" height="70" rx="1" stroke={color} strokeWidth="0.4" fillOpacity="0" strokeDasharray="2,3" strokeOpacity="0.35"/>
      <rect x="165" y="170" width="80" height="70" rx="1" stroke={color} strokeWidth="0.4" fillOpacity="0" strokeDasharray="2,3" strokeOpacity="0.35"/>
      {/* Cable coiled */}
      <path d="M185 195 Q195 185 205 195 Q215 205 205 215 Q195 225 185 215 Q180 208 185 200" stroke={color} strokeWidth="0.8" strokeOpacity="0.4" fill="none"/>

      {/* Phone silhouette in left compartment */}
      <rect x="95" y="178" width="40" height="54" rx="4" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.12"/>
      <rect x="103" y="184" width="24" height="42" rx="2" stroke={color} strokeWidth="0.4" strokeOpacity="0.3" fill="none"/>
      {/* Home indicator */}
      <line x1="107" y1="222" x2="121" y2="222" stroke={color} strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.5"/>

      {/* Apple logo on box exterior — understated */}
      <circle cx="160" cy="128" r="8" stroke={color} strokeWidth="0.5" strokeOpacity="0.2" fill="none"/>
      <circle cx="160" cy="128" r="2" fill={color} fillOpacity="0.15"/>

      {/* Precision lines on lid */}
      <line x1="140" y1="90" x2="140" y2="94" stroke={color} strokeWidth="0.3" strokeOpacity="0.3"/>
      <line x1="180" y1="90" x2="180" y2="94" stroke={color} strokeWidth="0.3" strokeOpacity="0.3"/>

      {/* Dimension marks */}
      <line x1="40" y1="160" x2="40" y2="250" stroke={color} strokeWidth="0.3" strokeOpacity="0.2"/>
      <line x1="37" y1="160" x2="43" y2="160" stroke={color} strokeWidth="0.3" strokeOpacity="0.2"/>
      <line x1="37" y1="250" x2="43" y2="250" stroke={color} strokeWidth="0.3" strokeOpacity="0.2"/>

      {/* Label */}
      <text x="160" y="270" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill={color} fillOpacity="0.35" letterSpacing="2">UNBOXING EXPERIENCE</text>

      {/* Corner details — precise manufacturing feel */}
      <line x1="60" y1="160" x2="60" y2="152" stroke={color} strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round"/>
      <line x1="60" y1="160" x2="68" y2="160" stroke={color} strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round"/>
      <line x1="260" y1="160" x2="260" y2="152" stroke={color} strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round"/>
      <line x1="260" y1="160" x2="252" y2="160" stroke={color} strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round"/>
    </svg>
  );
}

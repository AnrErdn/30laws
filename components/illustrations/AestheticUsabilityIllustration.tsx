"use client";

interface Props {
  accentColor: string;
}

export default function AestheticUsabilityIllustration({ accentColor }: Props) {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Left shape — rough, raw, angular */}
      <g opacity="0.7">
        {/* Jagged rectangle */}
        <polygon
          points="30,70 118,65 125,190 22,198"
          stroke={accentColor}
          strokeWidth="1.5"
          fill={accentColor}
          fillOpacity="0.06"
        />
        {/* Noise lines inside */}
        <line x1="40" y1="90" x2="112" y2="95" stroke={accentColor} strokeWidth="0.5" opacity="0.3" strokeDasharray="3,4" />
        <line x1="35" y1="110" x2="118" y2="108" stroke={accentColor} strokeWidth="0.5" opacity="0.3" strokeDasharray="2,5" />
        <line x1="38" y1="130" x2="119" y2="132" stroke={accentColor} strokeWidth="0.5" opacity="0.3" strokeDasharray="4,3" />
        <line x1="33" y1="150" x2="120" y2="153" stroke={accentColor} strokeWidth="0.5" opacity="0.3" strokeDasharray="3,6" />
        <line x1="37" y1="170" x2="122" y2="172" stroke={accentColor} strokeWidth="0.5" opacity="0.3" strokeDasharray="5,2" />
        {/* Corner marks — imprecise */}
        <line x1="30" y1="70" x2="42" y2="70" stroke={accentColor} strokeWidth="2" opacity="0.4" />
        <line x1="30" y1="70" x2="30" y2="82" stroke={accentColor} strokeWidth="2" opacity="0.4" />
        {/* Scribble circle — imperfect */}
        <path
          d="M65 128 Q75 120 85 128 Q95 136 105 128 Q100 138 90 142 Q80 146 70 140 Q60 135 65 128Z"
          stroke={accentColor}
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <text
          x="74"
          y="134"
          fontFamily="monospace"
          fontSize="8"
          fill={accentColor}
          opacity="0.4"
        >
          RAW
        </text>
      </g>

      {/* Center divider — thin, elegant */}
      <line
        x1="150"
        y1="50"
        x2="150"
        y2="250"
        stroke={accentColor}
        strokeWidth="0.5"
        opacity="0.25"
        strokeDasharray="2,4"
      />

      {/* Right shape — refined, polished, geometric */}
      <g opacity="0.9">
        {/* Perfect rectangle with rounded corners feel via precise polygon */}
        <rect
          x="168"
          y="68"
          width="104"
          height="126"
          rx="4"
          stroke={accentColor}
          strokeWidth="1"
          fill={accentColor}
          fillOpacity="0.1"
        />
        {/* Precise interior lines — even, considered */}
        <line x1="178" y1="92" x2="262" y2="92" stroke={accentColor} strokeWidth="0.5" opacity="0.4" />
        <line x1="178" y1="108" x2="240" y2="108" stroke={accentColor} strokeWidth="0.5" opacity="0.25" />
        <line x1="178" y1="124" x2="250" y2="124" stroke={accentColor} strokeWidth="0.5" opacity="0.25" />
        <line x1="178" y1="140" x2="235" y2="140" stroke={accentColor} strokeWidth="0.5" opacity="0.25" />

        {/* Refined circle — perfect */}
        <circle
          cx="220"
          cy="163"
          r="14"
          stroke={accentColor}
          strokeWidth="1"
          fill={accentColor}
          fillOpacity="0.18"
        />
        <circle
          cx="220"
          cy="163"
          r="5"
          fill={accentColor}
          opacity="0.6"
        />

        {/* Corner accent — precise */}
        <rect x="168" y="68" width="8" height="2" fill={accentColor} opacity="0.6" rx="1" />
        <rect x="168" y="68" width="2" height="8" fill={accentColor} opacity="0.6" rx="1" />
        <rect x="264" y="68" width="8" height="2" fill={accentColor} opacity="0.6" rx="1" />
        <rect x="270" y="68" width="2" height="8" fill={accentColor} opacity="0.6" rx="1" />
      </g>

      {/* Label beneath each shape */}
      <text
        x="74"
        y="218"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="7"
        fill={accentColor}
        opacity="0.35"
        letterSpacing="2"
      >
        ROUGH
      </text>
      <text
        x="220"
        y="218"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="7"
        fill={accentColor}
        opacity="0.55"
        letterSpacing="2"
      >
        REFINED
      </text>

      {/* Equals sign — both do the same thing */}
      <text
        x="150"
        y="240"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="10"
        fill={accentColor}
        opacity="0.2"
      >
        =
      </text>

      {/* Outer frame — very subtle */}
      <rect
        x="10"
        y="10"
        width="280"
        height="280"
        stroke={accentColor}
        strokeWidth="0.3"
        opacity="0.1"
        fill="none"
      />
    </svg>
  );
}

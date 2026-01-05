import React from 'react'

export default function Logo({ height = 60 }) {
  return (
    <svg
      viewBox="0 0 800 400"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#0d4f7d', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#2b8a9f', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#5fad56', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="chipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#5fad56', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#2b8a9f', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Brain outline with circuit pattern */}
      <g transform="translate(230, 50)">
        {/* Main brain shape */}
        <path
          d="M150,20 Q200,10 220,40 Q240,20 260,40 Q280,60 270,90 Q290,110 280,140 Q290,170 270,190 Q260,220 230,230 Q210,240 190,230 Q170,240 150,230 Q120,240 100,220 Q70,230 60,200 Q40,180 50,150 Q30,120 50,90 Q40,60 70,40 Q90,20 120,30 Q135,15 150,20 Z"
          fill="none"
          stroke="url(#brainGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Circuit paths in brain - left side */}
        <line x1="80" y1="80" x2="120" y2="80" stroke="url(#brainGradient)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="80" cy="80" r="6" fill="url(#brainGradient)" />
        <circle cx="120" cy="80" r="6" fill="url(#brainGradient)" />

        <line x1="70" y1="120" x2="110" y2="120" stroke="url(#brainGradient)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="70" cy="120" r="6" fill="url(#brainGradient)" />
        <circle cx="110" cy="120" r="6" fill="url(#brainGradient)" />

        <line x1="80" y1="160" x2="120" y2="160" stroke="url(#brainGradient)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="80" cy="160" r="6" fill="url(#brainGradient)" />
        <circle cx="120" cy="160" r="6" fill="url(#brainGradient)" />

        {/* Circuit paths in brain - right side */}
        <line x1="220" y1="80" x2="260" y2="80" stroke="url(#brainGradient)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="220" cy="80" r="6" fill="url(#brainGradient)" />
        <circle cx="260" cy="80" r="6" fill="url(#brainGradient)" />

        <line x1="230" y1="120" x2="270" y2="120" stroke="url(#brainGradient)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="230" cy="120" r="6" fill="url(#brainGradient)" />
        <circle cx="270" cy="120" r="6" fill="url(#brainGradient)" />

        <line x1="220" y1="160" x2="260" y2="160" stroke="url(#brainGradient)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="220" cy="160" r="6" fill="url(#brainGradient)" />
        <circle cx="260" cy="160" r="6" fill="url(#brainGradient)" />

        {/* Central chip */}
        <rect
          x="145"
          y="100"
          width="50"
          height="50"
          fill="url(#chipGradient)"
          stroke="#0d4f7d"
          strokeWidth="3"
        />

        {/* Chip connections - top */}
        <line x1="170" y1="100" x2="170" y2="80" stroke="url(#brainGradient)" strokeWidth="4" />
        <line x1="160" y1="100" x2="160" y2="70" stroke="url(#brainGradient)" strokeWidth="4" />
        <line x1="180" y1="100" x2="180" y2="70" stroke="url(#brainGradient)" strokeWidth="4" />

        {/* Chip connections - bottom */}
        <line x1="170" y1="150" x2="170" y2="170" stroke="url(#brainGradient)" strokeWidth="4" />
        <line x1="160" y1="150" x2="160" y2="180" stroke="url(#brainGradient)" strokeWidth="4" />
        <line x1="180" y1="150" x2="180" y2="180" stroke="url(#brainGradient)" strokeWidth="4" />

        {/* Chip connections - left */}
        <line x1="145" y1="125" x2="120" y2="125" stroke="url(#brainGradient)" strokeWidth="4" />

        {/* Chip connections - right */}
        <line x1="195" y1="125" x2="220" y2="125" stroke="url(#brainGradient)" strokeWidth="4" />

        {/* Brain stem */}
        <path
          d="M150,230 Q155,250 160,270 L180,270 Q185,250 190,230"
          fill="none"
          stroke="url(#brainGradient)"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

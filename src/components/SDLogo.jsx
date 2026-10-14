import React from "react";

export default function SDLogo({ size = 42, className = "" }) {
  return (
    <span className={`sd-logo-container ${className}`}>
      <svg
        className="sd-logo-svg"
        viewBox="0 0 44 44"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Subtle glassmorphic background gradient */}
          <linearGradient id="sdBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(111, 227, 201, 0.16)" />
            <stop offset="60%" stopColor="rgba(84, 119, 146, 0.10)" />
            <stop offset="100%" stopColor="rgba(18, 30, 43, 0.75)" />
          </linearGradient>

          {/* Accent border gradient */}
          <linearGradient id="sdBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6FE3C9" stopOpacity="0.85" />
            <stop offset="50%" stopColor="rgba(148, 180, 193, 0.35)" />
            <stop offset="100%" stopColor="rgba(111, 227, 201, 0.40)" />
          </linearGradient>

          {/* S letter gradient */}
          <linearGradient id="sdLetterSGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6FE3C9" />
            <stop offset="100%" stopColor="#8EEBD7" />
          </linearGradient>
        </defs>

        {/* Squircle Badge Frame */}
        <rect
          className="sd-logo-frame"
          x="1.5"
          y="1.5"
          width="41"
          height="41"
          rx="11"
          fill="url(#sdBgGrad)"
          stroke="url(#sdBorderGrad)"
          strokeWidth="1.5"
        />

        {/* Inner subtle glow line */}
        <rect
          className="sd-logo-inner-ring"
          x="3.2"
          y="3.2"
          width="37.6"
          height="37.6"
          rx="9.5"
          fill="none"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="1"
        />

        {/* Monogram Typography: 'S' in signature cyan gradient */}
        <text
          x="8.2"
          y="29.5"
          className="sd-glyph-s"
          fontFamily="'Space Grotesk', -apple-system, sans-serif"
          fontSize="22"
          fontWeight="800"
          letterSpacing="-0.04em"
          fill="url(#sdLetterSGrad)"
        >
          S
        </text>

        {/* Monogram Typography: 'D' in theme primary text color */}
        <text
          x="20.8"
          y="29.5"
          className="sd-glyph-d"
          fontFamily="'Space Grotesk', -apple-system, sans-serif"
          fontSize="22"
          fontWeight="800"
          letterSpacing="-0.04em"
        >
          D
        </text>

        {/* Visual Accent Dot */}
        <circle
          cx="36.2"
          cy="28.5"
          r="1.9"
          className="sd-glyph-dot"
          fill="#6FE3C9"
        />
      </svg>
    </span>
  );
}

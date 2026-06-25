import React from 'react';
import './BackgroundDecorations.css';

export const BackgroundDecorations = () => {
  return (
    <div className="bg-decorations-container" aria-hidden="true">
      {/* Dynamic Animated Blobs */}
      <div className="ambient-blob blob-1"></div>
      <div className="ambient-blob blob-2"></div>
      <div className="ambient-blob blob-3"></div>
      <div className="ambient-blob blob-4"></div>

      {/* Subtle Grid Dot Pattern */}
      <div className="bg-dot-pattern"></div>

      {/* Decorative Vector 1: Spiral (inspired by Svadhyaya's logo) */}
      <svg className="vector-shape shape-spiral" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M100 100c0-10-8-18-18-18s-32 14-32 32 26 46 46 46 60-38 60-60-50-74-74-74-88 62-88 88 74 102 102 102" 
          stroke="var(--color-teal)" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeOpacity="0.18"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Decorative Vector 2: Overlapping Arch Shapes */}
      <svg className="vector-shape shape-arches" viewBox="0 0 150 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 290V100C10 50 50 10 100 10s90 40 90 90v190" stroke="var(--color-orange)" strokeWidth="1.2" strokeOpacity="0.15" />
        <path d="M40 290V120C40 80 70 50 110 50s70 30 70 70v170" stroke="var(--color-yellow)" strokeWidth="1.2" strokeOpacity="0.12" />
        <path d="M70 290V140C70 110 90 90 120 90s50 20 50 50v150" stroke="var(--color-teal)" strokeWidth="1.2" strokeOpacity="0.1" />
      </svg>

      {/* Decorative Vector 3: Concentric Circles */}
      <svg className="vector-shape shape-circles" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" stroke="var(--color-blue)" strokeWidth="1" strokeOpacity="0.1" />
        <circle cx="100" cy="100" r="70" stroke="var(--color-blue)" strokeWidth="1" strokeOpacity="0.08" strokeDasharray="5 3" />
        <circle cx="100" cy="100" r="50" stroke="var(--color-blue)" strokeWidth="1" strokeOpacity="0.06" />
        <circle cx="100" cy="100" r="30" stroke="var(--color-blue)" strokeWidth="1.5" strokeOpacity="0.04" />
      </svg>

      {/* Decorative Vector 4: Organic Wave Path */}
      <svg className="vector-shape shape-waves" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M-50 100 C 50 150, 100 50, 200 100 C 300 150, 350 50, 450 100" 
          stroke="var(--color-green)" 
          strokeWidth="1.5" 
          strokeOpacity="0.12" 
          strokeLinecap="round"
        />
        <path 
          d="M-50 120 C 50 170, 100 70, 200 120 C 300 170, 350 70, 450 120" 
          stroke="var(--color-teal)" 
          strokeWidth="1.2" 
          strokeOpacity="0.08" 
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default BackgroundDecorations;

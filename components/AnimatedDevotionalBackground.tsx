/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { ThemeMode, Song } from '../types';
import { FlyingBirds } from './FlyingBirds';

interface AnimatedDevotionalBackgroundProps {
  currentSong: Song;
  mode: ThemeMode;
}

export const AnimatedDevotionalBackground: React.FC<AnimatedDevotionalBackgroundProps> = ({
  currentSong,
  mode,
}) => {
  // Determine active background image based on song and mode
  const activeBackground = mode === 'morning'
    ? (currentSong.morningBackground || currentSong.coverImage) : ( mode === 'kharna' ? (currentSong.coverImage)
    : (currentSong.eveningBackground || currentSong.coverImage));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes waterFlow {
          0% {
            transform: translateX(0) translateZ(0) scaleY(1);
          }
          50% {
            transform: translateX(-25%) translateZ(0) scaleY(1.1);
          }
          100% {
            transform: translateX(-50%) translateZ(0) scaleY(1);
          }
        }

        @keyframes sunRayPulse {
          0%, 100% {
            opacity: 0.25;
            transform: rotate(0deg) scale(1);
          }
          50% {
            opacity: 0.45;
            transform: rotate(180deg) scale(1.15);
          }
        }

        @keyframes sacredPetalFloat {
          0% {
            transform: translateY(-50px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          80% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(105vh) translateX(120px) rotate(360deg);
            opacity: 0;
          }
        }

        .water-wave-1 {
          animation: waterFlow 18s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
        }
        .water-wave-2 {
          animation: waterFlow 12s cubic-bezier(0.36, 0.45, 0.63, 0.53) -4s infinite;
        }
        .sun-ray-aura {
          animation: sunRayPulse 40s linear infinite;
        }
        .petal-particle {
          animation: sacredPetalFloat linear infinite;
        }
      `}</style>

      {/* Dynamic Per-Song & Per-Mode Wallpaper with Crossfade Animation */}
      <div
        key={`${currentSong.id}-${mode}`}
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
        style={{
          backgroundImage: `url(${activeBackground})`,
        }}
      >
        {/* Dynamic Theme Color Tint */}
        {mode === 'morning' ? (
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/35 via-stone-950/40 to-[#0c0502]/95" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c0802]/55 via-stone-950/50 to-[#080201]/95" />
        )}
      </div>

      {/* Sun / Aura Glow at the top */}
      <div 
        className={`sun-ray-aura absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none blur-3xl ${
          mode === 'morning'
            ? 'bg-gradient-to-tr from-amber-500/25 via-orange-400/20 to-yellow-300/15'
            : 'bg-gradient-to-tr from-orange-600/30 via-rose-500/20 to-amber-400/15'
        }`}
      />

      {/* Flying Birds Flock Animation Layer */}
      <FlyingBirds mode={mode} />

      {/* Gentle Floating Marigold Petals (6 animated petals) */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { id: 1, left: '10%', delay: '0s', dur: '16s', size: 14 },
          { id: 2, left: '30%', delay: '4s', dur: '22s', size: 18 },
          { id: 3, left: '55%', delay: '8s', dur: '18s', size: 12 },
          { id: 4, left: '75%', delay: '2s', dur: '24s', size: 16 },
          { id: 5, left: '90%', delay: '11s', dur: '19s', size: 13 },
        ].map((petal) => (
          <div
            key={petal.id}
            className="petal-particle absolute"
            style={{
              left: petal.left,
              top: '-40px',
              animationDelay: petal.delay,
              animationDuration: petal.dur,
            }}
          >
            <div 
              className="rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-sm opacity-80"
              style={{
                width: `${petal.size}px`,
                height: `${petal.size * 0.8}px`,
                borderRadius: '60% 40% 70% 30% / 60% 30% 70% 40%',
              }}
            />
          </div>
        ))}
      </div>

      {/* Flowing Sacred River Waves at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-44 overflow-hidden pointer-events-none opacity-40">
        <svg
          className="water-wave-1 absolute bottom-0 w-[200%] h-28 text-amber-500/30 fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" />
        </svg>
        <svg
          className="water-wave-2 absolute bottom-0 w-[200%] h-24 text-orange-600/25 fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C200,60 400,-20 600,40 C800,100 1000,20 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Shimmering River Depth Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
    </div>
  );
};

export default AnimatedDevotionalBackground;

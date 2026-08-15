/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { ThemeMode } from '../types';

interface FlyingBirdsProps {
  mode: ThemeMode;
}

export const FlyingBirds: React.FC<FlyingBirdsProps> = ({ mode }) => {
  // Pre-configured flock birds with varied sizes, speeds, delays, and flight paths
  const birdFlock = [
    { id: 1, top: '12%', size: 28, duration: 18, delay: 0, scale: 1.0, opacity: 0.85, flapSpeed: '0.7s', pathY: 15 },
    { id: 2, top: '18%', size: 22, duration: 22, delay: 2.5, scale: 0.8, opacity: 0.75, flapSpeed: '0.6s', pathY: -10 },
    { id: 3, top: '15%', size: 25, duration: 20, delay: 4, scale: 0.9, opacity: 0.8, flapSpeed: '0.65s', pathY: 20 },
    { id: 4, top: '24%', size: 18, duration: 25, delay: 7, scale: 0.65, opacity: 0.65, flapSpeed: '0.55s', pathY: -15 },
    { id: 5, top: '28%', size: 16, duration: 28, delay: 9, scale: 0.55, opacity: 0.6, flapSpeed: '0.5s', pathY: 10 },
    { id: 6, top: '8%', size: 30, duration: 16, delay: 12, scale: 1.1, opacity: 0.9, flapSpeed: '0.75s', pathY: -20 },
    { id: 7, top: '22%', size: 20, duration: 24, delay: 14, scale: 0.7, opacity: 0.7, flapSpeed: '0.6s', pathY: 18 },
    { id: 8, top: '32%', size: 15, duration: 30, delay: 17, scale: 0.5, opacity: 0.55, flapSpeed: '0.45s', pathY: -8 },
    { id: 9, top: '14%', size: 24, duration: 19, delay: 21, scale: 0.85, opacity: 0.75, flapSpeed: '0.68s', pathY: 12 },
  ];

  return (
    <div 
      className="absolute inset-0 pointer-events-none overflow-hidden z-10"
      aria-hidden="true"
    >
      <style>{`
        @keyframes flyAcross {
          0% {
            transform: translateX(-120px) translateY(0px);
          }
          50% {
            transform: translateX(50vw) translateY(var(--path-y, 15px));
          }
          100% {
            transform: translateX(calc(100vw + 120px)) translateY(-5px);
          }
        }

        @keyframes wingFlapLeft {
          0%, 100% {
            transform: rotate(0deg) scaleY(1);
          }
          50% {
            transform: rotate(-35deg) scaleY(0.4);
          }
        }

        @keyframes wingFlapRight {
          0%, 100% {
            transform: rotate(0deg) scaleY(1);
          }
          50% {
            transform: rotate(35deg) scaleY(0.4);
          }
        }

        .bird-flight {
          animation-name: flyAcross;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .wing-left {
          transform-origin: 10px 10px;
          animation: wingFlapLeft var(--flap-speed, 0.6s) ease-in-out infinite;
        }

        .wing-right {
          transform-origin: 14px 10px;
          animation: wingFlapRight var(--flap-speed, 0.6s) ease-in-out infinite;
        }
      `}</style>

      {birdFlock.map((bird) => {
        const birdColor = mode === 'morning' ? '#2e1c0c' : '#140c1d';
        return (
          <div
            key={bird.id}
            className="bird-flight absolute"
            style={{
              top: bird.top,
              left: 0,
              animationDuration: `${bird.duration}s`,
              animationDelay: `${bird.delay}s`,
              opacity: bird.opacity,
              ['--path-y' as string]: `${bird.pathY}px`,
              ['--flap-speed' as string]: bird.flapSpeed,
              transform: `scale(${bird.scale})`,
            }}
          >
            <svg
              width={bird.size}
              height={bird.size * 0.65}
              viewBox="0 0 24 16"
              fill="none"
              className="drop-shadow-sm"
            >
              {/* Left Wing */}
              <path
                className="wing-left"
                d="M12 9 C8 4, 3 3, 1 7 C4 7, 8 8, 12 10"
                fill={birdColor}
              />
              {/* Right Wing */}
              <path
                className="wing-right"
                d="M12 9 C16 4, 21 3, 23 7 C20 7, 16 8, 12 10"
                fill={birdColor}
              />
              {/* Bird Center Body */}
              <path
                d="M11 8 C11.5 7.5, 12.5 7.5, 13 8 C13.5 9, 13 11, 12 12 C11 11, 10.5 9, 11 8 Z"
                fill={birdColor}
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default FlyingBirds;

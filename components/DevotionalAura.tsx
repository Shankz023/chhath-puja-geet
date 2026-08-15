/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useRef } from 'react';
import { ThemeMode } from '../types';

interface DevotionalAuraProps {
  mode: ThemeMode;
}

export const DevotionalAura: React.FC<DevotionalAuraProps> = ({ mode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle definition: Golden Marigold Petals & Divine Sparkles
    interface Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      rot: number;
      vRot: number;
      type: 'petal' | 'sparkle' | 'diyaGlow';
      opacity: number;
      opacitySpeed: number;
    }

    const particles: Particle[] = [];
    const petalColors = mode === 'morning' 
      ? ['#fbbf24', '#f59e0b', '#fef08a', '#ea580c'] 
      : ['#ea580c', '#dc2626', '#f97316', '#fbbf24'];

    const numParticles = 40;
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 5 + 3,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        vx: (Math.random() - 0.5) * 0.8 + (mode === 'morning' ? 0.3 : -0.2),
        vy: Math.random() * 0.9 + 0.4,
        rot: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.04,
        type: Math.random() > 0.35 ? 'petal' : 'sparkle',
        opacity: Math.random() * 0.7 + 0.3,
        opacitySpeed: (Math.random() - 0.5) * 0.015,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.x < 0 ? width : p.x > width ? -width : p.vx;
        p.y += p.vy;
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        p.rot += p.vRot;
        p.opacity += p.opacitySpeed;
        if (p.opacity <= 0.2 || p.opacity >= 0.9) {
          p.opacitySpeed = -p.opacitySpeed;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'petal') {
          // Draw Marigold Flower Petal
          ctx.beginPath();
          ctx.ellipse(0, 0, p.radius, p.radius * 2, 0, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        } else {
          // Sparkle star
          ctx.beginPath();
          ctx.arc(0, 0, p.radius * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = '#fff';
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 10;
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10"
      aria-hidden="true"
    />
  );
};

export default DevotionalAura;

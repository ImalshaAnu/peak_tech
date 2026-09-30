"use client";

import React, { useEffect, useRef } from "react";

interface OrbitalRingsBackgroundProps {
  className?: string;
  dotCount?: number;
}

export function OrbitalRingsBackground({ 
  className = "",
  dotCount = 70 
}: OrbitalRingsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 170,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const colors = [
      { r: 0, g: 242, b: 254 },    // cyber cyan (#00f2fe)
      { r: 56, g: 189, b: 248 },   // sky blue (#38bdf8)
      { r: 255, g: 255, b: 255 },  // radiant white (#ffffff)
      { r: 96, g: 165, b: 250 },   // soft blue (#60a5fa)
    ];

    interface Dot {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      color: { r: number; g: number; b: number };
      pulsePhase: number;
      pulseSpeed: number;
      haloMultiplier: number;
      baseAlpha: number;
    }

    let dots: Dot[] = [];

    const initDots = () => {
      dots = [];
      // Calculate responsive count based on viewport area
      const count = Math.max(50, Math.min(100, Math.floor((width * height) / 16000)));

      for (let i = 0; i < count; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        // Vary sizes: majority small/medium stars, some prominent glowing orbs
        const isLarge = Math.random() < 0.2;
        const size = isLarge ? Math.random() * 1.6 + 2.4 : Math.random() * 1.2 + 1.1;
        const x = Math.random() * width;
        const y = Math.random() * height;

        dots.push({
          x,
          y,
          size,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          color,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.015 + Math.random() * 0.03,
          haloMultiplier: isLarge ? 4.5 : 3.2,
          baseAlpha: 0.35 + Math.random() * 0.3,
        });
      }
    };

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
      initDots();
    };

    const resizeObserver = new ResizeObserver(() => resize());
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }
    resize();

    let lastTime = performance.now();

    const animate = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.66, 2.5);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Smooth active movement
        dot.x += dot.vx * dt;
        dot.y += dot.vy * dt;

        // Wrap around boundaries seamlessly
        if (dot.x < -30) dot.x = width + 30;
        if (dot.x > width + 30) dot.x = -30;
        if (dot.y < -30) dot.y = height + 30;
        if (dot.y > height + 30) dot.y = -30;

        // Interactive mouse physics (gentle magnetic reaction)
        if (mouse.x > -500) {
          const dx = mouse.x - dot.x;
          const dy = mouse.y - dot.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius && dist > 0) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            dot.x -= Math.cos(angle) * force * 2.5;
            dot.y -= Math.sin(angle) * force * 2.5;
          }
        }

        // Active breathing pulse & twinkle
        dot.pulsePhase += dot.pulseSpeed * dt;
        const pulse = (Math.sin(dot.pulsePhase) + 1) / 2; // 0 to 1
        const currentAlpha = dot.baseAlpha + pulse * (1 - dot.baseAlpha);
        const haloRadius = dot.size * dot.haloMultiplier * (0.85 + pulse * 0.35);

        // 1. Draw glowing outer halo bloom
        const haloGrad = ctx.createRadialGradient(
          dot.x, dot.y, 0,
          dot.x, dot.y, haloRadius
        );
        haloGrad.addColorStop(0, `rgba(${dot.color.r}, ${dot.color.g}, ${dot.color.b}, ${currentAlpha * 0.65})`);
        haloGrad.addColorStop(0.35, `rgba(${dot.color.r}, ${dot.color.g}, ${dot.color.b}, ${currentAlpha * 0.2})`);
        haloGrad.addColorStop(1, `rgba(${dot.color.r}, ${dot.color.g}, ${dot.color.b}, 0)`);

        ctx.fillStyle = haloGrad;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, haloRadius, 0, Math.PI * 2);
        ctx.fill();

        // 2. Draw crisp core dot
        ctx.fillStyle = `rgba(${dot.color.r}, ${dot.color.g}, ${dot.color.b}, ${Math.min(1, currentAlpha + 0.3)})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      resizeObserver.disconnect();
    };
  }, [dotCount]);

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none ${className}`}>
      {/* 1. Deep Midnight Base with Soft Radial Blue Core Bloom */}
      <div 
        className="absolute inset-0 bg-[#030712]"
        style={{
          background: `
            radial-gradient(ellipse 95% 75% at 50% 88%, rgba(14, 116, 233, 0.28) 0%, rgba(2, 132, 199, 0.12) 35%, rgba(3, 7, 18, 0.85) 65%, #030712 100%),
            radial-gradient(circle at 50% 92%, rgba(0, 242, 254, 0.2) 0%, rgba(37, 99, 235, 0.15) 30%, transparent 70%)
          `
        }}
      />

      {/* 2. Soft Ambient Radial Light Pill */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-gradient-to-t from-blue-600/15 via-cyan-500/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* 3. Interactive Active Glowing Dots Canvas - NO LINES */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 4. Bottom Horizon Radial Light Flare */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[850px] h-[220px] bg-gradient-to-t from-cyan-400/15 via-blue-500/10 to-transparent blur-[80px] rounded-full pointer-events-none" />
    </div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { OrbitalRingsBackground } from "@/components/ui/orbital-rings-background";

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices?: () => void;
  onExploreEstimator?: () => void;
}

export default function Hero({
  onOpenConsultation,
  onExploreServices,
}: HeroProps) {
  const words = ["Peak", "Tech", "IT", "Solutions"];

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030712] text-white pt-24 sm:pt-28 pb-16">
      {/* Concentric Orbital Rings & Deep Blue Ambient Radiance Background */}
      <OrbitalRingsBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="max-w-5xl mx-auto">
          {/* Hardware-accelerated word-by-word headline reveal */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-[1.2] py-2 overflow-visible">
            {words.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.08 * wordIndex,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block whitespace-nowrap mr-[0.28em] last:mr-0 pt-[0.25em] pb-[0.1em] -mt-[0.25em] -mb-[0.1em] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300 select-none will-change-transform"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle / Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.28,
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal will-change-transform"
          >
            Empowering modern enterprises with auto-scaling cloud infrastructure, 
            zero-downtime multi-cloud migrations, and production-grade applied AI systems.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

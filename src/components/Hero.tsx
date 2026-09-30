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
  const title = "Peak Tech IT Solutions";
  const words = title.split(" ");

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030712] text-white pt-24 sm:pt-28 pb-16">
      {/* Concentric Orbital Rings & Deep Blue Ambient Radiance Background */}
      <OrbitalRingsBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Dynamic Staggered Letter Headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-[1.2] py-2 overflow-visible">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.28em] last:mr-0 py-1">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 90, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.12 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 24,
                    }}
                    className="inline-block pt-[0.25em] pb-[0.1em] -mt-[0.25em] -mb-[0.1em] text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-700 dark:from-white dark:via-slate-100 dark:to-slate-300 select-none"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Subtitle / Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-xl text-neutral-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            Empowering modern enterprises with auto-scaling Kubernetes infrastructure, 
            zero-downtime multi-cloud migrations, and production-grade applied AI systems.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

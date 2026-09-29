"use client";

import React from "react";
import { motion } from "framer-motion";
import { AetherFlowCanvas } from "@/components/ui/aether-flow-canvas";
import { Sparkles, ChevronRight } from "lucide-react";

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
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#050811] text-slate-900 dark:text-white pt-24 sm:pt-28 pb-16">
      {/* Interactive Aether Flow Straight-Line Particle Constellation Background */}
      <AetherFlowCanvas
        className="absolute inset-0 w-full h-full pointer-events-none"
        particleColor="rgba(0, 242, 254, 0.75)"
        lineColor="rgba(56, 189, 248, "
        glowColor="rgba(255, 255, 255, "
        backgroundColor="transparent"
      />

      {/* Cyber ambient glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Innovation Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-medium tracking-wide mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,242,254,0.15)]"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>Next-Gen Enterprise Cloud & AI Architectures</span>
          <ChevronRight className="w-3.5 h-3.5 text-cyan-400/70" />
        </motion.div>

        {/* Dynamic Staggered Letter Headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[1.08]">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-3 sm:mr-5 last:mr-0">
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
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-600 dark:from-white dark:via-slate-100 dark:to-slate-300"
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

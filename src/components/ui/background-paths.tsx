"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 28 }, (_, i) => {
        // Straight diagonal lines spanning across the viewBox
        const startX = position > 0 ? -150 + i * 45 : 850 - i * 45;
        const startY = -60;
        const endX = position > 0 ? startX + 900 : startX - 900;
        const endY = 400;

        return {
            id: i,
            d: `M ${startX} ${startY} L ${endX} ${endY}`,
            width: 0.8 + (i % 3) * 0.4,
            duration: 6 + (i % 5) * 1.5,
            delay: (i % 7) * 0.4,
        };
    });

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-cyan-500/30 dark:text-cyan-400/40"
                viewBox="0 0 700 320"
                preserveAspectRatio="none"
                fill="none"
            >
                <title>Background Straight Paths</title>
                {paths.map((path) => (
                    <React.Fragment key={path.id}>
                        {/* Static subtle guide track */}
                        <path
                            d={path.d}
                            stroke="currentColor"
                            strokeWidth={path.width * 0.6}
                            strokeOpacity={0.08}
                        />
                        {/* Animated straight glowing beam flowing continuously */}
                        <motion.path
                            d={path.d}
                            d-straight="true"
                            d-offset="continuous"
                            d-name={`path-${path.id}`}
                            d-len={0.2}
                            stroke="currentColor"
                            strokeWidth={path.width}
                            initial={{ pathLength: 0.2, pathOffset: 0, opacity: 0.15 }}
                            animate={{
                                pathOffset: [0, 1],
                                opacity: [0.2, 0.7, 0.2],
                            }}
                            transition={{
                                duration: path.duration,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                                delay: path.delay,
                            }}
                        />
                    </React.Fragment>
                ))}
            </svg>
        </div>
    );
}

export interface BackgroundPathsProps {
    title?: string;
    subtitle?: string;
    ctaText?: string;
    onCtaClick?: () => void;
    children?: React.ReactNode;
    className?: string;
}

export function BackgroundPaths({
    title = "Background Paths",
    subtitle,
    ctaText = "Discover Excellence",
    onCtaClick,
    children,
    className = "",
}: BackgroundPathsProps) {
    const words = title.split(" ");

    return (
        <div className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950 ${className}`}>
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                                        dark:from-white dark:to-white/80"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {children ? (
                        children
                    ) : (
                        <div
                            className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                            dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                            overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Button
                                variant="ghost"
                                onClick={onCtaClick}
                                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                                bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                                text-black dark:text-white transition-all duration-300 
                                group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                                hover:shadow-md dark:hover:shadow-neutral-800/50"
                            >
                                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                    {ctaText}
                                </span>
                                <span
                                    className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                    transition-all duration-300"
                                >
                                    →
                                </span>
                            </Button>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

// A utility function for class names
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

export interface AetherFlowHeroProps {
    title?: string;
    subtitle?: string;
    badgeText?: string;
    ctaText?: string;
    onCtaClick?: () => void;
    children?: React.ReactNode;
    className?: string;
    particleColor?: string;
    lineColor?: string;
    backgroundColor?: string;
}

// The main hero component
export const AetherFlowHero = ({
    title = "Aether Flow",
    subtitle = "An intelligent, adaptive framework for creating fluid digital experiences that feel alive and respond to user interaction in real-time.",
    badgeText = "Dynamic Rendering Engine",
    ctaText = "Explore the Engine",
    onCtaClick,
    children,
    className = "",
    particleColor = "rgba(191, 128, 255, 0.8)",
    lineColor = "rgba(200, 150, 255, ",
    backgroundColor = "black",
}: AetherFlowHeroProps) => {
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const mouse: { x: number | null; y: number | null; radius: number } = { x: null, y: null, radius: 200 };

        // Moved Particle class definition here to avoid initialization errors
        class Particle {
            x: number;
            y: number;
            directionX: number;
            directionY: number;
            size: number;
            color: string;

            constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (!canvas) return;
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // Mouse collision detection
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius + this.size && distance > 0) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        this.x -= forceDirectionX * force * 5;
                        this.y -= forceDirectionY * force * 5;
                    }
                }

                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        function init() {
            if (!canvas) return;
            particles = [];
            const numberOfParticles = Math.floor((canvas.height * canvas.width) / 9000);
            for (let i = 0; i < numberOfParticles; i++) {
                const size = (Math.random() * 2) + 1;
                const x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
                const y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
                const directionX = (Math.random() * 0.4) - 0.2;
                const directionY = (Math.random() * 0.4) - 0.2;
                particles.push(new Particle(x, y, directionX, directionY, size, particleColor));
            }
        }

        const resizeCanvas = () => {
            if (!canvas) return;
            const parent = canvas.parentElement;
            canvas.width = parent ? parent.clientWidth : window.innerWidth;
            canvas.height = parent ? parent.clientHeight : window.innerHeight;
            init(); 
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const connect = () => {
            if (!ctx || !canvas) return;
            const maxDistance = ((canvas.width / 7) * (canvas.height / 7));
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = (dx * dx) + (dy * dy);
                    
                    if (distance < maxDistance && distance < 20000) {
                        const opacityValue = Math.max(0, 1 - (distance / 20000));
                        
                        let isNearMouse = false;
                        if (mouse.x !== null && mouse.y !== null) {
                            const dx_mouse_a = particles[a].x - mouse.x;
                            const dy_mouse_a = particles[a].y - mouse.y;
                            const distance_mouse_a = Math.sqrt(dx_mouse_a * dx_mouse_a + dy_mouse_a * dy_mouse_a);
                            if (distance_mouse_a < mouse.radius) {
                                isNearMouse = true;
                            }
                        }

                        if (isNearMouse) {
                            ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
                        } else {
                            ctx.strokeStyle = `${lineColor}${opacityValue})`;
                        }
                        
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            if (!ctx || !canvas) return;
            
            if (backgroundColor === 'transparent') {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            } else {
                ctx.fillStyle = backgroundColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            connect();
        };
        
        const handleMouseMove = (event: MouseEvent) => {
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };
        
        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, [particleColor, lineColor, backgroundColor]);

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2 + 0.5,
                duration: 0.8,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <div className={cn("relative h-screen w-full flex flex-col items-center justify-center overflow-hidden", className)}>
            {/* The canvas is now the primary background */}
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none"></canvas>
            
            {/* Overlay HTML Content */}
            <div className="relative z-10 text-center p-6 max-w-4xl mx-auto">
                {children ? (
                    children
                ) : (
                    <>
                        <motion.div
                            custom={0}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm"
                        >
                            <Zap className="h-4 w-4 text-purple-400" />
                            <span className="text-sm font-medium text-gray-200">
                                {badgeText}
                            </span>
                        </motion.div>

                        <motion.h1
                            custom={1}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            custom={2}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="max-w-2xl mx-auto text-lg text-gray-400 mb-10"
                        >
                            {subtitle}
                        </motion.p>

                        <motion.div
                            custom={3}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <button 
                                onClick={onCtaClick}
                                className="px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2 mx-auto"
                            >
                                {ctaText}
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </motion.div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AetherFlowHero;

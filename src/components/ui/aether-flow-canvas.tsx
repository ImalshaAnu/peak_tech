"use client";

import React, { useEffect, useRef } from 'react';

export interface AetherFlowCanvasProps {
    className?: string;
    particleColor?: string;
    lineColor?: string;
    glowColor?: string;
    backgroundColor?: string;
    speed?: number;
    densityDivider?: number;
}

export const AetherFlowCanvas: React.FC<AetherFlowCanvasProps> = ({
    className = "absolute inset-0 w-full h-full pointer-events-none",
    particleColor = "rgba(0, 242, 254, 0.75)", // Cyber cyan default
    lineColor = "rgba(59, 130, 246, ", // Electric blue default
    glowColor = "rgba(255, 255, 255, ",
    backgroundColor = "transparent",
    speed = 0.4,
    densityDivider = 9500,
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        const mouse: { x: number | null; y: number | null; radius: number } = {
            x: null,
            y: null,
            radius: 180,
        };

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

            update(width: number, height: number) {
                if (this.x > width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // Mouse collision detection and smooth repulsion
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius + this.size && distance > 0) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        this.x -= forceDirectionX * force * 4;
                        this.y -= forceDirectionY * force * 4;
                    }
                }

                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        let particles: Particle[] = [];

        const init = () => {
            if (!canvas) return;
            particles = [];
            const numberOfParticles = Math.floor((canvas.height * canvas.width) / densityDivider);
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 2 + 1.2;
                const x = Math.random() * (canvas.width - size * 4) + size * 2;
                const y = Math.random() * (canvas.height - size * 4) + size * 2;
                const directionX = (Math.random() * speed * 2) - speed;
                const directionY = (Math.random() * speed * 2) - speed;
                particles.push(new Particle(x, y, directionX, directionY, size, particleColor));
            }
        };

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
            const maxDistance = 21000;
            const len = particles.length;

            for (let a = 0; a < len; a++) {
                const pA = particles[a];
                for (let b = a + 1; b < len; b++) {
                    const pB = particles[b];
                    const dx = pA.x - pB.x;
                    const dy = pA.y - pB.y;
                    const distance = dx * dx + dy * dy;

                    if (distance < maxDistance) {
                        const opacityValue = Math.max(0, 1 - distance / maxDistance);

                        let isNearMouse = false;
                        if (mouse.x !== null && mouse.y !== null) {
                            const dxMouse = pA.x - mouse.x;
                            const dyMouse = pA.y - mouse.y;
                            if (dxMouse * dxMouse + dyMouse * dyMouse < mouse.radius * mouse.radius) {
                                isNearMouse = true;
                            }
                        }

                        if (isNearMouse) {
                            ctx.strokeStyle = `${glowColor}${opacityValue * 0.9})`;
                            ctx.lineWidth = 1.2;
                        } else {
                            ctx.strokeStyle = `${lineColor}${opacityValue * 0.45})`;
                            ctx.lineWidth = 0.8;
                        }

                        // Straight connected lines
                        ctx.beginPath();
                        ctx.moveTo(pA.x, pA.y);
                        ctx.lineTo(pB.x, pB.y);
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

            const width = canvas.width;
            const height = canvas.height;
            for (let i = 0; i < particles.length; i++) {
                particles[i].update(width, height);
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

        // Attach mouse events to window so user can interact across the section
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseleave', handleMouseOut, { passive: true });

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, [particleColor, lineColor, glowColor, backgroundColor, speed, densityDivider]);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            aria-hidden="true"
        />
    );
};

export default AetherFlowCanvas;

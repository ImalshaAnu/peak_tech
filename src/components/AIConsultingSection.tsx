"use client";

import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AIConsultingSectionProps {
  onOpenConsultation: () => void;
  onViewAllServices?: () => void;
}

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  iconType: 'ai-offerings' | 'process-automation' | 'secure-ai' | 'neural-systems' | 'data-analytics';
}

export default function AIConsultingSection({ onOpenConsultation, onViewAllServices }: AIConsultingSectionProps) {
  // By default, the featured card is "ai-offerings"
  const [activeCardId, setActiveCardId] = useState<string>('ai-offerings');

  const cards: ServiceCardData[] = [
    {
      id: 'process-automation',
      title: 'Business Process Automation',
      description: 'Credibly innovate granular internal or organic sources whereas high standards in web-readiness.',
      iconType: 'process-automation'
    },
    {
      id: 'ai-offerings',
      title: 'AI-Consulting offerings',
      description: 'Credibly innovate granular internal or organic sources whereas high standards in web-readiness.',
      iconType: 'ai-offerings'
    },
    {
      id: 'secure-ai',
      title: 'Secure AI Implementation strategies',
      description: 'Enterprise zero-trust guardrails, data governance, and regulatory compliance protocols.',
      iconType: 'secure-ai'
    },
    {
      id: 'neural-systems',
      title: 'AI Systems & Neural Integration',
      description: 'Custom fine-tuned LLMs, retrieval-augmented generation (RAG), and autonomous enterprise agents.',
      iconType: 'neural-systems'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & Predictive Modeling',
      description: 'High-throughput data pipelines, real-time analytics streaming, and decision intelligence.',
      iconType: 'data-analytics'
    }
  ];

  // Custom SVG Outline Icons matching brand dark styling
  const renderIcon = (type: ServiceCardData['iconType'], isActive: boolean) => {
    const strokeColor = isActive ? '#FFFFFF' : '#1B2231';

    switch (type) {
      case 'ai-offerings':
        // Speech Bubble with AI Microchip & Pins
        return (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 8H34C36.2091 8 38 9.79086 38 12V28C38 30.2091 36.2091 32 34 32H20L12 38V32H10C7.79086 32 6 30.2091 6 28V12C6 9.79086 7.79086 8 10 8Z"
              stroke={strokeColor}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="16"
              y="15"
              width="12"
              height="10"
              rx="2"
              stroke={strokeColor}
              strokeWidth="2"
            />
            <line x1="20" y1="12" x2="20" y2="15" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <line x1="24" y1="12" x2="24" y2="15" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="25" x2="20" y2="28" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <line x1="24" y1="25" x2="24" y2="28" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <circle cx="22" cy="20" r="1.5" fill={strokeColor} />
          </svg>
        );

      case 'process-automation':
        // Desktop Monitor with Automation Gear / Cog
        return (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="6"
              y="8"
              width="24"
              height="18"
              rx="2.5"
              stroke={strokeColor}
              strokeWidth="2.2"
            />
            <line x1="10" y1="13" x2="16" y2="13" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="17" x2="22" y2="17" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M14 26V31H22V26" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="10" y1="31" x2="26" y2="31" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <g transform="translate(26, 18)">
              <circle cx="9" cy="9" r="4.5" stroke={strokeColor} strokeWidth="2" />
              <circle cx="9" cy="9" r="1.5" fill={strokeColor} />
              <path
                d="M9 1V3.5M9 14.5V17M1 9H3.5M14.5 9H17M3.5 3.5L5.2 5.2M12.8 12.8L14.5 14.5M3.5 14.5L5.2 12.8M12.8 5.2L14.5 3.5"
                stroke={strokeColor}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </svg>
        );

      case 'secure-ai':
        // Microchip with Shield & Lock
        return (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="11"
              y="11"
              width="26"
              height="26"
              rx="4"
              stroke={strokeColor}
              strokeWidth="2.2"
            />
            <line x1="18" y1="7" x2="18" y2="11" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="24" y1="7" x2="24" y2="11" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="30" y1="7" x2="30" y2="11" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="18" y1="37" x2="18" y2="41" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="24" y1="37" x2="24" y2="41" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="30" y1="37" x2="30" y2="41" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="7" y1="18" x2="11" y2="18" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="7" y1="24" x2="11" y2="24" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="7" y1="30" x2="11" y2="30" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="37" y1="18" x2="41" y2="18" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="37" y1="24" x2="41" y2="24" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="37" y1="30" x2="41" y2="30" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <path
              d="M24 18V22M20 22H28V30C28 30 25.5 32 24 32C22.5 32 20 30 20 30V22Z"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      case 'neural-systems':
        // Hexagonal Neural Network Brain
        return (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 8L37 15.5V30.5L24 38L11 30.5V15.5L24 8Z"
              stroke={strokeColor}
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="18" r="2.5" fill={strokeColor} />
            <circle cx="18" cy="28" r="2.5" fill={strokeColor} />
            <circle cx="30" cy="28" r="2.5" fill={strokeColor} />
            <circle cx="24" cy="30" r="1.5" fill={strokeColor} />
            <line x1="24" y1="18" x2="18" y2="28" stroke={strokeColor} strokeWidth="1.8" />
            <line x1="24" y1="18" x2="30" y2="28" stroke={strokeColor} strokeWidth="1.8" />
            <line x1="18" y1="28" x2="30" y2="28" stroke={strokeColor} strokeWidth="1.8" />
            <line x1="24" y1="18" x2="24" y2="8" stroke={strokeColor} strokeWidth="1.8" strokeDasharray="2 2" />
          </svg>
        );

      case 'data-analytics':
        // Multi-level Chart with Predictive Trend Node
        return (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="12" r="3" stroke={strokeColor} strokeWidth="2.2" />
            <circle cx="14" cy="16" r="2.5" fill={strokeColor} />
            <circle cx="34" cy="16" r="2.5" fill={strokeColor} />
            <circle cx="18" cy="24" r="2.5" fill={strokeColor} />
            <circle cx="30" cy="24" r="2.5" fill={strokeColor} />
            <path
              d="M24 32.5V26M24 26L18 24M24 26L30 24M18 24L14 17.5M24 26V14.5M30 24L34 17.5"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      default:
        return null;
    }
  };

  // Helper function to render each organic leaf card
  const renderCard = (cardId: string) => {
    const card = cards.find(c => c.id === cardId);
    if (!card) return null;
    const isActive = activeCardId === card.id;

    return (
      <div
        key={card.id}
        onClick={() => setActiveCardId(card.id)}
        className={`cursor-pointer transition-all duration-300 p-8 flex flex-col group relative overflow-hidden shadow-sm hover:shadow-md ${
          isActive
            ? 'bg-[#1B2231] text-white'
            : 'bg-white text-slate-900'
        }`}
        style={{
          borderRadius: '40px 40px 40px 0'
        }}
      >
        {/* Icon */}
        <div className="mb-6 relative z-10">
          {renderIcon(card.iconType, isActive)}
        </div>

        {/* Title & Description */}
        <div className="space-y-3 relative z-10">
          <h3 className={`text-xl font-bold tracking-tight ${isActive ? 'text-white' : 'text-slate-900'}`}>
            {card.title}
          </h3>
          <p className={`text-sm leading-relaxed ${isActive ? 'text-white/90' : 'text-slate-500'}`}>
            {card.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-white overflow-hidden border-b border-slate-200">

      {/* Subtle Dotted Matrix Watermark Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="ai-grid-pattern" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#64748b" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ai-grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ========================================================
              LEFT COLUMN: Main Headline, Cyan Bar & Action CTA
              ======================================================== */}
          <div className="lg:col-span-5 space-y-6 pt-2 lg:sticky lg:top-32">

            {/* Heading matching screenshot */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-[#1a2b49] tracking-tight leading-[1.2]">
                We Provide Best <br />
                AI Consulting
              </h2>
              {/* Signature Dark Underline Bar */}
              <div className="w-24 h-1.5 bg-[#1B2231] mt-6" />
            </div>

            {/* Subtitle / value proposition */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md pt-2">
              Transforming legacy infrastructure into high-efficiency intelligence engines. We build, deploy, and scale custom AI architectures engineered for maximum business ROI.
            </p>

            {/* Action Button: VIEW ALL SERVICES */}
            <div className="pt-4">
              <button
                onClick={() => {
                  if (onViewAllServices) {
                    onViewAllServices();
                  } else {
                    onOpenConsultation();
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#1B2231] hover:bg-[#283248] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300"
              >
                <span>VIEW ALL SERVICES</span>
              </button>
            </div>

            {/* Quick Stats or Trust indicators */}
            <div className="pt-8 border-t border-slate-200 flex items-center gap-8">
              <div>
                <div className="text-2xl font-black text-slate-900">99.4%</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Model Accuracy</div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <div className="text-2xl font-black text-slate-900">4.8x</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">ROI Multiplier</div>
              </div>
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: Signature Organic Leaf/Petal Cards Layout
              ======================================================== */}
          <div className="lg:col-span-7">

            {/* 2-Column Staggered Grid matching screenshot arrangement */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 items-start">

              {/* Column 1 (Left Cards: Offset for dynamic staggered feel) */}
              <div className="space-y-6 sm:space-y-7 sm:pt-10">
                {renderCard('ai-offerings')}
                {renderCard('secure-ai')}
              </div>

              {/* Column 2 (Right Cards: Top Aligned) */}
              <div className="space-y-6 sm:space-y-7">
                {renderCard('process-automation')}
                {renderCard('neural-systems')}
                {renderCard('data-analytics')}
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

"use client";

import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AIConsultingSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
  onViewAllServices?: () => void;
}

interface ServiceCardData {
  id: string;
  code: string;
  title: string;
  tagline?: string;
  description: string;
  iconType: 
    | 'ux-research'
    | 'ui-ux-design'
    | 'product-development'
    | 'branding-growth'
    | 'strategic-seo'
    | 'social-media-marketing'
    | 'speed-optimization'
    | 'maintenance-support';
}

export default function AIConsultingSection({ onOpenConsultation, onViewAllServices }: AIConsultingSectionProps) {
  // By default, the featured active card is "ux-research" (SERVICE / 01)
  const [activeCardId, setActiveCardId] = useState<string>('ux-research');

  const cards: ServiceCardData[] = [
    {
      id: 'ux-research',
      code: 'SERVICE / 01',
      title: 'UX Research',
      description: 'We dive into the neural pathways of your users, mapping friction points and emotional triggers to construct experiences that feel inevitable.',
      iconType: 'ux-research'
    },
    {
      id: 'ui-ux-design',
      code: 'SERVICE / 02',
      title: 'UI/UX Design',
      description: 'Crafting interfaces that transcend utility. We fuse brutalist architecture with fluid motion, establishing digital environments that command attention.',
      iconType: 'ui-ux-design'
    },
    {
      id: 'product-development',
      code: 'SERVICE / 03',
      title: 'Product Development',
      description: 'Engineering at the edge of possibility. Our architectures are scalable, secure, and blazingly fast, turning visionary concepts into tangible realities.',
      iconType: 'product-development'
    },
    {
      id: 'branding-growth',
      code: 'SERVICE / 04',
      title: 'Branding & Growth',
      description: 'We don\'t just launch products; we engineer cultural resonance. Data-driven growth frameworks designed to dominate market share.',
      iconType: 'branding-growth'
    },
    {
      id: 'strategic-seo',
      code: 'SVC-05',
      title: 'Strategic SEO Optimization',
      tagline: '"Get noticed where it matters most."',
      description: 'Don\'t just exist online—dominate. We optimize your website\'s architecture and content to push you straight to the top of Google search results, driving organic, high-converting traffic to your business.',
      iconType: 'strategic-seo'
    },
    {
      id: 'social-media-marketing',
      code: 'SVC-06',
      title: 'Social Media Marketing',
      tagline: '“Bridge the gap between your social media and your website.”',
      description: 'We connect your website to your social platforms to supercharge your marketing campaigns and keep your brand fresh with pixel setup and content creation.',
      iconType: 'social-media-marketing'
    },
    {
      id: 'speed-optimization',
      code: 'SVC-07',
      title: 'Speed Optimization',
      tagline: '“Blazing fast loading speeds for impatient clicks.”',
      description: 'Every second your website hesitates, you lose money. We optimize your code to ensure your site loads in under 2 seconds by stripping away heavy bloatware.',
      iconType: 'speed-optimization'
    },
    {
      id: 'maintenance-support',
      code: 'SVC-08',
      title: 'Maintenance & Support',
      tagline: '“Keep your platform running smoothly.”',
      description: 'We handle platform and plugin updates, perform routine security checks year-round, and ensure your data is safe with automated monthly backups.',
      iconType: 'maintenance-support'
    }
  ];

  // Custom SVG Outline Icons matching brand styling & screenshot aesthetic
  const renderIcon = (type: ServiceCardData['iconType'], isActive: boolean) => {
    const strokeColor = isActive ? '#FFFFFF' : '#1B2231';

    switch (type) {
      case 'ux-research':
        // User Silhouette with Scanning Reticle & Neural Nodes
        return (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="16" r="6" stroke={strokeColor} strokeWidth="2.2" />
            <path d="M12 36C12 30.4772 17.3726 26 24 26C30.6274 26 36 30.4772 36 36" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <path d="M6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24" stroke={strokeColor} strokeWidth="1.8" strokeDasharray="3 3" />
            <circle cx="10" cy="14" r="2" fill={strokeColor} />
            <circle cx="38" cy="14" r="2" fill={strokeColor} />
            <line x1="12" y1="15" x2="19" y2="18" stroke={strokeColor} strokeWidth="1.8" />
            <line x1="36" y1="15" x2="29" y2="18" stroke={strokeColor} strokeWidth="1.8" />
          </svg>
        );

      case 'ui-ux-design':
        // Brutalist Window Frame with Fluid Bezier Curves
        return (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="7" y="8" width="34" height="24" rx="3" stroke={strokeColor} strokeWidth="2.2" />
            <line x1="7" y1="15" x2="41" y2="15" stroke={strokeColor} strokeWidth="2" />
            <circle cx="12" cy="11.5" r="1.5" fill={strokeColor} />
            <circle cx="17" cy="11.5" r="1.5" fill={strokeColor} />
            <path d="M13 26C18 20 23 30 28 23C32 17 35 24 35 24" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="22" y="27" width="3" height="3" fill={strokeColor} />
            <rect x="27" y="21.5" width="3" height="3" fill={strokeColor} />
            <line x1="16" y1="36" x2="32" y2="36" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="24" y1="32" x2="24" y2="36" stroke={strokeColor} strokeWidth="2.2" />
          </svg>
        );

      case 'product-development':
        // Modular Core with Code Engine & Speed Architecture
        return (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16L6 24L12 32" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M36 16L42 24L36 32" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="16" y="16" width="16" height="16" rx="2" stroke={strokeColor} strokeWidth="2.2" />
            <circle cx="24" cy="24" r="3" fill={strokeColor} />
            <line x1="21" y1="11" x2="21" y2="16" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <line x1="27" y1="11" x2="27" y2="16" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <line x1="21" y1="32" x2="21" y2="37" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <line x1="27" y1="32" x2="27" y2="37" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );

      case 'branding-growth':
        // Growth Trajectory with Cultural Resonance Spark
        return (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6L27 15L36 18L27 21L24 30L21 21L12 18L21 15L24 6Z" stroke={strokeColor} strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M8 40L18 30L26 34L38 22" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32 22H38V28" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      case 'strategic-seo':
        // Search Magnifier with Ranking Upward Trajectory
        return (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="21" cy="21" r="12" stroke={strokeColor} strokeWidth="2.2" />
            <line x1="30" y1="30" x2="41" y2="41" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="16" y1="24" x2="16" y2="21" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="20" y1="24" x2="20" y2="17" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="24" y1="24" x2="24" y2="13" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <path d="M22 13L24 11L26 13" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      case 'social-media-marketing':
        // Social Network Mesh bridging to Website Hub
        return (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="14" r="4" stroke={strokeColor} strokeWidth="2.2" />
            <circle cx="12" cy="34" r="4" stroke={strokeColor} strokeWidth="2.2" />
            <circle cx="34" cy="24" r="5" stroke={strokeColor} strokeWidth="2.2" />
            <line x1="16" y1="16" x2="29" y2="22" stroke={strokeColor} strokeWidth="2" />
            <line x1="16" y1="32" x2="29" y2="26" stroke={strokeColor} strokeWidth="2" />
            <circle cx="34" cy="24" r="2" fill={strokeColor} />
            <path d="M38 17C40.5 19 42 21.5 42 24C42 26.5 40.5 29 38 31" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );

      case 'speed-optimization':
        // Speedometer Gauge with Turbo Needle & Lightning
        return (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 32C7 28 6 24 6 20C6 10.0589 14.0589 2 24 2C33.9411 2 42 10.0589 42 20C42 24 41 28 39 32" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="24" y1="7" x2="24" y2="10" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <line x1="13" y1="11" x2="15" y2="13" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <line x1="35" y1="11" x2="33" y2="13" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M25 15L17 28H23L21 38L31 25H25L27 15Z" stroke={strokeColor} strokeWidth="2.2" strokeLinejoin="round" fill={isActive ? strokeColor : 'none'} />
          </svg>
        );

      case 'maintenance-support':
        // Continuous Security Shield with Backup Cycle
        return (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6L38 12V23C38 31.5 32 38.5 24 42C16 38.5 10 31.5 10 23V12L24 6Z" stroke={strokeColor} strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M19 22C19.5 19.5 21.5 18 24 18C27 18 29 20 29 23L29 25" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M29 26C28.5 28.5 26.5 30 24 30C21 30 19 28 19 25" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <polyline points="27,24 29,26 31,24" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="21,26 19,24 17,26" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      default:
        return null;
    }
  };

  // Helper function to render each signature leaf/petal card
  const renderCard = (cardId: string) => {
    const card = cards.find(c => c.id === cardId);
    if (!card) return null;
    const isActive = activeCardId === card.id;

    return (
      <div
        key={card.id}
        onClick={() => setActiveCardId(card.id)}
        className={`cursor-pointer transition-all duration-300 p-8 flex flex-col justify-between group relative overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 ${
          isActive
            ? 'bg-[#1B2231] text-white shadow-2xl'
            : 'bg-white text-slate-900 border border-slate-200/90 hover:border-slate-300'
        }`}
        style={{
          borderRadius: '40px 40px 40px 0'
        }}
      >
        {/* Top Header Row: Icon & Service Code Badge */}
        <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
          <div className="shrink-0">
            {renderIcon(card.iconType, isActive)}
          </div>
          <span 
            className={`text-[11px] font-mono font-bold tracking-wider px-3 py-1 rounded-full transition-colors ${
              isActive 
                ? 'bg-white/10 text-cyan-300 border border-white/15' 
                : 'bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            {card.code}
          </span>
        </div>

        {/* Title, Tagline & Description */}
        <div className="space-y-3 relative z-10">
          <h3 className={`text-xl font-bold tracking-tight ${isActive ? 'text-white' : 'text-[#1a2b49]'}`}>
            {card.title}
          </h3>

          {card.tagline && (
            <p className={`text-xs font-semibold italic ${isActive ? 'text-cyan-300/95' : 'text-slate-600'}`}>
              {card.tagline}
            </p>
          )}

          <p className={`text-sm leading-relaxed ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
            {card.description}
          </p>
        </div>

        {/* Action Link at Bottom */}
        <div className="pt-6 mt-4 border-t border-dashed border-slate-200/20 relative z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenConsultation(`${card.title} (${card.code})`);
            }}
            className={`inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider transition-colors ${
              isActive 
                ? 'text-cyan-300 hover:text-white' 
                : 'text-[#1B2231] hover:text-brand-600'
            }`}
          >
            <span>Request Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
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
              LEFT COLUMN: Main Headline, Signature Bar & Action CTA
              ======================================================== */}
          <div className="lg:col-span-5 space-y-6 pt-2 lg:sticky lg:top-28">

            {/* Heading matching screenshot styling */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-[#1a2b49] tracking-tight leading-[1.2]">
                We Provide Best <br />
                Digital Services
              </h2>
              {/* Signature Dark Underline Bar */}
              <div className="w-24 h-1.5 bg-[#1B2231] mt-6" />
            </div>

            {/* Subtitle / value proposition */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md pt-2">
              Transforming visionary concepts into high-efficiency digital engines. From deep UX research and bespoke development to growth marketing and continuous maintenance.
            </p>

            {/* Action Button: VIEW ALL SERVICES */}
            <div className="pt-4">
              <button
                onClick={() => {
                  if (onViewAllServices) {
                    onViewAllServices();
                  } else {
                    onOpenConsultation('General Services Inquiry');
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#1B2231] hover:bg-[#283248] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
              >
                <span>VIEW ALL SERVICES</span>
              </button>
            </div>

            {/* Quick Stats or Trust indicators */}
            <div className="pt-8 border-t border-slate-200 flex items-center gap-8">
              <div>
                <div className="text-2xl font-black text-slate-900">&lt; 2.0s</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Speed Standard</div>
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

            {/* Mobile View: Sequential 1 through 8 in single column */}
            <div className="sm:hidden space-y-6">
              {cards.map((card) => renderCard(card.id))}
            </div>

            {/* Tablet & Desktop View: 2-Column Staggered Grid matching screenshot */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-6 sm:gap-7 items-start">

              {/* Column 1 (Odd Cards: 01, 03, 05, 07 with top offset for staggered organic feel) */}
              <div className="space-y-6 sm:space-y-7 sm:pt-10">
                {renderCard('ux-research')}
                {renderCard('product-development')}
                {renderCard('strategic-seo')}
                {renderCard('speed-optimization')}
              </div>

              {/* Column 2 (Even Cards: 02, 04, 06, 08 Top Aligned) */}
              <div className="space-y-6 sm:space-y-7">
                {renderCard('ui-ux-design')}
                {renderCard('branding-growth')}
                {renderCard('social-media-marketing')}
                {renderCard('maintenance-support')}
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

"use client";

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Award } from 'lucide-react';

interface AboutUsSectionProps {
  onOpenConsultation: () => void;
}

export default function AboutUsSection({ onOpenConsultation }: AboutUsSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-dark-900 overflow-hidden border-t border-b border-slate-800">
      {/* Subtle Dot Grid Background Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="about-dot-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#64748b" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-dot-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Custom Organic Leaf-Shaped Photo Frame
              ======================================================== */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg group">
              
              {/* Soft ambient cyan glow backdrop */}
              <div 
                className="absolute -inset-4 bg-gradient-to-tr from-[#00F2FE]/25 via-cyan-500/15 to-transparent blur-2xl -z-10 transition-opacity duration-500 group-hover:opacity-100"
                style={{ borderRadius: '150px 24px 150px 24px' }}
              />

              {/* Photo Container with Signature Asymmetric Leaf Curves */}
              <div 
                className="relative overflow-hidden shadow-2xl shadow-black/60 border-4 border-slate-800 bg-dark-950 aspect-[4/3] sm:aspect-[1.15/1] transition-transform duration-500 group-hover:scale-[1.01]"
                style={{ borderRadius: '140px 20px 140px 20px' }}
              >
                <img
                  src="/about-team-consulting.jpg"
                  alt="Peak Tech IT & AI Consultants collaborating"
                  className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 ${
                    imageLoaded ? 'opacity-100' : 'opacity-90'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    // Graceful fallback to existing about image if needed
                    (e.target as HTMLImageElement).src = '/about-tech-consultant.jpg';
                  }}
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Stat Badge (Bottom Right Accent) */}
              <div 
                className="absolute -bottom-4 -right-2 sm:-right-4 bg-dark-900/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center gap-3.5 z-20 transition-transform duration-300 hover:scale-105"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00F2FE]/15 flex items-center justify-center text-[#00F2FE]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-white leading-tight">
                    15+ Years
                  </div>
                  <div className="text-[11px] font-medium text-slate-400">
                    Enterprise Excellence
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: About Us Typography & Quote Button
              ======================================================== */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Section Heading */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-[#00F2FE] mb-3">
                <span>WHO WE ARE</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                About Us
              </h2>
              {/* Signature Cyan Underline Bar */}
              <div className="w-20 h-1.5 bg-[#00F2FE] rounded-full mt-3 mb-4 shadow-[0_0_12px_rgba(0,242,254,0.4)]" />

              <h3 className="text-xl sm:text-2xl font-bold text-[#00F2FE] leading-snug">
                Everything You Need to Know About Partnering with Peak Tech
              </h3>
            </div>

            {/* Main Descriptive Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-1">
              Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences.
            </p>

            {/* Additional Value Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#00F2FE] shrink-0" />
                <span>Next-generation cloud architecture and seamless legacy migration</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#00F2FE] shrink-0" />
                <span>Custom AI model fine-tuning and enterprise data pipelines</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#00F2FE] shrink-0" />
                <span>24/7 dedicated DevOps, reliability engineering, and monitoring</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#00F2FE] hover:bg-cyan-300 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#00F2FE]/25 hover:shadow-xl hover:shadow-[#00F2FE]/45 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

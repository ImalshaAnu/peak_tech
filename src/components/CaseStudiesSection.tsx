"use client";

import React, { useState } from 'react';
import { 
  Building2, 
  ArrowUpRight, 
  CheckCircle2, 
  Quote, 
  TrendingUp, 
  Layers, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '@/data/mockData';

interface CaseStudiesProps {
  onOpenConsultation: () => void;
}

export default function CaseStudiesSection({ onOpenConsultation }: CaseStudiesProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentCase = CASE_STUDIES[activeTab];

  return (
    <section id="case-studies" className="py-24 relative bg-dark-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-500/20 text-xs font-medium text-cyber-cyan">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>PROVEN ENTERPRISE IMPACT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Case Studies: Measurable Results in <br />
            <span className="text-gradient-brand">High-Stakes Environments</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            See how our DevSecOps, multi-cloud migration, and AI architectures deliver quantifiable ROI.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {CASE_STUDIES.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(idx)}
              className={`p-4 rounded-xl border text-left transition-all ${
                activeTab === idx
                  ? 'border-cyber-cyan bg-dark-850 shadow-glow-sm'
                  : 'border-slate-800 bg-dark-950/60 hover:border-slate-700 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyber-blue uppercase">{study.client}</span>
                <span className="text-[10px] text-slate-500 font-mono">{study.industry}</span>
              </div>
              <div className="text-sm font-semibold text-white mt-1 line-clamp-1">{study.title}</div>
            </button>
          ))}
        </div>

        {/* Active Case Study Showcase Card */}
        <div className="rounded-3xl glass-panel border border-slate-700/80 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Challenge & Solution */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-brand-600/20 text-brand-300 border border-brand-500/30 text-xs font-medium">
                  {currentCase.industry}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  Client: {currentCase.client}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {currentCase.title}
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-300">
                <div className="p-4 rounded-xl bg-dark-950/80 border border-slate-800 space-y-1">
                  <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider block">
                    The Architectural Challenge:
                  </span>
                  <p className="text-slate-300 text-sm">{currentCase.challenge}</p>
                </div>

                <div className="p-4 rounded-xl bg-dark-950/80 border border-slate-800 space-y-1">
                  <span className="text-xs font-mono text-cyber-cyan font-bold uppercase tracking-wider block">
                    Peak Tech Engineering Solution:
                  </span>
                  <p className="text-slate-300 text-sm">{currentCase.solution}</p>
                </div>
              </div>

              {/* Technologies Tag Strip */}
              <div className="flex flex-wrap gap-2 pt-2">
                {currentCase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-dark-850 border border-slate-700 text-xs font-mono text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Client Quote */}
              <div className="p-5 rounded-2xl bg-brand-950/30 border border-brand-500/20 relative mt-4">
                <Quote className="w-8 h-8 text-brand-400/30 absolute top-4 right-4" />
                <p className="italic text-slate-300 text-sm leading-relaxed relative z-10 mb-3">
                  "{currentCase.quote.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-600 to-cyber-cyan flex items-center justify-center font-bold text-white text-xs">
                    {currentCase.quote.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{currentCase.quote.author}</div>
                    <div className="text-[11px] text-slate-400">{currentCase.quote.role}</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Key Quantitative Results Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Key Quantified Outcomes
              </div>

              {currentCase.results.map((res, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-dark-950 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors"
                >
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400 block">{res.label}</span>
                    <span className="text-3xl font-extrabold font-mono text-cyber-cyan">{res.value}</span>
                    <p className="text-[11px] text-slate-500">{res.detail}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-dark-850 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={() => onOpenConsultation?.()}
                className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-cyber-blue text-white font-semibold text-sm shadow-glow-sm hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2"
              >
                <span>Read Full Technical Architecture Whitepaper</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

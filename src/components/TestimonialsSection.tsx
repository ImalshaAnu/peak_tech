"use client";

import React, { useState } from 'react';
import { 
  HelpCircle,
  Send,
  Plus,
  Minus
} from 'lucide-react';
import { FAQS } from '@/data/mockData';

export default function TestimonialsSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-dark-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Headers */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyber-cyan mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ'S</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Left Contact Panel */}
          <div className="lg:col-span-4">
            <div className="bg-[#0b0e14] rounded-[32px] p-8 sm:p-10 flex flex-col items-center text-center border border-slate-800/40 h-full justify-center shadow-lg">
              
              <div className="w-16 h-16 bg-[#1a1f2b] rounded-2xl flex items-center justify-center mb-8 border border-slate-700/30">
                <HelpCircle className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                Have Something Else in Mind?
              </h3>
              
              <p className="text-slate-400 text-sm mb-10 leading-relaxed max-w-[240px]">
                Didn't find what you're looking for?<br/> Let's connect, I'm here to help!
              </p>
              
              <button className="w-full py-4 px-6 bg-[#1a1f2b] hover:bg-[#222938] text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-3 transition-colors border border-slate-700/50">
                <Send className="w-4 h-4" />
                <span>Book a Consultation</span>
              </button>
            </div>
          </div>

          {/* Right FAQ Accordions */}
          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0b0e14] rounded-2xl border border-slate-800/40 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors hover:bg-white/[0.02]"
                  >
                    <span className="text-sm sm:text-base font-medium text-slate-200">{faq.q}</span>
                    
                    <div className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-[#1a1f2b] text-white' : 'bg-[#1a1f2b] text-slate-400'}`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 text-sm text-slate-400 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

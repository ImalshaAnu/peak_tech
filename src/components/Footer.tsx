"use client";

import React from 'react';
import { 
  Instagram, 
  Linkedin, 
  Facebook,
  MessageCircle,
  Video
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-slate-300 font-sans border-t border-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Left Column: Brand & Socials */}
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/logo-icon.svg" 
                  alt="Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo.png';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight text-white leading-none mb-1">
                  Peak Tech
                </span>
                <span className="text-[10px] uppercase tracking-widest text-cyber-cyan font-bold leading-none">
                  Solutions
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              High-performance websites and product experiences made with passion.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a href="#" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                <Video className="w-4 h-4" />
                <span>TikTok</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Middle Column: Company */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white">
              Company
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#faq" className="text-sm text-slate-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-sm text-slate-300 hover:text-white transition-colors">Contact form</a></li>
            </ul>
          </div>

          {/* Right Column: Contact & Address */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white">
                Contact
              </h4>
              <div className="space-y-3">
                <a href="mailto:info@peaktech-solutions.com" className="block text-sm text-slate-300 hover:text-white transition-colors">
                  info@peaktech-solutions.com
                </a>
                <p className="text-sm text-slate-300">
                  Phone number: 072 133 6854
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-bold text-white">
                Company address
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
                121/18, 6th Lane, Namal Uyana,<br />
                Kithulahena
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col items-center justify-center">
          <p className="text-xs text-slate-500">
            © 2026 Peak Tech Solutions. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

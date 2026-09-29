"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Teal/Cyan Accent Line */}
      <div className="w-full h-[2.5px] bg-[#008f8a] shadow-[0_0_12px_rgba(0,143,138,0.6)]" />

      {/* Main Navbar Bar */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md shadow-xl shadow-black/60 py-3 border-b border-white/[0.08]' 
            : 'bg-black/90 backdrop-blur-sm py-4 border-b border-white/[0.05]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand & Public Logo */}
            <a href="#" className="flex items-center gap-3.5 group">
              {/* Logo container with rounded cyan outline inspired by reference */}
              <div className="relative h-11 w-11 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/logo-icon.svg" 
                  alt="Peak Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo.png';
                  }}
                />
              </div>

              {/* Brand Typography matching reference screenshot */}
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1 group-hover:text-cyan-50 transition-colors">
                  PEAK<span className="text-white font-bold">TECH</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 -mt-0.5">
                  CAR SALES
                </span>
              </div>
            </a>

            {/* Center: Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[15px] font-medium text-slate-300 hover:text-white transition-colors duration-200 relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              ))}
            </nav>

            {/* Right: Book a Call Outline Pill Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={onOpenConsultation}
                className="relative px-7 py-2 rounded-full border border-[#009b96] hover:border-cyan-300 bg-transparent hover:bg-cyan-500/10 text-white font-bold text-sm tracking-wide shadow-sm hover:shadow-[0_0_20px_rgba(0,242,254,0.35)] transition-all duration-300 active:scale-95"
              >
                Book a Call
              </button>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-4 py-1.5 rounded-full border border-cyan-400 text-white text-xs font-bold hover:bg-cyan-500/10 transition-colors"
              >
                Book a Call
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-slate-800 px-6 pt-5 pb-7 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors py-2 border-b border-slate-900 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-600" />
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-full border border-cyan-400 text-white font-bold text-sm text-center shadow-[0_0_15px_rgba(0,242,254,0.25)] hover:bg-cyan-500/10 transition-all"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
}


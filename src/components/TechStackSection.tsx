"use client";

import React, { useState } from 'react';
import { 
  Box, 
  Cloud, 
  Cpu, 
  Server, 
  Code, 
  FileCode, 
  Zap, 
  Database, 
  Layers, 
  ShieldCheck, 
  Lock, 
  Activity, 
  GitPullRequest,
  CheckCircle,
  Award
} from 'lucide-react';
import { TECH_STACK } from '@/data/mockData';

export default function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'DevOps & Cloud', 'Full Stack', 'Data & AI', 'Cybersecurity', 'Observability'];

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'Box': return <Box className="w-5 h-5 text-cyber-cyan" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-brand-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Code': return <Code className="w-5 h-5 text-cyan-400" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-blue-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Database': return <Database className="w-5 h-5 text-amber-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Lock': return <Lock className="w-5 h-5 text-rose-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-purple-400" />;
      case 'GitPullRequest': return <GitPullRequest className="w-5 h-5 text-orange-400" />;
      default: return <Cpu className="w-5 h-5 text-brand-400" />;
    }
  };

  const filteredStack = selectedCategory === 'All'
    ? TECH_STACK
    : TECH_STACK.filter(item => item.category === selectedCategory);

  const certifications = [
    { title: 'AWS Advanced Tier Partner', desc: 'DevOps & Migration Competency' },
    { title: 'Microsoft Solutions Partner', desc: 'Azure Cloud Infrastructure' },
    { title: 'Google Cloud Premier', desc: 'Data Analytics & Cloud Architecture' },
    { title: 'ISO/IEC 27001 Certified', desc: 'Global InfoSec Management' },
    { title: 'SOC 2 Type II Audited', desc: 'Enterprise Security & Privacy' },
  ];

  return (
    <section id="tech-stack" className="py-24 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-500/20 text-xs font-medium text-cyber-cyan">
            <Award className="w-3.5 h-3.5" />
            <span>ENTERPRISE ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Battle-Tested Technologies & <br />
            <span className="text-gradient-brand">Cloud Partnerships</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            We build exclusively with modern, scalable, and audit-compliant technologies backed by top-tier vendor certifications.
          </p>
        </div>

        {/* Partner Badges Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-14">
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl glass-panel border border-slate-800 text-center space-y-1 hover:border-slate-700 transition-colors"
            >
              <div className="text-xs font-bold text-white font-mono">{cert.title}</div>
              <div className="text-[11px] text-slate-400">{cert.desc}</div>
            </div>
          ))}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white shadow-glow-sm'
                  : 'bg-dark-850/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredStack.map((tech, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl glass-panel glass-panel-hover border border-slate-800/80 flex flex-col items-center text-center space-y-2 group"
            >
              <div className="w-10 h-10 rounded-lg bg-dark-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                {getTechIcon(tech.icon)}
              </div>
              <div>
                <div className="text-sm font-semibold text-white group-hover:text-cyber-cyan transition-colors">
                  {tech.name}
                </div>
                <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                  {tech.level}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

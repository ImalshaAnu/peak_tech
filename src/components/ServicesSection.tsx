"use client";

import React, { useState } from 'react';
import { 
  Cloud, 
  GitBranch, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Activity, 
  ArrowRight, 
  Check, 
  ExternalLink, 
  X,
  FileText,
  Clock,
  Sparkles
} from 'lucide-react';
import { SERVICES, ServiceItem } from '@/data/mockData';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export default function ServicesSection({ onOpenConsultation }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud': return <Cloud className="w-6 h-6 text-brand-400" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6 text-cyber-cyan" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-purple-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-blue-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-yellow-400" />;
      default: return <Cloud className="w-6 h-6 text-brand-400" />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'cloud', label: 'Cloud & Migration' },
    { id: 'devops', label: 'DevOps & SRE' },
    { id: 'ai', label: 'Applied AI & Data' },
    { id: 'security', label: 'Cybersecurity' },
    { id: 'software', label: 'Custom Software' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 relative bg-dark-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-500/20 text-xs font-medium text-cyber-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENTERPRISE CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            High-Performance IT Services <br />
            <span className="text-gradient-brand">Engineered for Scale</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            From multi-cloud infrastructure orchestration to enterprise generative AI pipelines and round-the-clock SRE operations.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-10 pb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-brand-600 text-white shadow-glow-sm'
                  : 'bg-dark-850/60 text-slate-400 hover:text-white hover:bg-dark-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl glass-panel glass-panel-hover border border-slate-800 p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top card glow accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-5">
                {/* Icon & Metrics badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-dark-900 border border-slate-800 flex items-center justify-center p-2.5 group-hover:border-slate-600 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {service.metrics}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-cyber-blue font-medium mt-1">
                    {service.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features checklist */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-dark-900 border border-slate-800 text-[11px] font-mono text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 group-hover:text-cyber-cyan transition-colors"
                >
                  <span>Architecture Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-brand-600/20 hover:bg-brand-600 text-brand-300 hover:text-white transition-all border border-brand-500/30"
                >
                  Consult
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Architecture Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-dark-900 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-dark-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-dark-800 border border-slate-700 flex items-center justify-center">
                {getIcon(selectedService.icon)}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedService.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyber-cyan font-medium">
                  {selectedService.tagline}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-dark-950 border border-slate-800 text-slate-300 text-sm leading-relaxed">
              {selectedService.description}
            </div>

            {/* Deliverables Section */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyber-blue" />
                <span>Enterprise Deliverables</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-dark-850 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Included */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                Standard Technology Toolchain
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.technologies.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-brand-950/60 border border-brand-500/30 text-xs font-mono text-brand-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>Typical Implementation: 2 - 6 Weeks</span>
              </div>

              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-cyber-blue text-white font-semibold text-sm shadow-glow-sm hover:shadow-glow-cyan transition-all"
              >
                Schedule Solution Discussion
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

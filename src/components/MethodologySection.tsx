"use client";

import React from 'react';
import { 
  Search, 
  Cpu, 
  Rocket, 
  Activity, 
  ArrowRight, 
  CheckCircle,
  Shield,
  Layers
} from 'lucide-react';

export default function MethodologySection() {
  const steps = [
    {
      num: '01',
      title: 'Audit & Dependency Discovery',
      tagline: 'Deep Infrastructure Profiling',
      desc: 'We map every API dependency, database load, and security vulnerability. We deliver an Architectural Health Index and FinOps cost-leak report.',
      icon: Search,
      deliverable: 'Comprehensive Architecture Audit & Risk Matrix'
    },
    {
      num: '02',
      title: 'Codified Blueprint & IaC',
      tagline: 'Zero-Trust Multi-Cloud Architecture',
      desc: 'Everything is built as reproducible Infrastructure as Code (Terraform/OpenTofu). We model auto-scaling microservices, network isolation, and encryption keys.',
      icon: Cpu,
      deliverable: 'Modular IaC Repository & Staging Sandboxes'
    },
    {
      num: '03',
      title: 'Zero-Downtime Deployment',
      tagline: 'Canary Rollouts & Safe Cutover',
      desc: 'We execute multi-stage canary migrations with real-time automated rollbacks. Your active customers experience uninterrupted service throughout cutover.',
      icon: Rocket,
      deliverable: 'Validated Production Cluster & Automated CI/CD'
    },
    {
      num: '04',
      title: '24/7 Managed SRE & FinOps',
      tagline: 'Continuous Reliability & Cost Control',
      desc: 'Our global Site Reliability Engineering team monitors your latency and logs around the clock, guaranteeing < 15 minute MTTR and quarterly cost optimizations.',
      icon: Activity,
      deliverable: '24/7 SOC/NOC Coverage & Monthly FinOps Reviews'
    }
  ];

  return (
    <section id="methodology" className="py-24 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-500/20 text-xs font-medium text-cyber-cyan">
            <Layers className="w-3.5 h-3.5" />
            <span>HOW WE DELIVER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Battle-Tested <br />
            <span className="text-gradient-brand">Engineering Methodology</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            A disciplined, four-phase delivery framework honed across more than 500 enterprise production deployments.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel glass-panel-hover border border-slate-800 p-6 flex flex-col justify-between relative group"
              >
                {/* Step number watermark */}
                <div className="font-mono text-5xl font-black text-slate-800/40 group-hover:text-brand-500/20 transition-colors absolute top-4 right-4 pointer-events-none">
                  {step.num}
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-dark-900 border border-slate-800 flex items-center justify-center p-2.5 group-hover:border-cyber-cyan transition-colors">
                    <Icon className="w-6 h-6 text-cyber-cyan" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-cyber-blue font-medium mt-0.5">
                      {step.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5 relative z-10">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{step.deliverable}</span>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState } from 'react';
import { 
  Calculator, 
  DollarSign, 
  TrendingDown, 
  Clock, 
  ShieldCheck, 
  Cpu, 
  Cloud, 
  Sparkles, 
  Check, 
  ArrowRight,
  Zap,
  Download
} from 'lucide-react';

interface CostEstimatorProps {
  onOpenConsultationWithPlan?: (planSummary: string) => void;
}

export default function CostEstimator({ onOpenConsultationWithPlan }: CostEstimatorProps) {
  // State for user configuration
  const [scaleTier, setScaleTier] = useState<'startup' | 'growth' | 'enterprise'>('growth');
  const [cloudProvider, setCloudProvider] = useState<'aws' | 'azure' | 'gcp' | 'hybrid'>('aws');
  const [hasKubernetes, setHasKubernetes] = useState(true);
  const [hasAIIntegration, setHasAIIntegration] = useState(false);
  const [hasCompliance, setHasCompliance] = useState(true);
  const [has24x7SRE, setHas24x7SRE] = useState(true);
  const [currentMonthlySpend, setCurrentMonthlySpend] = useState<number>(35000);

  // Dynamic calculations based on industry benchmarks
  const baseSavingsPct = scaleTier === 'startup' ? 0.32 : scaleTier === 'growth' ? 0.42 : 0.48;
  const estimatedMonthlySavings = Math.round(currentMonthlySpend * baseSavingsPct);
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;

  // Implementation timeline estimation
  let estimatedWeeks = 3;
  if (scaleTier === 'growth') estimatedWeeks += 2;
  if (scaleTier === 'enterprise') estimatedWeeks += 5;
  if (hasAIIntegration) estimatedWeeks += 2;
  if (hasCompliance) estimatedWeeks += 1;

  // Recommended architecture tier
  const recommendedTier = scaleTier === 'startup' 
    ? 'Lean Cloud Foundation (Terraform + Container Apps)' 
    : scaleTier === 'growth' 
      ? 'Multi-AZ Kubernetes Mesh + CI/CD GitOps' 
      : 'Enterprise Multi-Region Zero-Trust Cloud Fabric';

  const handleConsultWithPlan = () => {
    const summary = `Cloud: ${cloudProvider.toUpperCase()}, Spend: $${currentMonthlySpend.toLocaleString()}/mo, Tier: ${scaleTier}, K8s: ${hasKubernetes ? 'Yes' : 'No'}, AI: ${hasAIIntegration ? 'Yes' : 'No'}, SRE: ${has24x7SRE ? 'Yes' : 'No'}, Compliance: ${hasCompliance ? 'Yes' : 'No'}`;
    if (onOpenConsultationWithPlan) {
      onOpenConsultationWithPlan(summary);
    }
  };

  return (
    <section id="estimator" className="py-24 relative bg-dark-900 border-y border-slate-800/80 scroll-mt-20">
      <div id="services" className="absolute -top-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-500/20 text-xs font-medium text-cyber-cyan">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE ROI SIMULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your Cloud ROI & <br />
            <span className="text-gradient-brand">FinOps Efficiency Potential</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            See how much your organization can save on AWS, Azure, or GCP infrastructure while elevating security and deployment velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 glass-panel rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-8">
            
            {/* Step 1: Scale Tier */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                1. Select Organization Scale
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'startup', label: 'Startup / Mid', desc: '10 - 50 staff' },
                  { id: 'growth', label: 'Growth / Scale-up', desc: '50 - 300 staff' },
                  { id: 'enterprise', label: 'Enterprise', desc: '300+ staff' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => {
                      setScaleTier(tier.id as any);
                      if (tier.id === 'startup') setCurrentMonthlySpend(12000);
                      if (tier.id === 'growth') setCurrentMonthlySpend(35000);
                      if (tier.id === 'enterprise') setCurrentMonthlySpend(120000);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      scaleTier === tier.id
                        ? 'border-cyber-cyan bg-brand-950/40 text-white shadow-glow-sm'
                        : 'border-slate-800 bg-dark-850/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-sm text-slate-200">{tier.label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Current Monthly Cloud Spend Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  2. Approximate Monthly Cloud & Infra Spend
                </label>
                <span className="text-base font-bold font-mono text-cyber-cyan">
                  ${currentMonthlySpend.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={currentMonthlySpend}
                onChange={(e) => setCurrentMonthlySpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyber-cyan"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>$5,000/mo</span>
                <span>$50,000/mo</span>
                <span>$150,000/mo</span>
                <span>$250,000+/mo</span>
              </div>
            </div>

            {/* Step 3: Cloud Provider Selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                3. Primary Cloud Environment
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'aws', label: 'AWS', icon: 'Amazon' },
                  { id: 'azure', label: 'Azure', icon: 'Microsoft' },
                  { id: 'gcp', label: 'GCP', icon: 'Google' },
                  { id: 'hybrid', label: 'Hybrid / On-Prem', icon: 'DataCenter' },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setCloudProvider(p.id as any)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-semibold font-mono transition-all text-center ${
                      cloudProvider === p.id
                        ? 'border-brand-500 bg-brand-600/20 text-white'
                        : 'border-slate-800 bg-dark-850 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Optional Add-on Capabilities */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                4. Select Architecture Capabilities
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                <label className="flex items-center gap-3 p-3 rounded-xl bg-dark-850 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                  <input
                    type="checkbox"
                    checked={hasKubernetes}
                    onChange={(e) => setHasKubernetes(e.target.checked)}
                    className="w-4 h-4 rounded text-brand-600 bg-dark-900 border-slate-700 focus:ring-cyber-cyan"
                  />
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Kubernetes (EKS/GKE/AKS)</div>
                    <div className="text-[10px] text-slate-400">Container orchestration & auto-scaling</div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-dark-850 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                  <input
                    type="checkbox"
                    checked={has24x7SRE}
                    onChange={(e) => setHas24x7SRE(e.target.checked)}
                    className="w-4 h-4 rounded text-brand-600 bg-dark-900 border-slate-700 focus:ring-cyber-cyan"
                  />
                  <div>
                    <div className="text-xs font-semibold text-slate-200">24/7 SRE SOC Monitoring</div>
                    <div className="text-[10px] text-slate-400">Under 15-minute incident MTTR</div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-dark-850 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                  <input
                    type="checkbox"
                    checked={hasCompliance}
                    onChange={(e) => setHasCompliance(e.target.checked)}
                    className="w-4 h-4 rounded text-brand-600 bg-dark-900 border-slate-700 focus:ring-cyber-cyan"
                  />
                  <div>
                    <div className="text-xs font-semibold text-slate-200">SOC 2 / HIPAA Readiness</div>
                    <div className="text-[10px] text-slate-400">Automated audit evidence collection</div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-dark-850 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                  <input
                    type="checkbox"
                    checked={hasAIIntegration}
                    onChange={(e) => setHasAIIntegration(e.target.checked)}
                    className="w-4 h-4 rounded text-brand-600 bg-dark-900 border-slate-700 focus:ring-cyber-cyan"
                  />
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Applied AI & RAG Pipeline</div>
                    <div className="text-[10px] text-slate-400">Custom LLMs & GPU orchestration</div>
                  </div>
                </label>

              </div>
            </div>

          </div>

          {/* Right Column: Calculated Results Summary Box */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl bg-gradient-to-b from-dark-800 to-dark-900 border border-cyber-cyan/30 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              
              {/* Subtle cyber background shine */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-cyber-cyan/10 rounded-full blur-2xl -z-10" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Projected Annual FinOps Impact
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  ~{(baseSavingsPct * 100).toFixed(0)}% Savings
                </span>
              </div>

              {/* Big metric */}
              <div className="space-y-1">
                <span className="text-xs text-slate-400 block">ESTIMATED ANNUAL CLOUD SAVINGS</span>
                <div className="text-4xl sm:text-5xl font-black font-mono text-emerald-400 tracking-tight">
                  ${estimatedAnnualSavings.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 ml-2">/ year</span>
                </div>
                <div className="text-xs text-slate-400">
                  Or approximately <span className="text-cyber-cyan font-bold font-mono">${estimatedMonthlySavings.toLocaleString()}</span> reduced every month.
                </div>
              </div>

              {/* Breakdown details */}
              <div className="space-y-3 pt-2 border-t border-slate-800 text-xs">
                
                <div className="flex justify-between items-center py-1 text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-4 h-4 text-cyber-blue" />
                    Estimated Implementation:
                  </span>
                  <span className="font-semibold text-white font-mono">{estimatedWeeks} - {estimatedWeeks + 2} Weeks</span>
                </div>

                <div className="flex justify-between items-center py-1 text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Target SLA Guarantee:
                  </span>
                  <span className="font-semibold text-emerald-400 font-mono">99.999% Availability</span>
                </div>

                <div className="py-2 border-t border-slate-800">
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block mb-1">
                    Recommended Architecture Blueprint:
                  </span>
                  <span className="font-medium text-cyber-cyan block text-xs">
                    {recommendedTier}
                  </span>
                </div>

              </div>

              {/* Deliverables summary checklist */}
              <div className="p-3.5 rounded-xl bg-dark-950/80 border border-slate-800 space-y-2">
                <span className="text-[11px] font-semibold text-slate-300 block uppercase">
                  Includes in Peak Tech SOW:
                </span>
                <div className="space-y-1.5 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Complete Infrastructure-as-Code Terraform Repository</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Zero-Downtime Data & Application Cutover Plan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Dedicated Principal Architect & 24/7 Escalation</span>
                  </div>
                </div>
              </div>

              {/* Action button */}
              <button
                onClick={handleConsultWithPlan}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-600 via-cyber-blue to-cyber-cyan text-white font-bold text-sm shadow-glow-sm hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2 group"
              >
                <span>Lock In This Spec & Get Detailed SOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[11px] text-center text-slate-500">
                Guaranteed response within 2 business hours. NDA executed prior to discovery.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

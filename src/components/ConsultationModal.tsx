"use client";

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledPlan?: string;
}

export default function ConsultationModal({ isOpen, onClose, prefilledPlan }: ConsultationModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('UX Research (SERVICE / 01)');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  useEffect(() => {
    if (prefilledPlan) {
      if (prefilledPlan.includes('SERVICE') || prefilledPlan.includes('SVC') || prefilledPlan.includes('UX') || prefilledPlan.includes('Development') || prefilledPlan.includes('Marketing') || prefilledPlan.includes('Optimization') || prefilledPlan.includes('Support')) {
        setService(prefilledPlan);
      } else {
        setNotes(`Details: ${prefilledPlan}`);
      }
    }
  }, [prefilledPlan]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSubmittedName(name);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'book_a_call',
          name,
          email,
          company,
          service,
          notes,
        }),
      });

      const result = await res.json().catch(() => null);

      if (res.ok && result?.success) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setCompany('');
        setNotes('');
      } else {
        setErrorMessage(result?.message || 'Failed to request consultation via Resend. Please try again.');
      }
    } catch {
      setErrorMessage('Network error submitting request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-dark-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-dark-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Thank You!</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              We have received your request and will reach out shortly.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-semibold hover:bg-brand-500 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-cyber-cyan mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DIRECT WITH PRINCIPAL ARCHITECTS</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Book Technical Discovery Call
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                30-minute private infrastructure evaluation under strict Mutual NDA.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="Full Name"
                  required
                  placeholder="e.g. Jordan Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyber-cyan"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  name="Corporate Email"
                  required
                  placeholder="jordan@enterprise.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyber-cyan"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="Company Name"
                    required
                    placeholder="Acme Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyber-cyan"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Primary Domain
                  </label>
                  <select
                    name="Primary Domain"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyber-cyan"
                  >
                    <option value="UX Research (SERVICE / 01)">UX Research (SERVICE / 01)</option>
                    <option value="UI/UX Design (SERVICE / 02)">UI/UX Design (SERVICE / 02)</option>
                    <option value="Product Development (SERVICE / 03)">Product Development (SERVICE / 03)</option>
                    <option value="Branding & Growth (SERVICE / 04)">Branding & Growth (SERVICE / 04)</option>
                    <option value="Strategic SEO Optimization (SVC-05)">Strategic SEO Optimization (SVC-05)</option>
                    <option value="Social Media Marketing (SVC-06)">Social Media Marketing (SVC-06)</option>
                    <option value="Speed Optimization (SVC-07)">Speed Optimization (SVC-07)</option>
                    <option value="Maintenance & Support (SVC-08)">Maintenance & Support (SVC-08)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Stack Details / Goals
                </label>
                <textarea
                  name="Stack Details & Goals"
                  rows={3}
                  placeholder="Current cloud spend, migration objectives, or uptime challenges..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyber-cyan resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Protected by Mutual Non-Disclosure Agreement (MNDA).</span>
              </div>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs space-y-1.5">
                  <p>{errorMessage}</p>
                  <a
                    href={`mailto:hellosadish@gmail.com?subject=${encodeURIComponent(`[Peak Tech Inquiry] Book a Call - ${name || 'Inquiry'}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\nNotes: ${notes}`)}`}
                    className="inline-block text-cyber-cyan underline hover:text-white font-medium"
                  >
                    Click to email hellosadish@gmail.com directly &rarr;
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-cyber-blue to-cyber-cyan text-white font-bold text-xs shadow-glow-sm hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Checking Architect Availability...</span>
                ) : (
                  <>
                    <span>Confirm Technical Discovery Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
}

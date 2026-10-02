"use client";

import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight,
  PhoneCall,
  FileSpreadsheet,
  MessageSquare
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

  // Determine modal configuration dynamically based on the prefilled trigger
  const isQuoteMode = typeof prefilledPlan === 'string' && prefilledPlan.toLowerCase().includes('quote');
  const isCallMode = typeof prefilledPlan === 'string' && prefilledPlan.toLowerCase().includes('call');

  let modalTitle = 'Book a Consultation';
  let modalSubtitle = 'Connect directly with our senior technical architects and solution consultants.';
  let buttonLabel = 'Confirm Consultation Request';
  let buttonSubmittingLabel = 'Scheduling Consultation...';
  let badgeLabel = 'CONSULTATION';
  let formType = 'consultation';
  let defaultNotesPlaceholder = 'Details about your technical challenges, project roadmap, or questions...';
  let ModeIcon = MessageSquare;

  if (isQuoteMode) {
    modalTitle = 'Request a Custom Quote';
    modalSubtitle = 'Tell us about your project requirements and receive a comprehensive proposal.';
    buttonLabel = 'Submit Quote Request';
    buttonSubmittingLabel = 'Processing Quote Request...';
    badgeLabel = 'CUSTOM QUOTE';
    formType = 'get_a_quote';
    defaultNotesPlaceholder = 'Describe your project scope, deliverables, target timeline, or estimated budget...';
    ModeIcon = FileSpreadsheet;
  } else if (isCallMode) {
    modalTitle = 'Book a Discovery Call';
    modalSubtitle = 'Schedule a 30-minute private evaluation with our engineering team.';
    buttonLabel = 'Confirm Discovery Call Request';
    buttonSubmittingLabel = 'Checking Availability...';
    badgeLabel = 'DISCOVERY CALL';
    formType = 'book_a_call';
    defaultNotesPlaceholder = 'Topics you would like to discuss, architecture overview, or questions...';
    ModeIcon = PhoneCall;
  } else if (typeof prefilledPlan === 'string' && prefilledPlan.trim() && !prefilledPlan.toLowerCase().includes('consultation')) {
    modalTitle = 'Book Technical Consultation';
    modalSubtitle = `Schedule a technical discussion for ${prefilledPlan}.`;
    badgeLabel = 'SERVICE INQUIRY';
    formType = 'consultation';
    defaultNotesPlaceholder = 'Specific requirements, goals, or questions for our specialists...';
    ModeIcon = MessageSquare;
  }

  // Synchronize defaults on open
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setErrorMessage('');
      if (typeof prefilledPlan === 'string' && prefilledPlan.trim()) {
        const p = prefilledPlan.trim();
        if (p.toLowerCase().includes('quote')) {
          setService('Full Project / Architecture Quote');
        } else if (p.toLowerCase().includes('call')) {
          setService('General Technical Consultation');
        } else if (
          p.includes('SERVICE') ||
          p.includes('SVC') ||
          p.includes('UX') ||
          p.includes('Development') ||
          p.includes('Marketing') ||
          p.includes('Optimization') ||
          p.includes('Support')
        ) {
          setService(p);
        } else {
          setService('General Technical Consultation');
        }
      }
    }
  }, [isOpen, prefilledPlan]);

  // Handle escape key to dismiss
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType,
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
        setErrorMessage(result?.message || 'Failed to submit request via Resend. Please try again or use direct email.');
      }
    } catch {
      setErrorMessage('Network error submitting request. Please try again or use direct email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const standardServices = [
    'UX Research (SERVICE / 01)',
    'UI/UX Design (SERVICE / 02)',
    'Product Development (SERVICE / 03)',
    'Branding & Growth (SERVICE / 04)',
    'Strategic SEO Optimization (SVC-05)',
    'Social Media Marketing (SVC-06)',
    'Speed Optimization (SVC-07)',
    'Maintenance & Support (SVC-08)',
    'General Technical Consultation',
    'Full Project / Architecture Quote',
  ];

  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      aria-modal="true"
      role="dialog"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-dark-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto"
      >
        
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-dark-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close dialog"
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
              We have received your {badgeLabel.toLowerCase()} request and our engineering team will reach out shortly.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-semibold hover:bg-brand-500 transition-colors shadow-glow-sm"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-bold text-cyan-300 tracking-wider uppercase mb-2">
                <ModeIcon className="w-3 h-3 text-cyan-400" />
                <span>{badgeLabel}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                {modalTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {modalSubtitle}
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
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-white placeholder-slate-500 text-base sm:text-xs focus:outline-none focus:border-cyber-cyan transition-colors"
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
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-white placeholder-slate-500 text-base sm:text-xs focus:outline-none focus:border-cyber-cyan transition-colors"
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-white placeholder-slate-500 text-base sm:text-xs focus:outline-none focus:border-cyber-cyan transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Primary Domain / Service
                  </label>
                  <select
                    name="Primary Domain"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-white text-base sm:text-xs focus:outline-none focus:border-cyber-cyan transition-colors"
                  >
                    {!standardServices.includes(service) && (
                      <option value={service}>{service}</option>
                    )}
                    {standardServices.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Scope Details & Goals
                </label>
                <textarea
                  name="Scope Details & Goals"
                  rows={3}
                  placeholder={defaultNotesPlaceholder}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-white placeholder-slate-500 text-base sm:text-xs focus:outline-none focus:border-cyber-cyan resize-none transition-colors"
                />
              </div>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs space-y-1.5">
                  <p>{errorMessage}</p>
                  <a
                    href={`mailto:imalshaanupamal@gmail.com?subject=${encodeURIComponent(`[Peak Tech Inquiry] ${modalTitle} - ${name || 'Inquiry'}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\nNotes: ${notes}`)}`}
                    className="inline-block text-cyber-cyan underline hover:text-white font-medium"
                  >
                    Click to email imalshaanupamal@gmail.com directly &rarr;
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-cyber-blue to-cyber-cyan text-white font-bold text-xs shadow-glow-sm hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <span>{buttonSubmittingLabel}</span>
                ) : (
                  <>
                    <span>{buttonLabel}</span>
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

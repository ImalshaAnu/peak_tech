"use client";

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  prefilledPlan?: string;
}

export default function ContactSection({ prefilledPlan }: ContactSectionProps = {}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: prefilledPlan ? `I'm interested in: ${prefilledPlan}` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Plan Your Next Move
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Whether you have a question, want to collaborate, or need expert advice, I'm just a message away.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-5 animate-fadeIn bg-slate-50 rounded-3xl border border-slate-200 p-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. We've received your message and will get back to you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors pt-4"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-400 transition-colors shadow-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-400 transition-colors shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                  PHONE
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-400 transition-colors shadow-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                  BUDGET (OPTIONAL)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 5000"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-400 transition-colors shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                MESSAGE
              </label>
              <textarea
                rows={5}
                required
                placeholder="Enter your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-400 transition-colors resize-none shadow-sm"
              />
            </div>

            <div className="pt-6 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-12 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <span>Send your message</span>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
}

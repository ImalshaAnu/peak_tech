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
  const [submittedName, setSubmittedName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and maximum 10 digits
    let digits = e.target.value.replace(/\D/g, '');
    // If user pastes 11 digits starting with country code 1, trim leading 1
    if (digits.length === 11 && digits.startsWith('1')) {
      digits = digits.slice(1);
    }
    digits = digits.slice(0, 10);

    setFormData((prev) => ({ ...prev, phone: digits }));

    if (phoneError && digits.length === 10) {
      setPhoneError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone number: must be exactly 10 digits
    if (!formData.phone || formData.phone.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits.');
      return;
    }

    setPhoneError('');
    setErrorMessage('');
    setIsSubmitting(true);
    const clientName = formData.name;
    setSubmittedName(clientName);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact_inquiry',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const result = await res.json().catch(() => null);

      if (res.ok && result?.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          budget: '',
          message: '',
        });
      } else {
        setErrorMessage(result?.message || 'Failed to deliver message via Resend. Please try again.');
      }
    } catch {
      setErrorMessage('Network error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
            <h3 className="text-2xl font-bold text-slate-900">Thank You!</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              We will review your message and get back to you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors pt-4"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  name="Full Name"
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
                  name="Email Address"
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
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    PHONE
                  </label>
                  <span className={`text-[11px] font-medium transition-colors ${
                    formData.phone.length === 10 
                      ? 'text-emerald-600 font-semibold' 
                      : formData.phone.length > 0 
                        ? 'text-amber-600' 
                        : 'text-slate-400'
                  }`}>
                    {formData.phone.length}/10 digits
                  </span>
                </div>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                  name="Phone Number"
                  placeholder="e.g. 7805146855"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  onKeyDown={(e) => {
                    // Allow navigation and editing keys
                    if (
                      ['Backspace', 'Tab', 'Enter', 'Delete', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key) ||
                      e.ctrlKey || e.metaKey
                    ) {
                      return;
                    }
                    // Prevent any non-digit character
                    if (!/^[0-9]$/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onBlur={() => {
                    if (formData.phone && formData.phone.length !== 10) {
                      setPhoneError('Phone number must be exactly 10 digits.');
                    }
                  }}
                  className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border text-slate-900 placeholder-slate-400 text-sm focus:outline-none transition-colors shadow-sm ${
                    phoneError 
                      ? 'border-red-400 focus:border-red-500 bg-red-50/20' 
                      : formData.phone.length === 10 
                        ? 'border-emerald-400 focus:border-emerald-500' 
                        : 'border-slate-200 focus:border-slate-400'
                  }`}
                />
                {phoneError && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium">
                    {phoneError}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                  BUDGET (OPTIONAL)
                </label>
                <input
                  type="text"
                  name="Estimated Budget"
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
                name="Message"
                rows={5}
                required
                placeholder="Enter your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-400 transition-colors resize-none shadow-sm"
              />
            </div>

            {errorMessage && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs space-y-1.5 text-center">
                <p>{errorMessage}</p>
                <a
                  href={`mailto:hellosadish@gmail.com?subject=${encodeURIComponent(`[Peak Tech Inquiry] New Message from ${formData.name || 'Website Visitor'}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nBudget: ${formData.budget}\nMessage: ${formData.message}`)}`}
                  className="inline-block text-slate-900 underline hover:text-black font-semibold"
                >
                  Click here to send email to hellosadish@gmail.com directly &rarr;
                </a>
              </div>
            )}

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

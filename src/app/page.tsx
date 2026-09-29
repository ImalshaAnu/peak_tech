"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUsSection from '@/components/AboutUsSection';
import AIConsultingSection from '@/components/AIConsultingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedPlanSummary, setSelectedPlanSummary] = useState<string>('');

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenConsultation={handleOpenConsultation} 
          onExploreServices={handleScrollToServices}
        />

        {/* About Us Section matching reference */}
        <AboutUsSection onOpenConsultation={handleOpenConsultation} />

        {/* AI Consulting Section with signature leaf cards matching reference */}
        <AIConsultingSection 
          onOpenConsultation={handleOpenConsultation} 
        />

        <TestimonialsSection />

        <ContactSection prefilledPlan={selectedPlanSummary} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Pop-up Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)}
        prefilledPlan={selectedPlanSummary}
      />
    </div>
  );
}

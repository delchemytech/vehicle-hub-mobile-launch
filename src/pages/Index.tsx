
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MockupSection from "@/components/MockupSection";
import FeatureSection from "@/components/FeatureSection";
import VideoSection from "@/components/VideoSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MockupSection />
        <FeatureSection />
        <VideoSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;

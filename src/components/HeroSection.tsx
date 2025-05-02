import React from "react";
import { Button } from "@/components/ui/button";
import AppStoreButtons from "@/components/ui/AppStoreButtons";
import { trackEvent } from "@/lib/firebase";

const HeroSection = () => {
  const handleAppStoreClick = (store: 'apple' | 'google') => {
    trackEvent('app_store_click', {
      store,
      location: 'hero_section'
    });
  };

  return (
    <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0 z-[1]">
            <h1 className="text-4xl md:text-5xl font-bold text-vehicle-navy mb-4 animate-fade-in">
              Your Vehicle's <span className="gradient-heading">Smart Companion</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              All your vehicle needs in one place. Track maintenance, manage documents, and get emergency assistance with just a few taps.
            </p>
            
            <div className="flex flex-col gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <AppStoreButtons onStoreClick={handleAppStoreClick} />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-200 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-vehicle-blue rounded-full opacity-10 -z-10"></div>
              
              <div className="">
                <img
                  src="/images/hero_car.webp"
                  alt="Car dashboard with app interface"
                  className="w-full h-auto rounded-2xl"
                  onClick={() => trackEvent('hero_image_click')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

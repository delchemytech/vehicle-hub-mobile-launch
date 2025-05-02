import React from 'react';
import { trackEvent } from "@/lib/firebase";

interface AppStoreButtonsProps {
  onStoreClick?: (store: 'apple' | 'google') => void;
}

const AppStoreButtons = ({ onStoreClick }: AppStoreButtonsProps) => {
  const handleStoreClick = (store: 'apple' | 'google') => {
    trackEvent('app_store_click', {
      store,
      location: onStoreClick ? 'custom' : 'standalone'
    });
    onStoreClick?.(store);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button 
        onClick={() => handleStoreClick('apple')}
        className="transition-transform hover:scale-105"
      >
        <img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
          alt="Download on the App Store"
          className="h-14"
        />
      </button>
      <button 
        onClick={() => handleStoreClick('google')}
        className="transition-transform hover:scale-105"
      >
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          className="h-14"
        />
      </button>
    </div>
  );
};

export default AppStoreButtons;

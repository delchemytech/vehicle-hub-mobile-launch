
import React from 'react';
import { Apple, Play } from 'lucide-react';

const AppStoreButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <a
        href="#"
        className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
      >
        <Apple size={24} />
        <div className="flex flex-col">
          <span className="text-xs">Download on the</span>
          <span className="text-base font-semibold">App Store</span>
        </div>
      </a>
      
      <a
        href="#"
        className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
      >
        <Play size={24} fill="white" />
        <div className="flex flex-col">
          <span className="text-xs">Get it on</span>
          <span className="text-base font-semibold">Google Play</span>
        </div>
      </a>
    </div>
  );
};

export default AppStoreButtons;

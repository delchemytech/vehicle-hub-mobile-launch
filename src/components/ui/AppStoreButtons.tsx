import React, { useState } from 'react';
import { Apple, Play } from 'lucide-react';
import WaitlistDialog from './WaitlistDialog';

const AppStoreButtons = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDialogOpen(true);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a
          href="#"
          onClick={handleClick}
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
          onClick={handleClick}
          className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Play size={24} fill="white" />
          <div className="flex flex-col">
            <span className="text-xs">Get it on</span>
            <span className="text-base font-semibold">Google Play</span>
          </div>
        </a>
      </div>
      <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default AppStoreButtons;

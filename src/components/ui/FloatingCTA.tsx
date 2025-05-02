import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";
import WaitlistDialog from "./WaitlistDialog";
import { trackEvent } from "@/lib/firebase";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTAClick = () => {
    trackEvent('floating_cta_click', {
      location: 'floating_button',
      action: 'open_waitlist'
    });
    setDialogOpen(true);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
        <Button 
          className="bg-vehicle-red hover:bg-red-600 shadow-button flex items-center gap-2 px-4 py-6 rounded-full"
          onClick={handleCTAClick}
        >
          <Wrench size={18} className="text-white" />
          <span className="text-white font-medium">Book a Service Now</span>
        </Button>
      </div>
      <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default FloatingCTA;

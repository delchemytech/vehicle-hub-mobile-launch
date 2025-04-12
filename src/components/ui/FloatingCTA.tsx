
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
      <Button 
        className="bg-vehicle-red hover:bg-red-600 shadow-button flex items-center gap-2 px-4 py-6 rounded-full"
      >
        <Wrench size={18} className="text-white" />
        <span className="text-white font-medium">Book a Service Now</span>
      </Button>
    </div>
  );
};

export default FloatingCTA;

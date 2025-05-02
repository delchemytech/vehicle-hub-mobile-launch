import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import WaitlistDialog from "@/components/ui/WaitlistDialog";
import { trackEvent } from "@/lib/firebase";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleNavClick = (section: string, isMobile: boolean = false) => {
    trackEvent('navigation_click', {
      section,
      device: isMobile ? 'mobile' : 'desktop',
      location: 'header'
    });
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  const handleDownloadClick = (isMobile: boolean = false) => {
    trackEvent('download_app_click', {
      device: isMobile ? 'mobile' : 'desktop',
      location: 'header'
    });
    setMenuOpen(false);
    setDialogOpen(true);
  };

  const toggleMenu = () => {
    trackEvent('menu_toggle', {
      action: menuOpen ? 'close' : 'open'
    });
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-vehicle-navy">
            MyVehicle<span className="text-vehicle-blue">Hub</span>
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <AlignJustify size={24} />}
          </Button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#features" onClick={() => handleNavClick('features')} className="text-sm hover:text-vehicle-blue transition-colors">Features</a></li>
              <li><a href="#benefits" onClick={() => handleNavClick('benefits')} className="text-sm hover:text-vehicle-blue transition-colors">Benefits</a></li>
              <li><a href="#testimonials" onClick={() => handleNavClick('testimonials')} className="text-sm hover:text-vehicle-blue transition-colors">Testimonials</a></li>
              <li><a href="#faq" onClick={() => handleNavClick('faq')} className="text-sm hover:text-vehicle-blue transition-colors">FAQ</a></li>
            </ul>
          </nav>
          <Button 
            className="bg-vehicle-blue hover:bg-vehicle-skyblue text-white transition-colors"
            onClick={() => handleDownloadClick()}
          >
            Download App
          </Button>
        </div>

        {/* Mobile Menu Drawer */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-0 z-50 mt-16 ${menuOpen ? "block" : "hidden"}`}
        >
          <div className="container mx-auto bg-white px-4 py-8 rounded-b-3xl shadow-lg">
            <nav>
              <ul className="flex flex-col space-y-6 text-center">
                <li>
                  <a 
                    href="#features" 
                    className="text-lg block py-2 hover:text-vehicle-blue transition-colors"
                    onClick={() => handleNavClick('features', true)}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#benefits" 
                    className="text-lg block py-2 hover:text-vehicle-blue transition-colors"
                    onClick={() => handleNavClick('benefits', true)}
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a 
                    href="#testimonials" 
                    className="text-lg block py-2 hover:text-vehicle-blue transition-colors"
                    onClick={() => handleNavClick('testimonials', true)}
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a 
                    href="#faq" 
                    className="text-lg block py-2 hover:text-vehicle-blue transition-colors"
                    onClick={() => handleNavClick('faq', true)}
                  >
                    FAQ
                  </a>
                </li>
                <li className="pt-6">
                  <Button 
                    className="bg-vehicle-blue hover:bg-vehicle-skyblue text-white transition-colors w-full"
                    onClick={() => handleDownloadClick(true)}
                  >
                    Download App
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </motion.div>

        {/* Waitlist Dialog */}
        <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      </div>
    </header>
  );
};

export default Header;
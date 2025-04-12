
import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
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
              <li><a href="#features" className="text-sm hover:text-vehicle-blue transition-colors">Features</a></li>
              <li><a href="#benefits" className="text-sm hover:text-vehicle-blue transition-colors">Benefits</a></li>
              <li><a href="#testimonials" className="text-sm hover:text-vehicle-blue transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-sm hover:text-vehicle-blue transition-colors">FAQ</a></li>
            </ul>
          </nav>
          <Button className="bg-vehicle-blue hover:bg-vehicle-skyblue text-white transition-colors">
            Download App
          </Button>
        </div>

        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-white pt-16">
            <div className="container mx-auto px-4">
              <nav>
                <ul className="flex flex-col space-y-6 text-center">
                  <li>
                    <a 
                      href="#features" 
                      className="text-lg block py-2 hover:text-vehicle-blue transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#benefits" 
                      className="text-lg block py-2 hover:text-vehicle-blue transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#testimonials" 
                      className="text-lg block py-2 hover:text-vehicle-blue transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#faq" 
                      className="text-lg block py-2 hover:text-vehicle-blue transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="pt-6">
                    <Button 
                      className="bg-vehicle-blue hover:bg-vehicle-skyblue text-white transition-colors w-full" 
                      onClick={() => setMenuOpen(false)}
                    >
                      Download App
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

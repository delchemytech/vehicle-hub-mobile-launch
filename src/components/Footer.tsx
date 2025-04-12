
import React from "react";
import AppStoreButtons from "@/components/ui/AppStoreButtons";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-vehicle-navy text-white pt-16 pb-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-6">
              MyVehicle<span className="text-vehicle-blue">Hub</span>
            </h3>
            <p className="text-gray-300 mb-6">
              The all-in-one solution for vehicle owners. Simplify maintenance, document management, and get help when you need it most.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-vehicle-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-vehicle-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-vehicle-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-vehicle-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-300 hover:text-vehicle-blue transition-colors">Features</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-vehicle-blue transition-colors">Benefits</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-vehicle-blue transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-vehicle-blue transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Download App</h3>
            <p className="text-gray-300 mb-4">
              Get the full experience on your mobile device
            </p>
            <AppStoreButtons />
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MyVehicleHub. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

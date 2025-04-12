
import React from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-vehicle-navy mb-4">See How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch our quick demo to see how MyVehicleHub simplifies vehicle management
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          {/* This would be replaced with an actual video embed in a production app */}
          <div className="aspect-w-16 aspect-h-9 bg-gray-900">
            <img
              src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
              alt="Video thumbnail of app demonstration"
              className="w-full h-full object-cover opacity-60"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <Button className="w-16 h-16 rounded-full bg-vehicle-red hover:bg-red-700 flex items-center justify-center shadow-lg">
                <Play size={28} fill="white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

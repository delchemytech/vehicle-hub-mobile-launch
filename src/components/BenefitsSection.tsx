
import React from "react";
import { Clock, Zap, BarChart3, Shield, Briefcase, PieChart } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Save Time",
      description: "No more paperwork or phone calls. Manage everything with a few taps.",
      icon: Clock,
    },
    {
      id: 2,
      title: "Real-Time Updates",
      description: "Get instant notifications about your vehicle's needs and status.",
      icon: Zap,
    },
    {
      id: 3,
      title: "All-in-One Management",
      description: "One app to replace multiple services and documents.",
      icon: Briefcase,
    },
    {
      id: 4,
      title: "Secure Platform",
      description: "Your data is encrypted and protected with enterprise-grade security.",
      icon: Shield,
    },
    {
      id: 5,
      title: "Cost Tracking",
      description: "Track all your vehicle expenses in one place with detailed reports.",
      icon: BarChart3,
    },
    {
      id: 6,
      title: "Personalized Insights",
      description: "Get recommendations based on your driving patterns and vehicle type.",
      icon: PieChart,
    },
  ];

  return (
    <section id="benefits" className="section-padding bg-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-vehicle-navy mb-4">Why MyVehicleHub?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Designed to make vehicle ownership simpler, more efficient, and less stressful
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-xl p-6 shadow border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-vehicle-blue">
                  <benefit.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-vehicle-navy mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

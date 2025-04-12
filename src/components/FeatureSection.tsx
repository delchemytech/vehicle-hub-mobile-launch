
import React from "react";
import { 
  CalendarCheck, 
  Bell, 
  FileText, 
  AlertTriangle, 
  Smartphone, 
  AlertCircle, 
  SosCircle, 
  Award 
} from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      title: "Service Booking",
      description: "Schedule maintenance with trusted service centers",
      icon: CalendarCheck,
      color: "bg-blue-100 text-vehicle-blue",
    },
    {
      id: 2,
      title: "Automated Reminders",
      description: "Never miss a service or document renewal",
      icon: Bell,
      color: "bg-violet-100 text-violet-600",
    },
    {
      id: 3,
      title: "In-App Insurance Renewal",
      description: "Renew policies and store documents digitally",
      icon: FileText,
      color: "bg-teal-100 text-teal-600",
    },
    {
      id: 4,
      title: "Accident & Claim Management",
      description: "Digital assistance for claims processing",
      icon: AlertTriangle,
      color: "bg-amber-100 text-amber-600",
    },
    {
      id: 5,
      title: "Digital Vehicle Profile",
      description: "Complete history and documentation in one place",
      icon: Smartphone,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      id: 6,
      title: "Fine Notifications & Payments",
      description: "Stay updated and clear fines instantly",
      icon: AlertCircle,
      color: "bg-pink-100 text-pink-600",
    },
    {
      id: 7,
      title: "Emergency Roadside Assistance",
      description: "24/7 help when you need it most",
      icon: SosCircle,
      color: "bg-red-100 text-vehicle-red",
    },
    {
      id: 8,
      title: "Loyalty Rewards",
      description: "Earn points for regular servicing and referrals",
      icon: Award,
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-vehicle-navy mb-4">All Your Vehicle Needs in One App</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            MyVehicleHub brings together everything you need to manage your vehicle effortlessly
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-vehicle-navy mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

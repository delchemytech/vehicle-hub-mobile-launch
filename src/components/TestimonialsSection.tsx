
import React from "react";
import { Shirt, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Los Angeles, CA",
      text: "MyVehicleHub saved me so much time and stress. I got a notification about my registration expiring, and renewed it right from the app!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Chicago, IL",
      text: "When my car broke down, I used the emergency assistance feature and got help within minutes. This app is a life-saver!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 3,
      name: "Leila Rodriguez",
      location: "Miami, FL",
      text: "I love how I can track all my service appointments and costs. The reminders ensure I never miss an oil change or tire rotation.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/63.jpg",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-vehicle-navy mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied vehicle owners who are managing their cars with ease
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 min-w-[280px] md:w-1/3 flex-shrink-0"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-vehicle-blue"
                />
                <div>
                  <h3 className="font-semibold text-vehicle-navy">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  
                  <div className="flex mt-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

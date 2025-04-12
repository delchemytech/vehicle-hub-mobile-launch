
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "How do I schedule a vehicle service through the app?",
      answer:
        "Simply tap on the 'Service' tab, select the type of service you need, and choose from available service centers and time slots. You'll receive a confirmation and reminder for your appointment.",
    },
    {
      question: "Is my vehicle and personal data secure in the app?",
      answer:
        "Yes, we use industry-standard encryption and security protocols to protect your data. We never share your information with third parties without your explicit consent.",
    },
    {
      question: "How does the emergency roadside assistance work?",
      answer:
        "In case of an emergency, open the app and tap the SOS button. We'll detect your location and connect you with the nearest service provider. You can track their arrival in real-time.",
    },
    {
      question: "Can I store my insurance and registration documents in the app?",
      answer:
        "Absolutely! The Documents section allows you to upload and store all your vehicle-related documents digitally. These are securely stored and easily accessible whenever needed.",
    },
    {
      question: "How do I earn and redeem loyalty rewards?",
      answer:
        "You earn points for every service booking, referral, and certain in-app activities. These points can be redeemed for discounts on services, accessories, and other partner offers.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-vehicle-navy mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about MyVehicleHub
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-vehicle-navy">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;

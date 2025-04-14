import React from "react";

const MockupSection = () => {
  // In a real implementation, these would be actual app mockup images
  // const mockupImages = [
  //   {
  //     id: 1,
  //     image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3",
  //     alt: "Vehicle maintenance app screen",
  //   },
  //   {
  //     id: 2,
  //     image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3",
  //     alt: "Vehicle insurance app screen",
  //   },
  //   {
  //     id: 3,
  //     image: "https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3",
  //     alt: "Emergency assistance app screen",
  //   },
  // ];

  return (
    <section className="section-padding bg-vehicle-navy text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">See the App in Action</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Intuitive design meets powerful features. Manage your vehicle with
            ease through our user-friendly interface.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {/* {mockupImages.map((mockup, index) => (
            <div
              key={mockup.id}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gradient-to-br from-vehicle-blue to-vehicle-skyblue p-1 rounded-3xl shadow-xl">
                <div className="bg-black p-2 rounded-3xl overflow-hidden">
                  <img
                    src={mockup.image}
                    alt={mockup.alt}
                    className="w-full max-w-[220px] h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full"></div>
            </div>
          ))} */}
          <img
            src="/images/mobile.webp"
            alt="Mobile app interface"
            className="w-full max-w-[700px] h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MockupSection;

import React, { useEffect, useState } from "react";

const images = [
  "/images/about.webp",
  "/images/about2.webp",
  "/images/about3.webp",
];

const AboutSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto change image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 bg-white">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="leading-tight">

  {/* TOP LINE */}
  <span className="block text-lg font-bold md:text-base tracking-[4px] uppercase text-blue-700 mb-2">
    TO ENSURE A BETTER TOMORROW
  </span>

  {/* MAIN LINE */}
  <span className="block text-4xl md:text-6xl font-bold text-red-500">
    LET'S MAKE TODAY BETTER
  </span>

</h2>
<br/>
    

          <p className="text-gray-600 leading-relaxed text-base">
           Madālasā Foundation aims at strengthening the roots of all social campaigns and activities to promote– Child Education, Healthcare for all and Women Empowerment. In collaboration with Madalasa Hospital, the foundation regularly organizes free medical health camps in parks and local community spaces, making essential healthcare services available to those who may not have easy access to hospitals or clinics.  
          </p>
          <br></br>
          <p className="text-gray-600 leading-relaxed text-base">
            These camps provide basic health checkups, doctor consultations, and guidance on preventive care, helping individuals identify and address health concerns at an early stage. Our team of experienced medical professionals  and volunteers works with a shared commitment to serve society with compassion and responsibility.
          </p>

        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="relative w-full md:max-w-xl max-auto h-75 md:h-125 bg-black overflow-hidden rounded-2xl shadow-lg">
          
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="about"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default AboutSection;

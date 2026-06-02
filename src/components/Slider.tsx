
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    img: "/images/slide1.webp",
    title: "Empowering Communities",
    description: "Making a difference together",
    position: "object-top", 
  },
  {
    img: "/images/slide2.webp",
    title: "Health Support for All",
    description: "Building brighter futures",
    position: "object-top", 
  },
  {
    img: "/images/slide3.webp",
    title: "Healthcare Initiative",
    description: "Wellness for everyone",
    position: "object-top",
  },
];

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto Slide with pause on hover - FIXED
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrent((prev) => (prev + 1) % slides.length);
      }
    }, 2500); // 2.5 seconds (between 2-3 seconds)

    return () => clearInterval(interval);
  }, [isHovering]); // Removed current from dependencies to fix auto-slide

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <section 
      className="relative w-full h-[70vh] bg-black overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      
      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Image Container */}
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={slide.img}
              alt={slide.title}
              className={`w-full h-full object-cover ${slide.position} transition-transform duration-4000 ease-linear ${
  index === current ? "scale-110" : "scale-100"
}`}
              style={{
                objectPosition: slide.position === "object-top" ? "center 20%" : "center center"
              }}
            />
            
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
            
            {/* Optional Text Content */}
            <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white transition-all duration-700 ${
              index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg md:text-xl text-gray-200">{slide.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-2 md:p-3 rounded-full text-white hover:bg-red-600 transition-all duration-300 z-20 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-2 md:p-3 rounded-full text-white hover:bg-red-600 transition-all duration-300 z-20 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* DOTS INDICATOR */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 ${
              index === current
                ? "w-8 h-2 bg-red-500 rounded-full"
                : "w-2 h-2 bg-white/50 rounded-full hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-linear-to-r from-red-500 to-orange-500 transition-all duration-300 ease-linear"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        ></div>
      </div>

    </section>
  );
};

export default Slider;
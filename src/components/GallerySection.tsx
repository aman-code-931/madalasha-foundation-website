import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/gallery1.webp",
  "/images/gallery2.webp",
  "/images/gallery3.webp",
  "/images/gallery4.webp",
  "/images/gallery5.webp",
  "/images/gallery6.webp",
  "/images/gallery7.webp",
  "/images/gallery8.webp",
  "/images/gallery9.webp",
  "/images/gallery10.webp",
  "/images/gallery11.webp",
  "/images/gallery12.webp",
];

const GallerySection = () => {
  const [current, setCurrent] = useState<number | null>(null);

  const next = () => {
    if (current === null) return;
    setCurrent((current + 1) % images.length);
  };

  const prev = () => {
    if (current === null) return;
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <section id ="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Stories{" "}
            <span className="text-orange-500 italic">Through</span> Photos
          </h2>
        </div>

        {/* 🔥 MASONRY GRID */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-3">

          {images.map((img, index) => (
            <div
              key={index}
              className="mb-3 break-inside-avoid cursor-pointer overflow-hidden"
              onClick={() => setCurrent(index)}
            >
              <img
                src={img}
                alt=""
                className="w-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}

        </div>
      </div>

      {/* 🔥 FULL SCREEN VIEW */}
      {current !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          {/* CLOSE */}
          <button
            onClick={() => setCurrent(null)}
            className="absolute top-5 right-5 text-white"
          >
            <X size={32} />
          </button>

          {/* LEFT */}
          <button
            onClick={prev}
            className="absolute left-5 text-white"
          >
            <ChevronLeft size={40} />
          </button>

          {/* IMAGE */}
          <img
            src={images[current]}
            className="max-h-[80vh] max-w-[90%] object-contain"
          />

          {/* RIGHT */}
          <button
            onClick={next}
            className="absolute right-5 text-white"
          >
            <ChevronRight size={40} />
          </button>

        </div>
      )}
    </section>
  );
};

export default GallerySection;
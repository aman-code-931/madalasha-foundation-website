import React, { useState, useEffect, useCallback } from "react";

const images = [
  { src: "/images/serve1.webp", label: "Rural Support" },
  { src: "/images/serve2.webp", label: "Education Drive" },
  { src: "/images/serve3.webp", label: "Healthcare Camps" },
  { src: "/images/about2.webp" },
  { src: "/images/about3.webp", label: "Community Outreach" },
];

const doubled = [...images, ...images];

const ServingSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const total = images.length;

  const prev = useCallback(() => {
    setSelectedIndex((i) => (i === null ? 0 : (i - 1 + total) % total));
  }, [total]);

  const next = useCallback(() => {
    setSelectedIndex((i) => (i === null ? 0 : (i + 1) % total));
  }, [total]);

  const close = useCallback(() => setSelectedIndex(null), []);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedIndex, next, prev, close]);

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          
          <h2 className="text-3xl md:text-3xl font-bold leading-snug mb-4">
            Extending Healthcare Beyond Hospitals Through {" "}
            <span className="bg-linear-to-r from-red-500 to-orange-400 text-transparent bg-clip-text italic">
              Community Care
            </span>{" "}
            &amp; Purpose
          </h2>
          <p className="text-gray-500  mx-auto text-base leading-relaxed">
          Supported by Madalasa Hospital, Madalasa Foundation organizes free medical camps to extend healthcare services beyond hospital walls, providing accessible and affordable care to communities in need."
          </p>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex gap-2 animate-scroll"
            style={{ width: "max-content" }}
          >
            {doubled.map((item, i) => (
              <div
                key={i}
                className="shrink-0 group relative rounded-xl overflow-hidden cursor-pointer"
                style={{ width: "calc((100vw - 3rem) / 3)", maxWidth: "380px" }}
                onClick={() => setSelectedIndex(i % total)}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-55 sm:h-65 md:h-112.5 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Label overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={close}
        >
          {/* Card — stop propagation so clicking image doesn't close */}
          <div
            className="relative flex items-center gap-4 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev */}
            <button
              onClick={prev}
              className="shrink-0 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].label}
                className="max-w-[80vw] max-h-[75vh] rounded-2xl shadow-2xl object-cover"
              />
              {/* Close button */}
              <button
                onClick={close}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition"
                aria-label="Close"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              {/* Label + counter */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-full">
                  {images[selectedIndex].label}
                </span>
                <span className="text-white/70 text-xs bg-black/40 px-3 py-1 rounded-full">
                  {selectedIndex + 1} / {total}
                </span>
              </div>
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="shrink-0 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Click outside hint */}
          <p className="absolute bottom-5 text-white/40 text-xs tracking-wide">
            Click outside or press Esc to close
          </p>
        </div>
      )}
    </section>
  );
};

export default ServingSection;

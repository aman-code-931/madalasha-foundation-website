import { Link } from "react-router-dom";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const data = [
  {
    id: 1,
    img: "/images/card1.webp",
    title: "Madalasa Hospital Free Health Camp Supported by Madalasa Foundation",
    date: "June 27, 2022",
    desc: "Successfully treated patients...",
  },
  {
    id: 2,
    img: "/images/card2.webp",
    title: "Free Health Camp by Madalasa Hospital at Devi Lal Park, Sector 14, Gurgaon",
    date: "2 November, 2022",
    desc: "Free checkups and treatment...",
  },
  {
    id: 3,
    img: "/images/card3.webp",
    title: "Madalasa Foundation Presents Free Health Camp with Madalasa Hospital",
    date: "22 November, 2022",
    desc: "Healthcare support...",
  },
  {
    id: 4,
    img: "/images/carde4.webp",
    title: "Community Free Health Camp Supported by Madalasa Hospital",
    date: "26 November, 2022",
    desc: "Free checkups and awareness...",
  },
  {
    id: 5,
    img: "/images/slide1.webp",
    title: "Free Medical & Health Checkup Camp – Samaspur Village Near Temple Gurugram",
    date: "29 November, 2022",
    desc: "Medical services...",
  },
  {
    id: 6,
    img: "/images/card4.webp",
    title: "Madalasa Hospital Free Health Camp 2024 Adarsh Park – Sector 46 Gurugram",
    date: "1 March, 2024",
    desc: "Health awareness...",
  },
  {
    id: 7,
    img: "/images/card5.webp",
    title: "Healthcare Awareness Camp by Madalasa Foundation & Madalasa Hospital",
    date: "11 March, 2024",
    desc: "Community support...",
  },
  {
    id: 8,
    img: "/images/card6.webp",
    title: "Madalasa Foundation Community Health Camp at Adarsh Park Sector - 46",
    date: "27 May, 2024",
    desc: "Free treatment...",
  },
  {
  id: 10,
  img: "/images/card7.webp",
  title: "Free Health Camp 2024",
  date: "30 May, 2024",
  desc: "More medical support...",
},
  

  // 👉 future mai aur cards add kar sakta hai
];

const FeaturedServices = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id = "services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Free Health Camps
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(showAll ? data : data.slice(0, 8)).map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>

        {/* VIEW MORE BUTTON */}
        {!showAll && data.length > 8 && (
          <div className="text-center mt-10">
            <Link
  to="/services"
  className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition"
>
  View More →
</Link>
            {/* <button
              onClick={() => setShowAll(true)}
              className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition"
            >
              View More →
            </button> */}
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedServices;
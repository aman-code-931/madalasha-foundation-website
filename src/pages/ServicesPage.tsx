import ServiceCard from "../components/ServiceCard";

const data = [
    {
  id: 9,
  img: "/images/gallery11.webp",
  title: "Free Health Screening Camp Supported by Madalasa Hospital",
  date: "3 June, 2024",
  desc: "More medical support...",
},
  {
  id: 10,
  img: "/images/1.webp",
  title: "Madalasa Hospital Community Wellness Camp – Gurugram",
  date: "11 June, 2024",
  desc: "More medical support...",
},
{
  id: 11,
  img: "/images/3.webp",
  title: "Free Healthcare Camp at Adarsh Sector-46 Park Organized by Madalasa Foundation",
  date: "12 June, 2024",
  desc: "More medical support...",
},
{
  id: 12,
  img: "/images/about.webp",
  title: "Madalasa Foundation Free Medical Camp with Madalasa Hospital Support",
  date: "18 June, 2024",
  desc: "More medical support...",
},
{
  id: 13,
  img: "/images/6 .webp",
  title: "Community Wellness & Free Health Camp – Sector 46 Gurugram",
  date: "19 June, 2024",
  desc: "More medical support...",
},
{
  id: 14,
  img: "/images/8.webp",
  title: "Madalasa Hospital Health Camp for Community Care",
  date: "25 June, 2024",
  desc: "More medical support...",
},
{
  id: 15,
  img: "/images/10.webp",
  title: "Free Health Checkup Camp by Madalasa Foundation – GuruNank Park Sector-46 Gurugram",
  date: "26 June, 2024",
  desc: "More medical support...",
},
{
  id: 16,
  img: "/images/12.webp",
  title: "Madalasa Community Care Camp at Chotu Ram Park, Sector 46 Gurugram",
  date: "2 July, 2024",
  desc: "More medical support...",
},
{
  id: 17,
  img: "/images/14.webp",
  title: "Free Health & Wellness Camp Supported by Madalasa Hospital and Madalasa Foundation",
  date: "8 July, 2024",
  desc: "More medical support...",
},
];

const ServicesPage = () => {
  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          All Activities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesPage;
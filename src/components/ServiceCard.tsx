import { Link } from "react-router-dom";

const ServiceCard = ({ item }: any) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      
      {/* IMAGE */}
      <div className="relative">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-[200px] object-cover"
        />

        {/* TAG */}
        <span className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-400 text-white text-xs px-3 py-1 rounded-full">
          Medical Camp
        </span>

        {/* DATE */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-sm px-3 py-2">
          {item.date}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm mb-3">
          {item.desc}
        </p>
        
        <Link to={`/service/${item.id}`}>
  Read More →
</Link>
     
      </div>
    </div>
  );
};

export default ServiceCard;
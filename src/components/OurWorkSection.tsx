import { BookOpen, PlusSquare, User } from "lucide-react";

const OurWorkSection = () => {
  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* 🔥 HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold text-red-500">
          OUR WORK
        </h2>

        <p className="text-gray-600 font-semibold mt-2 mb-12">
          Three Pillars of Madalasa Foundation
        </p>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">

            <img
              src="/images/work1.webp"
              alt="education"
              className="w-full h-[200px] object-cover rounded-lg"
            />

            {/* ICON */}
            <div className="flex justify-center -mt-8">
              <div className="bg-white border-2 border-red-500 p-3 rounded-lg shadow">
                <BookOpen className="text-red-500" size={24} />
              </div>
            </div>

            <h3 className="mt-4 text-[20px] font-bold text-blue-700">
              CHILD EDUCATION
            </h3>

            <p className="text-gray-600 font-semibold text-sm mt-2">
              Education is the basic human right and we work for implementation of this cause.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">

            <img
              src="/images/work2.webp"
              alt="health"
              className="w-full h-[200px] object-cover rounded-lg"
            />

            <div className="flex justify-center -mt-8">
              <div className="bg-white border-2 border-red-500 p-3 rounded-lg shadow">
                <PlusSquare className="text-red-500" size={24} />
              </div>
            </div>

            <h3 className="mt-4 font-bold text-[20px] text-blue-700">
              HEALTHCARE
            </h3>

            <p className="text-gray-600 font-semibold text-sm mt-2">
              We believe healthcare should be easily available to even those who can not afford.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">

            <img
              src="/images/work3.webp"
              alt="women"
              className="w-full h-[200px] object-cover rounded-lg"
            />

            <div className="flex justify-center -mt-8">
              <div className="bg-white border-2 border-red-500 p-3 rounded-lg shadow">
                <User className="text-red-500" size={24} />
              </div>
            </div>

            <h3 className="mt-4 font-bold text-[20px] text-blue-700">
              WOMEN EMPOWERMENT
            </h3>

            <p className="text-gray-600 font-semibold text-sm mt-2">
              We stand for health and hygiene facilities to be made available to every women.
            </p>
          </div>

        </div>

        {/* 🔥 BUTTON */}
        <div className="mt-12">
          <button className="border border-red- font-bold text-red-500 px-6 py-2 rounded-md hover:bg-red-500 hover:text-white transition">
            LEARN MORE...
          </button>
        </div>

      </div>

    </section>
  );
};

export default OurWorkSection;
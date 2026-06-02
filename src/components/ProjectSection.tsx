const ProjectSection = () => {
  return (
    <section className="bg-gradient-to-r bg-[#fff7f5] py-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* 🔥 LEFT CONTENT */}
        <div>

          {/* TAG */}
          <span className="bg-red-500 text-white px-4 py-1 rounded-md text-sm font-medium">
            PROJECT HIGHLIGHT
          </span>

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold mt-6 text-gray-900 leading-snug">
            S. D. PUBLIC SCHOOL, <br />
            KAROL BAGH, NEW DELHI
          </h2>

          {/* DESC */}
          <p className="text-gray-700 mt-6 leading-relaxed font-semibold max-w-md">
            We are sponsoring children school fee and day-to-day expenses
            for their betterment not only in education but also in terms
            of health, sports and social learning.
          </p>

          {/* BUTTON */}
          <button className="mt-8 border-2 border-red-500 text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition">
            Donate
          </button>

        </div>

        {/* 🔥 RIGHT IMAGE */}
        <div>
          <img
            src="/images/SCHOOL.webp"
            alt="project"
            className="w-full h-[350px] object-cover rounded-2xl shadow-xl"
          />
        </div>

      </div>

    </section>
  );
};

export default ProjectSection;
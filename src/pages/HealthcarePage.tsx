// import useDocumentTitle from "../hooks/useDocumentTitle";
import SEO from "../components/SEO";

const HealthcarePage: React.FC = () => {
  
  // useDocumentTitle("Healthcare - Madalasa Foundation");
  return (
    <>
      <SEO
        title="Healthcare - Madalasa Foundation"
        description="We partner with Madalasa Hospital in Gurugram to provide free healthcare and medical camps for those who cannot afford treatment."
        url="/healthcare"
      />

    <section className="bg-[#f8f9fb] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* 🔥 HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-500 tracking-widest">
            HEALTHCARE
          </h2>
        </div>

        {/* 🔥 MAIN */}
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* 🟠 SIDEBAR */}
          <div className="w-full md:w-64 flex-shrink-0 bg-white rounded-xl shadow-sm p-4">

            <p className="text-xs text-red-500 leading-snug mb-4">
              The three pillars of<br />Madalasa Foundation
            </p>

            <div className="space-y-2">

              {/* Child Education */}
              <div className="flex items-center gap-2 text-gray-600 px-3 py-2 rounded-md text-sm hover:bg-gray-100 cursor-pointer transition">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                Child Education
              </div>

              {/* Healthcare ACTIVE */}
              <div className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Healthcare
              </div>

              {/* Women */}
              <div className="flex items-center gap-2 text-gray-600 px-3 py-2 rounded-md text-sm hover:bg-gray-100 cursor-pointer transition">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                Women Empowerment
              </div>

            </div>
          </div>

          {/* 🟢 CONTENT */}
          <div className="flex-1 min-w-0 bg-white rounded-xl shadow-sm p-6 md:p-10">

            <h3 className="text-[30px] font-bold text-red-500 mb-3 leading-snug">
              Healthcare for all
            </h3>

            <p className="text-gray-600 text-md font-bold leading-relaxed mb-4">
              We believe everyone deserves healthcare, but not everyone is so lucky.
              We work closely with Madalasa Hospital in Gurugram to ensure this,
              by raising funds for those who don’t have the financial privilege
              to access the healthcare facilities they need.
            </p>

            <p className="text-red-500 font-bold text-[20px] mb-1">
              Through Our Partner Hospitals:
            </p>

            <p className="text-gray-600 text-md font-bold leading-relaxed mb-6">
              Madalasa Hospital, located at Gurugram, we aim at to provide free
              basic medical check-up along with financial support to treat complex
              diseases including life-threatening ones. The hospital is equipped
              with experienced doctors and latest medical technologies.
            </p>

            {/* 🔥 IMAGE */}
            <div className="flex justify-center">
              <img
                src="/images/hospital.webp"
                alt="Madalasa Hospital"
                className="w-full md:w-[60%] h-[560px] object-cover rounded-xl shadow-md hover:scale-[1.02] transition"
              />
            </div>

          </div>
        </div>

        {/* 🔥 INITIATIVE */}
        <div className="mt-16">

          <p className="text-[40px] text-red-500 font-bold uppercase tracking-widest mb-4">
            Our Initiatives
          </p>

          <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl ml-auto">

            {/* HEADER */}
            <div className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-5 py-3 text-base font-semibold">
              Free Health Camp
            </div>

            {/* 🔥 IMAGE */}
            <div className="flex justify-center p-6">
              <img
                src="/images/slide1.webp"
                alt="Free Health Camp"
                className="w-full max-w-[580px] h-auto object-contain"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
    </>
  );
};

export default HealthcarePage;
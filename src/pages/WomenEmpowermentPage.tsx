// import useDocumentTitle from "../hooks/useDocumentTitle";
import SEO from "../components/SEO";

const WomenEmpowermentPage: React.FC = () => {
  // useDocumentTitle("Women Empowerment - Madalasa Foundation");
  return (
    <>
      <SEO
        title="Women Empowerment - Madalasa Foundation"
        description="Madalasa Foundation empowers woment through skill development, awareness and coummunity support programs."
        url="/women - empowerment"
      />
    <section className="bg-[#f8f9fb] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* 🔥 HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-500 tracking-widest">
            WOMEN EMPOWERMENT
          </h2>
        </div>

        {/* 🔥 MAIN */}
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* 🟠 SIDEBAR */}
          <div className="w-full md:w-64 flex-shrink-0 bg-white rounded-xl shadow-sm p-4">

            <p className="text-md text-red-500 leading-snug mb-4">
              The three pillars of<br />Madalasa Foundation
            </p>

            <div className="space-y-2">

              {/* Child */}
              <div className="flex items-center gap-2 text-gray-600 px-3 py-2 rounded-md text-sm hover:bg-gray-100 cursor-pointer transition">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                Child Education
              </div>

              {/* Healthcare */}
              <div className="flex items-center gap-2 text-gray-600 px-3 py-2 rounded-md text-sm hover:bg-gray-100 cursor-pointer transition">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                Healthcare
              </div>

              {/* ACTIVE */}
              <div className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Women Empowerment
              </div>

            </div>
          </div>

          {/* 🟢 CONTENT */}
          <div className="flex-1 min-w-0 bg-white rounded-xl shadow-sm p-6 md:p-10">

            <h3 className="text-[35px] font-bold text-red-500 mb-4 leading-snug">
              Women Deserve Respect, Growth, Happiness and Safety...
            </h3>

            <p className="text-gray-600 text-xl font-semibold leading-relaxed mb-4">
              Madalasa Foundation has recently entered into a Memorandum of Understanding
              with Deputy Commissioner of Police (Welfare), New Delhi; wherein both the parties
              have mutually agreed to work together for the successful implementation of the project.
            </p>

            <p className="text-gray-600 text-xl font-semibold leading-relaxed mb-4">
              DCP (welfare) has provided approval for installing KOKO LADY and KOKONATOR at various
              women’s washrooms at Delhi Police Stations, Delhi Police Headquarters and its facilities
              in Delhi along with free space and electricity to run the machines.
            </p>

            <p className="text-gray-600 text-xl font-semibold leading-relaxed mb-4">
              The project is under the aegis of the PHD Chamber of Commerce and Industry (PHDCCI),
              a quintessential force in guiding and mentoring the project at an overall level.
            </p>

            <p className="text-gray-600 text-xl font-semibold leading-relaxed mb-4">
              However, we think our efforts would go even further with your support as our official
              corporate sponsor and add unparalleled drive to the noble cause being initiated through this project.
            </p>

            <p className="text-gray-600 text-xl font-semibold leading-relaxed mb-4">
              As a show of gratitude, we would display your company/organisation’s logo on the vending machine
              across several installations. A support of Rs. 70,000 (including all taxes) is needed to supply
              and install one combined unit of Sanitary Pad dispensing and incinerator.
            </p>

            <p className="text-gray-600 text-xl font-semibold leading-relaxed mb-6">
              It is our vision to bring a change and make the lives of women across the country hassle free.
              Together we can eliminate such barriers and ensure dignity, safety and access to essential needs.
            </p>

            {/* 🔥 IMAGE */}
            <div className="flex justify-center">
              <img
                src="/images/women.webp"
                alt="Women Empowerment"
                className="w-full md:w-[95%] h-[520px] object-cover rounded-xl shadow-md hover:scale-[1.02] transition"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default WomenEmpowermentPage;
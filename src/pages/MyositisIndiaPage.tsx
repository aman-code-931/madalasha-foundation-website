// import useDocumentTitle from "../hooks/useDocumentTitle";
import SEO from "../components/SEO";

const MyositisIndiaPage: React.FC = () => {
  // useDocumentTitle("Myositis India - Madalasa Foundation");
  return (
    <>
      <SEO
        title="Myositis India - Madalasa Foundation"
        description="Madalasa Foundation supports Myositis patients across India with awareness and medical assistance."
        url="/myositis-india"
      />
    <section className="bg-[#f8f9fb] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* 🔥 HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-red-500 tracking-widest">
            MYOSITIS INDIA
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

              <div className="flex items-center gap-2 text-gray-600 px-3 py-2 rounded-md text-sm hover:bg-gray-100 cursor-pointer">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                Child Education
              </div>

              <div className="flex items-center gap-2 text-gray-600 px-3 py-2 rounded-md text-sm hover:bg-gray-100 cursor-pointer">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                Healthcare
              </div>

              <div className="flex items-center gap-2 text-gray-600 px-3 py-2 rounded-md text-sm hover:bg-gray-100 cursor-pointer">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                Women Empowerment
              </div>

            </div>
          </div>

          {/* 🟢 CONTENT */}
          <div className="flex-1 min-w-0 bg-white rounded-xl shadow-sm p-6 md:p-10">

            {/* 🔥 LOGO IMAGE */}
            <div className="flex justify-center mb-6">
              <img
                src="/images/myositis.webp"
                alt="Myositis India"
                className="w-full md:w-[70%] h-[200px] object-contain"
              />
            </div>

            <p className="text-blue-600 font-bold mb-4">
              Myositis India is operating under the auspices of the Madalasa Foundation.
            </p>

            <p className="text-red-500 font-bold mb-3">
              Goals of Myositis India:
            </p>

            <ol className="list-decimal pl-5 space-y-3 text-gray-700 font-bold text-md leading-relaxed mb-6">
              <li>
                Raise Awareness: Educate the public and healthcare professionals about
                Myositis and other rare chronic diseases characterized by muscle inflammation.
              </li>
              <li>
                Support Affected Individuals: Provide resources, information, and support
                to improve the quality of life for individuals diagnosed with Myositis.
              </li>
              <li>
                Promote Research: Advocate for and support research initiatives aimed at
                understanding, diagnosing, and treating Myositis.
              </li>
              <li>
                Enhance Accessibility: Facilitate access to healthcare services and financial
                assistance for those affected by Myositis.
              </li>
              <li>
                Foster Community: Build a supportive community for patients and their families
                to share experiences and resources.
              </li>
            </ol>

            <p className="text-gray-700 text-md font-bold">
              For more information on Myositis India visit:{" "}
              <a
                href="https://www.myositisindia.org/"
                target="_blank"
                className="text-blue-600 underline"
              >
                www.myositisindia.org
              </a>
            </p>

          </div>

        </div>

      </div>
    </section>
    </>
  );
};

export default MyositisIndiaPage;
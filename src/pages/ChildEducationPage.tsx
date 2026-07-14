// import useDocumentTitle from "../hooks/useDocumentTitle";
import SEO from "../components/SEO";

const ChildEducationPage: React.FC = () => {
  // useDocumentTitle("Child Education - Madalasa Foundation");
  return (
    <>
      <SEO
        title="Child Education - Madalasa Foundation"
        description="Madalasa Foundation provides educational support and resources to underprivilleged children."
        url="/child-education"
      />
    <section className="bg-[#f8f9fb] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* 🔥 HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-500 tracking-widest">
            CHILD EDUCATION
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

              <div className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Child Education
              </div>

              <div className="flex items-center gap-2 text-gray-600 px-3 py-2 rounded-md text-sm hover:bg-gray-100 cursor-pointer transition">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                Healthcare
              </div>

              <div className="flex items-center gap-2 text-gray-600 px-3 py-2 rounded-md text-sm hover:bg-gray-100 cursor-pointer transition">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                Women Empowerment
              </div>

            </div>
          </div>

          {/* 🟢 CONTENT */}
          <div className="flex-1 min-w-0 bg-white rounded-xl shadow-sm p-6 md:p-10">

            <h3 className="text-xl font-semibold text-red-500 mb-3 leading-snug">
              We believe that only Education is for everyone...
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Everyone assumes that the education is a basic human right. But how many children
              actually access to education beyond the local school? Geniuses can be found anywhere
              and that's why we provide scholarships to promising students via our partner schools.
            </p>

            <p className="text-red-500 font-semibold text-sm mb-1">
              Partner Schools:
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              After appreciating the need of children, we got associated with S. D. Public School
              of Karol Bagh, New Delhi – 110005 to enable under-privileged children gain education
              through sponsoring children school fee and day-to-day expenses.
            </p>

            {/* 🔥 IMAGE (FIXED WIDTH + PREMIUM) */}
            <div className="flex justify-center">
              <img
                src="/images/SCHOOL.webp"
                alt="school"
                className="w-full md:w-[95%] h-[560px] object-cover rounded-xl shadow-md hover:scale-[1.02] transition"
              />
            </div>

          </div>
        </div>

        {/* 🔥 INITIATIVES */}
        <div className="mt-16">

          <p className="text-[40px] text-red-500 font-bold uppercase tracking-widest mb-4">
            Our Initiatives
          </p>

          <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl ml-auto">

            {/* HEADER */}
            <div className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-5 py-3 text-base font-semibold">
              Basic Balika Shiksha
            </div>

            {/* 🔥 IMAGE (VERTICAL FIX) */}
            <div className="flex justify-center p-6">
              <img
                src="/images/child.webp"
                alt="initiative"
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

export default ChildEducationPage;
















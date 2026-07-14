// import useDocumentTitle from "../hooks/useDocumentTitle";
import SEO from "../components/SEO";
const AboutPage = () => {
  // useDocumentTitle("About Us - Madalasa Foundation");
  

  return (
    <>
    <SEO
  title="About Us - Madalasa Foundation"
  description="Madalasa Foundation works towards Education, Healthcare and Women Empowerment since 2021, ensuring basic rights reach every underprivileged community."
  url="/about"
/>
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* 🔥 SECTION 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div >
            <img
              src="/images/about.webp"
              alt="logo"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* RIGHT TEXT */}
          <div>
            <p className="text-gray-700 leading-relaxed font-bold text-[20px]">
              At Madalasa Foundation, we believe that to ensure a better
              tomorrow, we need to make today better. Access is basic right
              for all, but not everyone is lucky enough to have access to
              even simple basics like Education Healthcare and Sanitary Pads
              that the rest of us are take for granted. We have made it our
              mission to help people gain access to these basic rights in an
              attempt to make lives better – today and tomorrow.
            </p>
          </div>

        </div>

        {/* 🔥 SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div>
            <p className="text-gray-700 leading-relaxed font-bold text-[20px]">
              Madalasa Foundation was setup in 2021 by a group of people
              who are inspired by the values of motherhood – Wellness, Care,
              Respect and Empathy. These values inspires us every day to help
              those who need it most. We focus on three core areas that require
              attention today to make better tomorrow – Education, Healthcare
              and Women Empowerment. These are the three pillars of Madalasa
              Foundation.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="/images/about0.webp"
              alt="child"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

        </div>

      </div>

    </section>
    </>
  );
};

export default AboutPage;
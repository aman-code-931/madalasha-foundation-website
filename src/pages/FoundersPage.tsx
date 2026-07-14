// import useDocumentTitle from "../hooks/useDocumentTitle";
import SEO from "../components/SEO";

const founders = [
  {
    id: 1,
    name: "Praveen Kumar Aggarwal",
    role: "Founder",
    image: "/images/sir1.webp",
    desc: `While CA Praveen Kumar Aggarwal has spent the last four decades as an expert tax advisor, he has always been passionate about building a world we will all be proud to call a home. He is the heart and soul behind the formation of Madalasa Foundation and works tirelessly every day towards every single cause we stand for.`,
  },
  {
    id: 2,
    name: "Rahul Aggarwal",
    role: "Director",
    image: "/images/sir2.webp",
    desc: `Rahul Aggarwal is an FCA from the Institute of Chartered Accountants of India and holds an MBA from Manchester Business School, UK. With over 20 years of experience in Business Advisory Services, Audit, and Tax & Other Compliance in India, he is passionate about providing affordable healthcare and education.`,
  },
];

const FoundersPage = () => {
  
  return (
    <>
      <SEO
        title="Healthcare - Madalasa Foundation"
        description="We partner with Madalasa Hospital in Gurugram to provide free healthcare and medical camps for those who cannot afford treatment."
        url="/founders"
      />
    <section className="bg-gray-100 min-h-screen">

      {/* TOP HEADER BAR */}
      <div className="bg-gray-200 py-14 text-center mb-16">
        <h2 className="text-5xl font-bold text-red-500 tracking-widest">
          OUR FOUNDERS
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-10 pb-20">

        {/* SUB HEADING */}
        <h3 className="text-3xl font-bold text-red-500 mb-10">
          Meet Our Founding Team
        </h3>

        {/* CARDS LIST */}
        <div className="space-y-10">
          {founders.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg p-10 flex items-start gap-12 shadow-sm"
            >

              {/* IMAGE */}
              <div className="flex-shrink-0 w-[300px] h-[260px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center">
                <h4 className="text-4xl font-bold text-blue-800 mb-2">
                  {item.name}
                </h4>

                <p className="text-red-500 text-xl font-semibold mb-5">
                  {item.role}
                </p>

                <p className="text-gray-900 text-xl leading-relaxed font-bold">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
    </>
  );
};

export default FoundersPage;
import { useNavigate } from "react-router-dom";

const DonateCTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#7b7fb2] py-24 text-white">

      <div className="max-w-7xl mx-auto px-10">

        {/* TOP SMALL TEXT */}
        <p className="uppercase text-sm tracking-wider font-semibold opacity-80 mb-4">
          Your help will be an aid to our efforts
        </p>

        {/* MAIN HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Contribute now | Become a Doner
        </h2>

        {/* DESCRIPTION */}
        <p className="text-lg font-semibold leading-relaxed max-w-5xl">
          If you believe in what we’re doing right and would like to help us out,
          please consider donating to our causes. Every donation no matter how small,
          can go a long way in making a difference. You will also be eligible to claim
          your donation as deduction under{" "}
          <span className="font-semibold">
            Section 80 G of the Income Tax Act.
          </span>
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex gap-5">

          <button
            onClick={() => navigate("/donate")}
            className="bg-gradient-to-r from-red-500 to-orange-400 px-6 py-3 rounded-md font-semibold"
          >
            DONATE NOW
          </button>


          <button
  onClick={() => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("contact");

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }}
  className="border border-white px-6 py-3 rounded-md font-semibold"
>
  CONTACT US
</button>

        </div>

      </div>

    </section>
  );
};

export default DonateCTASection;
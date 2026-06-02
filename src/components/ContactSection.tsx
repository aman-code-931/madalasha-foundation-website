const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-6xl font-bold">
            Contact <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-gray-500 mt-3 font-semibold">
            We’re here to help you. Send us your message anytime.
          </p>
        </div>

        {/* 🔥 CARD */}
        <div className="bg-white bg-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100">

          <form className="flex flex-col gap-8 font-semibold">

            {/* INPUTS */}
            {[
              "Enter Your Name",
              "Enter Phone No.",
              "Email Address",
              "Subject",
            ].map((placeholder, i) => (
              <input
                key={i}
                type="text"
                placeholder={placeholder}
                className="bg-transparent border-b border-gray-300 pb-2 outline-none focus:border-orange-500 focus:scale-[1.01] transition"
              />
            ))}

            {/* TEXTAREA */}
            <textarea
              rows={4}
              placeholder="Your Message"
              className="bg-transparent border-b border-gray-300 pb-2 outline-none focus:border-orange-500 focus:scale-[1.01] transition"
            />

            {/* BUTTON */}
            <button className="mt-6 bg-gradient-to-r from-red-500 to-orange-400 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-[1.02] transition">
              Send Message →
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
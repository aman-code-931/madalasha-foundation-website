import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Share2,
  Heart,
  Star,
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const goHome = () => {
  navigate("/");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollToSection = (id: string) => {
  navigate("/");

  setTimeout(() => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* 🟠 LOGO + ABOUT */}
          <div>
            <img
              src="/images/logo1.svg"
              alt="logo"
              className="w-40 mb-4"
            />

            <p className="text-gray-400 leading-relaxed">
              Empowering communities through healthcare, education,
              and social initiatives. Together we build a better future.
            </p>
          </div>

          {/* 🟠 QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              {["Home", "About Us", "Free Health Camps", "Gallery", "Contact"].map(
                (item, i) => (
                  <li
                    key={i}
                    onClick={() => {
        if (item === "Home") goHome();
        if (item === "About Us") navigate("/about");
        if (item === "Free Health Camps") scrollToSection("services");
        if (item === "Gallery") scrollToSection("gallery");
        if (item === "Contact") scrollToSection("contact");
      }}
                    className="flex items-center gap-2 hover:text-white cursor-pointer group transition"
                  >
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition"
                    />
                    {item}
                  </li>
                )
              )}

            </ul>
          </div>

          {/* 🟠 CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">
              Contact Info
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3 hover:text-white transition">
                <Mail size={18} className="text-orange-400" />
                <span>info@madalasafoundation.org</span>
              </div>

              <div className="flex items-center gap-3 hover:text-white transition">
                <Phone size={18} className="text-orange-400" />
                <span>+91 9876543210</span>
              </div>

              <div className="flex items-center gap-3 hover:text-white transition">
                <MapPin size={18} className="text-orange-400" />
                <span>Gurgaon, India</span>
              </div>

            </div>
          </div>

          {/* 🟠 SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">
              Follow Us
            </h3>

            <div className="flex gap-4">

              {[Share2, Heart, Star].map((Icon, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-linear-to-r hover:from-red-500 hover:to-orange-400 transition cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* 🔵 DIVIDER */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

          <p>
            © {new Date().getFullYear()} All Rights Reserved
          </p>

          {/* SCROLL TOP */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 md:mt-0 bg-linear-to-r from-red-500 to-orange-400 p-2 rounded-full hover:scale-110 transition"
          >
            ↑
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
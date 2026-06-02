

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openWork, setOpenWork] = useState(false); // 🔥 mobile dropdown
  const [openAbout, setOpenAbout] = useState(false);
  const navigate = useNavigate();

  // ✅ HOME
  const goHome = () => {
    setIsOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ SCROLL
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* LOGO */}
        <img
          src="/images/logo.png"
          alt="logo"
          className="h-12 md:h-14 cursor-pointer"
          onClick={goHome}
        />

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 font-medium text-gray-800">

          <li onClick={goHome} className="hover:text-red-500 cursor-pointer">
            Home
          </li>

          {/* 🔽 OUR WORK */}
          <li className="relative group py-2 cursor-pointer">

            <div className="hover:text-red-500">
              Our Work ▾
            </div>

            <div className="absolute top-full left-0 pt-0 bg-white shadow-lg rounded-xl py-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">

              <div
  onClick={() => navigate("/child-education")}
  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
>
  Child Education
</div>

              <div onClick={() => navigate("/healthcare")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Healthcare
              </div>

              <div onClick={() => navigate("/women-empowerment")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Women Empowerment
              </div>

              <div onClick={() => navigate("/myositis-india")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Myositis India
              </div>

            </div>
          </li>

          <li className="relative group py-2 cursor-pointer">

  {/* CLICK + TEXT */}
  <div
    onClick={() => navigate("/about")}
    className="hover:text-red-500"
  >
    About Us ▾
  </div>

  {/* DROPDOWN */}
  <div className="absolute top-full left-0 pt-0 bg-white shadow-lg rounded-xl py-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">

    <div
      onClick={() => navigate("/founders")}
      className="px-4 py-2 hover:bg-gray-100"
    >
      Our Founders
    </div>

  </div>

</li>

          <li onClick={() => scrollToSection("services")} className="hover:text-red-500 cursor-pointer">
            Free Health Camps
          </li>

          <li onClick={() => scrollToSection("gallery")} className="hover:text-red-500 cursor-pointer">
            Media
          </li>

          <li onClick={() => scrollToSection("contact")} className="hover:text-red-500 cursor-pointer">
            Contact Us
          </li>

        </ul>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          <button
  onClick={() => navigate("/donate")}
  className="hidden md:block bg-gradient-to-r from-red-500 to-orange-400 text-white px-5 py-2 rounded-full"
>
  Donate
</button>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">

          <ul className="flex flex-col gap-4 font-medium">

            <li onClick={goHome}>Home</li>

            {/* 🔽 MOBILE OUR WORK */}
            <div
              onClick={() => setOpenWork(!openWork)}
              className="flex justify-between items-center cursor-pointer"
            >
              Our Work
              <span className={`transition ${openWork ? "rotate-180" : ""}`}>
                ▼
              </span>
            </div>

            {openWork && (
              <>
                <li onClick={() => navigate("/child-education")}>Child Education</li>
                <li onClick={() => navigate("/healthcare")}>Healthcare</li>
                <li onClick={() => navigate("/women-empowerment")}>Women Empowerment</li>
                <li onClick={() => navigate("/myositis-india")}>Myositis India</li>
              </>
            )}

            {/* <li onClick={() => navigate("/about")}>About Us</li> */}
            <div className="flex justify-between items-center">

  {/* ✅ TEXT CLICK → ABOUT PAGE */}
  <span
    onClick={() => {
      setIsOpen(false);
      setOpenAbout(false);
      navigate("/about");
    }}
    className="cursor-pointer"
  >
    About Us
  </span>

  {/* ✅ ARROW CLICK → DROPDOWN */}
  <span
    onClick={() => setOpenAbout(!openAbout)}
    className={`cursor-pointer transition ${openAbout ? "rotate-180" : ""}`}
  >
    ▼
  </span>

</div>

{/* ✅ DROPDOWN */}
{openAbout && (
  <li
    onClick={() => {
      setIsOpen(false);
      setOpenAbout(false);
      navigate("/founders");
    }}
  >
    Our Founders
  </li>
)}
  

            <li onClick={() => scrollToSection("services")}>
              Free Health Camps
            </li>

            <li onClick={() => scrollToSection("gallery")}>Media</li>

            <li onClick={() => scrollToSection("contact")}>Contact Us</li>

          </ul>

          <button
  onClick={() => {
    setIsOpen(false);
    navigate("/donate");
  }}
  className="mt-4 w-full bg-gradient-to-r from-red-500 to-orange-400 text-white py-2 rounded-full"
>
  Donate
</button>

        </div>
      )}

    </nav>
  );
};

export default Navbar;
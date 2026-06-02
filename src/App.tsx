
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import AboutSection from "./components/AboutSection";
import OurWorkSection from "./components/OurWorkSection";
import ProjectSection from "./components/ProjectSection";
import ServingSection from "./components/ServingSection";
import FeaturedServices from "./components/FeaturedServices";
import DonateCTASection from "./components/DonateCTASection";
import GallerySection from "./components/GallerySection";
import TeamDonateSection from "./components/TeamDonateSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import ServicesPage from "./pages/ServicesPage";
import ServiceDetail from "./pages/ServiceDetail";
import AboutPage from "./pages/AboutPage";
import DonatePage from "./pages/DonatePage";
import FoundersPage from "./pages/FoundersPage";
import ChildEducationPage from "./pages/ChildEducationPage";
import HealthcarePage  from "./pages/HealthcarePage";
import WomenEmpowermentPage from "./pages/WomenEmpowermentPage";
import MyositisIndiaPage from "./pages/MyositisIndiaPage";


function App() {
  return (
    <BrowserRouter>

      {/* Navbar always visible */}
      <Navbar />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Slider />
              <AboutSection />
              <OurWorkSection />
              <ProjectSection />
              <ServingSection />
              <FeaturedServices />
              <DonateCTASection />
              <GallerySection />
              <TeamDonateSection />
              <ContactSection />
              
            </>
          }
        />

        {/* VIEW MORE PAGE */}
        <Route path="/services" element={<ServicesPage />} />
        {/* <Route path="/pages/ServiceDetail" element={<ServiceDetail />} /> */}
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/founders" element={<FoundersPage />} />
        <Route path="/child-education" element={<ChildEducationPage />} />
        <Route path="/healthcare" element={<HealthcarePage />} />
        <Route path="/women-empowerment" element={<WomenEmpowermentPage />} />
        <Route path="/myositis-india" element={<MyositisIndiaPage />} />

      </Routes>
      <Footer />  {/* Footer always visible - iss sai footer har jagah Dikhega*/}

    </BrowserRouter>
  );
}

export default App;
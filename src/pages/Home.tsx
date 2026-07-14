// import useDocumentTitle from "../hooks/useDocumentTitle";
import SEO from "../components/SEO";

import Slider from "../components/Slider";
import AboutSection from "../components/AboutSection";
import OurWorkSection from "../components/OurWorkSection";
import ProjectSection from "../components/ProjectSection";
import ServingSection from "../components/ServingSection";
import FeaturedServices from "../components/FeaturedServices";
import DonateCTASection from "../components/DonateCTASection";
import GallerySection from "../components/GallerySection";
import TeamDonateSection from "../components/TeamDonateSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  // useDocumentTitle("Madalasa Foundation - Home");

  return (
    <>
      <SEO
        title="Madalasa Foundation - Home"
        description="Madalasa Foundation is dedicated to Education, Healthcare and Women Empowerment, helping underserved communities in Gurugram since 2021."
        url="/"
      />
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
    </>
  );
};

export default Home;
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import CulturalEventsGallery from "@/components/CulturalEventsGallery";
import ExcursionGallery from "@/components/ExcursionGallery";
import SchoolEnvironmentGallery from "@/components/SchoolEnvironmentGallery";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollButton from "@/components/ScrollButton";
import ScrollToTop from "@/components/ScrollToTop";
import AIInEducation from "@/components/AIInEducation";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />

        <div className="bg-gradient-to-b from-white to-gray-50">
          <About />
          <SchoolEnvironmentGallery />
          <Gallery />
          <CulturalEventsGallery />
          <ExcursionGallery />
          <Contact />
        </div>
      </main>
      <WhatsAppButton phoneNumber="233246186629" />
      <ScrollButton />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Index;
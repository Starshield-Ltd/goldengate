import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollButton from "@/components/ScrollButton";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
      <WhatsAppButton phoneNumber="+233000000000" />
      <ScrollButton />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Index;
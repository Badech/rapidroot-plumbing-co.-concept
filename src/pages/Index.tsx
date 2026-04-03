import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChoose from "@/components/WhyChoose";
import CommonProblems from "@/components/CommonProblems";
import WaterHeaterHome from "@/components/WaterHeaterHome";
import ServiceAreaHome from "@/components/ServiceAreaHome";
import TrustValues from "@/components/TrustValues";
import FinalCTA from "@/components/FinalCTA";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <TrustStrip />
      <ServicesGrid />
      <WhyChoose />
      <CommonProblems />
      <WaterHeaterHome />
      <ServiceAreaHome />
      <TrustValues />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Index;


import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Pricing from "../components/sections/Pricing";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

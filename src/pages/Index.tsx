
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import ChatbotSolutions from "../components/sections/ChatbotSolutions";
import Portfolio from "../components/sections/Portfolio";
import Benefits from "../components/sections/Benefits";
import Pricing from "../components/sections/Pricing";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        if (isVisible) {
          element.classList.add("animate-fade-up");
          element.classList.remove("opacity-0");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <ChatbotSolutions />
      <Portfolio />
      <Benefits />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

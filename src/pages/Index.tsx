
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import ChatbotSolutions from "../components/sections/ChatbotSolutions";
import WebAutomation from "../components/sections/WebAutomation";
import Benefits from "../components/sections/Benefits";
import Pricing from "../components/sections/Pricing";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll animation
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

    // Smooth scrolling
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleSmoothScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <ChatbotSolutions />
      <WebAutomation />
      <Benefits />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

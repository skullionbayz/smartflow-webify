
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

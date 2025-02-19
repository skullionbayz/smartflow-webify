
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Pricing from "../components/sections/Pricing";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

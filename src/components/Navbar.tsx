
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 animate-fade-in">
            <img
              src="/lovable-uploads/59f4f242-9041-403c-b53a-c48af860b82b.png"
              alt="SmartFlow Solutions Logo"
              className="h-10 w-10 rounded-full object-contain"
            />
            <span className="text-xl font-semibold text-primary tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">SmartFlow Solutions</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 animate-fade-in">
            <img
              src="/lovable-uploads/6e04640e-d2cb-4f3a-8d44-4e60c6f188a0.png"
              alt="Instagram"
              className="h-5 w-5 transform hover:scale-[2] hover:rotate-[-15deg] transition-all duration-300 cursor-pointer"
            />
            <img
              src="/lovable-uploads/405f27a9-dca3-48c0-9b32-2a442d5ed6c2.png"
              alt="TikTok"
              className="h-5 w-5 transform hover:scale-[2] hover:rotate-[15deg] transition-all duration-300 cursor-pointer"
            />
            <img
              src="/lovable-uploads/63795123-7230-497c-b91e-b7cd9a1f1ae7.png"
              alt="YouTube"
              className="h-5 w-5 transform hover:scale-[2] hover:rotate-[-15deg] transition-all duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

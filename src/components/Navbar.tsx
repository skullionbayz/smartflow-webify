
import { Instagram, Youtube, Music2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/59f4f242-9041-403c-b53a-c48af860b82b.png"
              alt="SmartFlow Solutions Logo"
              className="h-10 w-10 rounded-full object-contain"
            />
            <span className="text-xl font-semibold text-primary">SmartFlow Solutions</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Instagram className="h-5 w-5 text-gray-600" />
            <Music2 className="h-5 w-5 text-gray-600" />
            <Youtube className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

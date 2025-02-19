
const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 animate-fade-in">
            <img
              src="/lovable-uploads/59f4f242-9041-403c-b53a-c48af860b82b.png"
              alt="SmartFlow Solutions Logo"
              className="h-10 w-10 rounded-full object-contain"
            />
            <span className="text-xl font-semibold text-primary">SmartFlow Solutions</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 animate-fade-in">
            <img
              src="/lovable-uploads/6e04640e-d2cb-4f3a-8d44-4e60c6f188a0.png"
              alt="Instagram"
              className="h-5 w-5 transform hover:scale-110 transition-transform duration-200"
            />
            <img
              src="/lovable-uploads/405f27a9-dca3-48c0-9b32-2a442d5ed6c2.png"
              alt="TikTok"
              className="h-5 w-5 transform hover:scale-110 transition-transform duration-200"
            />
            <img
              src="/lovable-uploads/63795123-7230-497c-b91e-b7cd9a1f1ae7.png"
              alt="YouTube"
              className="h-5 w-5 transform hover:scale-110 transition-transform duration-200"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

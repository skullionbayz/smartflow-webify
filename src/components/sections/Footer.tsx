
const Footer = () => {
  return (
    <footer className="bg-primary/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Contact Us</h3>
            <div className="flex items-center text-gray-600 space-x-2">
              <div className="relative w-6 h-6">
                <img 
                  src="/lovable-uploads/c475d0d5-f695-4a79-9752-b1dc8d36c154.png"
                  alt="watercolor background" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <img
                  src="/lovable-uploads/d35c1625-245c-4cd0-ad3e-41a19966f462.png"
                  alt="Email"
                  className="relative z-10 h-6 w-6"
                />
              </div>
              <span>smartflowsolutions@protonmail.com</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <img
                src="/lovable-uploads/6e04640e-d2cb-4f3a-8d44-4e60c6f188a0.png"
                alt="Instagram"
                className="h-6 w-6"
              />
              <img
                src="/lovable-uploads/405f27a9-dca3-48c0-9b32-2a442d5ed6c2.png"
                alt="TikTok"
                className="h-6 w-6"
              />
              <img
                src="/lovable-uploads/63795123-7230-497c-b91e-b7cd9a1f1ae7.png"
                alt="YouTube"
                className="h-6 w-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} SmartFlow Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

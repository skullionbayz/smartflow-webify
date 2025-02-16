
const Footer = () => {
  return (
    <footer className="bg-primary/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Contact Us</h3>
            <div className="flex items-center text-gray-600">
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

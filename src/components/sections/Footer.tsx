
import { Mail, Instagram, Music2, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Contact Us</h3>
            <a 
              href="mailto:smartflowsolutions@protonmail.com"
              className="flex items-center text-gray-600 hover:text-accent transition-colors duration-300 mb-2"
            >
              <Mail className="h-5 w-5 mr-2" />
              smartflowsolutions@protonmail.com
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/smartflowsolutionssa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-colors duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@smartflowsolutionssa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-colors duration-300"
              >
                <Music2 className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@smartflowsolutionsa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-colors duration-300"
              >
                <Youtube className="h-6 w-6" />
              </a>
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

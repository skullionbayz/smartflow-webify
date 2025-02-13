import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { ArrowRight, Bot, Globe, Clock, ChevronDown, ExternalLink } from "lucide-react";

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

  const services = [
    {
      icon: Bot,
      title: "Custom Chatbots",
      description: "AI-powered chatbots that handle customer inquiries 24/7",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Professional websites that convert visitors into customers",
    },
    {
      icon: Clock,
      title: "Business Automation",
      description: "Streamline your operations with smart automation solutions",
    },
  ];

  const portfolioItems = [
    {
      title: "TechCorp Solutions",
      description: "E-commerce platform with integrated inventory management",
      image: "/placeholder.svg",
    },
    {
      title: "GreenLife Market",
      description: "Sustainable products marketplace with real-time tracking",
      image: "/placeholder.svg",
    },
    {
      title: "MedConnect Pro",
      description: "Healthcare appointment scheduling system",
      image: "/placeholder.svg",
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-6 animate-fade-up">
            Automating Your Business with Smart Solutions
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto animate-fade-up">
            Custom Chatbots & Websites Designed to Save You Time and Keep Your Business Flowing Seamlessly
          </p>
          <div className="flex justify-center gap-4 animate-fade-up">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <a
            href="#services"
            className="inline-flex items-center mt-16 text-gray-600 hover:text-accent transition-colors duration-300 animate-fade-in"
          >
            <span className="mr-2">Explore Our Services</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive solutions to streamline your business operations
              and enhance your digital presence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <service.icon className="h-12 w-12 text-accent mb-6" />
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Our Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a look at some of the custom solutions we've delivered for our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-on-scroll opacity-0 overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center">
                    {item.title}
                    <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Why Choose SmartFlow
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of working with a team dedicated to your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "24/7 Automated Customer Service",
              "Increased Efficiency",
              "Cost Reduction",
              "Scalable Solutions",
              "Custom Integration",
              "Expert Support",
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-secondary/30 p-6 rounded-lg animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-primary font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help automate and scale your business.
            </p>
            <button className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

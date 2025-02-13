
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { ArrowRight, Bot, Globe, Clock, ChevronDown, ExternalLink, Check, Instagram, Music2, Youtube, Mail } from "lucide-react";

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

  const pricingPlans = [
    {
      name: "Basic Plan",
      price: "99",
      description: "Perfect for businesses starting with automation",
      features: [
        "Smart Chatbot for Social Media",
        "Instant responses to common inquiries",
        "Custom knowledge base integration",
        "Works on WhatsApp, Instagram & Facebook",
        "Professional business website",
        "Custom domain included",
        "Unlimited revisions",
      ],
    },
    {
      name: "Advanced Plan",
      price: "149",
      description: "Ideal for growing businesses needing more automation",
      features: [
        "Everything in Basic Plan",
        "Advanced website automation",
        "Automated lead tracking",
        "Personalized follow-up emails",
        "Extended chatbot capabilities",
        "Advanced response customization",
        "Priority support",
      ],
      recommended: true,
    },
    {
      name: "Premium Plan",
      price: "249",
      description: "Complete automation solution for established businesses",
      features: [
        "Everything in Advanced Plan",
        "AI-powered customer service chatbot",
        "24/7 intelligent responses",
        "Full business process automation",
        "Advanced analytics & reporting",
        "Custom integrations",
        "Dedicated support team",
      ],
    },
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan to automate and scale your business
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-on-scroll opacity-0 ${
                  plan.recommended ? "ring-2 ring-accent" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 bg-accent text-white text-sm rounded-full">
                    Recommended
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <button
                    className={`w-full py-2 px-4 rounded-lg mb-8 transition-colors duration-300 ${
                      plan.recommended
                        ? "bg-accent text-white hover:bg-accent/90"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                  >
                    Get Started
                  </button>
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="ml-3 text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
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

      {/* Footer */}
      <footer className="bg-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">SmartFlow Solutions</h3>
              <p className="text-gray-600 mb-2">♾️ Work smarter not harder, with automation.</p>
              <p className="text-gray-600 mb-2">💬 Custom websites & chatbots that work for you.</p>
              <p className="text-gray-600">🍃 Let your business flow effortlessly.</p>
            </div>
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
    </div>
  );
};

export default Index;

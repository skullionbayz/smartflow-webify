
import { Bot, Globe, Clock } from "lucide-react";

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

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="relative w-12 h-12">
                <img 
                  src={index % 2 === 0 ? "/lovable-uploads/c475d0d5-f695-4a79-9752-b1dc8d36c154.png" : "/lovable-uploads/1e83f3e7-6332-42a0-8a9a-044753b12d23.png"} 
                  alt="watercolor background" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <service.icon 
                  className="relative z-10 h-12 w-12" 
                  stroke="#000000" 
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4 mt-6">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

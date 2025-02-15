
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
  );
};

export default Services;


import { ExternalLink } from "lucide-react";

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

const Portfolio = () => {
  return (
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
  );
};

export default Portfolio;

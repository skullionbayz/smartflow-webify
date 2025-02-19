
import { Check } from "lucide-react";

const features = [
  "Custom professional design with smooth animations",
  "Interactive elements that engage visitors",
  "Responsive layout with elegant transitions",
  "Animated content reveals and hover effects",
  "Professional motion design elements",
  "Regular updates & feature enhancements",
  "Secure hosting with CDN integration",
  "24/7 technical support"
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative flex flex-col items-center py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 animate-fade-up">
            One Simple Plan
          </h2>
          <p className="text-gray-600 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Everything you need for an engaging online presence
          </p>
        </div>
        <div className="max-w-lg w-full animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Professional Animated Website
            </h3>
            <div className="mb-4 flex items-baseline">
              <span className="text-4xl font-bold text-primary">$49</span>
              <span className="text-gray-600">/month</span>
            </div>
            <p className="text-gray-600 mb-6 text-center">
              Custom-designed website with stunning animations
            </p>
            <button className="w-full py-3 px-4 rounded-lg mb-8 bg-accent hover:bg-accent-hover text-accent-foreground transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <div className="space-y-3 w-full">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start transform hover:scale-102 transition-transform duration-200 animate-fade-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="relative w-5 h-5 flex-shrink-0">
                    <img 
                      src="/lovable-uploads/c475d0d5-f695-4a79-9752-b1dc8d36c154.png"
                      alt="watercolor background" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <Check 
                      className="relative z-10 h-5 w-5 text-accent" 
                      stroke="#000000" 
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="ml-3 text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

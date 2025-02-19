
import { Check } from "lucide-react";

const features = [
  "Custom professional design",
  "Mobile-responsive layout",
  "Contact forms & integration",
  "Social media integration",
  "Search engine optimization",
  "Regular updates & maintenance",
  "Secure hosting included",
  "24/7 technical support"
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            One Simple Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need for a professional online presence
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Professional Website Package
            </h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-primary">$49</span>
              <span className="text-gray-600">/month</span>
            </div>
            <p className="text-gray-600 mb-6">Custom-designed website tailored to your brand</p>
            <button className="w-full py-3 px-4 rounded-lg mb-8 bg-accent text-accent-foreground">
              Get Started
            </button>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="relative w-5 h-5">
                    <img 
                      src="/lovable-uploads/c475d0d5-f695-4a79-9752-b1dc8d36c154.png"
                      alt="watercolor background" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <Check 
                      className="relative z-10 h-5 w-5 text-accent shrink-0 mt-0.5" 
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

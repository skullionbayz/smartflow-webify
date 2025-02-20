
import { Check } from "lucide-react";
import { useEffect } from "react";

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
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="relative flex flex-col items-center py-32 bg-gradient-to-b from-secondary/50 to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center relative z-10">
        <div className="text-center mb-16 flex flex-col items-center gap-4 reveal fade-bottom">
          <span className="px-4 py-1.5 bg-accent/50 rounded-full text-sm font-medium text-primary">
            Simple Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
            One Simple Plan
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Everything you need for an engaging online presence
          </p>
        </div>

        <div className="max-w-lg w-full reveal fade-bottom">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-accent/20">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl" />
            
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Professional Animated Website
              </h3>
              <div className="mb-4 flex items-baseline">
                <span className="text-5xl font-bold text-primary">$49</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <p className="text-gray-600 mb-8 text-center">
                Custom-designed website with stunning animations
              </p>
              
              <button className="w-full py-4 px-6 rounded-xl mb-10 bg-primary hover:bg-primary/90 text-white transition-all duration-300 transform hover:scale-105 group relative overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-hover opacity-0 group-hover:opacity-20 transition-opacity" />
              </button>

              <div className="space-y-4 w-full">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start group transform transition-all duration-300 hover:scale-102 reveal fade-bottom"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <div className="relative flex-shrink-0 w-5 h-5 mt-1">
                      <div className="absolute inset-0 bg-accent rounded-full opacity-20 group-hover:opacity-100 transition-opacity" />
                      <Check className="relative z-10 h-5 w-5 text-primary" strokeWidth={3} />
                    </div>
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

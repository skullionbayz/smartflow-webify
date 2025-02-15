
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Professional Business Website",
    price: "99",
    description: "Perfect for businesses needing a professional online presence",
    features: [
      "Professional business website",
      "Mobile responsive design",
      "Basic contact forms",
      "Business information pages",
      "Social media integration",
      "Search engine optimization",
      "Regular updates & maintenance",
    ],
  },
  {
    name: "Website & Instant Response Chatbot",
    price: "149",
    description: "Professional website with automated customer support",
    features: [
      "Everything in Professional Website",
      "Instant response chatbot",
      "24/7 automated responses",
      "Custom response templates",
      "Social media integration",
      "Regular chatbot updates",
      "Basic analytics dashboard",
    ],
    recommended: true,
  },
  {
    name: "Full Automation",
    price: "249",
    description: "Complete business automation solution",
    features: [
      "Smart Automation Website",
      "Smart AI Customer Service Chatbot",
      "Automated appointment booking",
      "Payment processing integration",
      "Auto blog content generation",
      "Automated review requests",
      "Missed call text automation",
    ],
  },
];

const Pricing = () => {
  return (
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
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 bg-accent text-accent-foreground text-sm rounded-full">
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
                      ? "bg-accent text-accent-foreground hover:bg-[#FFDEE2]"
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
  );
};

export default Pricing;

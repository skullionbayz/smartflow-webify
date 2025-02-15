
import { Check } from "lucide-react";

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
  );
};

export default Pricing;

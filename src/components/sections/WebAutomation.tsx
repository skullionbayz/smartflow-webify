
import { Globe, Bot, Sparkles, Calendar, CreditCard, Search, MessageSquare, Star } from "lucide-react";

const websiteTypes = [
  {
    title: "Professional Business Website",
    description: "A modern website for showcasing your business",
    features: [
      "Professional business information pages",
      "Mobile-friendly design",
      "Contact forms for inquiries",
      "Social media integration",
      "Basic SEO optimization",
      "Manual customer service"
    ],
    icon: Globe
  },
  {
    title: "Smart Automation Website",
    description: "Fully automated business operations",
    features: [
      "Online payment processing",
      "Automated appointment booking",
      "Auto-generated SEO blog posts",
      "Automated review collection",
      "Missed call text automation",
      "Lead capture automation",
      "Analytics dashboard"
    ],
    icon: Sparkles
  }
];

const automationFeatures = [
  {
    icon: Calendar,
    title: "Automated Scheduling",
    description: "Let customers book appointments 24/7 without manual intervention"
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Secure online payments and automated invoicing"
  },
  {
    icon: Search,
    title: "SEO Blog Automation",
    description: "Auto-generated content to improve your Google rankings"
  },
  {
    icon: Star,
    title: "Review Management",
    description: "Automated review requests to boost your online presence"
  },
  {
    icon: MessageSquare,
    title: "Follow-up System",
    description: "Automated text messages for missed calls and inquiries"
  },
  {
    icon: Bot,
    title: "Smart Integration",
    description: "Connects with your existing tools and workflows"
  }
];

const WebAutomation = () => {
  return (
    <section id="web-automation" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Website & Automation Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect website solution for your business needs
          </p>
        </div>

        {/* Website Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {websiteTypes.map((type, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <type.icon className="h-12 w-12 text-accent mb-6" />
              <h3 className="text-xl font-semibold text-primary mb-4">
                {type.title}
              </h3>
              <p className="text-gray-600 mb-6">{type.description}</p>
              <div className="space-y-3">
                {type.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Automation Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automationFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebAutomation;

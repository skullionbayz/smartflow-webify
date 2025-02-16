
import { Globe, Bot, Sparkles, Calendar, CreditCard, Search, MessageSquare, Star, Check } from "lucide-react";
import IconWithWatercolor from "../IconWithWatercolor";

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
    icon: Globe,
    watercolorSrc: "/lovable-uploads/968e1a47-6d99-4387-a580-97b08b43447f.png"
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
    icon: Sparkles,
    watercolorSrc: "/lovable-uploads/8967a3c5-55b1-49cc-9313-f7f052afa2c9.png"
  }
];

const automationFeatures = [
  {
    icon: Calendar,
    watercolorSrc: "/lovable-uploads/69f93d6e-1a99-482f-825c-88717106163a.png",
    title: "Automated Scheduling",
    description: "Let customers book appointments 24/7 without manual intervention"
  },
  {
    icon: CreditCard,
    watercolorSrc: "/lovable-uploads/accc886c-20da-4ffa-8e3d-ee4d63371ce6.png",
    title: "Payment Processing",
    description: "Secure online payments and automated invoicing"
  },
  {
    icon: Search,
    watercolorSrc: "/lovable-uploads/ed48f4c9-9ad0-469e-87ac-b23e50bda2db.png",
    title: "SEO Blog Automation",
    description: "Auto-generated content to improve your Google rankings"
  },
  {
    icon: Star,
    watercolorSrc: "/lovable-uploads/968e1a47-6d99-4387-a580-97b08b43447f.png",
    title: "Review Management",
    description: "Automated review requests to boost your online presence"
  },
  {
    icon: MessageSquare,
    watercolorSrc: "/lovable-uploads/8967a3c5-55b1-49cc-9313-f7f052afa2c9.png",
    title: "Follow-up System",
    description: "Automated text messages for missed calls and inquiries"
  },
  {
    icon: Bot,
    watercolorSrc: "/lovable-uploads/69f93d6e-1a99-482f-825c-88717106163a.png",
    title: "Smart Integration",
    description: "Connects with your existing tools and workflows"
  }
];

const WebAutomation = () => {
  return (
    <section id="web-automation" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Website & Automation Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect website solution for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {websiteTypes.map((type, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <IconWithWatercolor 
                Icon={type.icon} 
                watercolorSrc={type.watercolorSrc}
              />
              <h3 className="text-xl font-semibold text-primary mb-4 mt-6">
                {type.title}
              </h3>
              <p className="text-gray-600 mb-6">{type.description}</p>
              <div className="space-y-3">
                {type.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 shrink-0 mt-0.5" stroke="#000000" strokeWidth={1.5} />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automationFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <IconWithWatercolor 
                Icon={feature.icon} 
                watercolorSrc={feature.watercolorSrc}
              />
              <h3 className="text-lg font-semibold text-primary mb-2 mt-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebAutomation;

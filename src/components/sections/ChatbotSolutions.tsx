
import { Book, Settings, Bot, Check, MessageSquare, Brain } from "lucide-react";
import IconWithWatercolor from "../IconWithWatercolor";

const chatbotTypes = [
  {
    title: "Basic Response Chatbot",
    description: "Perfect for handling common customer inquiries with preset responses",
    features: [
      "Keyword-triggered responses",
      "24/7 automated customer support",
      "Handle common inquiries instantly",
      "Easy to set up and maintain",
      "Perfect for social media platforms",
      "Cost-effective solution"
    ],
    icon: MessageSquare,
    watercolorSrc: "/lovable-uploads/c475d0d5-f695-4a79-9752-b1dc8d36c154.png"
  },
  {
    title: "Smart AI Support Agent",
    description: "Advanced AI chatbot that learns and adapts to your business",
    features: [
      "Trained on your business knowledge",
      "Natural conversational flow",
      "Comprehensive product knowledge",
      "Policy-aware responses",
      "Sales support capabilities",
      "Detailed interaction analytics"
    ],
    icon: Brain,
    watercolorSrc: "/lovable-uploads/1e83f3e7-6332-42a0-8a9a-044753b12d23.png"
  }
];

const featureIcons = [
  {
    icon: Book,
    watercolorSrc: "/lovable-uploads/c475d0d5-f695-4a79-9752-b1dc8d36c154.png",
    title: "Knowledge Integration",
    description: "Our chatbots learn from your business documentation, ensuring accurate and consistent responses based on your specific products and procedures."
  },
  {
    icon: Settings,
    watercolorSrc: "/lovable-uploads/1e83f3e7-6332-42a0-8a9a-044753b12d23.png",
    title: "Customized Behavior",
    description: "Configure your chatbot to match your brand's tone of voice and follow your business policies for a seamless customer experience."
  },
  {
    icon: Bot,
    watercolorSrc: "/lovable-uploads/c475d0d5-f695-4a79-9752-b1dc8d36c154.png",
    title: "24/7 Support",
    description: "Provide instant responses to customer inquiries around the clock, ensuring no question goes unanswered."
  }
];

const ChatbotSolutions = () => {
  return (
    <section id="chatbots" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Smart Chatbot Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scale your support and free your team for higher-impact work with our customizable chatbot solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {chatbotTypes.map((type, index) => (
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
                    <div className="relative w-5 h-5">
                      <img 
                        src={"/lovable-uploads/c475d0d5-f695-4a79-9752-b1dc8d36c154.png"}
                        alt="watercolor background" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <Check className="relative z-10 h-5 w-5 shrink-0 mt-0.5" stroke="#000000" strokeWidth={1.5} />
                    </div>
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featureIcons.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <IconWithWatercolor 
                Icon={feature.icon} 
                watercolorSrc={feature.watercolorSrc}
              />
              <h3 className="text-xl font-semibold text-primary mb-4 mt-6">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChatbotSolutions;

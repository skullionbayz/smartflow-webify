
import { Book, Settings, Bot, Check, MessageSquare, Brain } from "lucide-react";

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
    icon: MessageSquare
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
    icon: Brain
  }
];

const ChatbotSolutions = () => {
  return (
    <section id="chatbots" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Smart Chatbot Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scale your support and free your team for higher-impact work with our customizable chatbot solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm animate-on-scroll opacity-0">
            <Book 
              className="h-12 w-12 mb-6" 
              stroke="#000000" 
              strokeWidth={1.5}
              fill="#E5DEFF"
            />
            <h3 className="text-xl font-semibold text-primary mb-4">Knowledge Integration</h3>
            <p className="text-gray-600">
              Our chatbots learn from your business documentation, ensuring accurate and consistent responses based on your specific products and procedures.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm animate-on-scroll opacity-0">
            <Settings 
              className="h-12 w-12 mb-6" 
              stroke="#000000" 
              strokeWidth={1.5}
              fill="#E5DEFF"
            />
            <h3 className="text-xl font-semibold text-primary mb-4">Customized Behavior</h3>
            <p className="text-gray-600">
              Configure your chatbot to match your brand's tone of voice and follow your business policies for a seamless customer experience.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm animate-on-scroll opacity-0">
            <Bot 
              className="h-12 w-12 mb-6" 
              stroke="#000000" 
              strokeWidth={1.5}
              fill="#E5DEFF"
            />
            <h3 className="text-xl font-semibold text-primary mb-4">24/7 Support</h3>
            <p className="text-gray-600">
              Provide instant responses to customer inquiries around the clock, ensuring no question goes unanswered.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {chatbotTypes.map((type, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <type.icon 
                className="h-12 w-12 mb-6" 
                stroke="#000000" 
                strokeWidth={1.5}
                fill="#E5DEFF"
              />
              <h3 className="text-xl font-semibold text-primary mb-4">
                {type.title}
              </h3>
              <p className="text-gray-600 mb-6">{type.description}</p>
              <div className="space-y-3">
                {type.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check 
                      className="h-5 w-5 shrink-0 mt-0.5" 
                      stroke="#000000" 
                      strokeWidth={1.5}
                      fill="#E5DEFF"
                    />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChatbotSolutions;


import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-6 animate-fade-up">
          Automating Your Business with Smart Solutions
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto animate-fade-up">
          Custom Chatbots & Websites Designed to Save You Time and Keep Your Business Flowing Seamlessly
        </p>
        <div className="flex justify-center gap-4 animate-fade-up">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <a
          href="#services"
          className="inline-flex items-center mt-16 text-gray-600 hover:text-accent transition-colors duration-300 animate-fade-in"
        >
          <span className="mr-2">Explore Our Services</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

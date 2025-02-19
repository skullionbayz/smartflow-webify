
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-6 animate-fade-up">
          Stunning Websites That Captivate
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Transform your online presence with a custom-designed website featuring elegant animations that leave a lasting impression
        </p>
        <div className="flex justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <button className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-hover text-accent-foreground rounded-lg transition-all duration-300 transform hover:scale-105">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

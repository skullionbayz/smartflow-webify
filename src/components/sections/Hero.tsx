
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-6">
          Professional Websites, Expertly Crafted
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Transform your online presence with a custom-designed, responsive website for just $49/month
        </p>
        <div className="flex justify-center gap-4">
          <button className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

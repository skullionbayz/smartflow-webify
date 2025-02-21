
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const Hero = () => {
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
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white to-secondary/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-hover/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full text-center flex flex-col items-center gap-6 relative z-10">
        <div className="reveal fade-bottom">
          <span className="inline-block px-4 py-1.5 bg-accent/50 rounded-full text-sm font-medium text-primary mb-6 animate-float">
            Transform Your Online Presence
          </span>
        </div>
        
        <h1 className="reveal fade-bottom text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
          Stunning Websites That Captivate
        </h1>
        
        <p className="reveal fade-bottom text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Transform your online presence with a custom-designed website featuring 
          <span className="text-accent-hover font-semibold"> elegant animations </span>
          that leave a lasting impression
        </p>
        
        <div className="reveal fade-bottom flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <button className="group relative px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <span className="relative z-10 inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-hover opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
          
          <button className="group relative px-8 py-4 bg-white hover:bg-accent/10 border-2 border-accent text-primary rounded-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-hover opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

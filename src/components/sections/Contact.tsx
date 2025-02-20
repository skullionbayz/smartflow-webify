
import { useEffect } from "react";
import { Send } from "lucide-react";

const Contact = () => {
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
    <section id="contact" className="relative flex flex-col items-center py-32 bg-primary text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/10 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-hover/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center relative z-10">
        <div className="reveal fade-bottom max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium mb-6">
            Get in Touch
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
            Ready for a Website That Stands Out?
          </h2>
          
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Get started today with a custom-designed website featuring captivating animations that will leave your visitors amazed.
          </p>

          <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <span className="relative z-10 font-medium inline-flex items-center">
              Contact Us
              <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-hover opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

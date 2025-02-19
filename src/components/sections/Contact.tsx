
const Contact = () => {
  return (
    <section id="contact" className="relative flex flex-col items-center py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready for a Website That Stands Out?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Get started today with a custom-designed website featuring captivating animations.
          </p>
          <button className="px-8 py-3 bg-accent hover:bg-accent-hover text-accent-foreground rounded-lg transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

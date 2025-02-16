
const Benefits = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Why Choose SmartFlow
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the benefits of working with a team dedicated to your success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "24/7 Automated Customer Service",
            "Increased Efficiency",
            "Cost Reduction",
            "Scalable Solutions",
            "Custom Integration",
            "Expert Support",
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-secondary/30 p-6 rounded-lg"
            >
              <p className="text-primary font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

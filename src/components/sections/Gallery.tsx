
import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const websites = [
  {
    title: "E-Commerce Solution",
    image: "/lovable-uploads/968e1a47-6d99-4387-a580-97b08b43447f.png",
    description: "Modern online store with smooth animations"
  },
  {
    title: "Portfolio Website",
    image: "/lovable-uploads/8967a3c5-55b1-49cc-9313-f7f052afa2c9.png",
    description: "Creative showcase with interactive elements"
  },
  {
    title: "Business Landing",
    image: "/lovable-uploads/accc886c-20da-4ffa-8e3d-ee4d63371ce6.png",
    description: "Professional design with engaging transitions"
  },
  {
    title: "Tech Platform",
    image: "/lovable-uploads/c475d0d5-f695-4a79-9752-b1dc8d36c154.png",
    description: "Advanced features with seamless UX"
  }
];

const Gallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

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
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal fade-bottom">
          <span className="inline-block px-4 py-1.5 bg-accent/50 rounded-full text-sm font-medium text-primary mb-6">
            Our Portfolio
          </span>
          <h2 className="text-4xl font-bold text-primary mb-4">
            Websites That Inspire
          </h2>
          <p className="text-xl text-gray-600">
            Browse through our collection of stunning websites
          </p>
        </div>

        <div className="relative group">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto pb-8 scroll-smooth hide-scrollbar"
          >
            {websites.map((website, index) => (
              <div
                key={index}
                className="flex-none w-80 reveal fade-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative group rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={website.image}
                      alt={website.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2">{website.title}</h3>
                    <p className="text-sm text-gray-200">{website.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          >
            <ArrowRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

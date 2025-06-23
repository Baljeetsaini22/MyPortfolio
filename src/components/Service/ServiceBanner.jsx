import { Link } from "react-router-dom";

const ServiceBanner = () => {
  
  return (
    <section id="services" className="w-full h-auto px-[7.5%] py-16 mt-18">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
          My Services
        </h1>
        <p className="mt-4 text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
          From UI design to full frontend development, I help individuals and businesses bring ideas to life with fast, elegant, and responsive websites.
        </p>

        {/* Contact Button */}
        <div className="mt-8">
          <Link
            to="/services"
            state={{ scrollTo: "contact" }}

            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-300 transition"
          >
            Contact Me
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default ServiceBanner;

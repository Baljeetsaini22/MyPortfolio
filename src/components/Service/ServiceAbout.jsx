const services = [
  {
    id: 1,
    title: "Portfolio Websites",
    description:
      "Custom-built portfolios to showcase your personal brand, achievements, and professional identity with elegance and performance.",
    side: "left",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Modern, scalable websites using React.js, Tailwind CSS, and best frontend practices for fast-loading, dynamic interfaces.",
    side: "right",
  },
  {
    id: 3,
    title: "UI Design",
    description:
      "Visually engaging and intuitive user interfaces, designed with precision and a focus on user experience and accessibility.",
    side: "left",
  },
  {
    id: 4,
    title: "Responsive Layouts",
    description:
      "Pixel-perfect, mobile-first responsive layouts that look and function seamlessly on any screen size.",
    side: "right",
  },
  {
    id: 5,
    title: "React Projects",
    description:
      "Single-page apps, dynamic components, and powerful UIs — all crafted with React.js and reusable code patterns.",
    side: "left",
  },
  {
    id: 6,
    title: "E-commerce Solutions",
    description:
      "Online store development including product display, cart, payment integration, and user-focused UX for better conversion.",
    side: "right",
  },
];

const ServiceAbout = () => {
  return (
    <section className="w-full h-auto px-[7.5%] py-16">
      <div className=" text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          My Services
        </h2>
        <p className="text-gray-300 mt-4">
          From design to deployment — I provide end-to-end solutions to build
          your presence on the web.
        </p>
      </div>

      {/* Services Grid */}
      <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-500 opacity-10 z-0"></div>

      <div className="relative z-10">
        {services.map((service) => (
          <div
            key={service.id}
            className={`mb-12 flex flex-col md:flex-row items-center ${
              service.side === "left" ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <div className="w-full md:w-[70%] bg-gray-900 px-6 py-15 rounded-xl shadow-[0_-5px_5px_#fff] hover:shadow-[0_5px_5px_#fbc618] transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceAbout;

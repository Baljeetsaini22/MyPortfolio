import React from "react";

const experiences = [
  {
    title: "Web Developer",
    company: "Soft Agency, San Francisco, CA",
    duration: "2045 - 2050",
    description:
      "Developed responsive web applications using React.js and Tailwind CSS. Collaborated with designers to bring concepts to life.",
  },
  {
    title: "Frontend Developer",
    company: "Creative Labs, New York, NY",
    duration: "2040 - 2045",
    description:
      "Built UI components, optimized performance, and implemented modern JavaScript frameworks.",
  },
  {
    title: "Junior Developer",
    company: "StartHub, Remote",
    duration: "2035 - 2040",
    description:
      "Worked on basic frontend tasks and learned scalable design and development practices.",
  },
];

const Experience = () => {
  return (
    <section className=" py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Working Experience</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-yellow-400"></div>

          {/* Timeline Items */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-16 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Content Box */}
              <div
                className={`bg-gray-900800 transition-all duration-300 rounded-xl hover:scale-105 shadow-[0_1px_1px_2px_#fdc700,0_-1px_1px_2px_#fff] hover:shadow-[0_-1px_1px_2px_#fdc700,0_1px_1px_2px_#fff] border p-6 w-full md:w-[45%] ${
                  index % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                }`}
              >
                <h3 className="text-xl text-yellow-400 font-semibold">{exp.title}</h3>
                <p className="text-gray-500 italic">{exp.company}</p>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </div>

              {/* Circle & Date */}
              <div className="absolute flex flex-col items-center left-1/2 transform -translate-x-1/2 text-center">
                <div className="w-4 h-4 border-4 border-yellow-400 rounded-full mb-2"></div>
                <span className="text-yellow-400 font-semibold">{exp.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
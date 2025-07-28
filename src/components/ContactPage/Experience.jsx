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
    <section className=" w-full px-[7.5%] py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Working Experience
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 md:left-1/2 left-0 transform -translate-x-1/2 h-full border-l-2 border-yellow-400"></div>
          {/* Timeline Items */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-16 flex flex-col md:flex-row items-center pl-10 md:p-0 ${
                index % 2 !== 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Content Box */}
                <div
                  className={`md:w-[45%] bg-gray-900800 transition-all duration-300 rounded-xl hover:scale-105 shadow-[0_1px_1px_2px_#fdc700,0_-1px_1px_2px_#fff] hover:shadow-[0_-1px_1px_2px_#fdc700,0_1px_1px_2px_#fff] border p-6 ${
                    index % 2 == 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                  }`}
                >
                  <h3 className="text-xl text-yellow-400 font-semibold">
                    {exp.title}
                  </h3>
                  <p className="text-gray-500 italic">{exp.company}</p>
                  <p className="text-gray-700 mt-2">{exp.description}</p>
                </div>

              {/* Circle & Date */}
              <div className="">
                <div className="absolute flex flex-col items-center justify-center left-0 md:left-1/2 transform -translate-x-1/2 ">
                  <div className="w-4 h-4 bg-black border-4 border-yellow-400 rounded-full mb-2"></div>
                  <div
                    className={`absolute w-25 text-yellow-400 font-semibold ${
                      index % 2 === 0
                        ? "ml-50 mr-auto md:ml-40 md:mr-auto"
                        : "ml-50 top-4 mr-auto md:mr-40 md:ml-auto"
                    }`}
                  >
                    <p>{exp.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;

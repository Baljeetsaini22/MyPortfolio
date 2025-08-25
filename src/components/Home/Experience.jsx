// import React from "react";

// const Experience = () => {
//   const experiences = [
//     {
//       role: "FrontEnd Web Developer Intern",
//       company: "DigiBeez",
//       companyLink: "https://digibeez.in",
//       duration: "Feb 2025 – July 2025",
//       details: [
//         "Developed landing pages with HTML, CSS, and JavaScript.",
//         "Integrated APIs for dynamic data fetching and display.",
//         "Collaborated with senior developers on eCommerce project modules.",
//         "Built and maintained responsive websites using React, Tailwind, and Bootstrap.",
//         "Implemented Firebase authentication and Firestore for real-time data sync.",
//         "Optimized UI for mobile responsiveness and faster performance.",
//       ],
//     },
//   ];

//   return (
//     <section id="skills" className="w-full px-[7.5%] py-16 ">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">
//           Experience
//         </h2>

//         <div className="space-y-8">
//           {experiences.map((exp, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300 inset-shadow-[0_5px_5px_#fff] hover:inset-shadow-[0_-5px_5px_#fbc618]"
//             >
//               <h3 className="text-2xl font-semibold text-yellow-400 mb-1">
//                 {exp.role}
//               </h3>

//               <a
//                 href={exp.companyLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-lg font-medium text-white hover:text-yellow-400 transition-colors"
//               >
//                 {exp.company}
//               </a>

//               <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>

//               <ul className="list-disc list-inside space-y-2 text-left">
//                 {exp.details.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import logo from "/assets/logo/expLogo/digibeez.svg";

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const experiences = [
    {
      role: "FrontEnd Web Developer Intern",
      company: "DigiBeez",
      companyLink: "https://digibeez.in",
      duration: "Feb 2025 – July 2025",
      details: [
        "Developed landing pages with HTML, CSS, and JavaScript.",
        "Integrated APIs for dynamic data fetching and display.",
        "Built and maintained responsive websites using JavaScript, React, Tailwind, and Bootstrap.",
        "Implemented Firebase authentication and Firestore for real-time data sync.",
        "Optimized UI for mobile responsiveness and faster performance.",
      ],
    },
  ];

  return (
    <section id="skills" className="w-full px-[7.5%] py-16 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-gray-900/90 backdrop-blur-md rounded-xl 
                 hover:scale-105 
                 transition-transform 
                 duration-300 
                 inset-shadow-[0_5px_5px_#fff] 
                 hover:inset-shadow-[0_-5px_5px_#fbc618]"
              >
                {/* Inline Header */}
                <div
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between max-md:flex-col px-6 py-4 gap-x-4 text-white text-lg  cursor-pointer"
                >
                  {/* <div className="flex flex-wrap items-center gap-x-4 text-white text-lg"> */}
                  <span className="text-yellow-400 font-semibold">
                    {exp.role}
                  </span>
                  <span className="text-gray-500">·</span>
                  <a
                    href={exp.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // stop toggle when arrow clicked
                    className="flex items-center gap-1"
                  >
                    <img
                      src={logo}
                      alt={exp.company}
                      loading="lazy"
                      className="w-[100px]"
                    />

                    <ArrowUpRight size={18} />
                  </a>
                  <span className="text-gray-500">·</span>
                  <div className="flex items-center gap-5">
                    <span className="text-gray-400 text-sm">
                      {exp.duration}
                    </span>
                    {/* </div> */}

                    <div className="text-yellow-400">
                      {isOpen ? (
                        <ChevronUp size={22} />
                      ) : (
                        <ChevronDown size={22} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen
                      ? "max-h-[600px] opacity-100 p-6 pt-0"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm leading-relaxed">
                    {exp.details.map((point, i) => (
                      <li
                        key={i}
                        className="hover:text-yellow-400 transition-colors"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

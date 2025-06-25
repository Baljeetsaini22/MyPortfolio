const educationData = [
  {
    id: 1,
    title: "Diploma in Computer Science and Engineering - PSBTE",
    year: "2021 - 2024",
    institute: "Sri Sukhmani Polytechnic, Derabassi",
    side: "left",
  },
  {
    id: 2,
    title: "Bachelor of Art (BA) - Distance Education",
    year: "2019 - 2022",
    institute: "Guru Jambheshwer University Science & Technology, Hisar",
    side: "right",
  },
  {
    id: 3,
    title: "Computer Operator & Programming Assistant",
    year: "2017 - 2018",
    institute: "ITI - NCVT",
    side: "left",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="w-full h-auto px-[7.5%] py-16 relative overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          Education
        </h2>
        <p className="mt-4 text-gray-300">
          My academic background and qualifications
        </p>
      </div>

      {/* Timeline Line (hidden on mobile, soft in background) */}
      <div className="relative z-10">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-10 h-full bg-yellow-400 opacity-100"></div>
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className={`mb-12 flex flex-col md:flex-row items-center ${
              edu.side === "left" ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <div className="w-full md:w-[70%] bg-gray-900 p-6 rounded-xl inset-shadow-[0_5px_5px_#fff] hover:inset-shadow-[0_-5px_5px_#fbc618] transform hover:scale-105 transition-all duration-300 z-1">
              <h3 className="text-xl md:text-2xl font-semibold text-yellow-400">
                {edu.title}
              </h3>
              <p className="text-gray-300">{edu.year}</p>
              <p className="mt-2 text-white">{edu.institute}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

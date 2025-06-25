
const certifications = [
  {
    id: 1,
    title: "Frontend web Development Certification",
    issuer: "Digibeez",
    year: "2025",
  },
  {
    id: 2,
    title: "Computer Application",
    issuer: "Hartron Skill Center, Kaithal",
    year: "2019",
  },
  
];

const Certification = () => {
  return (
    <section id="certifications" className="w-full h-auto px-[7.5%] py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">Certifications</h2>
        <p className="mt-4 text-gray-300">Courses and Certifications I have completed</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-20">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-gray-900 p-6 rounded-xl inset-shadow-[0_5px_5px_#fff] hover:inset-shadow-[0_-5px_5px_#fbc618] transform hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">{cert.title}</h3>
            <p className="text-gray-300">Issued by: <span className="text-white">{cert.issuer}</span></p>
            <p className="text-gray-400 mt-1">Year: {cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,

} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { id: 1, name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { id: 2, name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { id: 3, name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { id: 4, name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { id: 5, name: "JavaScript", icon: <FaJsSquare className="text-yellow-300" /> },
  { id: 6, name: "React.js", icon: <FaReact className="text-cyan-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full h-auto px-[7.5%] py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">Skills</h2>
        <p className="mt-4 text-gray-300">Technologies I work with</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-xl  hover:scale-105 transition-transform duration-300 inset-shadow-[0_5px_5px_#fff,0_-5px_5px_#fbc618] hover:inset-shadow-[0_5px_5px_#fbc618,0_-5px_5px_#fff]"
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <p className="mt-2 text-lg font-semibold text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

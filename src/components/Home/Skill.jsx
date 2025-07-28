import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import Image from "/assets/image/skillimg.png";

const skills = [
  {
    id: 1,
    name: "HTML5",
    description: "The standard markup language for building web pages.",
    icon: <FaHtml5 className="text-orange-600" />,
  },
  {
    id: 2,
    name: "CSS3",
    description: "Styles the web with layouts, animations, and more.",
    icon: <FaCss3Alt className="text-blue-600" />,
  },
  {
    id: 3,
    name: "JavaScript",
    description: "Adds interactivity to websites and builds dynamic apps.",
    icon: <FaJsSquare className="text-yellow-400" />,
  },
  {
    id: 4,
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development.",
    icon: <SiTailwindcss className="text-sky-400" />,
  },
  {
    id: 5,
    name: "Bootstrap",
    description: "Responsive CSS framework for building layouts quickly.",
    icon: <FaBootstrap className="text-purple-600" />,
  },
  {
    id: 6,
    name: "React.js",
    description: "A JavaScript library for building fast user interfaces.",
    icon: <FaReact className="text-cyan-500" />,
  },
  {
    id: 7,
    name: "Git",
    description: "Version control tool for tracking changes in code.",
    icon: <FaGitAlt className="text-orange-600" />,
  },
  {
    id: 8,
    name: "Github",
    description: "Platform for hosting and collaborating on code projects.",
    icon: <FaGithub className="text-white" />,
  },
  {
    id: 9,
    name: "Firebase",
    description:
      "A powerful backend platform for authentication, real-time database, and more.",
    icon: <SiFirebase className="text-orange-400" />,
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  return (
    <section id="skills" className="w-full px-[7.5%] py-16 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          My Skills
        </h2>
        <p className="mt-4 text-gray-300">
          Building web experiences that look great and perform even better.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col justify-center overflow-hidden">
          <p className="text-gray-400 mb-4">
            I’m always learning and improving. I focus on writing clean,
            easy-to-understand code and using the latest tools to bring ideas to
            life.
          </p>
          <div className="hidden md:block rounded-xl bg-gray-900 text-white p-6 shadow-inner transition-all duration-300">
            <div className="relative flex flex-col md:flex-row items-start gap-6">
              <img
                src={Image}
                alt="skills"
                className="hidden xl:block md:w-[250px] rounded-2xl"
              />
              {selectedSkill ? (
                <div className="flex flex-col justify-center items-center py-5 transform scale-105 transition duration-300">
                  <h2 className="text-3xl font-bold text-yellow-400 mb-2">
                    {selectedSkill.name}
                  </h2>
                  <p className="text-gray-300 text-sm max-w-xs">
                    {selectedSkill.description}
                  </p>
                  <span className="text-7xl lg:text-9xl mt-4">
                    {selectedSkill.icon}
                  </span>
                </div>
              ) : (
                <div className="hidden md:flex items-center justify-center text-gray-500 md:min-h-[150px] lg:min-h-[300px] max-lg:min-w-[250px]">
                  <p className="text-center">
                    Hover over a skill to learn more
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="rounded-2xl inset-shadow-[0_-5px_5px_#fff] p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:h-auto md:h-96 md:overflow-y-scroll lg:overflow-visible">
            {skills.map((skill) => (
              <div
                key={skill.name}
                onMouseEnter={() => setSelectedSkill(skill)}
                onMouseLeave={() => setSelectedSkill(null)}
                className="flex flex-col 
                 items-center 
                 justify-center 
                 bg-gray-900 
                 p-6 
                 rounded-xl 
                 hover:scale-105 
                 transition-transform 
                 duration-300 
                 inset-shadow-[0_5px_5px_#fff] 
                 hover:inset-shadow-[0_-5px_5px_#fbc618]"
              >
                <div className="text-5xl mb-2">{skill.icon}</div>
                <p className="mt-2 text-lg font-semibold text-white">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

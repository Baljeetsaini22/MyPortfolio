import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import myimg from "/assets/image/img.png";
import Resume from "/assets/resume/Resume.pdf";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Baljeet Singh", "a Frontend Developer", "a Web Designer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full h-auto px-[7.5%] py-16 md:mt-[5rem] mt-[4rem] flex items-center"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center rounded-l-2xl ">
        <div className="animate-fade-right md:animate-fade-up">
          <p className="text-2xl md:text-3xl font-bold text-gray-300">Hello</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white leading-tight mb-4">
            I'm {text}
            <Cursor
              cursorStyle="."
              cursorColor="#fac718"
              cursorBlinking={false}
              show={true}
            />
          </h1>
          <p className="text-gray-300 mb-6 text-justify">
            I craft modern, responsive, and high-performance websites using the
            latest frontend technologies like React.js, Tailwind CSS, and
            JavaScript. I turn ideas into interactive digital experiences.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              to="/"
              state={{ scrollTo: "contact" }}
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-md font-medium hover:bg-yellow-300 transition"
            >
              Hire Me <FiArrowUpRight />
            </Link>
            <Link
              to={Resume}
              target="_blank"
              // download
              className="inline-flex items-center gap-2 border border-yellow-400 px-5 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition font-medium"
            >
              Download CV <FiArrowUpRight />
            </Link>
          </div>
          <div className="flex gap-5 mt-4 text-2xl text-yellow-400">
            <Link
              to="https://www.linkedin.com/in/baljeet-singh-13590834b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://github.com/Baljeetsaini22"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://www.instagram.com/_baljeet.0"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=100090123884874"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://x.com/_Baljeet_0"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end relative animate-fade-left md:animate-fade-up animate-delay-500">
          {/* <img
            src={myimg}
            alt="Baljeet Singh"
            loading="lazy"
            className="w-[400px] md:w-[350px] rounded-2xl inset-shadow-[10px_0_#fdc700,0_-20px_#fff,-10px_0_#fdc700] hover:inset-shadow-[10px_0_#fff,0_-20px_#fdc700,-10px_0_#fff]"
          /> */}
          <img
            src={myimg}
            alt="Baljeet Singh"
            loading="lazy"
            className="w-[400px] md:w-[350px] rounded-2xl inset-shadow-[0_-10px_50px] inset-shadow-yellow-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

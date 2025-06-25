import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import myimg from "/assets/image/myimg.jpg";
import Resume from "/assets/resume/Resume.pdf";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Baljeet Singh", "a Frontend Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full h-auto px-[7.5%] py-16 sm:mt-[5rem] mt-[4rem] flex items-center"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center ">
        {/* Left Side */}
        <div>
          <p className="text-2xl md:text-3xl font-bold text-gray-300">Hello</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white leading-tight mb-4">
            I'm {text}
            <Cursor cursorStyle="." cursorColor="#fac718" cursorBlinking={false} show={true} />
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
              Hire Me <FiArrowRight />
            </Link>

            <Link
              to={Resume}
              target="_blank"
              // download
              className="bg-transparent border border-yellow-400 px-5 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition font-medium"
            >
              Download CV
            </Link>
          </div>

          {/* Social Icons */}
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

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={myimg}
            alt="Baljeet Singh"
            loading="lazy"
            className="w-[300px] md:w-[400px] rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

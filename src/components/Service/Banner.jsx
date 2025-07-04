import { Link } from "react-router-dom";
import myimg from "/assets/image/image.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const BannerService = () => {
  return (
    <section
      id="services"
      className="w-full h-full px-[7.5%] py-12 mt-[4rem] md:mt-[5rem]"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center ">
        <div className="text-justify">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            My Services
          </h1>
          <p className="mt-4 text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            I offer modern web development services including custom UI
            development, responsive website design, performance optimization,
            and bug fixing. I can convert your Figma or Adobe XD designs into
            live websites with clean, scalable code. Whether it’s a portfolio,
            business site, or a web app, I deliver fast and user-friendly
            results.
          </p>

          {/* Contact Button */}
          <div className="mt-8">
            <Link
              to="/"
              state={{ scrollTo: "contact" }}
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-md font-medium hover:bg-yellow-300 transition"
            >
              Hire Me <FiArrowUpRight />
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
        <div className="flex justify-center md:justify-end">
          <img
            src={myimg}
            alt="Baljeet Singh"
            loading="lazy"
            className="w-[400px] md:w-[350px] rounded-2xl inset-shadow-[0_-10px_50px] inset-shadow-yellow-400
                  "
          />
        </div>
      </div>
    </section>
  );
};
export default BannerService;

import { Link } from "react-router-dom";
// import myimg from "/assets/image/image.png";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactBanner = () => {
  
  return (
    <section
      id="banner"
      className="w-full h-full px-[7.5%] py-12 mt-[4rem] md:mt-[5rem]"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center ">
        <div className="text-justify mb-10">
          <h1 className="text-4xl font-bold text-yellow-400 mb-2">
            Contact Me
          </h1>
          <p className="text-gray-300 max-w-xl">
            I'm always open to new ideas, collaborations, or freelance work.
            Whether you want to build a website, redesign an interface, or just
            discuss tech — feel free to reach out. I respond quickly via email
            and enjoy working with clients who value clean design and smart
            code. Let’s connect and bring your ideas to life.
          </p>
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
            src="{myimg}"
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
export default ContactBanner;

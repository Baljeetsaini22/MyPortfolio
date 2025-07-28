import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="w-full h-auto px-[7.5%] py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">Contact Me</h2>
        <p className="mt-4 text-gray-300">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to collaborate. Reach out using the details below and
          let’s connect!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="bg-gray-900 w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
          </div>
          <h4 className="font-semibold mb-2">ADDRESS</h4>
          <p className="text-gray-400 text-sm">
            Zirakpur, Mohali <br />
            Punjab, 140603
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-900 w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <FaPhoneAlt className="text-yellow-400 text-2xl" />
          </div>
          <h4 className="font-semibold mb-2">CONTACT NUMBER</h4>
          <p className="text-gray-400 text-sm">+91 97280 67440</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-900 w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <FaPaperPlane className="text-yellow-400 text-2xl" />
          </div>
          <h4 className="font-semibold mb-2">EMAIL ADDRESS</h4>
          <p className="text-gray-400 text-sm">baljeetsaini7440@gmail.com</p>
        </div>
      </div>
      <div className="text-center mt-10">
        <Link
          to="/ContactMe"
          state={{ scrollTo: "banner" }}
          className="inline-flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-md font-medium hover:bg-yellow-300 transition"
        >
          Let's Talk <FiArrowUpRight />
        </Link>
      </div>
    </section>
  );
};

export default Contact;

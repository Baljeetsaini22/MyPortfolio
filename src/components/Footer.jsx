import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/assets/logo/logo.png";
import { BadgeCheck, Code, Home, Layers, User } from "lucide-react";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-black text-white w-full h-auto px-[7.5%] py-16 mt-18relative">
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer fixed bottom-5 right-5 bg-yellow-400 hover:bg-yellow-300 text-black p-3 rounded-full shadow-lg z-50 transition-all animate-bounce"
          aria-label="Scroll to Top"
        >
          <FaArrowUp size={20} />
        </button>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex flex-col items-center justify-center h-[4rem] w-[100px]">
            <img
              src={logo}
              alt="Baljeet Logo"
              className="h-[200px] w-auto object-contain rounded-full bg-clip-content"
            />
          </div>
          <p className="mt-2 text-gray-400">Frontend Developer Portfolio</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">Menu</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                state={{ scrollTo: "home" }}
                className="hover:text-yellow-400 flex items-center gap-1"
              >
                <Home size={18} /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                state={{ scrollTo: "about" }}
                className="hover:text-yellow-400 flex items-center gap-1"
              >
                <User size={18} /> About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                state={{ scrollTo: "skills" }}
                className="hover:text-yellow-400 flex items-center gap-1"
              >
                <BadgeCheck size={18} /> Skills
              </Link>
            </li>
            <li>
              <Link
                to="/"
                state={{ scrollTo: "projects" }}
                className="hover:text-yellow-400 flex items-center gap-1"
              >
                <Code size={18} /> Projects
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                target="_blank"
                className="hover:text-yellow-400 flex items-center gap-1"
              >
                <Layers size={18} /> Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            Services
          </h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>UI Design</li>
            <li>Responsive Layout</li>
            <li>React Projects</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">Newsletter</h3>
          <p className="text-sm mb-4">
            Get frontend tips and updates in your inbox.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white outline-none focus:ring-2 ring-cyan-500"
            />
            <button
              type="submit"
              className="cursor-pointer bg-yellow-400 text-black px-2 md:px-4 py-1 md:py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Baljeet Singh. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/assets/logo/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLetsTalk = () => {
    if (location.pathname === "/") {
      
      const contactSection = document.getElementById("contact");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    } else {

      navigate("/ContactMe");
      const contactSection = document.getElementById("contact");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="h-[4rem] md:h-[5rem] bg-black text-white fixed w-full top-0 z-50 shadow-md">
      <div className="w-full px-[7.5%] flex items-center justify-between shadow-md shadow-yellow-400">
        {/* Left: Logo */}
        <div className="flex items-center justify-center h-[3rem] md:h-[4rem] w-[50px] md:w-[100px] overflow-hidden">
          <img
            src={logo}
            alt="Baljeet Logo"
            className="h-[100px] sm:h-[200px] w-auto object-contain rounded-full bg-clip-content"
          />
        </div>

        {/* Center: Menu (Desktop only) */}
        <ul className="hidden md:flex gap-5 lg:gap-8 text-white font-medium">
          <li>
            <Link
              to="/"
              state={{ scrollTo: "home" }}
              className="hover:text-yellow-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              state={{ scrollTo: "about" }}
              className="hover:text-yellow-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              state={{ scrollTo: "projects" }}
              className="hover:text-yellow-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/Services"
              state={{ scrollTo: "services" }}
              className="hover:text-yellow-400"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/"
              state={{ scrollTo: "contact" }}
              className="hover:text-yellow-400"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right: Let's Talk + Hamburger (mobile) */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleLetsTalk}
            className="bg-yellow-400 text-black px-2 md:px-4 py-1 md:py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Let's Talk
          </button>
          <button
            onClick={toggleMenu}
            className="md:hidden text-yellow-400 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black overflow-hidden transition-all duration-500 ease-in-out shadow-md shadow-yellow-400 ${
          isOpen ? "max-h-[400px] py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 text-lg text-white">
          <li>
            <Link
              onClick={toggleMenu}
              to="/"
              state={{ scrollTo: "home" }}
              className="hover:text-yellow-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              to="/"
              state={{ scrollTo: "about" }}
              className="hover:text-yellow-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              to="/"
              state={{ scrollTo: "projects" }}
              className="hover:text-yellow-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              to="/services"
              className="hover:text-yellow-400"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/ContactMe"
              state={{ scrollTo: "contact" }}
              className="hover:text-yellow-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

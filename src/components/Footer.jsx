import React, { useEffect, useState, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import logo from "/assets/logo/logo.png"

const Footer = () => {
  const form = useRef();
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const email = form.current.email.value;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");

    console.log("Sending Form Data:", {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    });

    emailjs
      .sendForm(
        "service_clhsldf",
        "template_39y7ja8",
        form.current,
        "D8yWhy2r676bIGDiV"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <footer className="bg-black text-white w-full h-auto px-[7.5%] py-16 mt-18relative">
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-yellow-400 hover:bg-yellow-300 text-black p-3 rounded-full shadow-lg z-50 transition-all animate-bounce"
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
                state={{ scrollTo: "skills" }}
                className="hover:text-yellow-400"
              >
                Skills
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
                to="/services"
                target="_blank"
                className="hover:text-yellow-400"
              >
                Services
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

        <div id="contact">
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            Contact
          </h3>
          {submitted ? (
            <p className="text-green-500 text-lg font-semibold">
              Thank you! 🎉 Your message has been sent.
            </p>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-2 bg-gray-800 text-white rounded"
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ""))
                }
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-2 bg-gray-800 text-white rounded"
              />
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full p-2 bg-gray-800 text-white rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Baljeet Singh. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

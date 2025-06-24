import { useEffect, useState, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import emailjs from "emailjs-com";

const Footer = () => {
  const location = useLocation();
  const form = useRef()
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // .sendForm("service_clhsldf", "template_39y7ja8", e.target, "EJcXy1gYGg9RDm5cb")
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_clhsldf",    // Replace with your EmailJS Service ID
        "template_39y7ja8",   // Replace with your EmailJS Template ID
        form.current,
        "EJcXy1gYGg9RDm5cb"     // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          e.target.reset(); // clear the form
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message. Try again later.");
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
          <h2 className="text-2xl font-bold text-yellow-400">BS</h2>
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
          <form
          ref={form}
            className="space-y-3"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              pattern="^[A-Za-z\s]+$"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
              }}
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            />
            <textarea
              rows="3"
              name="message"
              placeholder="Your Message"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-black px-4 py-2 rounded font-medium hover:bg-yellow-300"
            >
              Send
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

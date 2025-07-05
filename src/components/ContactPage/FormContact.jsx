import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FormContact = () => {
  

  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

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
    <section id="contact" className="w-full px-[7.5%] py-16">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl text-yellow-400 font-bold">
            Let's Work Together
          </h2>

          <div>
            <p className="text-gray-500 mb-1">My office:</p>
            <p className="font-semibold text-lg">Zirakpur, Mohali</p>
            <hr className="my-4 border-yellow-400" />
          </div>

          <div>
            <p className="text-gray-500 mb-1">Call me:</p>
            <p className="font-semibold text-lg">+91 97280 67440</p>
            <hr className="my-4 border-yellow-400" />
          </div>

          <div>
            <p className="text-gray-500 mb-1">Mail me:</p>
            <p className="font-semibold text-lg">baljeetsaini7440@gmail.com</p>
            <hr className="my-4 border-yellow-400" />
          </div>

          <div>
            <p className="text-gray-500 mb-2">Follow me:</p>
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
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 w-full space-y-4">
          <p className="text-gray-500">
            Ready to get started? Feel free to reach out through the contact
            form, and let's embark on a journey of innovation and success.
          </p>

          {submitted ? (
            <p className="text-green-500 text-lg font-semibold">
              Thank you! 🎉 Your message has been sent.
            </p>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-2 bg-gray-800 focus:outline-none focus:border focus:border-yellow-400 text-white rounded"
                  onInput={(e) =>
                    (e.target.value = e.target.value.replace(
                      /[^A-Za-z\s]/g,
                      ""
                    ))
                  }
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-2 bg-gray-800 focus:outline-none focus:border focus:border-yellow-400 text-white rounded"
                />
                {emailError && (
                  <p className="text-red-500 text-sm">{emailError}</p>
                )}
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 bg-gray-800 focus:outline-none focus:border focus:border-yellow-400 text-white rounded"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full p-2 bg-gray-800 focus:outline-none focus:border focus:border-yellow-400 text-white rounded"
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
    </section>
  );
};

export default FormContact;

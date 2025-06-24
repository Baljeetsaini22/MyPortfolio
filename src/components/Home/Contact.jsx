import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    

    console.log("Sending Form Data:", {
      name: form.current.name.value,
      email: form.current.email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
    });

    emailjs
      .sendForm(
        "service_clhsldf",
        "template_5nc0s27",
        form.current,
        "D8yWhy2r676bIGDiV"
      )
      .then(
        () => {
          setStatusMessage("✅ Thank you! Your meeting request was sent.");
          form.current.reset();
          setTimeout(() => setStatusMessage(""), 5000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatusMessage("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <section id="meeting" className="w-full h-auto px-[7.5%] py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Schedule a Meeting
          </h2>
          <p className="text-gray-300 mb-6">
            Let’s connect and discuss your ideas, projects, or opportunities.
            Fill out the form and I’ll get back to you as soon as possible.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li>
              <strong>Email:</strong> Baljeetsaini7440@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 97280 67440
            </li>
            <li>
              <strong>Location:</strong> Zirakpur, Mohali, India
            </li>
          </ul>
        </div>

        {/* Right Side Form */}
        <div>
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
            <input
              type="text"
              name="subject"
              required
              placeholder="Meeting Subject"
              className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message or Agenda"
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-300 transition"
            >
              Request Meeting
            </button>
            {statusMessage && (
              <p className="text-sm text-center mt-2">{statusMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const Contact = () => {
  return (
    <section id="meeting" className="w-full h-auto px-[7.5%] py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Schedule a Meeting
          </h2>
          <p className="text-gray-300 mb-6">
            Let’s connect and discuss your ideas, projects, or opportunities. Fill out the form and I’ll get back to you as soon as possible.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li><strong>Email:</strong> Baljeetsaini7440@gmail.com</li>
            <li><strong>Phone:</strong> +91 97280 67440</li>
            <li><strong>Location:</strong> Zirakpur, Mohali, India</li>
          </ul>
        </div>

        {/* Right Side Form */}
        <div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Meeting Subject"
              className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
            />
            <textarea
              rows="4"
              placeholder="Message or Agenda"
              className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-300 transition"
            >
              Request Meeting
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;



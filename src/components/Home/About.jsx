import myImg from "/assets/image/image.png";
const About = () => {
  return (
    <section id="about" className="w-full h-auto px-[7.5%] py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          About
        </h2>
        <p className="mt-4 text-gray-300">
          Professional Web Developer
        </p>
      </div>

      {/* container */}
      <div className="flex flex-col lg:flex-row md:gap-5 items-center">
        {/* left 30% */}
        <div className="w-full lg:w-[30%] mb-8 md:mb-0 flex justify-center">
          <img
            src={myImg}
            alt="Baljeet Singh"
            className="rounded-md w-50 object-cover rotate-y-180"
          />
        </div>

        <div className="w-full lg:w-[70%]">
          <h3 className="text-xl md:text-2xl font-semibold text-yellow-400">
            Frontend Web Developer & Web Designer
          </h3>
          <p className="italic text-gray-300 mb-4 text-justify">
            I am a passionate frontend web developer, specializing in modern
            responsive web applications with clean, efficient code and a focus
            on user experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-sm">
            <div className="space-y-4">
              <p>
                <span className="text-yellow-400 mr-2">➤</span>
                <strong>Name :</strong> Baljeet Singh
              </p>
              <p>
                <span className="text-yellow-400 mr-2">➤</span>
                <strong>Birthday :</strong> 20 Nov 1999
              </p>
              <p>
                <span className="text-yellow-400 mr-2">➤</span>
                <strong>Phone :</strong> +91 97280 67440
              </p>
              <p>
                <span className="text-yellow-400 mr-2">➤</span>
                <strong>Email :</strong> Baljeetsaini7440@gmail.com
              </p>
            </div>
            <div className="space-y-4">
              <p>
                <span className="text-yellow-400 mr-2">➤</span>
                <strong>Degree :</strong> Bachelor
              </p>
              <p>
                <span className="text-yellow-400 mr-2">➤</span>
                <strong>City :</strong> Zirakpur, SAS Nagar, Punjab
              </p>
              <p>
                <span className="text-yellow-400 mr-2">➤</span>
                <strong>Languages :</strong> Hindi, English, Punjabi
              </p>
              <p>
                <span className="text-yellow-400 mr-2">➤</span>
                <strong>Freelance :</strong> Available
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-justify">
            With a strong background in React, Tailwind CSS, and modern
            JavaScript frameworks, I build interfaces that are not only visually
            appealing but also highly performant. I’m dedicated to delivering
            scalable solutions that solve real-world problems for users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

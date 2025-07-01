import myImg from "/assets/image/myimg.png";

const About = () => {
  return (
    <section id="about" className="w-full h-auto px-[7.5%] py-16">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          About Me
        </h2>
        <p className="mt-4 text-gray-300">Professional Web Developer</p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <ul className="space-y-4 text-base text-[0.78rem] md:text-xs lg:text-md xl:text-lg">
            <li className="flex items-center gap-5 sm:gap-10">
              <span className="w-12 sm:w-14 md:w-18  text-yellow-400 font-semibold">
                Name
              </span>
              <span>:</span>
              <span className="animate-fade-right">Baljeet Singh</span>
            </li>
            <li className="flex items-center gap-5 sm:gap-10">
              <span className="w-12 sm:w-14 md:w-18  text-yellow-400 font-semibold">
                Address
              </span>
              <span>:</span>
              <span className="animate-fade-right">Zirakpur, Mohali, India</span>
            </li>
            <li className="flex items-center gap-5 sm:gap-10">
              <span className="w-12 sm:w-14 md:w-18  text-yellow-400 font-semibold">
                Phone
              </span>
              <span>:</span>
              <span className="animate-fade-right">+91 97280 67440</span>
            </li>
            <li className="flex items-center gap-5 sm:gap-10">
              <span className="w-12 sm:w-14 md:w-18  text-yellow-400 font-semibold">
                Email ID
              </span>
              <span>:</span>
              <span className="animate-fade-right">Baljeetsaini7440@gmail.com</span>
            </li>
            <li className="flex items-center gap-5 sm:gap-10">
              <span className="w-12 sm:w-14 md:w-18  text-yellow-400 font-semibold">
                Nationality
              </span>
              <span>:</span>
              <span className="animate-fade-right">Indian</span>
            </li>
            <li className="flex items-center gap-5 sm:gap-10">
              <span className="w-12 sm:w-14 md:w-18  text-yellow-400 font-semibold">
                Languages
              </span>
              <span>:</span>
              <span className="animate-fade-right">English, Hindi, Punjabi</span>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={myImg}
            alt="Baljeet Singh"
            loading="lazy"
            className="w-64 md:w-80 rounded-2xl shadow-xl object-cover animate-pulse"
          />
        </div>
        {/* <div className="absolute h-[20vh] w-4 bg-yellow-400 right-68 z-0"></div>
          <div className="absolute h-4 w-80 bg-yellow-400 right-30 -bottom-200 z-0 rounded-t-4xl"></div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default About;

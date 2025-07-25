import myImg from "/assets/image/image.png";

// const About = () => {
//   return (
//     <section id="about" className="w-full h-auto px-[7.5%] py-16">
//       <div className="text-center mb-6 animate-fade-down">
//         <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
//           About Me
//         </h2>
//         <p className="mt-4 text-gray-300">Professional Web Developer</p>
//       </div>
//       <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fade-right">
//         {/* Left Content */}
//         <div>
//           <ul className="space-y-4 text-base text-[0.78rem] md:text-xs lg:text-md xl:text-lg">
//             <li className="flex items-center gap-5 sm:gap-10">
//               <span className="w-12 sm:w-14 md:w-18  text-yellow-400 font-semibold">
//                 Name
//               </span>
//               <span>:</span>
//               <span className="animate-fade-right">Baljeet Singh</span>
//             </li>
//             <li className="flex items-center gap-5 sm:gap-10">
//               <span className="w-12 sm:w-14 md:w-18  text-yellow-400 font-semibold">
//                 Address
//               </span>
//               <span>:</span>
//               <span className="animate-fade-right">Zirakpur, Mohali, India</span>
//             </li>
//             <li className="flex items-center gap-5 sm:gap-10">
//               <span className="w-12 sm:w-14 md:w-18  text-yellow-400 font-semibold">
//                 Phone
//               </span>
//               <span>:</span>
//               <span className="animate-fade-right">+91 97280 67440</span>
//             </li>
//             <li className="flex items-center gap-5 sm:gap-10">
//               <span className="w-12 sm:w-14 md:w-18  text-yellow-400 font-semibold">
//                 Email ID
//               </span>
//               <span>:</span>
//               <span className="animate-fade-right">Baljeetsaini7440@gmail.com</span>
//             </li>
//             <li className="flex items-center gap-5 sm:gap-10">
//               <span className="w-12 sm:w-14 md:w-18  text-yellow-400 font-semibold">
//                 Nationality
//               </span>
//               <span>:</span>
//               <span className="animate-fade-right">Indian</span>
//             </li>
//             <li className="flex items-center gap-5 sm:gap-10">
//               <span className="w-12 sm:w-14 md:w-18  text-yellow-400 font-semibold">
//                 Languages
//               </span>
//               <span>:</span>
//               <span className="animate-fade-right">English, Hindi, Punjabi</span>
//             </li>
//           </ul>
//         </div>

//         {/* Right Image */}
//         <div className="flex justify-center md:justify-end animate-fade-left">
//           <img
//             src={myImg}
//             alt="Baljeet Singh"
//             loading="lazy"
//             className="w-64 md:w-80 rounded-2xl shadow-xl object-cover animate-pulse"
//           />
//         </div>
//         {/* <div className="absolute h-[20vh] w-4 bg-yellow-400 right-68 z-0"></div>
//           <div className="absolute h-4 w-80 bg-yellow-400 right-30 -bottom-200 z-0 rounded-t-4xl"></div> */}
//         {/* </div> */}
//       </div>
//     </section>
//   );
// };

// export default About;

const About = () => {
  return (
    <section id="about" className="w-full h-auto px-[7.5%] py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          About
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto">
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

        {/* right 60% */}
        <div className="w-full lg:w-[70%]">
          <h3 className="text-xl font-bold mb-2">
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

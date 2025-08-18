import React from "react";

const GithubStats = () => {
  return (
    <section id="contact" className="w-full px-[7.5%] py-16">
      <div className=" text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8">
          GitHub Activity & Stats
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-2xl p-4 shadow-lg">
            <img
              src="https://github-readme-stats.vercel.app/api?username=baljeetsaini22&show_icons=true&theme=radical&bg_color=0d1117&title_color=FACC15&text_color=ffffff&icon_color=FACC15"
              alt="GitHub Stats"
              className="w-full rounded-lg"
            />
          </div>

          <div className="bg-gray-900 rounded-2xl p-4 shadow-lg">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=baljeetsaini22&theme=radical&background=0d1117&ring=FACC15&fire=FACC15&currStreakLabel=FACC15"
              alt="GitHub Streak"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-4 shadow-lg mt-8">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=baljeetsaini22&layout=compact&theme=radical&bg_color=0d1117&title_color=FACC15&text_color=ffffff"
            alt="Top Languages"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default GithubStats;

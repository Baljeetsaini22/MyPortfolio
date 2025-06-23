

const projects = [
  {
    id: 1,
    title: "E-Commerce Store",
    image: "/assets/projects/Ecommerce.png",
    link: "https://ecommerce-dda.vercel.app/",
  },
  {
    id: 2,
    title: "Sonata-Soft",
    image: "/assets/projects/sonatasoft.png",
    link: "https://baljeetsaini22.github.io/Sonata-Soft/",
  },
  {
    id: 3,
    title: "Restaurant Website",
    image: "/assets/projects/hrestaurant.png",
    link: "https://hariom-restaurant.vercel.app",
  },
  {
    id: 4,
    title: "Portfolio",
    image: "/assets/projects/sportfolio.png",
    link: "https://simrank-porfolio.vercel.app/",
  },
  {
    id: 5,
    title: "Tic-Tac-Toy-Game",
    image: "/assets/projects/Game.png",
    link: "https://baljeetsaini22.github.io/Tic-tac-toe-Game/",
  },
  {
    id: 6,
    title: "Weather App",
    image: "",
    link: "https://baljeetsaini22.github.io/weather/",
  },
  {
    id: 7,
    title: "Desserts App",
    image: "/assets/projects/Desserts.png",
    link: "https://baljeetsaini22.github.io/Desserts/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full h-auto px-[7.5%] py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">My Projects</h2>
        <p className="mt-4 text-gray-300">Click on a project to view it live</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => window.open(project.link, "_blank")}
            className="cursor-pointer bg-gray-900 overflow-hidden rounded-xl shadow-[0_-5px_5px_#fff] hover:shadow-[0_5px_5px_#fbc618] transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={project.image}
              loading="lazy"
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-yellow-400">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


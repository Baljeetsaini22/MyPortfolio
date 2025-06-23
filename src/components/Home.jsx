import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from "./Home/Hero";
import About from "./Home/About";
import Certification from "./Home/Certification";
import Contact from "./Home/Contact";
import Education from "./Home/Education";
import Projects from "./Home/Project";
import Skills from "./Home/Skill";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      target?.scrollIntoView({ behavior: "smooth" });

      // clear the scroll state from history
      window.history.replaceState({}, document.title);
    }
  }, [location]);
  return (
    <div className="bg-black text-white">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certification />
      <Projects />
      <Contact />
    </div>
  );
};
export default Home;

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Certification from "./Certification";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Project";
import Skills from "./Skill";

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

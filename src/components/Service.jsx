import { useLocation } from "react-router-dom";

import { useEffect } from "react";

import BannerService from "./Service/Banner";
import AboutService from "./Service/ServiceAbout";



const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      target?.scrollIntoView({ behavior: "smooth" });

      // clear scroll state from history
      window.history.replaceState({}, document.title);
    }
  }, [location]);
  return (
    <div className="bg-black text-white">
      <BannerService />
      <AboutService />
    </div>
  );
};
export default Services;

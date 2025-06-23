import { useLocation } from "react-router-dom";

import { useEffect } from "react";
import ServiceAbout from "./service/ServiceAbout";
import ServiceBanner from "./service/ServiceBanner";

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
      <ServiceBanner />
      <ServiceAbout />
    </div>
  );
};
export default Services;

import { useLocation } from "react-router-dom";
import ContactBanner from "./ContactBanner";
import FormContact from "./FormContact";
import { useEffect } from "react";
import Experience from "./Experience";

const ContactMe = () => {
      const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      target?.scrollIntoView({ behavior: "smooth" });

      // clear the scroll state from history
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return(
    <div className="bg-black text-white">
        <ContactBanner />
        <FormContact />
        <Experience />
    </div>
  )
}
export default ContactMe;
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Services from "./Service/Service";
import ContactMe from "./ContactPage/ContactMe";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/ContactMe" element={<ContactMe />} />
    </Routes>
  );
};
export default Main;

import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Services from "./Service/Service";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};
export default Main;

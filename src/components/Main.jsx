import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Services from "./Service";


const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};
export default Main;

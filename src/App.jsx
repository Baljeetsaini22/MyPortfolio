import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import { lazy } from "react";
const ContactMe = lazy(() => import("./components/ContactPage/ContactMe"));
const Services = lazy(() => import("./components/Service/Service"));

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      {
        path: "/ContactMe",
        element: <ContactMe />,
      },
    ],
  },
]);

export default Approuter;

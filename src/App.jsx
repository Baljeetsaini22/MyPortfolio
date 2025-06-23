import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

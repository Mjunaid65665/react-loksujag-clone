
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Articles from "./components/Cards/Articles";
import Footer from "./components/Footer/Footer";

import Community from "./Pages/Community/Community";
import Vedio from "./Pages/Vedio/Vedio";
import "bootstrap-icons/font/bootstrap-icons.css";


const App = () => {
  return (
    <Router>

      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Articles />} />

        {/* Community Page */}
        <Route path="/community" element={<Community />} />

        {/* Videos Page */}
        <Route path="/videos" element={<Vedio />} />

         <Route path="/" element={<Articles />} />
      </Routes>

      <Footer />

    </Router>
  );
};

export default App;


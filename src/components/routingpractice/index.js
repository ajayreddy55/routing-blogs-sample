import { Route, Routes } from "react-router-dom";
import About from "./about/about";
import Contact from "./contact/contact";
import Header from "./header";
import Home from "./home/home";

import "./index.css";
import NotFound from "./notfound/notfound";

const RoutingPractice = () => {
  return (
    <div className="routing-bg-container">
      <div className="routing-main-container">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default RoutingPractice;

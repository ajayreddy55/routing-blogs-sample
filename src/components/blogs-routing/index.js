import { Route, Routes } from "react-router-dom";
import Header from "../routingpractice/header";
import HomeBlogs from "./home/home";
import "./index.css";
import About from "../routingpractice/about/about";
import Contact from "../routingpractice/contact/contact";
import NotFound from "../routingpractice/notfound/notfound";

const BlogsRouting = () => {
  return (
    <div className="routing-blogs-bg-container">
      <h1 className="text-center mt-3 mb-3">Blogs Routing Task</h1>
      <div className="routing-blogs-main-container">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomeBlogs />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default BlogsRouting;

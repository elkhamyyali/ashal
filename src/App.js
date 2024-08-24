import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Category from "./pages/Category";
import Bouquet from "./pages/Bouquet";
import BlogDetails from "./pages/BlogDetails";
import Loader from "./pages/Loader";

function App() {
  return (
    <div className="font-messiri">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/blog" element={<Blog />} />{" "}
        <Route path="/blog/:id" element={<BlogDetails />} />{" "}
        <Route path="/category" element={<Category />} />{" "}
        <Route path="/bouquet" element={<Bouquet />} />{" "}
        <Route path="/loader" element={<Loader />} />{" "}
      </Routes>{" "}
      <Footer />
    </div>
  );
}

export default App;

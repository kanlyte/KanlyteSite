import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import AboutUs from "../pages/AboutUs";
import SingleBlog from "../pages/SingleBlog";
import Page404 from "../components/Others/Page404";
import ContactUs from "../pages/ContactUs";
import BlogsGridView from "../components/Blogs/BlogsGridView";
import LyteAwards from "../components/Blogs/LyteAwards";

const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<SingleBlog />} />
        <Route path="/lyte-awards" element={<LyteAwards />} />
        <Route path="/blog-grid" element={<BlogsGridView />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path={"*" || "/404"} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRoutes;

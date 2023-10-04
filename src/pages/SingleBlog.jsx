import React, { useState } from "react";
import BlogHeader from "../components/Blogs/BlogHeader";
import MinipageStart from "../components/Others/MinipageStart";
import PreLoader from "../components/PreLoader";
import styled from "styled-components";
import Blog from "../components/Blogs/Blog";
import Footer from "../components/Footer";
import ScrollToTop from "./ScrollToTop";

const SingleBlog = () => {
  const [seeLoader, setSeeLoader] = useState(true);
  setTimeout(() => {
    setSeeLoader(false);
  }, 800);
  window.scrollTo(0, 0);
  return (
    <>
      <Container>
        {seeLoader && <PreLoader />}
        <BlogHeader />
        <MinipageStart page="Single Blog" />
        <Blog />
        <ScrollToTop />
        <Footer />
      </Container>
    </>
  );
};
const Container = styled.div``;
export default SingleBlog;

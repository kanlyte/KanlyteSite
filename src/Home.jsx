import React, { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import HeroArea from "./pages/HeroArea";
import ScrollToTop from "./pages/ScrollToTop";
import OurServices from "./pages/OurServices";
import BTeam from "./pages/BTeam";
import OurLatestWork from "./pages/OurLatestWork";
import BlogGrid from "./components/Blogs/BlogGrid";
import PreLoader from "./components/PreLoader";
import styled from "styled-components";
import FAQS from "./pages/FAQS";
import OurClients from "./pages/OurClients";

const Home = () => {
  const [seeLoader, setSeeLoader] = useState(true);
  setTimeout(() => {
    setSeeLoader(false);
  }, 800);
  window.scrollTo(0, 0);
  return (
    <>
      <Container>
        {seeLoader && <PreLoader />}
        <Header />
        <HeroArea />
        <OurServices />
        <OurLatestWork />
        <BlogGrid />
        <BTeam />
        <FAQS />
        <OurClients />
        <Footer />
        <ScrollToTop />
      </Container>
    </>
  );
};
const Container = styled.div``;
export default Home;

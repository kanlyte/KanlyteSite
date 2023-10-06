import React from "react";
import BTeam from "./BTeam";
import Footer from "../components/Footer";
import PreLoader from "../components/PreLoader";
import Header from "../components/header/Header";
import styled from "styled-components";

import { useState } from "react";
import ScrollToTop from "./ScrollToTop";

const AboutUs = () => {
  const [seeLoader, setSeeLoader] = useState(true);
  setTimeout(() => {
    setSeeLoader(false);
  }, 800);
  window.scrollTo(0, 0);
  return (
    <Container>
      {seeLoader && <PreLoader />}
      <Header />
      <BTeam />
      <Footer />
      <ScrollToTop />
    </Container>
  );
};
const Container = styled.div``;
export default AboutUs;

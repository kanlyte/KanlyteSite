import React, { useState } from "react";
import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from "../components/contact/ContactForm";
import PreLoader from "../components/PreLoader";
import styled from "styled-components";
import Footer from "../components/Footer";
import ScrollToTop from "./ScrollToTop";
import ContactStart from "../components/contact/ContactStart";

const ContactUs = () => {
  const [seeLoader, setSeeLoader] = useState(true);
  setTimeout(() => {
    setSeeLoader(false);
  }, 800);
  window.scrollTo(0, 0);
  return (
    <Container>
      {seeLoader && <PreLoader />}
      <ContactHeader />
      <ContactStart />
      <ContactForm />
      <ScrollToTop />
      <Footer />
    </Container>
  );
};
const Container = styled.div``;
export default ContactUs;

import React from "react";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <a href="#" className="scroll-top">
      <i className="las la-angle-up"></i>
    </a>
  );
};

export default ScrollToTop;
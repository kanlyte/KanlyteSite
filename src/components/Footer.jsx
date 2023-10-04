import React from "react";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer-top">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-footer f-about">
                  <div className="logo">
                    <a href="/">
                      <img src="uploads/logo.jpeg" alt="#" />
                    </a>
                  </div>
                  <p>
                    We are a technology company aimed to digitalize the economy
                    of Uganda through provision of quality IT solutions.
                  </p>
                  <h4 className="social-title">Follow Us On:</h4>
                  <ul className="social">
                    <li>
                      <a href={() => false}>
                        <i className="lab la-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lab la-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={() => false}>
                        <i className="lab la-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href={() => false}>
                        <i className="lab la-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a href={() => false}>
                        <i className="lab la-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h3>Solutions</h3>
                  <ul>
                    <li>
                      <a href={() => false}>School Websites</a>
                    </li>
                    <li>
                      <a href={() => false}>short courses</a>
                    </li>
                    <li>
                      <a href={() => false}>WordPress Customization</a>
                    </li>
                    <li>
                      <a href={() => false}>App development</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h3>Support</h3>
                  <ul>
                    <li>
                      <a href={() => false}>Pricing</a>
                    </li>
                    <li>
                      <a href={() => false}>Documentation</a>
                    </li>
                    <li>
                      <a href="/about-us">about Us</a>
                    </li>
                    <li>
                      <a href="/contact-us">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-footer newsletter">
                  <h3>Subscribe</h3>
                  <p>Subscribe to our newsletter for the latest updates</p>
                  <form
                    action="#"
                    method="get"
                    target="_blank"
                    className="newsletter-form"
                  >
                    <input
                      name="EMAIL"
                      placeholder="Email address"
                      required="required"
                      type="email"
                    />
                    <div class="button">
                      <button className="sub-btn">
                        <i className="las la-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <p className="copyright-text">
                  © 2023 Kanlyte Tech - All Rights Reserved
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <p className="copyright-owner">
                  Designed and Developed by{" "}
                  <a href="" rel="nofollow" target="_blank">
                    Kanlyte Uganda
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

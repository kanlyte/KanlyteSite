import React from "react";

const OurServices = () => {
  return (
    <div className="services section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                What we offer
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Our Services
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                Our IT company provides a wide range of cutting-edge technology
                solutions to meet your business needs. Our services include.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="single-service">
              <div className="main-icon">
                <i className="las la-graduation-cap"></i>
              </div>
              <h4 className="text-title">School Websites</h4>
              <p>
                Transform your school's online presence with our expert School
                Website Design service.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="single-service">
              <div className="main-icon">
                <i className="las la-code"></i>
              </div>
              <h4 className="text-title">Software Development</h4>
              <p>
                Unlock the full potential of your business with our Software
                Development Service in today's fast-paced digital landscape.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="single-service">
              <div className="main-icon">
                <i className="lab la-medapps"></i>
              </div>
              <h4 className="text-title">Mobile Apps Development</h4>
              <p>
                We specialize in providing top-notch mobile app development
                services tailored to meet the unique needs of your business.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="single-service">
              <div className="main-icon">
                <i className="las la-laptop-code"></i>
              </div>
              <h4 className="text-title">Intership Training</h4>
              <p>
                As an IT intern at Kanlyte, you will have the opportunity to
                work alongside our team and contribute to real-world projects.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="single-service">
              <div className="main-icon">
                <i className="las la-user-friends"></i>
              </div>
              <h4 className="text-title">Short Courses</h4>
              <p>
                We do offer short online causes in the IT field to those who
                would want to add on thir skills.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="single-service">
              <div className="main-icon">
                <i className="lab la-wordpress"></i>
              </div>
              <h4 className="text-title">WordPress Customization</h4>
              <p>
                We do wordpress customization of E-commerce, websites and
                portfolios at cheap prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

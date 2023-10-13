import React from "react";
import Office from "../assets/office.jpg";
const About = () => {
  return (
    <section className="about section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="image wow fadeInLeft" data-wow-delay=".2s">
              <img src={Office} alt="#" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="content wow fadeInRight" data-wow-delay=".4s">
              <h4>Kanlyte Uganda</h4>
              <h2>
                We’ve built a platform to help our Customers reach us and give
                feedback .
              </h2>
              <p>
                Kanlyte Uganda limited is a technology based company which was
                started in 2022 with an aim of creating software systems which
                can bring civilisation to Uganda. We are proud Delivering a
                variety of IT services to the public including trainings, we are
                located at Nassa Road kampala Uganda.
              </p>
              <div className="list">
                <div className="single-list">
                  <div className="list-icon">
                    <i className="lab la-checkmark"></i>
                  </div>
                  <h4>School Website Design</h4>
                  <p>We design school websites with wordPress</p>
                </div>
                <div className="single-list">
                  <div className="list-icon">
                    <i className="las la-checkmark"></i>
                  </div>
                  <h4>Software Development</h4>
                  <p>We design seamless software applications</p>
                </div>
                <div className="single-list">
                  <div className="list-icon">
                    <i className="las la-checkmark"></i>
                  </div>
                  <h4>E-commerce and email Hosting</h4>
                  <p>We do e-commerce and wordPresscustomization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

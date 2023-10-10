import React from "react";
import Countup from "../components/Others/CountUp";

const Achievments = () => {
  return (
    <section className="our-achievement section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
            <div className="title">
              <h4>Our Trusted Clients and Tramendous Milestone</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div
                  className="single-achievement wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <Countup
                    className="counter"
                    end={5}
                    duration={3}
                    suffix="+"
                  />
                  <p>Satisfaction clients</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div
                  className="single-achievement wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <Countup
                    className="counter"
                    end={60}
                    duration={3}
                    suffix="+"
                  />
                  <p>Connections</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div
                  className="single-achievement wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <Countup
                    className="counter"
                    end={15}
                    duration={3}
                    suffix="+"
                  />
                  <p>ongoing Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="counter-shape1"></span>
      <span className="counter-shape2"></span>
      <span className="counter-shape3"></span>
    </section>
  );
};

export default Achievments;

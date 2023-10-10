import React from "react";

const OurPricing = () => {
  return (
    <section id="pricing" class="pricing-table section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                pricing
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Pricing & Plans
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                At Kanlyte, we believe in offering flexible and transparent
                pricing options to meet your unique requirements. Whether you're
                a small business owner, a startup, or a large enterprise, we
                have a pricing plan designed just for you. Explore our pricing
                options below.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="single-table">
              <div className="table-head">
                <h4 className="title">School Websites</h4>
                <p className="sub-title">WordPress Customization</p>
                <div className="price">
                  <h2 className="amount">
                    <span className="currency">UGX</span>600k
                    <span className="duration">2 months Completion time</span>
                  </h2>
                </div>
              </div>
              <div className="table-content">
                <ul className="table-list">
                  <li>Domain inclusive</li>
                  <li>Free Hosting</li>
                  <li className="disable">2 years free Maintenance</li>
                  <li className="disable">Lifetime Updates</li>
                </ul>
              </div>
              <div className="button">
                <a href="javascript:void(0)" className="btn">
                  Contact Us <i className="lni lni-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="single-table middle">
              <div className="table-head">
                <h4 className="title">Software Development</h4>
                <p className="sub-title">Powerful & Awesome Elements</p>
                <div className="price">
                  <h2 className="amount">
                    <span className="currency">UGX</span>1M
                    <br />
                    <span className="duration">2 months Completion time</span>
                  </h2>
                </div>
              </div>
              <div className="table-content">
                <ul className="table-list">
                  <li>scalable</li>
                  <li>Hosting inclusive</li>
                  <li>Maintenance</li>
                  <li className="disable">Lifetime Updates</li>
                </ul>
              </div>
              <div className="button">
                <a href="javascript:void(0)" className="btn btn-alt">
                  COntact Us <i className="lni lni-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".8s"
          >
            <div className="single-table">
              <div className="table-head">
                <h4 className="title">E-commerce sites</h4>
                <p className="sub-title">WordPress and Javascript</p>
                <div className="price">
                  <h2 className="amount">
                    <span className="currency">UGX</span>600k
                    <span className="duration">3 months Completion time</span>
                  </h2>
                </div>
              </div>
              <div className="table-content">
                <ul className="table-list">
                  <li>Includes hosting</li>
                  <li>Domain</li>
                  <li>6 Month Premium Support</li>
                  <li>Lifetime Updates</li>
                </ul>
              </div>
              <div className="button">
                <a href="javascript:void(0)" className="btn">
                  Contact Us <i className="lni lni-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPricing;

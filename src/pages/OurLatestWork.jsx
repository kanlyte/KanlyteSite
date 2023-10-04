import React from "react";

const OurLatestWork = () => {
  return (
    <section className="portfolio-section section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                Case Study
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Our Latest Works
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                We are thrilled to showcase our most recent projects, a
                testament to our commitment to excellence and cutting-edge
                solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="portfolio-btn-wrapper wow fadeInUp"
              data-wow-delay=".4s"
            >
              <button className="portfolio-btn active" data-filter="*">
                All
              </button>
              <button className="portfolio-btn" data-filter=".branding">
                Branding
              </button>
              <button className="portfolio-btn" data-filter=".marketing">
                Marketing
              </button>
              <button className="portfolio-btn" data-filter=".web">
                Web Design
              </button>
              <button className="portfolio-btn" data-filter=".graphic">
                Graphic Design
              </button>
            </div>
          </div>
        </div>
        <div className="row grid">
          <div className="col-lg-4 col-md-6 grid-item branding marketing">
            <div className="portfolio-item-wrapper">
              <div className="portfolio-img">
                <img src="uploads/images/pf-1.jpg" alt="" />
              </div>
              <div class="portfolio-overlay">
                <div className="overlay-content">
                  <span>Branding</span>
                  <h4>Product Branding</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item marketing graphic">
            <div className="portfolio-item-wrapper">
              <div className="portfolio-img">
                <img src="uploads/images/pf-1.jpg" alt="" />
              </div>
              <div className="portfolio-overlay">
                <div className="overlay-content">
                  <span>Graphics Design</span>
                  <h4>Packaging Design</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item branding">
            <div className="portfolio-item-wrapper">
              <div className="portfolio-img">
                <img src="uploads/images/wp.jpg" alt="" />
              </div>
              <div className="portfolio-overlay">
                <div className="overlay-content">
                  <span>WordPress</span>
                  <h4>Customization</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item web">
            <div className="portfolio-item-wrapper">
              <div className="portfolio-img">
                <img src="uploads/images/pf-1.jpg" alt="" />
              </div>
              <div className="portfolio-overlay">
                <div className="overlay-content">
                  <span>Web Development</span>
                  <h4>Beauty Care Web Apps</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item graphic">
            <div className="portfolio-item-wrapper">
              <div className="portfolio-img">
                <img src="uploads/images/pf-1.jpg" alt="" />
              </div>
              <div className="portfolio-overlay">
                <div className="overlay-content">
                  <span>Graphics Design</span>
                  <h4>Mocup Design</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item web">
            <div className="portfolio-item-wrapper">
              <div className="portfolio-img">
                <img src="uploads/images//pf-6.jpg" alt="" />
              </div>
              <div className="portfolio-overlay">
                <div className="overlay-content">
                  <span>App Development</span>
                  <h4>Mobile Apps Design</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLatestWork;

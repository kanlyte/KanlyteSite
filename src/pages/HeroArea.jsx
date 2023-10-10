import React from "react";

const HeroArea = () => {
  return (
    <section class="hero-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-12 col-12">
            <div class="hero-content">
              <h4 class="wow fadeInUp" data-wow-delay=".2s">
                We Are Kanlyte Uganda
              </h4>
              <h1 class="wow fadeInUp" data-wow-delay=".4s">
                A home of transformative technology.
              </h1>
              <p class="wow fadeInUp" data-wow-delay=".6s">
                Unleash the power of technology with our top-notch Software
                Development services.
                <br />
                Our experienced team of Developers specializes in creating
                tailord software Solutions that streamline your business
                operations.
              </p>
              <div class="button wow fadeInUp" data-wow-delay=".8s">
                <a href="/about-us" class="btn ">
                  Discover More
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-12">
            <div class="hero-image">
              <img class="main-image" src="uploads/hero-image.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroArea;

import React from "react";

const HeroArea = () => {
  return (
    <section class="hero-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-12 col-12">
            <div class="hero-content">
              <h4 class="wow fadeInUp" data-wow-delay=".2s">
                Kanlyte Uganda Presents
              </h4>
              <h1 class="wow fadeInUp" data-wow-delay=".4s">
                Lyte Awards 2024.
              </h1>
              <p class="wow fadeInUp" data-wow-delay=".6s">
              Discover Excellence, Celebrate Achievement: Where Innovation and Inspiration Collide – Welcome to the Lyte Awards 2024. Apply to be part of it.
              </p>
              <div class="button wow fadeInUp" data-wow-delay=".8s">
                <a href="/lyte-awards" class="btn ">
                  Read More
                </a>
              </div>
              <div class="button wow fadeInUp" data-wow-delay=".8s">
                <a href="https://forms.gle/QLc6fgB2Ym5EAjHB9" class="btn " id="btn-award">
                  Apply for lyte awards
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-12">
            <div class="hero-image">
              <img class="main-image" src="uploads/hero-image.jpg" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroArea;

import React from "react";

const BlogGrid = () => {
  return (
    <section className="blog-section section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                Blogs
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Our Latest News
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                Check out our latest news and upcomming events at Kanlyte Uganda
                and feel free to leave a comment much appreciated.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
        <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".8s"
          >
            <div className="single-blog-grid">
              <div className="blog-img">
                <a href="/blog">
                  <img src="uploads/hero-image.jpg" alt="#" />
                </a>
              </div>
              <div className="blog-content">
                <div className="meta-info">
                  <a className="date" href={() => false}>
                    <i className="las la-stopwatch"></i>Feb 1, 2024
                  </a>
                  <a className="author" href={() => false}>
                    <i className="las la-user"></i> Kanlyte Uganda
                  </a>
                </div>
                <h4>
                  <a href="/lyte-awards">Lyte Awards 2024.</a>
                </h4>
                <p>
                Discover Excellence, Celebrate Achievement: Where Innovation and Inspiration Collide – Welcome to the Lyte Awards 2024. Apply to be part of it.
                </p>
                <div className="button">
                  <a href="/lyte-awards" className="btn">
                    Read Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="single-blog-grid">
              <div className="blog-img">
                <a href="/blog">
                  <img src="uploads/blogs/blog-1.png" alt="#" />
                </a>
              </div>
              <div className="blog-content">
                <div className="meta-info">
                  <a className="date" href={() => false}>
                    <i className="las la-clock"></i> 10 June 2023
                  </a>
                  <a className="author" href={() => false}>
                    <i className="las la-user"></i> C.E.O kanlyte
                  </a>
                </div>
                <h4>
                  <a href="/blog">Lyte App.</a>
                </h4>
                <p>
                  Lyte provides a convinient way to find accomodation. From the
                  application, you can find hotels in a certain location, Rental
                  Houses, .....
                </p>
                <div className="button">
                  <a href="/blog" className="btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="single-blog-grid">
              <div className="blog-img">
                <a href="/blog">
                  <img src="uploads/blogs/blog-2.png" alt="#" />
                </a>
              </div>
              <div className="blog-content">
                <div className="meta-info">
                  <a className="date" href={() => false}>
                    <i className="las la-stopwatch"></i> 5 Aug 2023
                  </a>
                  <a className="author" href={() => false}>
                    <i className="las la-user"></i> Aggi Peter
                  </a>
                </div>
                <h4>
                  <a href="/blog">How Kanlyte Uganda Started.</a>
                </h4>
                <p>
                  Kanlyte Uganda limited is a technology based company which was
                  started in 2022 with an aim of creating software systems which
                  can bring civilisation to Uganda.
                </p>
                <div className="button">
                  <a href="/blog" className="btn">
                    Read Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;

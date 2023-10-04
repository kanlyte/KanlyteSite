import React from "react";
import styled from "styled-components";
import BlogHeader from "./BlogHeader";
import ScrollToTop from "../../pages/ScrollToTop";
import Footer from "../Footer";
import MinipageStart from "../Others/MinipageStart";
import Image_1 from "../../assets/images/images.jpg";
import Image_2 from "../../assets/images/damoday.jpg";
import Image_3 from "../../assets/images/sch.jpg";
import Image_4 from "../../assets/images/lira.jpg";

const BlogsGridView = () => {
  return (
    <Container>
      <BlogHeader />
      <MinipageStart page="Blog Grid Sidebar" />
      <section className="section blog-grid-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="single-blog-grid">
                    <div className="blog-img">
                      <a href="/blog">
                        <img src={Image_1} alt="#" />
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="meta-info">
                        <a className="date" href={() => false}>
                          <i className="las la-stopwatch"></i> 10 June 2023
                        </a>
                        <a className="author" href="javascript:void(0)">
                          <i className="las la-user"></i> kanlyte
                        </a>
                      </div>
                      <h4>
                        <a href="/blog">Lyte App.</a>
                      </h4>
                      <p>
                        Lyte provides a convinient way to find accomodation.
                        From the application, you can find hotels in a certain
                        location, Rental Houses.
                      </p>
                      <div className="button">
                        <a href="/blog" className="btn">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="single-blog-grid">
                    <div className="blog-img">
                      <a href="/blog">
                        <img src={Image_2} alt="#" />
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="meta-info">
                        <a className="date" href={() => false}>
                          <i className="las la-stopwatch"></i> 5 Aug 2023
                        </a>
                        <a className="author" href="javascript:void(0)">
                          <i className="las la-user"></i> C.E.O
                        </a>
                      </div>
                      <h4>
                        <a href="/blog">How Kanlyte Uganda Started.</a>
                      </h4>
                      <p>
                        Kanlyte Uganda limited is a technology based company
                        which was started in 2022 with an aim of creating
                        software systems which can...
                      </p>
                      <div className="button">
                        <a href="/blog" className="btn">
                          Read Blog
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="single-blog-grid">
                    <div class="blog-img">
                      <a href="/blog">
                        <img src={Image_1} alt="#" />
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="meta-info">
                        <a className="date" href={() => false}>
                          <i className="las la-stopwatch"></i> 25 Dec 2023
                        </a>
                        <a className="author" href={() => false}>
                          <i className="las la-user"></i> Kanlyte Uganda
                        </a>
                      </div>
                      <h4>
                        <a href="/blog">Job Advert.</a>
                      </h4>
                      <p>
                        We are hiring A UI/UX Designer that has three Years of
                        experience.with project achievements
                      </p>
                      <div className="button">
                        <a href="/blog" className="btn">
                          Read Blog
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="single-blog-grid">
                    <div className="blog-img">
                      <a href="/blog">
                        <img src={Image_2} alt="#" />
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="meta-info">
                        <a className="date" href="javascript:void(0)">
                          <i className="las la-stopwatch"></i> 10 June 2023
                        </a>
                        <a className="author" href="javascript:void(0)">
                          <i className="las la-user"></i> Kanlyte
                        </a>
                      </div>
                      <h4>
                        <a href="/blog">Lyte App wins Demo day 2023.</a>
                      </h4>
                      <p>
                        Lyte app emerges as the winner of the demo day
                        pitching....
                      </p>
                      <div className="button">
                        <a href="/blog" className="btn">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="single-blog-grid">
                    <div className="blog-img">
                      <a href="/blog">
                        <img src={Image_4} alt="#" />
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="meta-info">
                        <a className="date" href="javascript:void(0)">
                          <i className="las la-clock"></i> 5 Aug 2023
                        </a>
                        <a className="author" href="javascript:void(0)">
                          <i className="las la-user"></i> Kanlyte
                        </a>
                      </div>
                      <h4>
                        <a href="/blog">Lyte app adopted by Lira University.</a>
                      </h4>
                      <p>
                        Lira University adopts and advertises lyte app on their
                        website and encourages students to use it for....
                      </p>
                      <div className="button">
                        <a href="/blog" class="btn">
                          Read Blog
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="single-blog-grid">
                    <div className="blog-img">
                      <a href="/blog">
                        <img src={Image_3} alt="#" />
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="meta-info">
                        <a className="date" href="javascript:void(0)">
                          <i className="las la-clock"></i> 03 Nov 2023
                        </a>
                        <a className="author" href="javascript:void(0)">
                          <i className="las la-user"></i> Kanlyte Uganda
                        </a>
                      </div>
                      <h4>
                        <a href="/blog">
                          Kanlyte Launches school websites program.
                        </a>
                      </h4>
                      <p>
                        Kanlyte Uganda lauches the compaign "every school must
                        have a website...".
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
              <div className="pagination left">
                <ul className="pagination-list">
                  <li>
                    <a href={() => false}>Prev</a>
                  </li>
                  <li className="active">
                    <a href={() => false}>2</a>
                  </li>
                  <li>
                    <a href={() => false}>3</a>
                  </li>
                  <li>
                    <a href={() => false}>4</a>
                  </li>
                  <li>
                    <a href={() => false}>Next</a>
                  </li>
                </ul>
              </div>
            </div>
            <aside className="col-lg-4 col-md-12 col-12">
              <div className="sidebar">
                <div className="widget search-widget">
                  <h5 className="widget-title">Search This Site</h5>
                  <form action="#">
                    <input type="text" placeholder="Search ..." />
                    <button type="submit">
                      <i className="las la-search"></i>
                    </button>
                  </form>
                </div>
                <div className="widget popular-feeds">
                  <h5 className="widget-title">Trending News</h5>
                  <div className="popular-feed-loop">
                    <div className="single-popular-feed">
                      <div className="feed-desc">
                        <h6 className="post-title">
                          <a href="/blog">Lyte app wins at Demo day 2023</a>
                        </h6>
                        <span className="time">
                          <i className="las la-calendar"></i> 05th Nov 2023
                        </span>
                      </div>
                    </div>
                    <div className="single-popular-feed">
                      <div className="feed-desc">
                        <h6 className="post-title">
                          <a href="/blog">How Kanlyte started</a>
                        </h6>
                        <span className="time">
                          <i className="las la-calendar"></i> 24th March 2023
                        </span>
                      </div>
                    </div>
                    <div className="single-popular-feed">
                      <div className="feed-desc">
                        <h6 className="post-title">
                          <a href="/blog">We are hiring UI/UX Designer</a>
                        </h6>
                        <span className="time">
                          <i className="las la-calendar"></i> 30th Jan 2023
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget categories-widget">
                  <h5 className="widget-title">Categories</h5>
                  <ul className="custom">
                    <li>
                      <a href={() => false}>Creative</a>
                    </li>
                    <li>
                      <a href={() => false}>Technology</a>
                    </li>
                    <li>
                      <a href={() => false}>Startup</a>
                    </li>
                    <li>
                      <a href={() => false}>Branding</a>
                    </li>
                    <li>
                      <a href={() => false}>Web Design</a>
                    </li>
                  </ul>
                </div>
                <div className="widget popular-tag-widget">
                  <h5 className="widget-title">Popular Tags</h5>
                  <div className="tags">
                    <a href={() => false}>Creative</a>
                    <a href={() => false}>Consultation</a>
                    <a href={() => false}>UI/Ux</a>
                    <a href={() => false}>App Design</a>
                    <a href={() => false}>Interview</a>
                    <a href={() => false}>Jobs</a>
                    <a href={() => false}>Develop</a>
                    <a href={() => false}>WordPress</a>
                    <a href={() => false}>Tech</a>
                    <a href={() => false}>Consult</a>
                    <a href={() => false}>Employee</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <ScrollToTop />
      <Footer />
    </Container>
  );
};

const Container = styled.section`
  .blog-section {
    background-color: #f9f9f9;
  }
  .blog-section .section-title {
    margin-bottom: 50px;
  }
`;

export default BlogsGridView;

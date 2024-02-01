import React, { useState } from "react";
import PreLoader from "../PreLoader";
import BlogHeader from "./BlogHeader";
import MinipageStart from "../Others/MinipageStart";
import ScrollToTop from "../../pages/ScrollToTop";
import Footer from "../Footer";

const LyteAwards = () => {
  const [seeLoader, setSeeLoader] = useState(true);
  setTimeout(() => {
    setSeeLoader(false);
  }, 800);
  window.scrollTo(0, 0);
  return (
    <>
      {seeLoader && <PreLoader />}
      <BlogHeader />
      <MinipageStart page="Single Blog" />
      <section className="section blog-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12">
              <div className="single-inner">
                <div className="post-details">
                  <div className="main-content-head">
                    <div className="post-thumbnils">
                      <img src="uploads/hero-image.jpg" alt="#" />
                    </div>
                    <div className="meta-information">
                      <h2 className="post-title">Lyte Awards 2024.</h2>
                      <ul class="meta-info">
                        <li>
                          <a href={() => false}>By Kanlyte</a>
                        </li>
                        <li>
                          <a href={() => false}>1 Feb 2024</a>
                        </li>
                        <li>
                          <a href={() => false}>Innovation awards</a>
                        </li>
                      </ul>
                    </div>
                    <div class="detail-inner">
                      <p>
                        Welcome to the Lyte Awards, a prestigious celebration of
                        excellence and innovation in various realms! As we
                        embark on this extraordinary journey, we shine a
                        spotlight on individuals and ventures that have not only
                        excelled but have also made indelible marks in their
                        respective fields. The Lyte Awards is more than just a
                        recognition platform; it's a testament to the
                        extraordinary talent and dedication that propels our
                        industries forward.
                      </p>
                      <p>
                        In the category of "Best Graphics Designer," we Honor
                        the visionaries who bring art to life through their
                        creativity and design prowess. Our "Rising Star
                        Developer" category spotlights the tech maestros who are
                        shaping the future of digital landscapes. "Startup of
                        the Year" recognizes the entrepreneurial spirit that
                        fuels groundbreaking ventures. These startups not only
                        disrupt industries but also demonstrate resilience,
                        adaptability, and a commitment to transformative ideas.
                      </p>
                      <h3>Categories Description</h3>
                      <div className="image-block">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-12">
                            <img src="uploads/hero-image.jpg" alt="#" />
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <img src="uploads/hero-image.jpg" alt="#" />
                          </div>
                        </div>
                      </div>
                      <p>
                      In the category of "Best Graphics Designer," we Honor the visionaries who bring art to life through their creativity and design prowess. 
                      </p>
                      <p>
                      Our "Rising Star Developer" category spotlights the tech maestros who are shaping the future of digital landscapes. 
                      </p>
                      <p>Startup of the Year recognizes the entrepreneurial spirit that fuels groundbreaking ventures. These startups not only disrupt industries but also demonstrate resilience, adaptability, and a commitment to transformative ideas. </p>
                      <p>In the realm of social influence, our "Outstanding Social Media Influencer" category pays tribute to those who leverage their online presence to inspire, inform, and entertain. These influencers possess the ability to connect with audiences, ignite conversations, and catalyse positive change.</p>
                      <p>As we unveil the winners of the Lyte Awards, we invite you to join us in celebrating excellence, innovation, and the boundless possibilities that lie ahead. Let the Lyte Awards be a source of inspiration and motivation for us all to strive for greatness and leave an indelible mark on our respective industries. Together, let's illuminate the path to a future where brilliance knows no bounds!</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="post-comments">
                <h3 className="comment-title">
                  <span>02 Comments on this post</span>
                </h3>
                <ul className="comments-list">
                  <li>
                    <div className="comment-img">
                      <img src="uploads/hero-image.png" alt="img" />
                    </div>
                    <div className="comment-desc">
                      <div className="desc-top">
                        <h6>Okwi John</h6>
                        <span className="date">28 Dec 2023</span>
                        <a href={() => false} className="reply-link">
                          <i className="las la-reply"></i>Reply
                        </a>
                      </div>
                      <p>This is really nice much appreciated love it.</p>
                    </div>
                  </li>
                  <li>
                    <div class="comment-img">
                      <img src="uploads/hero-image.png" alt="img" />
                    </div>
                    <div class="comment-desc">
                      <div class="desc-top">
                        <h6>Atai Samuel</h6>
                        <span class="date">25 Mar 2023</span>
                        <a href={() => false} class="reply-link">
                          <i class="las la-reply"></i>Reply
                        </a>
                      </div>
                      <p>So nice.</p>
                    </div>
                  </li>
                </ul>
              </div> */}
              <div className="comment-form">
                <h3 className="comment-reply-title">Leave a comment</h3>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-box form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-custom"
                          placeholder="Name*"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-box form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control form-control-custom"
                          placeholder="Email*"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-box form-group">
                        <textarea
                          name="#"
                          className="form-control form-control-custom"
                          placeholder="Comments*"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="button">
                        <button type="submit" className="btn">
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <aside className="col-lg-4 col-md-12 col-12">
              <div className="sidebar">
                <div className="widget search-widget">
                  <h5 className="widget-title">Search This Site</h5>
                  <form action="/blog">
                    <input type="text" placeholder="Search ..." />
                    <button type="submit">
                      <i className="las la-search"></i>
                    </button>
                  </form>
                </div>
                <div className="widget popular-feeds">
                  <h5 className="widget-title">Trending News at Kanlyte</h5>
                  <div className="popular-feed-loop">
                    <div className="single-popular-feed">
                      <div className="feed-desc">
                        <h6 className="post-title">
                          <a href="/lyte-awards">Lyte Awards 2024</a>
                        </h6>
                        <span className="time">
                          <i className="las la-calendar"></i> 1 Feb 2024
                        </span>
                      </div>
                    </div>
                    <div className="single-popular-feed">
                      <div className="feed-desc">
                        <h6 className="post-title">
                          <a href="/blog-single">
                            Lyte App emmerged the Winner at The demo day
                          </a>
                        </h6>
                        <span className="time">
                          <i className="las la-calendar"></i> 24th March 2023
                        </span>
                      </div>
                    </div>
                    <div className="single-popular-feed">
                      <div className="feed-desc">
                        <h6 className="post-title">
                          <a href="/blog-single">
                            We are Hiring UI/UX Designer with 3 yrs exp
                          </a>
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
                    <a href={() => false}>Case</a>
                    <a href={() => false}>Design</a>
                    <a href={() => false}>Ui/Ux</a>
                    <a href={() => false}>Graphics Design</a>
                    <a href={() => false}>Popular</a>
                    <a href={() => false}>Marketing</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default LyteAwards;

import React from "react";

const Blog = () => {
  return (
    <section className="section blog-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-12">
            <div className="single-inner">
              <div className="post-details">
                <div className="main-content-head">
                  <div className="post-thumbnils">
                    <img src="uploads/blogs/blog-1.png" alt="#" />
                  </div>
                  <div className="meta-information">
                    <h2 className="post-title">
                      Lyte App innovation by Kanlyte Tech.
                    </h2>
                    <ul class="meta-info">
                      <li>
                        <a href={() => false}>By Kanlyte</a>
                      </li>
                      <li>
                        <a href={() => false}>20 Jun 2023</a>
                      </li>
                      <li>
                        <a href={() => false}>Innovation</a>
                      </li>
                    </ul>
                  </div>
                  <div class="detail-inner">
                    <p>
                      The Lyte app provides accessibility of housing properties
                      by showing their physical location on a google map,
                      district division, the pricing rates and the services
                      offered. The app gives an option of direct contact between
                      tenants and property owners through messaging, WhatsApp,
                      and direct calling to the owners.The app allows property
                      owners to add and manage their properties.
                    </p>
                    <p>
                      `Our vision is to provide awareness of the availability of
                      housing and accommodation services to the public. The App
                      provides listings of housing properties (that is to say,
                      apartments, rental houses, studio rooms, hostels) uploaded
                      by the property owners and interested members of the
                      public can access. Currently in Uganda, There is no
                      outstanding digital application that can help in managing
                      housing properties and providing accessibility to
                      affordable housing properties to the public, that's why
                      the Lyte App seems to have a big market opportunity ahead.
                    </p>
                    <h3>App Features</h3>
                    <div className="image-block">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                          <img src="uploads/blogs/blog-inner1.jpg" alt="#" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <img src="uploads/blogs/blog-inner1.jpg" alt="#" />
                        </div>
                      </div>
                    </div>
                    <p>
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved from generation X
                      is on the runway
                    </p>
                    <p>
                      Heading towards a streamlined cloud solution. User
                      generated content in real-time will have multiple
                      touchpoints for offshoring Capitalize on low hanging fruit
                      to identify a ballpark value added activity to beta test.
                      Override the digital divide with additional
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-comments">
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
                      <a href="javascript:void(0)" class="reply-link">
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
                      <a href="javascript:void(0)" class="reply-link">
                        <i class="las la-reply"></i>Reply
                      </a>
                    </div>
                    <p>So nice.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="comment-form">
              <h3 className="comment-reply-title">Leave a comment</h3>
              <form action="#" method="POST">
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
                        <a href="blog-single.html">
                          How Kanlyte Uganda Started
                        </a>
                      </h6>
                      <span className="time">
                        <i className="las la-calendar"></i> 05th Nov 2023
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
                    <a href="javascript:void(0)">Creative</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Technology</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Startup</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Branding</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Web Design</a>
                  </li>
                </ul>
              </div>
              <div className="widget popular-tag-widget">
                <h5 className="widget-title">Popular Tags</h5>
                <div className="tags">
                  <a href="javascript:void(0)">Creative</a>
                  <a href="javascript:void(0)">Consultation</a>
                  <a href="javascript:void(0)">Case</a>
                  <a href="javascript:void(0)">Design</a>
                  <a href="javascript:void(0)">Ui/Ux</a>
                  <a href="javascript:void(0)">Graphics Design</a>
                  <a href="javascript:void(0)">Popular</a>
                  <a href="javascript:void(0)">Marketing</a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Blog;

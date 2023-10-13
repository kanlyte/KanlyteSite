import React from "react";

const BlogHeader = () => {
  return (
    <header className="header navbar-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="nav-inner">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
                  <img src="uploads/logo.jpeg" alt="Logo" />
                </a>
                <button
                  className="navbar-toggler mobile-menu-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a href="/" aria-label="Toggle navigation">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/about-us" aria-label="Toggle navigation">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="dd-menu collapsed"
                        href={() => false}
                        data-bs-toggle="collapse"
                        data-bs-target="#submenu-1-1"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        Pages
                      </a>
                      <ul className="sub-menu collapse" id="submenu-1-1">
                        <li className="nav-item">
                          <a href="/about-us">Software Development</a>
                        </li>
                        <li className="nav-item">
                          <a href="/pricing">Website design</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="dd-menu active collapsed"
                        href={() => false}
                        data-bs-toggle="collapse"
                        data-bs-target="#submenu-1-2"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        Blog
                      </a>
                      <ul className="sub-menu collapse" id="submenu-1-2">
                        <li className="nav-item">
                          <a href="/blog-grid">Blog Grid</a>
                        </li>
                        <li className="nav-item active">
                          <a href="/blog">Blog Single</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="/contact-us" aria-label="Toggle navigation">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="button">
                  <a href="/signup" className="btn">
                    Join Our Online Classes
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;

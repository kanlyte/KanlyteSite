import React from "react";
import { Link } from "react-router-dom";

const MinipageStart = ({ page }) => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
            <div className="breadcrumbs-content">
              <h1 className="page-title">{page}</h1>
              <ul className="breadcrumb-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>{page}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinipageStart;

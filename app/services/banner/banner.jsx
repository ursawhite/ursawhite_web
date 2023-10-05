import React from "react";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className="container">
      <div className="row">
        <h1
          className={`text-center text-white display-2 fw-bold m-5 ${styles.title}`}
        >
          Our Services
        </h1>
        <div className="col-lg-6 col-md-6 border border-5 border-end-0 border-bottom-0">
          <p className={`fw-bold ms-5 mt-5 ${styles.subtitle}`}>
            YOUR DIGITAL DESIGN PARTNER
          </p>
          <h1 className="text-left display-4 text-white fw-bold ms-5">
            We are a digital design agency
          </h1>
        </div>
        <div className="col-lg-6 col-md-6 border border-5 border-start-0 border-top-0 ">
          <h3
            className={`display-6 text-right fw-bold me-5 mt-5 ms-5 ${styles.title}`}
          >
            Web & Mobile Development
          </h3>
          <h6 className="text-right text-white me-5 mb-5 ms-5 mt-5">
            Ursa White is a team who Create comprehensive and impactful sofware
            solutions spanning user experience and technical funtionality.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Banner;

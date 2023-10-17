import React from "react";
import { TypeAnimation } from "react-type-animation";
// import "./BannerMobile.scss";

function BannerMobile() {
  return (
    <div className="container">
      <div
        className="row d-flex align-items-center "
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="col">
          <div className="display-1 fw-bold text-white mt-5">URSAWHITE</div>
          <div className="d-flex">
            <div className="display-2 fw-bold text-white">Apps Is&nbsp;</div>
            <TypeAnimation
              className="display-2 fw-bold text-white"
              sequence={["Fast", 1000, "Easy", 1000]}
              repeat={Infinity}
            />
          </div>
          <p className="mt-3 text-white">
            {`We combine technology with creativity to bring your ideas to life.
            Whether you're a startup looking to disrupt the market or an
            established enterprise seeking efficiency and growth, we have the
            right software solutions for you.`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerMobile;

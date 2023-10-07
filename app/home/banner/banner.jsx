import React from "react";
import { TypeAnimation } from "react-type-animation";

function Banner() {
  return (
    <div className="container">
      <div className="row d-flex flex-column justify-content-center align-items-center ">
        <div className="col-lg-8 col-md-8 text-center text-white ">
          <div className="display-1 fw-bold">URSAWHITE</div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="display-1 fw-bold">Apps Is&nbsp;</div>
            <TypeAnimation
              className="display-1 fw-bold"
              sequence={["Fast", 1000, "Easy", 1000]}
              repeat={Infinity}
            />
          </div>
          <div className="h5 mt-3">
            {`We combine technology with creativity to bring your ideas to life.
            Whether you're a startup looking to disrupt the market or an
            established enterprise seeking efficiency and growth, we have the
            right software solutions for you.`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

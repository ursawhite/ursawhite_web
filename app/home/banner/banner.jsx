import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
function Banner() {
  return (
    <div className="container-overlay">
      <div className="container">
        <div className="row d-flex flex-column justify-content-center align-items-center ">
          <div className="col-lg-8 col-md-8 text-center text-white ">
            <h1 className="display-1 fw-bold">URSAWHITE</h1>
            <div className="d-flex justify-content-center align-items-center">
              <h1 className="display-1 fw-bold">Apps Is&nbsp;</h1>
              <TypeAnimation
                className="display-1 fw-bold"
                sequence={["Fast", 1000, "Easy", 1000]}
                repeat={Infinity}
              />
            </div>
            <div className="h5 mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

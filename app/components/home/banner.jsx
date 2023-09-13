import React from "react";
import Image from "next/image";
import "../../styles/banner.css";

function Banner() {
  return (
    <div className="container-overlay">
      <div className="container">
        <div className="row align-items-center">
          {/* <div className="col-lg-6 order-lg-2 "> */}
          <div className="featureimagewrapper">
            <Image
              className="logo-logo m-1"
              src="/head-logo-blur.png"
              width={700}
              height={500}
              sizes="{max-width: 768px} 100vw, 700px"
              alt="logo"
              style={{
                objectFit: "contain",
                objectPosition: "top",
                position: "absolute",
              }}
              priority
            />
          </div>
          {/* </div> */}
          <div
            className="col text-center text-white d-flex flex-column justify-content-center align-items-center "
            style={{ width: "100%", height: "100vh" }}
          >
            <h1 className="display-1 fw-bold">
              URSAWHITE <br /> Apps Is Fast & Easy
            </h1>
            <p className="fs-5 fs-lg-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br /> Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s,
              <br /> when an unknown printer took a galley of type and scrambled
              it <br />
              to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

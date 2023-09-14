import React from "react";
import Image from "next/image";
import "../../styles/banner.css";
import { TypeAnimation } from "react-type-animation";
function Banner() {
  return (
    <div className="container-overlay">
      <div className="container">
        <div className="row align-items-center">
          {/* <div className="col-lg-6 order-lg-2 "> */}
          {/* <div className="featureimagewrapper">
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
          </div> */}
          {/* </div> */}
          <div
            className="col text-center text-white d-flex flex-column justify-content-center align-items-center "
            style={{ width: "100%", height: "100vh" }}
          >
            <h1 className="display-1 fw-bold">URSAWHITE</h1>
            <div className="div d-flex">
              <h1 className="display-1 fw-bold">Apps Is&nbsp;</h1>
              <TypeAnimation
                className="display-1 fw-bold"
                sequence={["Fast", 500, "Easy", 500]}
                repeat={Infinity}
              />
            </div>

            <p
              className="fs-5 fs-lg-3 mt-3"
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

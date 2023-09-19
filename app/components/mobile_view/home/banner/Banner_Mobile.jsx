import React from "react";
import { TypeAnimation } from "react-type-animation";
// import "./BannerMobile.scss";

function BannerMobile() {
  return (
    <div className="container">
      <div
        className="row d-flex justify-content-left align-items-center "
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="col" style={{ marginLeft: "10%", marginRight: "10%" }}>
          <h1 className="display-1 fw-bold text-white">URSAWHITE</h1>
          <div className="d-flex">
            <h1 className="display-1 fw-bold text-white">Apps Is&nbsp;</h1>
            <TypeAnimation
              className="display-1 fw-bold text-white"
              sequence={["Fast", 1000, "Easy", 1000]}
              repeat={Infinity}
            />
          </div>
          <p className="fs-5 fs-lg-3 mt-3 text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerMobile;

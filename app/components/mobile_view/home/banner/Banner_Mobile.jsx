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
          {/* <div className="display-1 fw-bold text-white mt-5">URSAWHITE</div> */}
          <div className="d-flex">
            <div className="text-header-mobile fw-bold text-white">
              MVPs Made&nbsp;
            </div>
            <TypeAnimation
              className="text-header-mobile fw-bold text-white"
              sequence={[
                "Simple",
                1000,
                "Fast",
                1000,
                "Easy",
                1000,
                "Reliable",
                1000,
              ]}
              repeat={Infinity}
              style={{ color: "#9d76c1" }}
            />
          </div>
          <p className="text-desc-mobile mt-3 text-white fw-semibold">
            We provide — IT solutions that are
            <span
              className="text-desc-mobile fw-bold"
              style={{
                background: "linear-gradient(90deg, #c45af4 0%, #7163de 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              &nbsp;stress free and easy to work with.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerMobile;

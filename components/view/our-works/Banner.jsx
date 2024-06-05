import React from "react";
import MaskText from "@/components/mask/mask";
import SvgText from "@/components/svg/svg";
const Banner = () => {
  const phrases = [
    "Crafting unique web designs",
    "to bring your vision to life.",
  ];
  return (
    <div style={{ position: "relative" }}>
      <div className="container">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "100vh", width: "100%" }}
        >
          <div
            className="col-lg-8 col-md-12 text-center"
            style={{ zIndex: "10" }}
          >
            <MaskText text={phrases} />
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "60%",
          width: "100%",
          transform: "translateY(-50%)",
          padding: "0",
          margin: "0",
          zIndex: "0",
        }}
      >
        <SvgText item="Project" />
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import MaskText from "../../components/mask/mask";
import Image from "next/image";

const Banner = () => {
  const phrases = [
    "Committed to turning your ideas",
    "into reality with top performance",
    "and user-friendliness.",
  ];
  const title = {
    background:
      "linear-gradient(90deg, rgb(230, 212, 239) 0%, rgb(92, 4, 133) 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  const subtitle = {
    color: "rgba(169, 80, 210, 255)",
  };

  return (
    <div className="container text-white text-center fw-bold">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-lg-12 col-md-12 ">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: "20vw",
              marginTop: "10%",
              marginBottom: "10%",
            }}
          >
            <MaskText text={phrases} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

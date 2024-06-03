import React from "react";
import MaskText from "@/components/mask/mask";

const Banner = () => {
  const phrases = [
    "Dedicated to transforming",
    "your concepts into",
    "tangible results through exceptional",
    "ease of use and excellence.",
  ];

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

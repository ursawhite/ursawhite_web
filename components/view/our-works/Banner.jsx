import React from "react";
import MaskText from "@/components/mask/mask";

const Banner = () => {
  const phrases = [
    "Crafting unique web designs",
    "to bring your vision to life.",
  ];
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-8 col-md-12 text-center">
          <MaskText text={phrases} />
        </div>
      </div>
    </div>
  );
};

export default Banner;

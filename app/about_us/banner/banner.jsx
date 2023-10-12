import React from "react";
import Image from "next/image";
import MaskText from "../../components/mask/mask";
import { motion } from "framer-motion";

function banner() {
  const phrases = ["Transforming Ideas ", "into Digital Realities."];
  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-lg-8 col-md-8 d-flex align-items-center justify-content-center">
          <div className="display-1 text-white text-center fw-bold">
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
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
        <div className="col-lg-6 col-md-6 "></div>
      </div>
    </div>
  );
}

export default banner;

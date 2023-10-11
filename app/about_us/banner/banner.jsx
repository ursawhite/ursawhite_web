import React from "react";
import Image from "next/image";
import MaskText from "../../components/mask/mask";
import { motion } from "framer-motion";

function banner() {
  const phrases = ["Transforming Ideas ", "into Digital Realities."];
  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        {/* <h1
          className="text-white display-2 fw-bold m-5"
          style={{
            background:
              "linear-gradient(90deg, rgb(230, 212, 239) 0%, rgb(92, 4, 133) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Us
        </h1> */}
        <div className="col-lg-8 col-md-8 d-flex align-items-center justify-content-center">
          {/* <p
            className="text-left fw-bolder ms-lg-5"
            style={{ color: "rgba(169,80,210,255)" }}
          >
            YOUR DIGITAL DESIGN PARTNER
          </p> */}
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

          {/* <h5 className="text-white ms-lg-5">
            {`TechCrafters specializes in crafting exceptional digital solutions
            tailored to your business needs. Our dedicated team prioritizes user
            experience, scalability, and effective user engagement strategies.
            Whether it's designing and developing cutting-edge web and mobile
            applications or devising innovative digital marketing campaigns,
            we've got you covered!`}
          </h5> */}
        </div>
        <div className="col-lg-6 col-md-6 ">
          {/* <h2
            className="text-right fw-bold me-5 mt-5 ms-5"
            style={{
              background:
                "linear-gradient(90deg, rgb(230, 212, 239) 0%, rgb(92, 4, 133) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Something big is happening in the world.
          </h2>
          <h6 className="text-right text-white ms-5 me-5">
            Companies digitally transforming their services, startups disrupting
            traditional business models, and innovation brought about by digital
            products - all are changing the way we live.
          </h6>
          <h6 className="text-right text-white me-5 ms-5">
            {`Why spend all your resources building something, and only
    realizing after 6 months of launching – nobody actually wants it?`}
          </h6>
          <h6 className="text-right text-white mb-5 me-5 ms-5">
            {` That's why we're here. To help you ideate, validate, and test
    ideas in the most time and cost-effective manner.`}
          </h6> */}
        </div>
      </div>
    </div>
  );
}

export default banner;

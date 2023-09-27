import React from "react";

function banner() {
  return (
    <div className="container">
      <div className="row">
        <h1
          className="text-center text-white display-2 fw-bold m-5"
          style={{
            background:
              "linear-gradient(90deg, rgb(230, 212, 239) 0%, rgb(92, 4, 133) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Us
        </h1>
        <div className="col-lg-6 col-md-6 border border-5 border-end-0 border-bottom-0">
          <p
            className="text-left fw-bolder ms-5 mt-5"
            style={{ color: "rgba(169,80,210,255)" }}
          >
            YOUR DIGITAL DESIGN PARTNER
          </p>
          <h1 className="text-left display-4 text-white fw-bold ms-5">
            We Help Startups And Companies Succeed
          </h1>
        </div>
        <div className="col-lg-6 col-md-6 border border-5 border-start-0 border-top-0 ">
          <h2
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
          </h6>
        </div>
      </div>
    </div>
  );
}

export default banner;

import React from "react";

const Banner = () => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="text-center text-white display-2 fw-bold m-5"
          style={{
            background:
              "linear-gradient(90deg, rgb(230, 212, 239) 0%, rgb(92, 4, 133) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Works
        </div>
        <div className="col-lg-6 col-md-6 border border-5 border-end-0 border-bottom-0">
          <p
            className="text-left fw-bolder ms-5 mt-5"
            style={{ color: "rgba(169,80,210,255)" }}
          >
            Our clients varied from small startup to medium sized corporate
          </p>
          <h1 className="text-left display-4 text-white fw-bold ms-5">
            We are a digital design agency
          </h1>
        </div>
        <div className="col-lg-6 col-md-6 border border-5 border-start-0 border-top-0 ">
          <h3
            className="display-6 text-right fw-bold me-5 mt-5 ms-5"
            style={{
              background:
                "linear-gradient(90deg, rgba(182, 117, 214, 1) 0%, rgba(79, 66, 152, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our clients varied from small startup to medium sized corporate
          </h3>
          <h6 className="text-right text-white me-5 mb-5 ms-5 mt-5">
            As a Software House that designs and develops web apps, mobile apps,
            and PWAs since 2013, we have been trusted by our clients from
            America, Europe, Australia, and Asia.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Banner;

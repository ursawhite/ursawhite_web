import React from "react";

function AboutUs_Mobile() {
  return (
    <div className="container">
      <div className="row " style={{ width: "100%", height: "100vh" }}>
        <div className="col" style={{ marginLeft: "10%", marginRight: "10%" }}>
          <h1
            className="text-title text-center text-white fw-bold "
            style={{ marginTop: "10%" }}
          >
            Our Works
          </h1>
          <h1 className="text-title text-left display-1 text-white fw-bold mt-5">
            We are a digital design agency
          </h1>
          <h6
            className="text-white display-6 text-right fw-bold "
            id="text-right-title"
          >
            Our clients varied from small startup to medium sized corporate
          </h6>
          <p className="text-right text-white ">
            As a Software House that designs and develops web apps, mobile apps,
            and PWAs since 2013, we have been trusted by our clients from
            America, Europe, Australia, and Asia.
          </p>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default AboutUs_Mobile;

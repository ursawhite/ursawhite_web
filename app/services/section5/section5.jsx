import React from "react";

const Section5 = () => {
  return (
    <div className="container">
      <div className="row p-5 d-flex justify-content-center align-items-center">
        <div
          className="col-lg-8 d-flex flex-column justify-content-center align-items-center"
          style={{
            background:
              "radial-gradient(at center, rgba(155, 89, 182, 0.3), rgba(53, 57, 59, 0.3))",
            borderTopRightRadius: "100px",
            borderBottomLeftRadius: "100px",
          }}
        >
          <h1
            className="text-white text-center fw-bold mt-5"
            style={{
              background:
                "linear-gradient(90deg, rgba(182, 117, 214, 1) 0%, rgba(79, 66, 152, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >{`Can't find what you're looking for?`}</h1>
          <p className="text-white text-center ">
            Our team will be happy to help you
          </p>
          <button className="btn btn-secondary mt-3 mb-5">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Section5;

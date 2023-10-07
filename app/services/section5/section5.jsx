import React from "react";

const Section5 = () => {
  return (
    <div className="container">
      <div
        className="row p-5 "
        style={{
          marginTop: "10%",
          backgroundColor: "rgba(79, 66, 152, 0.5)",
          borderTopRightRadius: "100px",
          borderBottomLeftRadius: "100px",
        }}
      >
        <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center">
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

import React from "react";

const Section5 = () => {
  return (
    <div
      className="row  p-5 "
      style={{
        width: "100vw",
        height: "50vh",
        marginTop: "30%",
        backgroundColor: "rgba(79, 66, 152, 0.5)",
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
  );
};

export default Section5;

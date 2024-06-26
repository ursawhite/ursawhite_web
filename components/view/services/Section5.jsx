import React from "react";
import Link from "next/link";

const Section5 = () => {
  return (
    <>
      <div className="container ">
        <div
          className="back d-flex justify-content-center"
          style={{ width: "auto", height: "100vh" }}
        >
          <div className="row ">
            <div className="col-lg-12 p-lg-5 d-flex justify-content-center flex-column">
              <h1 className=" fw-bold text-white text-center">
                {`Can't find what you're looking for?`}
              </h1>
              <h5 className="text-white text-center ">
                Our team will be happy to help you
              </h5>
              <div className="col-lg-12 d-flex justify-content-center mt-5">
                <Link
                  className="button rounded text-decoration-none p-2 d-flex align-items-center justify-content-center"
                  href="/contact_us"
                >
                  <span className="ms-lg-3 me-lg-3 fw-bold ">Contact Us</span>

                  <i className="bi bi-envelope ms-2 me-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;

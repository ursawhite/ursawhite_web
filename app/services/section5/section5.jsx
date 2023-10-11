import React from "react";
import styles from "./section5.module.scss";
import style from "../../../public/styles/button.module.scss";
import Link from "next/link";

const Section5 = () => {
  return (
    <>
      <div className="container ">
        <div
          className={` d-flex justify-content-center ${styles.back}`}
          style={{ width: "auto", height: "100vh" }}
        >
          <div className="row ">
            <div className="col-lg-12 p-5 d-flex justify-content-center flex-column">
              <h1 className=" fw-bold text-white text-center">
                {`Can't find what you're looking for?`}
              </h1>
              <h5 className="text-white text-center ">
                Our team will be happy to help you
              </h5>
              <div className="d-flex justify-content-center m-5">
                <Link
                  className={`btn text-white p-2 d-flex align-items-center justify-content-center ${style.button}`}
                  style={{ backgroundColor: "rgba(169, 80, 210, 255)" }}
                  href="/contact_us"
                >
                  <span className="ms-3 me-3 fw-bold ">Contact Us</span>

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

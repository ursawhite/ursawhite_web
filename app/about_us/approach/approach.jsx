import React from "react";
import Link from "next/link";
import styles from "./approach.module.scss";
import data from "../../../public/approach.json";

const Approach = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 d-flex">
          <div className="row">
            <p
              className="text-center fw-bold"
              style={{ color: "rgba(169, 80, 210, 255)" }}
            >
              Navigating Success Together.
            </p>
            <h2 className="text-white text-center fw-bold ">Our Approach</h2>
            {data.map((item, index) => (
              <Link
                href={`/about_us/${item.title
                  .replace(/\s+/g, "_")
                  .toLowerCase()}`}
                className={`col-lg-6 col-md-6 mt-5 shadow-lg text-decoration-none text-dark ${styles.box}`}
                key={index}
              >
                <div className="p-4 ">
                  <h3
                    className="fw-bold mb-5 "
                    style={{ height: "5vh", width: "auto" }}
                  >
                    {item.title}
                  </h3>
                  <ul className="list-unstyled mt-5">
                    {Object.entries(item.list[0]).map(
                      ([item, value], index) => (
                        <li key={index}>
                          <i className="bi bi-check2-square"></i>
                          <span className="ms-3">{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;

import React from "react";
import Link from "next/link";
import data from "@/public/data/approach.json";

const Approach = () => {
  return (
    <div className="container mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 d-flex">
          <div className="row g-2">
            <p className="text-title text-center fw-bold">
              Navigating Success Together
            </p>
            <h2 className="text-white text-center fw-bold ">Our Approach</h2>
            {data.map((item, index) => (
              <Link
                href={`/about_us/${item.title
                  .replace(/\s+/g, "_")
                  .toLowerCase()}`}
                className="box_approach col-lg-6 p-4 col-md-6 col-sm-6 mt-5 shadow-lg text-decoration-none text-dark"
                key={index}
              >
                <h3
                  className="fw-bold mb-5 "
                  style={{ height: "5vh", width: "auto" }}
                >
                  {item.title}
                </h3>
                <ul className="list-unstyled mt-5">
                  {Object.entries(item.list[0]).map(([item, value], index) => (
                    <li key={index}>
                      <i className="bi bi-check2-square"></i>
                      <span className="ms-3">{item}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;

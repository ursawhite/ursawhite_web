"use client";
import React from "react";
import { useRouter } from "next/navigation";
import data from "../../../public/services.json";
import styles from "./page.module.scss";

const Services = ({ params }) => {
  const router = useRouter();
  const dataServices = data.filter(
    (item) =>
      item.title.replace(/-/g, " ").toLowerCase() ===
      params.slug.replace(/-/g, " ").toLowerCase()
  );
  console.log(dataServices);
  return (
    <div
      className={`container d-flex justify-content-start align-items-center ${styles.background}`}
      style={{ height: "100vh", width: "auto" }}
    >
      <div className="row ">
        <div className="col-lg-12 ">
          {dataServices.map((item) => (
            <div key={item.id} className="d-flex flex-row">
              <div className="col-lg-4 col-md-8 p-1 ">
                <div className="display-3 fw-bold text-white">{item.title}</div>
              </div>
              <div className="col-lg-8">
                <div className="text-white">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

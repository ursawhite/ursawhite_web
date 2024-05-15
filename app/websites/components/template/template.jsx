"use client";
import React, { useState } from "react";
// import data from "../../../../public/template.json";
import Modal from "../modal/modal";
import Project from "../project/project";

const Template = ({ isLoading, data }) => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {isLoading ? (
        <div className="container ">
          <div className="row mb-5">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                className="col-12 col-md-6 col-lg-4 p-2 text-decoration-none "
                key={index}
              >
                <div className="skeleton-loader" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ overflow: "hidden" }}>
          <div
            className="row m-auto d-flex justify-content-center align-items-center mb-5"
            style={{
              paddingLeft: "15vw",
              paddingRight: "15vw",
              position: "relative",
            }}
          >
            {data.map((item, index) => (
              <Project
                item={item}
                index={index}
                modal={modal}
                setModal={setModal}
                key={index}
              />
            ))}
          </div>

          <Modal
            modal={modal}
            projects={data}
            image={data[modal.index].image}
          />
        </div>
      )}
    </div>
  );
};

export default Template;

"use client";
import React, { useState } from "react";
// import data from "../../../../public/template.json";
import Modal from "../modal/modal";
import Project from "../project/project";

const Template = ({ isLoading, data }) => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = [];
  if (data !== null) {
    currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  }
  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {isLoading ? (
        <div
          style={{
            minHeight: "100svh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="text-white">Loading...</span>
        </div>
      ) : (
        <div style={{ overflow: "hidden" }}>
          <div
            className="row m-auto d-flex justify-content-center align-items-center"
            style={{
              paddingLeft: "15vw",
              paddingRight: "15vw",
              position: "relative",
            }}
          >
            {data.map((item, index) => (
              <Project
                item={item}
                index={indexOfFirstItem + index}
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

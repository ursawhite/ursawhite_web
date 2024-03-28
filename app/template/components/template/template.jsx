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
    <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <div
            className="row m-auto d-flex justify-content-center align-items-center"
            style={{ paddingLeft: "15vw", paddingRight: "15vw" }}
          >
            {currentItems.map((item, index) => (
              <Project
                item={item}
                index={indexOfFirstItem + index}
                modal={modal}
                setModal={setModal}
                key={index}
              />
            ))}
          </div>
          <div className="pagination">
            {Array(Math.ceil(data.length / itemsPerPage))
              .fill()
              .map((_, i) => (
                <button
                  className={`btn border-1 border-light m-1 ${
                    currentPage === i + 1
                      ? "bg-light text-black fw-bold "
                      : "text-white "
                  }`}
                  key={i}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
          </div>
          <Modal
            modal={modal}
            projects={data}
            image={data[modal.index].image}
          />
        </>
      )}
    </div>
  );
};

export default Template;

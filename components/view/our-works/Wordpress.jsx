"use client";
import React from "react";
import { Card } from "react-bootstrap";

const Wordpress = ({ wpData, isLoading }) => {
  return (
    <>
      <div className="container w-100">
        <p className="text-title text-start fw-bold">Our Expertise</p>
        <h2 className="text-white text-start pb-5">Wordpress</h2>
        {isLoading ? (
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
        ) : (
          <div
            className="row m-auto d-flex justify-content-center align-items-center mb-5"
            style={{
              position: "relative",
            }}
          >
            {wpData ? (
              <>
                {wpData.map((item, index) => (
                  <div
                    className="col-12 col-md-6 col-sm-6 col-lg-4"
                    key={index}
                  >
                    <Card
                      key={item.id}
                      style={{
                        backgroundColor: "rgba(27,27,29,255)",
                        border: "none",
                      }}
                    >
                      <WordpressContainer item={item} />
                    </Card>
                  </div>
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </>
  );
};

const WordpressContainer = ({ item }) => {
  return (
    <>
      <div
        className="project-card"
        onClick={() => window.open(item.link)}
        style={{ cursor: "pointer" }}
      >
        <Card.Img
          variant="top"
          src={item.image}
          className="object-fit-contain"
        />
        <Card.Body>
          <Card.Title className="h3 text-white text-center">
            {item.name}
          </Card.Title>
        </Card.Body>
        <div className="button p-2 rounded ">
          <span>Learn More</span>
          <div className="bi bi-chevron-double-right ms-2 me-2"></div>
        </div>
      </div>
    </>
  );
};

export default Wordpress;

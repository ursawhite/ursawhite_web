"use client";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

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
              // paddingLeft: "15vw",
              // paddingRight: "15vw",
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
  const [asd, api] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));
  return (
    <>
      <animated.div
        onClick={() => window.open(item.link)}
        onMouseMove={({ clientX: x, clientY: y }) =>
          api.start({ xys: calc(x, y) })
        }
        onMouseLeave={() => api.start({ xys: [0, 0, 1] })}
        style={{ cursor: "pointer", transform: asd.xys.to(trans) }}
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
      </animated.div>
    </>
  );
};

export default Wordpress;

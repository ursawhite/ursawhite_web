"use client";
import React from "react";
import Image from "next/image";
import "../styles/ourworks.css";

function OurWork() {
  const works = [
    {
      title: "The Athlete",
      img: "/1.jpg",
    },
    {
      title: "The Athlete",
      img: "/2.jpg",
    },
    {
      title: "The Athlete",
      img: "/3.jpg",
    },
    {
      title: "The Athlete",
      img: "/4.jpg",
    },
  ];
  return (
    <>
      <div className="container">
        {/* <div className="row d-flex flex-column justify-content-center align-items-center">
          <div className="col">
            <h3 className="fw-bold text-center text-white mt-5">
              We’re a team of strategists, designers, developers, storytellers,
              dreamers, do-ers, illustrators and Mario Kart racers.
            </h3>
            <div className="d-flex flex-wrap">
              {works.map((work) => (
                <div
                  className="col-lg-6 d-flex justify-content-center align-items-center"
                  key={work.title}
                >
                  <div className="card">
                    <Image
                      src={work.img}
                      alt={work.title}
                      className="img-fluid"
                      width={400}
                      height={400}
                    />
                    <h3 className="text-white">{work.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default OurWork;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function Portofolio_Mobile({ items }) {
  return (
    <div className="container">
      <div className="row ">
        <h1 className="text-white text-center mt-5 mb-5">Our Works</h1>

        {items.slice(0, 3).map((item, index) => (
          <div className="row" key={index}>
            <div className="col-lg-6 order-lg-2 d-flex justify-content-center align-items-center mt-5 mb-5">
              <Image
                src={item.image}
                width={300}
                height={300}
                alt="logo"
                style={{
                  objectFit: "contain",
                  // width: "100%",
                  // height: "auto",
                }}
              />
            </div>
            <div className="col-lg-6 order-lg-1">
              <h1 className="title fw-bold text-white">{item.name}</h1>
              <h6 className="subtitle text-white">{item.subject}</h6>
              <p className="text-white ">{item.desc}</p>
              <ul className="list text-white">
                {item.tech.map((techItem, index) => (
                  <li key={index}>
                    <i className="item">{techItem}</i>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <button className="btn btn-secondary mt-3 mb-3">Show More</button>
      </div>
    </div>
  );
}

export default Portofolio_Mobile;

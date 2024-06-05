"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Porto = (props) => {
  const data = props.items;
  return (
    <>
      <div className="container mb-5 ">
        <p className="text-title text-start fw-bold mt-5">Digital Excellence</p>
        <h2 className="text-white text-start pb-5">
          Web and Mobile <br className="d-none d-md-block" />
          App Solutions
        </h2>
        <div className="row m-auto g-3 d-flex justify-content-center align-items-center">
          {data.map((item, index) => (
            <PortoContainer imageData={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Porto;

export function PortoContainer({ imageData }) {
  const Router = useRouter();

  return (
    <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center ">
      <div
        className="project-card text-decoration-none shadow-0 d-flex align-items-center flex-column p-2 "
        onClick={() =>
          Router.push(
            `/our-works/${imageData.title.replace(/\s+/g, "-").toLowerCase()}`
          )
        }
      >
        <div className="w-100">
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              className="img-fluid w-50"
              src={imageData.image}
              alt={imageData.title}
              width={1280}
              height={720}
              priority
              style={{
                objectFit: "contain",
                width: "auto",
                height: "100%",
              }}
            />
          </div>
        </div>
        <h3 className="text-white text-center">{imageData.title}</h3>
        <p className="text-white text-center text-ellipsis px-3">
          {imageData.desc}
        </p>
        <div className="button p-2 rounded ">
          <span>Learn More</span>
          <div className="bi bi-chevron-double-right ms-2 me-2"></div>
        </div>
      </div>
    </div>
  );
}

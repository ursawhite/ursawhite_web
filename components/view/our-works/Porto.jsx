"use client";
import React from "react";
import Image from "next/image";
import { useSpring, animated, config } from "react-spring";
import { useRouter } from "next/navigation";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Porto = (props) => {
  const data = props.items;
  console.log(data);
  return (
    <>
      <div className="container">
        <p className="text-title text-start fw-bold">Digital Excellence</p>
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
  const [asd, api] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));

  return (
    <animated.div
      className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center"
      onMouseMove={({ clientX: x, clientY: y }) =>
        api.start({ xys: calc(x, y) })
      }
      onMouseLeave={() => api.start({ xys: [0, 0, 1] })}
      style={{
        transform: asd.xys.to(trans),
      }}
    >
      <div
        className="text-decoration-none bg-transparent shadow-0 d-flex align-items-center flex-column p-2"
        style={{
          border: "1px solid gray",
          borderRadius: "10px",
        }}
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
        <p className="text-white text-center text-ellipsis">{imageData.desc}</p>
        <button
          className="button p-2 rounded "
          onClick={() =>
            Router.push(
              `/our-works/${imageData.title.replace(/\s+/g, "-").toLowerCase()}`
            )
          }
        >
          <span>Learn More</span>
          <div className="bi bi-chevron-double-right ms-2 me-2"></div>
        </button>
      </div>
    </animated.div>
  );
}

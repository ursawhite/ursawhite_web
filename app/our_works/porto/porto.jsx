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
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center ">
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
    <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center align-items-center">
      <button
        className="text-decoration-none bg-transparent border-0 shadow-0"
        onClick={() =>
          Router.push(
            `/our_works/${imageData.title.replace(/\s+/g, "-").toLowerCase()}`
          )
        }
      >
        <div className="col-lg-6 col-md-6 col-sm-6 ">
          <animated.div
            onMouseMove={({ clientX: x, clientY: y }) =>
              api.start({ xys: calc(x, y) })
            }
            onMouseLeave={() => api.start({ xys: [0, 0, 1] })}
            style={{
              transform: asd.xys.to(trans),
            }}
          >
            <Image
              className="img-fluid "
              src={imageData.image}
              alt={imageData.title}
              width={500}
              height={500}
              priority
              style={{
                objectFit: "contain",
                marginRight: "50%",
                marginLeft: "50%",
                width: "auto",
                height: "100%",
              }}
            />
          </animated.div>
        </div>
        <h1 className="text-white text-center mt-5 mb-5">{imageData.title}</h1>
      </button>
    </div>
  );
}

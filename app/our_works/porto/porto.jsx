import React from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

const Porto = (props) => {
  const Router = useRouter();
  const data = props.items;
  return (
    <>
      <div className="container">
        <div className="row ">
          {data.map((item, index) => (
            <div
              className="col-lg-6 col-md-6 d-flex flex-column justify-content-center align-items-center"
              key={index}
            >
              <button
                className="text-decoration-none bg-transparent border-0 shadow-0"
                onClick={() =>
                  Router.push(
                    `/our_works/${item.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`
                  )
                }
              >
                <div className="col-lg-6 col-md-6 col-sm-6 ">
                  <Image
                    className="img-fluid "
                    src={item.image}
                    alt={item.title}
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
                </div>
                <h1 className="text-white text-center mt-5 mb-5">
                  {item.title}
                </h1>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Porto;

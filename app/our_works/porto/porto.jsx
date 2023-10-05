import React from "react";
import Image from "next/image";
import Link from "next/link";

const porto = (props) => {
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
              <Link
                className="text-decoration-none"
                href={{
                  pathname: `/our_works/project`,
                  query: { items: JSON.stringify(item) },
                }}
              >
                <div className="col-lg-6 col-md-6">
                  <Image
                    className="img-fluid "
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    style={{
                      objectFit: "contain",
                      marginRight: "50%",
                      marginLeft: "50%",
                    }}
                  />
                </div>
                <h1 className="text-white text-center mt-5 mb-5">
                  {item.title}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default porto;

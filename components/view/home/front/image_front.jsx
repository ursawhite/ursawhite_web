import React from "react";
import Image from "next/image";

function ImageFont(props) {
  const image = props.src;
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-6 col-md-6"></div>
        <div className="col-lg-4 col-md-4">
          <Image
            className="img-fluid object-fit-contain"
            src={image}
            width={300}
            height={400}
            alt="logo"
            sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
            style={{
              width: "100%",
              height: "auto",
              // marginLeft: "-8vw",
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default ImageFont;

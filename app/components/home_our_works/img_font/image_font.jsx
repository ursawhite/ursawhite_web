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
            sizes="100vw"
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

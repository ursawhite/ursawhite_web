import React from "react";
import Image from "next/image";

function ImageFont(props) {
  const image = props.src;
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-6 col-md-6">
          <Image
            className="img-fluid"
            src={image}
            width={400}
            height={500}
            alt="logo"
            style={{
              objectFit: "contain",
              marginLeft: "60%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageFont;

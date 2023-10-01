import React from "react";
import Image from "next/image";
import "./img_left.css";

const ImageLeft = (props) => {
  const image = props.src;

  return (
    <div className="container  d-flex justify-content-center align-items-end">
      <div className="row">
        <div className="col-lg-12 col-md-10">
          <Image
            className="img-fluid img-left"
            src={image}
            width={400}
            height={400}
            alt="Image by upklyak"
            sizes="(max-width: 500px) 85vw, (max-width: 1000px) 50vw, 33vw"
            style={{
              objectFit: "contain",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageLeft;

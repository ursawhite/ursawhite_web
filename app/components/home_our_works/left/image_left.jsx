import React from "react";
import Image from "next/image";
// import styles from "./left.module.scss";

const ImageLeft = (props) => {
  const image = props.src;

  return (
    <div className="container ">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-3 col-md-4">
          <Image
            className="img-fluid object-fit-contain"
            src={image}
            width={400}
            height={400}
            placeholder="blur"
            blurDataURL={image}
            alt="Image by upklyak"
            sizes="100vw"
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
              marginLeft: "15vw",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageLeft;

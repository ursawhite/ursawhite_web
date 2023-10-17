import React from "react";
import Image from "next/image";
// import styles from "./left.module.scss";

const ImageLeft = (props) => {
  const image = props.src;

  return (
    <div className="container ">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-5 col-md-5"></div>
        <div className="col-lg-3 col-md-3">
          <Image
            className="img-fluid object-fit-contain"
            src={image}
            width={400}
            height={400}
            placeholder="blur"
            blurDataURL={image}
            alt="Image by upklyak"
            sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
            style={{
              width: "90%",
              height: "auto",
              marginLeft: "-3vw",
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ImageLeft;

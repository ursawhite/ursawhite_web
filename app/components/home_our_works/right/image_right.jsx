import React from "react";
import Image from "next/image";
// import styles from "./right.module.scss";

function image_right(props) {
  const image = props.src;
  return (
    <div className="container ">
      <div className="row d-flex align-items-center justify-content-end">
        <div className="col-lg-3 col-md-3">
          <Image
            className="img-fluid object-fit-contain"
            src={image}
            width={300}
            height={150}
            alt="logo"
            sizes="100vw"
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
              marginLeft: "8%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default image_right;

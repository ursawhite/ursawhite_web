import React from "react";
import Image from "next/image";
import styles from "./right.module.scss";

function image_right(props) {
  const image = props.src;
  return (
    <div className="container d-flex align-items-center justify-content-end">
      <div className="row ">
        <div className="col-lg-12 col-md-10">
          <Image
            className={`img-fluid ${styles.img_right}`}
            src={image}
            width={250}
            height={150}
            alt="logo"
            sizes="(max-width: 500px) 85vw, (max-width: 800px) 50vw, 33vw"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default image_right;

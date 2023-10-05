import React from "react";
import Image from "next/image";
import styles from "./left.module.css";

const ImageLeft = (props) => {
  const image = props.src;

  return (
    <div className="container  d-flex justify-content-center align-items-end">
      <div className="row">
        <div className="col-lg-12 col-md-10">
          <Image
            className={`img-fluid ${styles.img_left}`}
            src={image}
            width={400}
            height={400}
            alt="Image by upklyak"
            loading="lazy"
            sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageLeft;

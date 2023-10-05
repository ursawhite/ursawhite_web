import React from "react";
import Image from "next/image";
import styles from "./left.module.scss";

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
            placeholder="blur"
            blurDataURL={image}
            alt="Image by upklyak"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

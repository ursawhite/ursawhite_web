import React from "react";
import Image from "next/image";
import styles from "./front.module.css";

const ImgSection = () => {
  return (
    <div className="col-lg-6 col-md-6">
      <Image
        className={`img-fluid ${styles.img_front}`}
        src="/images/work3.png"
        alt="work3"
        width={600}
        height={350}
      />
    </div>
  );
};

export default ImgSection;

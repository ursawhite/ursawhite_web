import React from "react";
import Image from "next/image";
import styles from "./back.module.css";

const imgsection = () => {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-lg-6 col-md-6">
          <Image
            className={`img-fluid ${styles.img_left}`}
            src="/images/work.jpg"
            alt="work1"
            width={400}
            height={250}
            sizes="(max-width: 768px) 100vw,(max-width: 1024) 50vh, 30vw"
            priority
          />
        </div>
        <div className="col-lg-4 col-md-4">
          <Image
            className={`img-fluid ${styles.img_right}`}
            src="/images/work2.png"
            alt="work2"
            width={400}
            height={250}
            sizes="(max-width: 768px) 100vw,(max-width: 1024) 50vh, 30vw"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default imgsection;

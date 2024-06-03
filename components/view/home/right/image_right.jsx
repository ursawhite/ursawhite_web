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
            className={`img-fluid object-fit-contain`}
            src={image}
            width={400}
            height={400}
            alt="logo"
            sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
            style={{
              width: "80%",
              height: "auto",
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default image_right;

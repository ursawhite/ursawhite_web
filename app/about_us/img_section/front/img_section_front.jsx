import React from "react";
import Image from "next/image";

const ImgSection = () => {
  return (
    <div className="container">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ width: "auto", height: "200vh" }}
      >
        <div className="col-lg-4 col-md-6">
          <Image
            className="img-fluid object-fit-contain"
            src="/images/work3.png"
            alt="image by tirachardz on freepik"
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw,(max-width: 1024) 50vh, 30vw"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ImgSection;

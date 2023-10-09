import React from "react";
import Image from "next/image";

const ImgSection = () => {
  const img_front = {
    objectFit: "cover",
    width: "100%",
    height: "auto",
  };

  return (
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{ width: "auto", height: "100vh" }}
    >
      <div className="col-lg-4 col-md-4">
        <Image
          className="img-fluid object-fit-contain"
          src="/images/work3.png"
          alt="work3"
          width={800}
          height={600}
          style={img_front}
          priority
        />
      </div>
    </div>
  );
};

export default ImgSection;

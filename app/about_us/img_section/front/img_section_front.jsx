import React from "react";
import Image from "next/image";

const ImgSection = () => {
  const img_front = {
    objectFit: "cover",
    width: "auto",
    height: "100%",
  };

  return (
    <div
      className="row d-flex justify-content-center"
      style={{ width: "auto", height: "100vh" }}
    >
      <div className="col-lg-6 col-md-6">
        <Image
          className="img-fluid object-fit-contain"
          src="/images/work3.png"
          alt="work3"
          width={300}
          height={200}
          style={img_front}
          priority
        />
      </div>
    </div>
  );
};

export default ImgSection;

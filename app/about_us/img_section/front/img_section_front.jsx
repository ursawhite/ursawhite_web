import React from "react";
import Image from "next/image";

const ImgSection = () => {
  const img_front = {
    objectFit: "cover",
    width: "auto",
    height: "auto",
    marginLeft: "60%",
    marginRight: "50%",
  };

  return (
    <div className="col-lg-6 col-md-6">
      <Image
        className="img-fluid "
        src="/images/work3.png"
        alt="work3"
        width={600}
        height={350}
        style={img_front}
        priority
      />
    </div>
  );
};

export default ImgSection;

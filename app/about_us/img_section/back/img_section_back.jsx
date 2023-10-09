import React from "react";
import Image from "next/image";

const imgsection = () => {
  const img_left = {
    objectFit: "cover",
    width: "auto",
    height: "100%",
    marginLeft: "-15vw",
    marginRight: "30vw",
  };

  const img_right = {
    objectFit: "cover",
    width: "auto",
    height: "100%",
    marginLeft: "5vw",
    marginTop: "15vh",
  };
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-4 col-md-4">
          <Image
            className="img-fluid object-fit-contain"
            src="/images/work.jpg"
            alt="work1"
            width={400}
            height={250}
            sizes="(max-width: 768px) 100vw,(max-width: 1024) 50vh, 30vw"
            priority
            style={img_left}
          />
        </div>
        <div className="col-lg-4 col-md-4">
          <Image
            className="img-fluid object-fit-contain"
            src="/images/work2.png"
            alt="work2"
            width={400}
            height={250}
            sizes="(max-width: 768px) 100vw,(max-width: 1024) 50vh, 30vw"
            priority
            style={img_right}
          />
        </div>
      </div>
    </div>
  );
};

export default imgsection;

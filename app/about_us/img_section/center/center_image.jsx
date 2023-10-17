import React from "react";
import Image from "next/image";

const CenterImage = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-3 col-md-5">
          <Image
            className="img-fluid object-fit-contain"
            src="/images/work4.png"
            alt="image by freepik"
            width={800}
            height={600}
            sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
            style={{
              width: "100%",
              height: "auto",
              marginTop: "10vh",
              marginLeft: "8vw",
            }}
            placeholder="blur"
            blurDataURL="/images/work4.png"
          />
        </div>
        <div className="col-lg-3 col-md-3">
          <Image
            className="img-fluid object-fit-contain"
            src="/images/work5.png"
            alt="image by freepik"
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw,(max-width: 1024) 50vh, 30vw"
            style={{
              width: "100%",
              height: "auto",
              marginLeft: "-25vw",
              marginTop: "140vh",
            }}
            placeholder="blur"
            blurDataURL="/images/work5.png"
          />
        </div>
        <div className="col-lg-3 col-md-3">
          <Image
            className="img-fluid object-fit-contain"
            src="/images/work6.png"
            alt="image by freepik"
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw,(max-width: 1024) 50vh, 30vw"
            style={{
              width: "100%",
              height: "auto",
              marginLeft: "3vw",
              marginTop: "110vh",
            }}
            placeholder="blur"
            blurDataURL="/images/work6.png"
          />
        </div>
      </div>
    </div>
  );
};

export default CenterImage;

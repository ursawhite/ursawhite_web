import React from "react";
import Image from "next/image";

const Bottom = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-3 col-md-5">
          <Image
            className="img-fluid object-fit-contain"
            src="/images/work7.png"
            alt="image by tirachardz on freepik"
            width={800}
            height={600}
            style={{
              width: "100%",
              height: "auto",
              marginTop: "30vh",
              marginLeft: "35vw",
            }}
            priority
          />
        </div>
        <div className="col-lg-3 col-md-3">
          <Image
            className="img-fluid object-fit-contain"
            src="/images/work8.png"
            alt="image by tirachardz on freepik"
            width={800}
            height={600}
            style={{
              width: "100%",
              height: "auto",
              marginLeft: "-25vw",
              marginTop: "90vh",
            }}
            priority
          />
        </div>
        <div className="col-lg-3 col-md-4">
          <Image
            className="img-fluid object-fit-contain"
            src="/images/work9.png"
            alt="image by Lifestylememory on freepik"
            width={800}
            height={600}
            style={{
              width: "100%",
              height: "auto",
              marginLeft: "-20vw",
              marginTop: "130vh",
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Bottom;

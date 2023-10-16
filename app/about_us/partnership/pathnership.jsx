import React from "react";
import Image from "next/image";

const Partner = () => {
  return (
    <div className="container mb-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-8 col-md-12 ">
          <p className="text-title fw-bold text-center">
            Introducing Our Trusted Partners
          </p>
          <h2 className="text-center text-white fw-bold capi">
            We Are Proud To Work With
          </h2>
          <p className="text-center text-white">
            {` We believe in the power of collaboration to deliver outstanding
            digital solutions. We've established strong partnerships with
            companies that share our commitment to excellence and innovation.
            Together, we leverage our expertise to elevate your business to new
            heights.`}
          </p>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex flex-column align-items-center">
            <Image
              src="/images/partners/hingoray.webp"
              className="img-fluid p-1"
              alt="hingoray"
              width={150}
              height={150}
              sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
              priority
              style={{ objectFit: "contain" }}
            />
            <p className="text-center text-white mt-3">Hingoray</p>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex flex-column align-items-center">
            <Image
              src="/images/partners/studia_alva.png"
              className="img-fluid p-1"
              alt="studia_alva"
              width={150}
              height={150}
              sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
              priority
              style={{ objectFit: "contain" }}
            />
            <p className="text-center text-white mt-3">Studia Alva</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;

import React from "react";
import Image from "next/image";

const Footer2 = () => {
  return (
    <div
      style={{
        width: "100%",
        // height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        className=""
        style={{
          backgroundColor: "rgba(53, 57, 59, 0.3)",
          borderTopRightRadius: "100px",
          borderTopLeftRadius: "100px",
        }}
      >
        <div className="container ">
          <div className="row d-flex flex-row">
            <div className="col-lg-6 col-md-6 text-white mt-5 mb-5">
              <div className="col-lg-4 col-md-6 col-sm-4 col-xs-4">
                <Image
                  className="img-fluid mb-2 object-fit-contain"
                  src="/logo.png"
                  width={150}
                  height={50}
                  alt="logo"
                  sizes={
                    "(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"
                  }
                  style={{
                    objectPosition: "left top",
                    width: "100%",
                    height: "auto",
                  }}
                  priority
                />
              </div>

              <h1 className="text-white fw-bold">Where Vision Meets Code</h1>
              <h6 className="text-white">
                Empowering Innovation | Elevating Technology | Enriching User
                Experiences
              </h6>

              <h4 className="text-white mt-5">Contact</h4>
              <h5 className="text-white">+628123123123</h5>
              <h5 className="text-white">hello@helooo.hellooo</h5>
              <div className="d-flex flex-row">
                <h3 className="bi bi-linkedin mt-3"></h3>
                <h3 className="bi bi-instagram ms-3 mt-3"></h3>
                <h3 className="bi bi-facebook ms-3 mt-3"></h3>
                <h3 className="bi bi-twitter ms-3 mt-3"></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 text-white mt-5 mb-5">
              <h5 className="text-white mb-2 fw-bold">Company</h5>
              <h6 className="text-white mt-2">Our Product</h6>
              <h6 className="text-white mb-2">About Us</h6>
              <h6 className="text-white mb-2">Services</h6>
              <h6 className="text-white mb-2">Contact Us</h6>

              <h5 className="text-white mt-5 mb-2 fw-bold">Location</h5>
              <h6 className="text-white fw-bold mt-2">Bandung</h6>
              <h6 className="text-white mt-2">
                Jl. Ciganitri, Desa Cipagalo, Kecamatan Bojongsoang, Kabupaten
                Bandung, Jawa Barat 40287
              </h6>
            </div>
            <div className="col-lg-3 col-md-3 text-white mt-5 mb-5">
              <h5 className="text-white  fw-bold">Services</h5>
              <h6 className="text-white ">Front-end Development</h6>
              <h6 className="text-white mb-2 ">Back-end Development</h6>
              <h6 className="text-white mb-2">CMS Implementation</h6>
              <h6 className="text-white mb-2">DevOps & Maintenance</h6>
            </div>
          </div>
          <div className="row border-top ">
            <div className="col d-flex flex-row justify-content-between">
              <p className="text-white ">
                © 2023 Ursawhite | All Rights Reserved
              </p>
              <p className="text-white ">Privacy Policy Terms and Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;

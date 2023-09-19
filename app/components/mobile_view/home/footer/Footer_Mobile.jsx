import React from "react";
import Image from "next/image";

function Footer_Mobile() {
  return (
    <div className="container">
      <div
        className="row mt-5"
        style={{ marginLeft: "10%", marginRight: "10%" }}
      >
        <div className="col-lg-6">
          <h1 className="text-white">
            We’re a fun team of strategists, designers and developers
          </h1>

          <Image
            className="mt-3 mb-3"
            src="/images/work.jpg"
            alt="ourteam"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        <div className="col-lg-6">
          <h3 className="text-white mt-5">hello@helooo.hellooo</h3>
          <p className="text-white">We love our inbox – drop us an email.</p>
          <h4 className="text-white mt-5">+628123123123</h4>
          <p className="text-secondary">Call Jeff, his line is open 24/7</p>

          <h4 className="text-white mt-5 mb-5">@ursawhite</h4>
          <p className="text-secondary mb-5">
            Stalking us? Use this handle to find us on the interwebs.
          </p>
        </div>
      </div>

      <div className="row " style={{ width: "100%", height: "100vh" }}>
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
          <p className="text-white ">Go To Next Section</p>
          <button className="btn bg-none shadow-0 ">
            <span className="text-white fw-bold h4"> Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer_Mobile;

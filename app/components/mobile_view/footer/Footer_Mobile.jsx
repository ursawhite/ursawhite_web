import React from "react";
import Image from "next/image";

function Footer_Mobile() {
  return (
    <div className="container">
      <div className="row mt-5">
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
            sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
            placeholder="blur"
            blurDataURL="/images/work.jpg"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
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
      <div className="row mt-5 mb-5">
        <div className="col">
          <div className="text-white text-center display-4 fw-bolder">
            Let’s ideate, validate & ship fast
          </div>
          <div className="h6 text-white text-center mt-2">{` Ready to start your next project? Let's Start our journey together`}</div>
          <div className="button_contact  d-flex justify-content-center align-items-center">
            <button
              className="btn p-3 rounded mt-5 "
              style={{
                background:
                  "linear-gradient(90deg, rgba(182,117,214,1) 0%, rgba(79,66,152,1) 100%)",
              }}
            >
              <span className="text-white fw-bold h6">
                Book A Free Consultation
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer_Mobile;

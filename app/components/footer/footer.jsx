import React from "react";

function Footer() {
  return (
    <>
      <div className="container ">
        <div
          className="row gx-2 g-2 d-flex justify-content-center"
          style={{ marginTop: "20%", marginBottom: "20%" }}
        >
          <div className="col-lg-4 col-md-6 border p-lg-5 p-md-3">
            <div className="text-white display-5 fw-bolder">
              Let’s ideate, validate & ship fast
            </div>
            <h4 className="text-white mt-2">{` Ready to start your next project? Let's Start our journey together`}</h4>
            <div className="button_contact ">
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
          <div className="col-lg-4 col-md-6 border  p-lg-5 p-md-4">
            <div
              className=" h2"
              style={{
                background:
                  "linear-gradient(90deg, rgba(182, 117, 214, 1) 0%, rgba(79, 66, 152, 1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
              }}
            >
              We’re a fun team of strategists, designers and developers
            </div>
            <h4 className="text-white fw-bold mt-4">hello@helooo.hellooo</h4>
            <p className="text-secondary">
              We love our inbox – drop us an email.
            </p>
            <h4 className="text-white fw-bold mt-4">+628123123123</h4>
            <p className="text-secondary">Call Jeff, his line is open 24/7</p>

            <h4 className="text-white fw-bold mt-4">@ursawhite</h4>
            <p className="text-secondary">
              Stalking us? Use this handle to find us on the interwebs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

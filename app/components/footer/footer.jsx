import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ marginLeft: "15%", marginRight: "15%" }}
      >
        <div className="row">
          <div className="col-lg-6 border border-secondary p-5">
            <h1 className="text-white display-3 fw-bold">
              Let’s ideate, validate & ship fast
            </h1>
            <h4 className="text-secondary">{` Ready to start your next project? Let's Start our journey together`}</h4>
            <div className="button_contact ">
              <button
                className="col-lg-4 shadow-none p-2 rounded mt-5"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(182,117,214,1) 0%, rgba(79,66,152,1) 100%)",
                }}
              >
                <span className="text-white fw-bold h6">Get in touch</span>
              </button>
            </div>
          </div>
          <div className="col-lg-6 border border-secondary p-5">
            <h1 className="text_title_right fw-bold">
              We’re a fun team of strategists, designers and developers
            </h1>
            <h4 className="text-white mt-5">hello@helooo.hellooo</h4>
            <p className="text-secondary">
              We love our inbox – drop us an email.
            </p>
            <h4 className="text-white mt-5">+628123123123</h4>
            <p className="text-secondary">Call Jeff, his line is open 24/7</p>

            <h4 className="text-white mt-5">@ursawhite</h4>
            <p className="text-secondary">
              Stalking us? Use this handle to find us on the interwebs.
            </p>
          </div>
        </div>
      </div>
      <div className="row fixed-bottom ms-5 me-5">
        <div className="col-6 d-flex justify-content-start ">
          <p className="text-white mt-5" style={{ marginLeft: "15%" }}>
            © 2023 Ursawhite. All rights reserved.
          </p>
        </div>
        <div className="col-6 d-flex justify-content-end ">
          <p className="text-white mt-5" style={{ marginRight: "15%" }}>
            Terms of Service | Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;

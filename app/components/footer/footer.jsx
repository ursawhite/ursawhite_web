import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col ">
            <div className="col border border-secondary p-5">
              <h1 className="text-white">Let’s ideate, validate & ship fast</h1>
              <div className="button_contact ">
                <button
                  className="col-lg-4 border-0 shadow-none p-2 rounded mt-5"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(182,117,214,1) 0%, rgba(79,66,152,1) 100%)",
                  }}
                >
                  <span className="text-white fw-bold h6">Get in touch</span>
                </button>
              </div>
            </div>
            <div className="col border border-secondary">
              <div className="lower-left"></div>
            </div>
          </div>
          <div className="col border border-secondary p-5">
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
    </>
  );
}

export default Footer;

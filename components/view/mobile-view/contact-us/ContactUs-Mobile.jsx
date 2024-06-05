import React from "react";
import Form from "../../../form/contact-us-form";
import Footer from "../../../footer/footer";

const ContactUsMobile = () => {
  return (
    <>
      <div
        className="container d-flex justify-content-center"
        style={{ width: "auto", height: "100vh" }}
      >
        <div className="row d-flex align-items-center">
          <div className="col-12 ">
            <div className="display-3 text-title text-left text-white fw-bold mt-5 mb-5">
              {`Let's Build Great Products Together`}
            </div>
          </div>
        </div>
      </div>
      <Form />

      <div style={{ marginTop: "10vh" }}>
        <Footer />
      </div>
    </>
  );
};

export default ContactUsMobile;

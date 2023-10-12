import React from "react";
import Form from "../../../contact_us/form/form";
import Footer from "../../../components/footer/footer";

const ContactUsMobile = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 ">
            <div className="display-3 text-title text-left text-white fw-bold mt-5 mb-5">
              {`Let's Build Great Products Together`}
            </div>
          </div>
        </div>
      </div>
      <Form />
      <Footer />
    </>
  );
};

export default ContactUsMobile;

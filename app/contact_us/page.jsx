import React from "react";
import styles from "./mask/page.module.css";
import MaskText from "./mask/mask.jsx";
import Form from "./message/form.jsx";

export const metadata = {
  title: "Ursawhite Pte Ltd | Contact Us",
  description: "Contact Us page of Ursawhite Pte Ltd",
};

const ContactUs = () => {
  return (
    <>
      <div className="container">
        <div className={styles.container}>
          <MaskText />
        </div>
      </div>

      <div className="container">
        <div className="display-6 fw-bold text-white">
          Tell Us About Your Dream Product
        </div>
        <Form />
      </div>
    </>
  );
};

export default ContactUs;

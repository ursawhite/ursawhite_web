import React from "react";
import styles from "./mask/page.module.css";
import MaskText from "./mask/mask.jsx";
import Form from "./form/form.jsx";

export const metadata = {
  title: "Ursawhite Pte Ltd | Contact Us",
  description: "Contact Us Page of Ursawhite Pte Ltd",
};

const ContactUs = () => {
  const phrases = ["Let's Build Great", "Products Together"];
  return (
    <>
      <div className="container text-white fw-bold">
        <div className={styles.container}>
          <MaskText text={phrases} />
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

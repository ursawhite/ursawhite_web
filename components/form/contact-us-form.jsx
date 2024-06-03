"use client";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
// import Form from "react-bootstrap/Form";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValue = {
  name: "",
  email: "",
  message: "",
  interest: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string()
    .min(5, "Too Short!")
    .max(300, "Too Long!")
    .required("Required"),
  interest: Yup.string().required("Required"),
});

const FormContact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [msg, setMsg] = useState([
    {
      status: "",
      message: "",
    },
  ]);

  useEffect(() => emailjs.init(process.env.EMAILJS_INIT), []);
  const handleSubmit = async (values) => {
    setIsLoading(true);
    const serviceId = process.env.EMAILJS_SERVICE;
    const templateId = process.env.EMAILJS_TEMPLATE;
    try {
      await emailjs.send(serviceId, templateId, {
        name: values.name,
        email: values.email,
        message: values.message,
        interest: values.interest,
      });
      setMsg([{ status: "success", message: "Message sent successfully" }]);
      setIsLoading(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      setMsg([{ status: "error", message: error.EmailJSResponseStatus.text }]);
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="container">
        <Formik
          initialValues={initialValue}
          validationSchema={ContactSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              await handleSubmit(values);
              resetForm();
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-5">
                  <div className="display-4 fw-bold text-white">
                    Tell Us About Your Dream Product
                  </div>
                  <h6 className="text-secondary mt-2">
                    Discover a world of possibilities with our exceptional
                    service
                  </h6>

                  <h6 className="text-secondary mt-2">
                    Feel free to get in touch with us today!
                  </h6>
                  <p className="text-secondary mt-2">
                    You can reach out via email at surya@ursawhite.com or send a
                    message at +6287888927490.
                  </p>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="form-floating mb-3 ">
                    <Field
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder=""
                    />
                    <label htmlFor="name" className="fw-bold">
                      Name*
                    </label>
                    <ErrorMessage
                      component="div"
                      name="name"
                      className="text-danger"
                    />
                  </div>

                  <div className="form-floating mb-3">
                    <Field
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder=""
                    />
                    <label htmlFor="email" className="fw-bold">
                      Email*
                    </label>
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="text-danger"
                    />
                  </div>
                  <div className="row g-2">
                    <div className="col-12 col-md-6 w-100">
                      {[
                        "Front-end Development",
                        "Back-end Development",
                        "CMS",
                        "DevOps and Maintenance",
                      ].map((interest) => (
                        <div key={interest} className="form-check">
                          <Field
                            className="form-check-input"
                            type="radio"
                            id={interest}
                            name="interest"
                            value={interest}
                          />
                          <label
                            className="form-check-label text-white"
                            htmlFor={interest}
                          >
                            {interest}
                          </label>
                        </div>
                      ))}
                      <ErrorMessage
                        component="div"
                        name="interest"
                        className="text-danger"
                      />
                    </div>
                  </div>

                  <div className="form-floating mb-3 mt-3">
                    <Field
                      component="textarea"
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder=""
                    />
                    <label htmlFor="message" className="fw-bold">
                      Messages*
                    </label>
                    <ErrorMessage
                      component="div"
                      name="message"
                      className="text-danger"
                    />
                  </div>

                  {msg.status === "error" ? (
                    <div className="text-danger mt-2 mb-2">{msg.message}</div>
                  ) : (
                    <div className="text-success mt-2 mb-2">{msg.message}</div>
                  )}

                  {showSuccess && (
                    <div
                      className={`alert mt-3 ${
                        msg.status === "error"
                          ? "alert-danger"
                          : "alert-success"
                      }`}
                      role="alert"
                    >
                      {msg.message || "Message sent successfully"}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="button p-2 rounded text-white rounded"
                    disabled={isSubmitting}
                  >
                    <span className="me-2 ms-2">
                      {isLoading ? "Loading..." : "Submit"}
                    </span>
                    <i className="bi bi-envelope ms-2 me-2"></i>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormContact;

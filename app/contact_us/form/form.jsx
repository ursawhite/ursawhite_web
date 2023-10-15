"use client";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState([
    {
      status: "",
      message: "",
    },
  ]);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const purposeRef = useRef(null);
  const messageRef = useRef(null);
  const [interest, setInterest] = useState("");
  const list = [
    { name: "Front-end Development", icon: "bi-code-slash" },
    { name: "Back-end Development", icon: "bi bi-hash" },
    { name: "CMS ", icon: "bi bi-bezier2" },
    { name: "DevOps and Maintenance", icon: "bi bi-bar-chart-steps" },
  ];

  const [isChecked, setIsChecked] = useState(false);
  const [checked, setChecked] = useState("");

  const checkHandler = (item) => {
    setIsChecked(!isChecked);
    setChecked(item.name);
  };

  useEffect(() => emailjs.init(process.env.EMAILJS_INIT), []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const serviceId = process.env.EMAILJS_SERVICE;
    const templateId = process.env.EMAILJS_TEMPLATE;
    try {
      const errorMessages = [];

      if (
        nameRef.current.value.length < 5 ||
        nameRef.current.value.length > 20
      ) {
        errorMessages.push("Name must be 5-20 characters.");
      }

      if (
        emailRef.current.value.length < 5 ||
        emailRef.current.value.length > 25
      ) {
        errorMessages.push("Email must be 5-25 characters.");
      }

      if (
        purposeRef.current.value.length < 5 ||
        purposeRef.current.value.length > 50
      ) {
        errorMessages.push("Purpose must be 5-50 characters.");
      }

      if (
        messageRef.current.value.length < 5 ||
        messageRef.current.value.length > 300
      ) {
        errorMessages.push("Message must be 5-300 characters.");
      }

      if (checked === "") {
        errorMessages.push("Please select an interest.");
      }

      if (errorMessages.length > 0) {
        setMsg([
          {
            status: "error",
            message: errorMessages.join(" "),
          },
        ]);
        setIsLoading(false);
        return;
      }

      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        purpose: purposeRef.current.value,
        message: messageRef.current.value,
        checked: checked,
      });
      setMsg([{ status: "success", message: "Message sent successfully" }]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5">
            <div className="display-4 fw-bold text-white ">
              Tell Us About Your Dream Product
            </div>
            <h6 className="text-secondary mt-2">
              Discover a world of possibilities with our exceptional service
            </h6>

            <h6 className="text-secondary mt-2">{`Feel free to get in touch with us today! `}</h6>
            <p className="text-secondary mt-2">{`You can reach out via email at surya@ursawhite.com or send a message at +628123123123.`}</p>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3 ">
                  <input
                    type="text"
                    className="form-control "
                    id="InputName"
                    placeholder=""
                    ref={nameRef}
                  />
                  <label htmlFor="InputName" className="fw-bold">
                    Name*
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="InputEmail"
                    placeholder=""
                    ref={emailRef}
                  />
                  <label htmlFor="InputEmail" className="fw-bold">
                    Email*
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="InputPurpose"
                    placeholder=""
                    ref={purposeRef}
                  />
                  <label htmlFor="InputPurpose" className="fw-bold">
                    Purpose*
                  </label>
                </div>
              </div>
            </div>
            <div className="row g-2">
              {list.map((item, index) => (
                <div
                  className="col-lg-6 col-md-6 col-sm-12 border-0 bg-transparent "
                  key={index}
                >
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id={item.name}
                      checked={item.name === checked}
                      onChange={() => checkHandler(item)}
                    />
                    <label
                      className="form-check-label text-white"
                      htmlFor={item.name}
                    >
                      {item.name}
                    </label>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3 mt-3">
                  <textarea
                    type="text"
                    className="form-control"
                    id="InputMessage"
                    placeholder=""
                    ref={messageRef}
                  />
                  <label htmlFor="InputMessage" className="fw-bold">
                    Messages*
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {msg[0].status === "error" ? (
                  <div className="text-danger mt-2 mb-2">{msg[0].message}</div>
                ) : (
                  <div className="text-success mt-2 mb-2">{msg[0].message}</div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  className="button p-2 rounded text-white rounded"
                  onClick={handleSubmit}
                >
                  <span className="me-2 ms-2">
                    {isLoading ? "Loading..." : "Submit"}
                  </span>
                  <i className="bi bi-envelope ms-2 me-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

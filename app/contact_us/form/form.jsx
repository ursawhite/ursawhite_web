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
    { name: "Content Management System (CMS)", icon: "bi bi-bezier2" },
    { name: "DevOps and Maintenance", icon: "bi bi-bar-chart-steps" },
  ];

  const handleInterest = async (e, item) => {
    e.preventDefault();
    setInterest(item.name);
    console.log(interest);
  };

  useEffect(() => emailjs.init("ATQpSfjaBU46S2Jfu"), []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const serviceId = "service_cbk1pa7";
    const templateId = "template_ats0ink";
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

      if (interest === "") {
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
        interest: interest,
      });
      setMsg([{ status: "success", message: "Message sent successfully" }]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-lg-6 mt-5 mb-5">
        <form>
          <div className="row d-flex g-lg-2">
            <div className="col-lg-6 ">
              <div className="form-floating mb-3 ">
                <input
                  type="text"
                  className="form-control "
                  id="floatingInputName"
                  placeholder=""
                  ref={nameRef}
                />
                <label htmlFor="floatingInputName" className="fw-bold">
                  Name*
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputEmail"
                  placeholder=""
                  ref={emailRef}
                />
                <label htmlFor="floatingInputEmail" className="fw-bold">
                  Email*
                </label>
              </div>
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInputPurpose"
              placeholder=""
              ref={purposeRef}
            />
            <label htmlFor="floatingInputPurpose" className="fw-bold">
              Purpose*
            </label>
          </div>
          <p className="text-white fw-bold mt-2">Interested Services*</p>
          <div className="d-flex flex-ward justify-content-center bg-light mb-3 rounded">
            {list.map((item, index) => (
              <div className="col-lg-3 d-flex p-3 " key={index}>
                <button
                  className={`box p-2 d-flex flex-column align-items-center  bg-transparent ${
                    interest === item.name ? "border-5" : "border"
                  }`}
                  onClick={(e) => handleInterest(e, item)}
                >
                  <div className={`display-5 ${item.icon} `} />
                  <p className="text-center mt-2">{item.name}</p>
                </button>
              </div>
            ))}
          </div>

          <div className="form-floating mb-3">
            <textarea
              type="text"
              className="form-control"
              id="floatingInputMessage"
              placeholder=""
              ref={messageRef}
            />
            <label htmlFor="floatingInputMessage" className="fw-bold">
              Messages*
            </label>
          </div>
          {msg[0].status === "error" ? (
            <div className="text-danger mt-2 mb-2">{msg[0].message}</div>
          ) : (
            <div className="text-success mt-2 mb-2"> {msg[0].message}</div>
          )}
          <div className="btn btn-success ps-5 pe-5 " onClick={handleSubmit}>
            {isLoading ? "Loading..." : "Submit"}
          </div>
        </form>
      </div>

      <div className="col-lg-4 mt-5 mb-5 ">
        <div className="display-6 fw-bold text-white ">
          Tell Us About Your Dream Product
        </div>
        <h4 className="text-secondary mt-2">
          Discover a world of possibilities with our exceptional service
        </h4>

        <h4 className="text-white mt-4">{`Feel free to get in touch with us today! You can reach out via email at surya@ursawhite.com or send us a message at +628123123123.`}</h4>
      </div>
    </div>
  );
};

export default Form;

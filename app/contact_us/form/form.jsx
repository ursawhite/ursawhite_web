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

  useEffect(() => emailjs.init("ATQpSfjaBU46S2Jfu"), []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const serviceId = "service_cbk1pa7";
    const templateId = "template_ats0ink";
    try {
      if (
        !(
          nameRef.current.value.length >= 5 &&
          nameRef.current.value.length <= 20 &&
          emailRef.current.value.length >= 5 &&
          emailRef.current.value.length <= 25 &&
          purposeRef.current.value.length >= 5 &&
          purposeRef.current.value.length <= 50 &&
          messageRef.current.value.length >= 5 &&
          messageRef.current.value.length <= 300
        )
      ) {
        setMsg([
          {
            status: "error",
            message:
              "Please fill in all fields, name must be 5-20 characters, email must be 5-25 characters, purpose must be 5-50 characters, message must be 5-300 characters ",
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
      });
      setMsg([{ status: "success", message: "Message sent successfully" }]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="row ">
      <div className="col-lg-8 mt-5 mb-5">
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
                  Name
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
                  Email
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
              Purpose
            </label>
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
              Message
            </label>
          </div>
          {msg[0].status === "error" ? (
            <div className="text-danger mt-2 mb-2">{msg[0].message}</div>
          ) : (
            <div className="text-success mt-2 mb-2"> {msg[0].message}</div>
          )}
          <div className="btn btn-danger" onClick={handleSubmit}>
            {isLoading ? "Loading..." : "Submit"}
          </div>
        </form>
      </div>

      <div className="col-lg-4 mt-5 mb-5 ">
        <h4 className="text-white fw-bold">hello@helooo.hellooo</h4>
        <p className="text-secondary">We love our inbox – drop us an email.</p>
        <h4 className="text-white fw-bold mt-4">+628123123123</h4>
        <p className="text-secondary">Call Jeff, his line is open 24/7</p>

        <h4 className="text-white fw-bold mt-4">@ursawhite</h4>
        <p className="text-secondary">
          Stalking us? Use this handle to find us on the interwebs.
        </p>
      </div>
    </div>
  );
};

export default Form;

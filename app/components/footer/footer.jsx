import React from "react";
import { useRouter } from "next/navigation";

function Footer() {
  const Router = useRouter();
  const info = [
    {
      icon: "bi bi-envelope-at",
      text: "We love our inbox – drop us an email.",
      contact: " surya@ursawhite.com",
    },
    {
      icon: "bi bi-phone-vibrate",
      text: "Call Jeff, his line is open 24/7",
      contact: "+628123123123",
    },
    {
      icon: "bi bi-linkedin",
      text: "Let's connect on LinkedIn",
      contact: "@ursawhite",
    },
    {
      icon: "bi bi-map",
      text: "Visit us at",
      contact: "Jl. Kemang Timur No. 88",
    },
  ];

  return (
    <div className="container ">
      <div className="row gx-2 g-2 d-flex justify-content-center">
        <div
          className="col-lg-5 col-md-6 border p-3 p-md-4 d-flex flex-column"
          style={{
            backgroundImage: "url(/images/2480553.png)",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
            backgroundSize: "20vw auto ",
            position: "relative",
            backgroundPosition: "right bottom",
          }}
        >
          <h1 className="text-white fw-bolder">
            Unlock Your Potential with Our Innovative Solutions
          </h1>
          <p className="text-white mt-2 ">{` We blend tech and creativity to bring your ideas to life. Whether you're a startup aiming to disrupt the market or an established enterprise seeking efficiency and growth, our software solutions are your key to success. Let's make it happen!`}</p>
          <div className="button_contact ">
            <button
              className="btn p-3 rounded mt-5 "
              onClick={() => Router.push("/contact_us")}
            >
              <div className="button p-2 rounded ">
                <span className="ms-3 me-3 fw-bold ">Contact Us!</span>

                <i className="bi bi-envelope ms-2 me-2"></i>
              </div>
            </button>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 border p-lg-5 p-md-4 d-flex flex-column align-items-start">
          <>
            <div
              className="h3 bi bi-envelope-at ps-4 pe-4 pt-3 pb-3 m-3 rounded-4 "
              style={{ backgroundColor: "rgb(244,212,228)" }}
            ></div>

            <div className="d-flex flex-column ">
              <p className="text-secondary mb-0 ms-3">
                We love our inbox – drop us an email.
              </p>
              <h5 className="text-white fw-bold mt-0 ms-3">
                surya@ursawhite.com
              </h5>
            </div>
          </>

          <div
            className="h3 bi bi-phone-vibrate ps-4 pe-4 pt-3 pb-3 m-3 rounded-4 "
            style={{ backgroundColor: "rgb(196,228,236)" }}
          ></div>
          <div className="d-flex flex-column">
            <p className="text-secondary mb-0 ms-3">
              Call Jeff, his line is open 24/7
            </p>
            <h5 className="text-white fw-bold mt-0 ms-3">+628123123123</h5>
          </div>

          <span
            className="h3 text-white bi bi-linkedin ps-4 pe-4 pt-3 pb-3 m-3 rounded-4 "
            style={{ backgroundColor: "rgb(45,121,213)" }}
          ></span>
          <div className="d-flex flex-column ">
            <p className="text-secondary mb-0 ms-3">
              {`Let's connect on LinkedIn`}
            </p>
            <h5 className="text-white fw-bold mt-0 ms-3">@ursawhite</h5>
          </div>

          <span
            className="h3 bi bi-map ps-4 pe-4 pt-3 pb-3  m-3 rounded-4 "
            style={{ backgroundColor: "rgb(228,204,244)" }}
          ></span>
          <div className="d-flex flex-column ">
            <p className="text-secondary mb-0 ms-3">Visit us at</p>
            <h5 className="text-white fw-bold mt-0 ms-3">
              Jl. Terusan Buah batu, Ciganitri, Bandung
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

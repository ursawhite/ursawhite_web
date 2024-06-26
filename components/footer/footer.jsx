"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Footer() {
  const Router = useRouter();

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
          <h1 className="text-title fw-bolder">
            Unlock Your Potential with Our Innovative Solutions
          </h1>
          <p className="text-white mt-2 ">{` We blend tech and creativity to bring your ideas to life. Whether you're a startup aiming to disrupt the market or an established enterprise seeking efficiency and growth, our software solutions are your key to success. Let's make it happen!`}</p>
          <div className="button_contact ">
            <button
              className="button p-2 rounded mt-5 "
              onClick={() => Router.push("/contact_us")}
            >
              <span className="ms-3 me-3 fw-bold ">Contact Us!</span>

              <i className="bi bi-envelope ms-2 me-2"></i>
            </button>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 border p-lg-5 p-md-4">
          <div className="row">
            <div className="col-lg-4 d-flex align-items-center ">
              <div
                className="h3 bi bi-envelope-at ps-4 pe-4 pt-3 pb-3 m-3 rounded-4 "
                style={{ backgroundColor: "rgb(244,212,228)" }}
              ></div>
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <p className="text-secondary mb-0 ms-3">
                We love our inbox – drop us an email.
              </p>
              <h5 className="text-white fw-bold mt-0 ms-3">
                surya@ursawhite.com
              </h5>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-lg-4 d-flex align-items-center ">
              <div
                className="h3 bi bi-phone-vibrate ps-4 pe-4 pt-3 pb-3 m-3 rounded-4 "
                style={{ backgroundColor: "rgb(196,228,236)" }}
              ></div>
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <p className="text-secondary mb-0 ms-3">
                Call Surya, his line is open 24/7
              </p>
              <h5 className="text-white fw-bold mt-0 ms-3">+6287888927490</h5>
            </div>
          </div>

          <div className="row d-flex">
            <div className="col-lg-4 d-flex align-items-center ">
              <div
                className="h3 text-white bi bi-linkedin ps-4 pe-4 pt-3 pb-3 m-3 rounded-4 "
                style={{ backgroundColor: "rgb(45,121,213)" }}
              ></div>
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <p className="text-secondary mb-0 ms-3">
                {`Let's connect on LinkedIn`}
              </p>
              <h5 className="text-white fw-bold mt-0 ms-3">@ursawhite</h5>
            </div>
          </div>

          <div className="row d-flex">
            <div className="col-lg-4 d-flex align-items-center ">
              <div
                className="h3 bi bi-map ps-4 pe-4 pt-3 pb-3  m-3 rounded-4 "
                style={{ backgroundColor: "rgb(228,204,244)" }}
              ></div>
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <p className="text-secondary mb-0 ms-3">Visit us at</p>
              <p className="text-white mt-0 ms-3" style={{ fontSize: "12px" }}>
                Gedung Wirausaha Lantai 1, Jalan Haji R. Rasuna Said Kavling C5,
                RT.3/RW.1, Karet, Kecamatan Setiabudi, Daerah Khusus Ibukota
                Jakarta 12920, Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

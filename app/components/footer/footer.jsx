import React from "react";

function Footer() {
  return (
    <>
      <div className="container ">
        <div
          className="row gx-2 g-2 d-flex justify-content-center align-content-center"
          style={{ marginTop: "20%", marginBottom: "20%" }}
        >
          <div
            className="col-lg-5 col-md-6 border p-lg-5 p-md-4 d-flex flex-column align-content-center"
            style={{
              backgroundImage: "url(/images/2480553.png)",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
              backgroundSize: "25vw auto ",
              position: "relative",
              backgroundPosition: "right bottom",
            }}
          >
            <h1 className="text-white fw-bolder">
              Unlock Your Potential with Our Innovative Solutions
            </h1>
            {/* <p className="text-white mt-2">{` We blend tech and creativity to bring your ideas to life. Whether you're a startup aiming to disrupt the market or an established enterprise seeking efficiency and growth, our software solutions are your key to success. Let's make it happen!`}</p> */}
            <div className="button_contact ">
              <button className="btn p-3 rounded mt-5 ">
                <div
                  className={`btn text-white p-2 d-flex align-items-center justify-content-center `}
                  style={{ backgroundColor: "rgba(169, 80, 210, 255)" }}
                >
                  <span className="ms-3 me-3 fw-bold ">Contact Us!</span>

                  <i className="bi bi-envelope ms-2 me-2"></i>
                </div>
              </button>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 border  p-lg-5 p-md-4">
            <p className="text-white fw-bold">
              {` We blend tech and creativity to bring your ideas to life. Whether
              you're a startup aiming to disrupt the market or an established
              enterprise seeking efficiency and growth, our software solutions
              are your key to success. Let's make it happen!`}
            </p>
            <h4 className="text-white fw-bold mt-4">hello@helooo.hellooo</h4>
            <p className="text-secondary">
              We love our inbox – drop us an email.
            </p>
            <h4 className="text-white fw-bold mt-4">+628123123123</h4>
            <p className="text-secondary">Call Jeff, his line is open 24/7</p>

            <h4 className="text-white fw-bold mt-4">@ursawhite</h4>
            <p className="text-secondary">
              Stalking us? Use this handle to find us on the interwebs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

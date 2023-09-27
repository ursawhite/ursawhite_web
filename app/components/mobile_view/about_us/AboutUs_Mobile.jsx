import React from "react";
import Image from "next/image";
import Footer from "../footer/Footer_Mobile";

function AboutUs_Mobile() {
  return (
    <>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 ">
            <div
              className="display-4 text-center text-white fw-bold "
              style={{
                background:
                  "linear-gradient(90deg, rgb(230, 212, 239) 0%, rgb(92, 4, 133) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginTop: "20%",
              }}
            >
              About Us
            </div>
            <h1 className="text-title text-left display-1 text-white fw-bold mt-5 mb-5">
              Your Digital Design Partner
            </h1>
            <h3 className="text-white display-6 fw-bold " id="text-right-title">
              We Help Startups And Companies Succeed
            </h3>
            <h4 className="text-white display-6fw-bold " id="text-right-title">
              Something big is happening in the world.
            </h4>

            <p className=" text-white ">
              {` Companies digitally transforming their services, startups
              disrupting traditional business models, and innovation brought
              about by digital products - all are changing the way we live. Why
              spend all your resources building something, and only realizing
              after 6 months of launching – nobody actually wants it? That's why
              we're here. To help you ideate, validate, and test ideas in the
              most time and cost-effective manner.`}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              className="img-fluid mt-2 mb-2"
              src="/images/work.jpg"
              alt="ourteam"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid mb-2 mt-2"
              src="/images/work3.png"
              alt="ourteam"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6">
            <img
              className="img-fluid mb-2"
              src="/images/work2.png"
              alt="ourteam"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row " style={{ marginTop: "10%", marginBottom: "10%" }}>
          <h3 className="text-white">
            {`We're a team of strategists, designers, developers, storytellers,
          workshoppers and Mario Kart racers.`}
          </h3>
          <div className="col-6 mt-5 ">
            <h5 className="text-white mb-5">WORKSHOPS</h5>
            <p className="text-white"> Design Sprints </p>
            <p className="text-white"> Lightning Decision Jams</p>
            <p className="text-white"> Brand Sprints </p>
          </div>
          <div className="col-6 mt-5 ">
            <h5 className="text-white mb-5">PRODUCT DESIGN</h5>
            <p className="text-white"> User Experience </p>
            <p className="text-white"> User Interface </p>
            <p className="text-white"> Illustration </p>
            <p className="text-white"> Motion Graphics </p>
            <p className="text-white"> Branding </p>
          </div>
          <div className="col-lg-4 mt-5 ">
            <h5 className="text-white mb-5">DEVELOPMENT</h5>
            <p className="text-white"> Frontend Development</p>
            <p className="text-white"> Backend Development </p>
            <p className="text-white"> Mobile Development </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <p
            className="text-center fw-bold"
            style={{ color: "rgba(169,80,210,255)" }}
          >
            THE LEADERSHIP CREW
          </p>
          <h1 className="text-center text-white fw-bold">Meet The Shipmates</h1>
          <div className="col-6 col-md-3 mt-5 text-center">
            <Image
              className="img-fluid"
              src="/images/ava1.jpg"
              alt="ava1"
              width={200}
              height={200}
              style={{ objectFit: "contain" }}
            />
            <p className="text-white mt-3 mb-0">CEO</p>
            <p className="text-white">User1</p>
          </div>
          <div className="col-6 col-md-6 col-md-3 mt-5 text-center">
            <Image
              className="img-fluid"
              src="/images/ava2.jpg"
              alt="ava2"
              width={200}
              height={200}
              style={{ objectFit: "contain" }}
            />
            <p className="text-white mt-3 mb-0">COO</p>
            <p className="text-white">User2</p>
          </div>
          <div className="col-6 col-md-6  mt-5 text-center">
            <Image
              className="img-fluid"
              src="/images/ava3.jpg"
              alt="ava3"
              width={200}
              height={200}
              style={{ objectFit: "contain" }}
            />
            <p className="text-white mt-3 mb-0">CTO</p>
            <p className="text-white">User3</p>
          </div>
          <div className="col-6 col-md-3 mt-5 text-center">
            <Image
              className="img-fluid"
              src="/images/ava4.jpg"
              alt="ava4"
              width={200}
              height={200}
              style={{ objectFit: "contain" }}
            />
            <p className="text-white mt-3 mb-0">CFO</p>
            <p className="text-white">User4</p>
          </div>
        </div>
      </div>
      <div className="continer">
        <Footer />
      </div>
    </>
  );
}

export default AboutUs_Mobile;

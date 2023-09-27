import React from "react";
import Image from "next/image";
import Marquee from "../../test_marquee/marquee_logo";
import Footer from "../footer/Footer_Mobile";

function Services_Mobile() {
  const services = [
    {
      id: 1,
      title: "Front-end Development",
      description: ` We provide front-end development services to help you build
          your website. We also provide front-end development services
          to help you build your web application.`,
      img: "/images/frontend.png",
    },
    {
      id: 2,
      title: "Back-end Development",
      description: ` We provide back-end development services to help you build
          your website. We also provide back-end development services
          to help you build your web application.`,
      img: "/images/backend.png",
    },
    {
      id: 3,
      title: "CMS Implementation",
      description: ` We provide CMS implementation services to help you build
          your website. We also provide CMS implementation services
          to help you build your web application.`,
      img: "/images/cms.png",
    },
    {
      id: 4,
      title: "DevOps & Maintenance",
      description: ` We provide DevOps & Maintenance services to help you build
          your website. We also provide DevOps & Maintenance services
          to help you build your web application.`,
      img: "/images/devops.png",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 ">
            <div
              className="display-4 text-title text-center text-white fw-bold "
              style={{
                background:
                  "linear-gradient(90deg, rgb(230, 212, 239) 0%, rgb(92, 4, 133) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginTop: "20%",
              }}
            >
              Our Services
            </div>
            <h1 className="text-title text-left display-1 text-white fw-bold mt-5 mb-5">
              Your Digital Design Partner
            </h1>
            <h3 className="text-white display-6 fw-bold " id="text-right-title">
              We are a digital design agency
            </h3>
            <h4 className="text-white display-6fw-bold " id="text-right-title">
              Web & Mobile Development
            </h4>

            <p className=" text-white ">
              Ursa White is a team who Create comprehensive and impactful
              sofware solutions spanning user experience and technical
              funtionality.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="">
          <h1 className="fw-bold text-center mt-5" style={{ color: "#c457d5" }}>
            Services
          </h1>
          {services.map((item, index) => (
            <div
              className={`row d-flex justify-content-center align-items-center ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
              key={item.id}
            >
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="d-flex flex-column ">
                  <h2 className="text-white fw-bold ms-3 mb-3">{item.title}</h2>
                  <h5 className="text-white ms-3 ">{item.description}</h5>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 ">
                <div className="service d-flex justify-content-center">
                  <Image
                    className="img-fluid"
                    src={item.img}
                    width={400}
                    height={400}
                    style={{ objectFit: "contain" }}
                    alt="services"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="technologies mt-5">
          <p className="fw-bold" style={{ color: "rgba(169,80,210,255)" }}>
            Technologies Used
          </p>
          <h1 className="text-white fw-bold">Technologies We Work With</h1>
          <p className="text-white ">
            As a premiere software development company, Innover helps to deliver
            scalable, complex, and future-ready solutions by utilising its
            unique frameworks & accelerators, broad range of programming
            languages, libraries and tools. Through Innover labs, we research,
            collaborate and co-innovate with our customers and technology
            partners to deliver path-breaking solutions with speed and
            precision.
          </p>
          <Marquee />
        </div>
        <div
          className="row mt-5 gx-1"
          style={{ marginTop: "20%", marginBottom: "20%" }}
        >
          <div className="col -lg-12 d-flex flex-column border border-3 p-5">
            <h1 className="text-white text-center fw-bold">
              {`Can't Find What you're Looking For?`}
            </h1>
            <p className="text-white text-center">
              Our team will be happy to help you
            </p>
            <button className="btn btn-secondary d-block mx-auto mt-5">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default Services_Mobile;

import React from "react";
import Image from "next/image";
import Marquee from "../../test_marquee/marquee_logo";
import Footer from "../../../components/footer/footer";
import Section5 from "../../../services/section5/section5";

function Services_Mobile() {
  const services = [
    {
      id: 1,
      title: "Front-end Development",
      description: ` Our Front-end Development services are designed to create visually appealing and user-friendly websites and web applications. We specialize in crafting responsive and interactive user interfaces that enhance your online presence. Whether you need a stunning website or a dynamic web app, our team is here to bring your ideas to life.`,
      img: "/images/frontend.png",
    },
    {
      id: 2,
      title: "Back-end Development",
      description: ` With our Back-end Development services, we ensure the functionality and performance of your website or web application. We build robust server-side components, databases, and APIs that power your online platform. Our expertise lies in creating scalable and secure back-end solutions that support your business operations and user experiences.`,
      img: "/images/backend.png",
    },
    {
      id: 3,
      title: "CMS Implementation",
      description: ` CMS Implementation is crucial for efficient content management on your website or web app. We provide CMS Implementation services that enable you to easily create, update, and organize your digital content. Our solutions streamline content publishing, making it simple for you to maintain an up-to-date and engaging online presence.`,
      img: "/images/cms.png",
    },
    {
      id: 4,
      title: "DevOps & Maintenance",
      description: `Our DevOps & Maintenance services ensure the continuous operation and optimization of your web platform. We handle infrastructure management, automation, and monitoring to keep your website or web app running smoothly. Our proactive approach guarantees minimal downtime and efficient maintenance, so you can focus on your core business activities.`,
      img: "/images/devops.png",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 ">
            <div className="display-3 text-title text-left text-white fw-bold mt-5 mb-5">
              Dedicated to transforming your concepts into tangible results
              through exceptional ease of use and excellence.
            </div>

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
      </div>
      <Section5 />
      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default Services_Mobile;

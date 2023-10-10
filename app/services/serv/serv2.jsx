import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ffBottom } from "../../components/animation/animation";
import styles from "./serv.module.scss";

const Service = () => {
  const [activeItem, setActiveItem] = useState(1);

  const services = [
    {
      id: 1,
      title: "Front-end Development",
      description: `Our Front-end Development services are designed to create visually appealing and user-friendly websites and web applications. We specialize in crafting responsive and interactive user interfaces that enhance your online presence. Whether you need a stunning website or a dynamic web app, our team is here to bring your ideas to life.`,
      img: "/images/frontend.png",
      icon: "bi bi-code",
    },
    {
      id: 2,
      title: "Back-end Development",
      description: `With our Back-end Development services, we ensure the functionality and performance of your website or web application. We build robust server-side components, databases, and APIs that power your online platform. Our expertise lies in creating scalable and secure back-end solutions that support your business operations and user experiences.`,
      img: "/images/backend.png",
      icon: "bi bi-hash",
    },
    {
      id: 3,
      title: "CMS Implementation",
      description: `CMS Implementation is crucial for efficient content management on your website or web app. We provide CMS Implementation services that enable you to easily create, update, and organize your digital content. Our solutions streamline content publishing, making it simple for you to maintain an up-to-date and engaging online presence.`,
      img: "/images/cms.png",
      icon: "bi bi-bezier2",
    },
    {
      id: 4,
      title: "DevOps & Maintenance",
      description: `Our DevOps & Maintenance services ensure the continuous operation and optimization of your web platform. We handle infrastructure management, automation, and monitoring to keep your website or web app running smoothly. Our proactive approach guarantees minimal downtime and efficient maintenance, so you can focus on your core business activities.`,
      img: "/images/devops.png",
      icon: "bi bi-bar-chart-steps",
    },
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <>
      <div className="container">
        <div className="row g-5 d-flex justify-content-center align-items-center">
          {services.map((item, index) => (
            <div className="col-lg-2 col-md-3 p-1" key={item.id}>
              <div
                className={`box rounded d-flex flex-column align-items-center p-1 ${
                  activeItem === item.id ? styles.boxTop : styles.boxPassive
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                <i
                  className={`h1 rounded text-danger d-flex flex-column justify-content-center align-items-center p-2 ${item.icon}`}
                ></i>
                <p className="fw-bold text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row g-5 d-flex justify-content-center">
          {activeItem !== null && (
            <div className="col-lg-8 p-1">
              <div className={`box p-3 rounded ${styles.boxTop}`}>
                <h3 className="fw-bold text-white">
                  {services[activeItem - 1].title}
                </h3>
                <p className="fw-bold text-white">
                  {services[activeItem - 1].description}
                </p>
                <button className="btn bg-transparent shadow-lg border-1 border-light text-white ">
                  Read More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Service;

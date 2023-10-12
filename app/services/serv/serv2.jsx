import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ffBottom } from "../../components/animation/animation";
import styles from "./serv.module.scss";
import { useRouter } from "next/navigation";
import data from "../../../public/services.json";

const Service = () => {
  const Router = useRouter();

  const [activeItem, setActiveItem] = useState(data[0].id);

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <>
      <div className={`container `}>
        <div
          className={`row g-5 d-flex justify-content-center align-items-center `}
        >
          {data.map((item) => (
            <div className="col-lg-2 col-md-3 p-1 " key={item.id}>
              <div
                className={`box rounded d-flex flex-column justify-content-center align-items-center p-1 ${
                  activeItem === item.id ? styles.boxTop : styles.boxPassive
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                <i
                  className={`h1 text-danger d-flex flex-column justify-content-center align-items-center p-2 ${item.icon}`}
                ></i>
                <p className="fw-bold text-white text-center">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`row g-5 d-flex justify-content-center `}>
          {activeItem !== null && (
            <div className={`col-lg-8 d-flex `}>
              <div className={`box p-3 rounded `}>
                <h3 className="fw-bold text-white">
                  {data[activeItem - 1].title}
                </h3>
                <p className="text-white">{data[activeItem - 1].description}</p>
                <button
                  className={`btn shadow-lg border-1 border-light ${styles.button}`}
                  onClick={() =>
                    Router.push(
                      `/services/${data[activeItem - 1].title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`
                    )
                  }
                >
                  <div>
                    <i className="bi bi-arrow-right me-2 ms-2 fw-bold"> </i>
                  </div>
                  <div>
                    <span className="">Read More</span>
                  </div>
                </button>
              </div>

              <div className="col-lg-4 col-md-4 d-flex justify-content-center align-items-center">
                <Image
                  className="img-fluid object-fit-contain"
                  src={data[activeItem - 1].image}
                  width={300}
                  height={300}
                  sizes="(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"
                  alt="services"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Service;

import React, { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import data from "../../../public/services.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animationVariants } from "../../components/animation/animation";

const Service = () => {
  const Router = useRouter();

  const [activeItem, setActiveItem] = useState(data[0].id);

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
  });
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
                  activeItem === item.id
                    ? "box_services_active"
                    : "box_services_passive"
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
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
          className={`row g-5 d-flex justify-content-center `}
        >
          {activeItem !== null && (
            <div className={`col-lg-8 d-flex `}>
              <div className="p-3 rounded">
                <h3 className="fw-bold text-white">
                  {data[activeItem - 1].title}
                </h3>
                <p className="text-white">{data[activeItem - 1].description}</p>
                <button
                  className="button btn shadow-lg border-1 border-light"
                  onClick={() =>
                    Router.push(
                      `/services/${data[activeItem - 1].title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`
                    )
                  }
                >
                  <div>
                    <span className="">Read More</span>
                  </div>
                  <div>
                    <i className="bi bi-arrow-right me-2 ms-2 fw-bold"> </i>
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
        </motion.div>
      </div>
    </>
  );
};

export default Service;

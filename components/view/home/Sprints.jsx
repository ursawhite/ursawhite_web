import React from "react";
import { useRouter } from "next/navigation";
import data from "@/public/data/sprint.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animationVariants } from "@/components/animation/animation";

function Section6() {
  const Router = useRouter();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center gx-2">
        {data.map((item) => (
          <div className="col-lg-5 col-md-6 " key={item.id}>
            <div className="p-lg-5 p-lg-4">
              <motion.h1
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animationVariants}
                transition={{ duration: 0.5 }}
                className="text-title fw-bold "
              >
                {item.title}
              </motion.h1>
              <motion.h4
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animationVariants}
                transition={{ duration: 0.5 }}
                className="text-white fw-bold "
              >
                {item.subtitle}
              </motion.h4>
              <motion.p
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animationVariants}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                {item.description}
              </motion.p>
            </div>
            <button
              className="button p-2 rounded ms-lg-5"
              onClick={() =>
                Router.push(
                  `/home/${item.title.replace(/\s+/g, "-").toLowerCase()}`
                )
              }
            >
              <span className="ms-3 me-3">Learn More</span>
              <div className="bi bi-chevron-double-right ms-2 me-2"></div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section6;

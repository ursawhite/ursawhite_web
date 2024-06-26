import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.scss";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Index({ modal, projects, image }) {
  const { active, index } = modal;
  const modalContainer = useRef(null);

  useEffect(() => {
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={`${styles.modalContainer}`}
      >
        <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
          {projects.map((project, index) => {
            return (
              <div
                className={styles.modal}
                style={{ backgroundColor: "#26261f" }}
                key={`modal_${index}`}
              >
                <div className="d-flex p-3 mt-0 flex-column ">
                  <Image
                    src={project.image}
                    width={500}
                    height={500}
                    alt="image"
                    className="img-fluid object-fit-contain "
                  />

                  <div className="row d-flex w-100 mt-4">
                    <div className="col-3">
                      <p className="text-white "> Name </p>
                      <p className="text-white "> Category </p>
                      <p className="text-white "> Type </p>
                    </div>
                    <div className="col-6">
                      <p className="text-white "> : {project.name}</p>
                      <p className="text-white"> : {project.category}</p>
                      <p className="text-white "> : {project.type}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15%",
          }}
        >
          <div className="btn d-flex align-items-center justify-content-center ">
            <span className="bi bi-arrow-up-left-circle-fill h4 text-white me-3 mt-2" />
            <span className="p text-white me-4">Click to Visit</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

import React from "react";
import { TypeAnimation } from "react-type-animation";
import MaskTesk from "../../components/mask/mask";
import { motion } from "framer-motion";

function Banner() {
  const phrases = ["URSAWHITE"];
  return (
    <div className="container">
      <div className="row d-flex flex-column justify-content-center align-items-center ">
        <div className="col-lg-8 col-md-8 text-center text-white ">
          {/* <div className="display-1 fw-bold">URSAWHITE</div> */}
          <MaskTesk text={phrases} />
          <div className="d-flex justify-content-center align-items-center">
            <div className="display-1 fw-bold">Apps Is&nbsp;</div>
            <TypeAnimation
              className="display-1 fw-bold"
              sequence={["Fast", 1000, "Easy", 1000]}
              repeat={Infinity}
            />
          </div>
          <motion.div
            className="h5 mt-3"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {`We combine technology with creativity to bring your ideas to life.
            Whether you're a startup looking to disrupt the market or an
            established enterprise seeking efficiency and growth, we have the
            right software solutions for you.`}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

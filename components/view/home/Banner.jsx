import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Banner() {
  return (
    <div className="container">
      <div className="row d-flex flex-column justify-content-center align-items-center ">
        <div className="col-lg-8 col-md-8 text-center text-white ">
          <div className="d-flex justify-content-center align-items-center">
            <div className="text-header fw-bold">MVPs Made&nbsp;</div>
            <TypeAnimation
              className="text-header fw-bold"
              sequence={[
                "Simple",
                1000,
                "Fast",
                1000,
                "Easy",
                1000,
                "Reliable",
                1000,
              ]}
              repeat={Infinity}
              style={{ color: "#9d76c1" }}
            />
          </div>
          <motion.div
            className="text-desc-header mt-3 fw-semibold"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            We provide — IT solutions that are <br className="divider" />
            <span
              className="text-desc-header fw-bold"
              style={{
                background: "linear-gradient(90deg, #c45af4 0%, #7163de 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              &nbsp;stress free and easy to work with.
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

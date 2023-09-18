import { motion, useScroll, useTransform } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
  },
  animation: {
    opacity: 1,
  },
};

const Box = (props) => {
  const { index, speed } = props;
  const { scrollYProgress } = useScroll();
  const transform = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animation"
      style={{ y: transform }}
      className={`box box--${index}`}
    >
      Box {index}
    </motion.div>
  );
};

export default Box;

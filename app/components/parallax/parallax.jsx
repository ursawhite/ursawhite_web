import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function Image() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1], ["start", "end"]);
  const y2 = useTransform(scrollY, [0, 1], [-150, 150]);

  const delay1 = 0.2; // Adjust the delay for the first section
  const delay2 = 0.5; // Adjust the delay for the second section
  const duration = 1.5; // Adjust the animation duration

  return (
    <>
      <section>
        <div ref={ref1}>
          <h1>Test1</h1>
        </div>
        <motion.h2
          style={{ y: y1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay1, duration: duration }}
        >
          Test
        </motion.h2>
      </section>
      <section>
        <div ref={ref2}>
          <h1>Test2</h1>
        </div>
        <motion.h2
          style={{ y: y2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay2, duration: duration }}
        >
          Test
        </motion.h2>
      </section>
    </>
  );
}

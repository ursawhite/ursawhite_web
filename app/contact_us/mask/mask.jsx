"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animation } from "../../components/animation/animation";

export default function MaskText(text) {
  const phrases = text.text;
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {phrases.map((phrase, index) => {
        return (
          <div className="mt-5" key={index} style={{ overflow: "hidden" }}>
            <motion.div
              className="display-2 fw-bold"
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              {phrase}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

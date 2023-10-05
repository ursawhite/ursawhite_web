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
          <div key={index} style={{ overflow: "hidden" }}>
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
              style={{ fontSize: "10vh" }}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}

"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animation } from "@/components/animation/animation";

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
            <motion.div
              className="display-4 fw-bold text-white"
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
              // style={{
              //   background:
              //     "linear-gradient(90deg, rgb(230, 212, 239) 0%, rgb(92, 4, 133) 100%)",
              //   WebkitBackgroundClip: "text",
              //   WebkitTextFillColor: "transparent",
              // }}
            >
              {phrase}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

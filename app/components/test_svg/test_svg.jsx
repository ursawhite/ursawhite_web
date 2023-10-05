import React from "react";
import styles from "./svg.module.scss";

function Test_svg({ item }) {
  const text = item;
  return (
    <div className={styles.patterns}>
      <svg width="100%" height="800px">
        <text
          className={styles.text}
          x="50%"
          y="50%"
          textAnchor="middle"
          fontSize="100px"
          color="#70747c"
        >
          {text}
        </text>
      </svg>
    </div>
  );
}

export default Test_svg;

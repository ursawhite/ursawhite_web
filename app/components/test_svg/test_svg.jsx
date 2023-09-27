import React from "react";
import "./test_svg.css";

function Test_svg({ item }) {
  const text = item;
  return (
    <div className="patterns" style={{ marginTop: "-25%", zIndex: -10 }}>
      <svg width="100%" height="800px">
        <text
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

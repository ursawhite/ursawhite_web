import React from "react";

function Test_svg({ item }) {
  const text = item;
  return (
    <div className="patterns">
      <svg width="100%" height="800px">
        <text
          className="text"
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

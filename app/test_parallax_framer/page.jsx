"use client";

import React from "react";
import Box from "./Box";
import "./styles.scss";

function Framer_parallax() {
  return (
    <div className="app">
      <div className="section">
        <Box index={1} speed={5} />
        <Box index={2} speed={-1.5} />
        <Box index={3} speed={1.5} />
      </div>
      <div className="section">
        <Box index={4} speed={2.5} />
        <Box index={5} speed={-1.5} />
        <Box index={6} speed={1.5} />
      </div>
    </div>
  );
}

export default Framer_parallax;

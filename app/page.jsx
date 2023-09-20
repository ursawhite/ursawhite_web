"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Navbar from "./components/navbar/navbar";
import Para from "./components/home/parallaxlayer";
import HomeMobile from "./components/mobile_view/home/home";

function Section() {
  const [isClient, setIsClient] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isNotMobile = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "rgba(30,30,32,0.9)",
      }}
    >
      <Navbar />
      {isDesktop && isClient && <Para />}
      {isTablet && isClient && <Para />}
      {isMobile && isClient && <HomeMobile />}
      {isNotMobile && isClient && <Para />}
    </div>
  );
}

export default Section;

"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Para from "./home/parallax/parallaxlayer";
import HomeMobile from "./components/mobile_view/home/home";
import jsonData from "../public/data.json";
import Page from "./layout";

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
        backgroundColor: "rgba(27,27,29,255)",
      }}
    >
      {isDesktop && isClient && <Para items={jsonData} />}
      {isTablet && isClient && <Para items={jsonData} />}
      {isMobile && isClient && <HomeMobile items={jsonData} />}
      {isNotMobile && isClient && <Para items={jsonData} />}
    </div>
  );
}

export default Section;

"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import { useMediaQuery } from "react-responsive";
import AboutUs from "./AboutUs";
import AboutUs_Mobile from "../components/mobile_view/about_us/AboutUs_Mobile";

function About_us() {
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
      {isDesktop && isClient && <AboutUs />}
      {isTablet && isClient && <AboutUs />}
      {isMobile && isClient && <AboutUs_Mobile />}
      {isNotMobile && isClient && <AboutUs />}
    </div>
  );
}

export default About_us;

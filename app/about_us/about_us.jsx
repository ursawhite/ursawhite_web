"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AboutUs from "./about_us/aboutus";
import AboutUs_Mobile from "../components/mobile_view/about_us/AboutUs_Mobile";

const AboutUsPage = () => {
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
      {isDesktop && isClient && <AboutUs />}
      {isTablet && isClient && <AboutUs />}
      {isMobile && isClient && <AboutUs_Mobile />}
      {isNotMobile && isClient && <AboutUs />}
    </div>
  );
};

export default AboutUsPage;

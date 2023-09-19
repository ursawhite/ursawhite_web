"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import OurWorks from "./Our_Works";
import OurWorksMobile from "../components/mobile_view/ourworks/ourworks";

function OurWork() {
  const [isClient, setIsClient] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isDesktop && isClient && <OurWorks />}
      {isTablet && isClient && <OurWorks />}
      {isMobile && isClient && <OurWorksMobile />}
      {isNotMobile && isClient && <OurWorks />}
    </>
  );
}

export default OurWork;

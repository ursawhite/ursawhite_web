"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import OurWorks from "../ourworks/our_works";
import OurWorksMobile from "../components/mobile_view/ourworks/OurWorksMobile";
import jsonData from "../../public/data.json";

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
    <div
      style={{
        backgroundColor: "rgba(32,28,28)",
      }}
    >
      {isDesktop && isClient && <OurWorks items={jsonData} />}
      {isTablet && isClient && <OurWorks items={jsonData} />}
      {isMobile && isClient && <OurWorksMobile items={jsonData} />}
      {isNotMobile && isClient && <OurWorks items={jsonData} />}
    </div>
  );
}

export default OurWork;

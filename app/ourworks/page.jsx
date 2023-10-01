"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Our_Work from "./our_works/our_works";
import OurWorksMobile from "../components/mobile_view/ourworks/OurWorksMobile";
import jsonData from "../../public/data.json";

function OurWorks() {
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
      {isDesktop && isClient && <Our_Work items={jsonData} />}
      {isTablet && isClient && <Our_Work items={jsonData} />}
      {isMobile && isClient && <OurWorksMobile items={jsonData} />}
      {isNotMobile && isClient && <Our_Work items={jsonData} />}
    </div>
  );
}

export default OurWorks;

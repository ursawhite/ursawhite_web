"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Service from "./services/services";
import ServiceMobile from "../components/mobile_view/services/Services_Mobile";

const ServicePage = () => {
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
      <div
        style={{
          backgroundColor: "rgba(27,27,29,255)",
          overflowY: "auto",
        }}
      >
        {isDesktop && isClient && <Service />}
        {isTablet && isClient && <Service />}
        {isMobile && isClient && <ServiceMobile />}
        {isNotMobile && isClient && <Service />}
      </div>
    </>
  );
};

export default ServicePage;

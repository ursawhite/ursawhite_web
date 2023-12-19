"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Template from "./components/page/template";
import TemplateMobile from "../components/mobile_view/template/Template_Mobile";

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
        {isDesktop && isClient && <Template />}
        {isTablet && isClient && <Template />}
        {isMobile && isClient && <TemplateMobile />}
        {isNotMobile && isClient && <Template />}
      </div>
    </>
  );
};

export default ServicePage;

"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Contact_Us from "@/components/view/contact-us/Contact-Us";
import Contact_Us_Mobile from "@/components/view/MobileView/contact-us/ContactUs-Mobile";

const ContactUs = () => {
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
      {isDesktop && isClient && <Contact_Us />}
      {isTablet && isClient && <Contact_Us />}
      {isMobile && isClient && <Contact_Us_Mobile />}
      {isNotMobile && isClient && <Contact_Us />}
    </div>
  );
};

export default ContactUs;

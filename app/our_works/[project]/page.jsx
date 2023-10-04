"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ProjectPage from "./project";
import ProjectMobile from "./project_mobile";

function Project() {
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
        overflowY: "auto",
      }}
    >
      {isDesktop && isClient && <ProjectPage />}
      {isTablet && isClient && <ProjectPage />}
      {isMobile && isClient && <ProjectMobile />}
      {isNotMobile && isClient && <ProjectPage />}
    </div>
  );
}

export default Project;

"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ProjectPage from "./project";
import ProjectMobile from "./project_mobile";

const ProjectWindow = () => {
  const [isClient, setIsClient] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  const title = params.project;
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
      {isDesktop && isClient && <ProjectPage title={title} />}
      {isTablet && isClient && <ProjectPage title={title} />}
      {isMobile && isClient && <ProjectMobile title={title} />}
      {isNotMobile && isClient && <ProjectPage title={title} />}
    </div>
  );
};

export default ProjectWindow;

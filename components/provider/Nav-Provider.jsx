"use client";

import { usePathname } from "next/navigation";
import NavBar from "@/components/navbar/Navbar";

const disableNavbar = [""];

const Provider = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname && disableNavbar.includes(pathname) ? null : <NavBar />}
      {children}
    </>
  );
};

export default Provider;

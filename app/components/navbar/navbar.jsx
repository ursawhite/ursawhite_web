"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.scss";

function Navbar() {
  const [activeLink, setActiveLink] = useState("/");
  const [width, setWidth] = useState(0);
  const list = [
    { name: "Home", link: "/", id: "linkHome" },
    { name: "Our Work", link: "/our_works", id: "linkOurWorks" },
    { name: "About Us", link: "/about_us", id: "linkAboutUs" },
    { name: "Services", link: "/services", id: "linkServices" },
    { name: "Contact Us", link: "/contact_us", id: "linkContactUs" },
  ];
  const pathname = usePathname();
  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);
  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container ">
        <Link className="" href="/">
          <Image
            src="/logo.png"
            width={width < 1024 ? "150" : "200"}
            height={width < 1024 ? "25" : "35"}
            priority
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler shadow-none "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          style={{ background: "rgba(255,255,255,0.5)" }}
        >
          <div className="navbar-toggler-icon text-danger"></div>
        </button>
        <div
          className="sidebar offcanvas offcanvas-start bg-dark "
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header border-bottom text-white ">
            <div className="offcanvas-title " id="offcanvasNavbarLabel">
              <Image
                className="logo-logo m-1"
                src="/logo.png"
                width={200}
                height={40}
                alt="logo"
                style={{ objectFit: "contain", objectPosition: "left top" }}
                priority
              />
            </div>
            <button
              type="button"
              className="btn-close btn-close-white shadow-none border-0 ms-5 me-3"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex flex-column p-4 p-lg-0 ">
            <ul className="navbar-nav justify-content-lg-end pe-3 align-items-center">
              {list.map((item, index) => (
                <li className="nav-item mx-2 fw-bold" key={index}>
                  {index === list.length - 1 ? (
                    <Link
                      className="nav-link fs-6"
                      id={item.id}
                      href={item.link}
                      onClick={() => setActiveLink(`${item.link}`)}
                    >
                      <div
                        className={`btn text-white p-2 d-flex align-items-center justify-content-center ${styles.button}`}
                        style={{ backgroundColor: "rgba(169, 80, 210, 255)" }}
                      >
                        <span className="ms-3 me-3 fw-bold ">{item.name}</span>

                        <i className="bi bi-envelope ms-2 me-2"></i>
                      </div>
                    </Link>
                  ) : (
                    <Link
                      className={`nav-link fs-6 ${
                        activeLink === `${item.link}`
                          ? "active border-bottom border-3 text-white p-2"
                          : "text-secondary"
                      }`}
                      id={item.id}
                      aria-current="page"
                      href={item.link}
                      onClick={() => setActiveLink(`${item.link}`)}
                    >
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

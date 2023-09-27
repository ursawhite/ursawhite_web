"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../styles/navbar.scss";

function Navbar() {
  const [activeLink, setActiveLink] = useState("/");
  const [width, setWidth] = useState(0);
  const list = [
    { name: "Home", link: "/", id: "linkHome" },
    { name: "Our Work", link: "/ourworks", id: "linkOurWorks" },
    { name: "About Us", link: "/about_us", id: "linkAboutUs" },
    { name: "Services", link: "/services", id: "linkServices" },
  ];

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container ">
        <Link className="" href="/">
          <Image
            className=""
            src="/logo.png"
            width={width < 1024 ? "150" : "200"}
            height={width < 1024 ? "25" : "35"}
            priority={true}
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
          <div className="offcanvas-header border-bottom text-white">
            <div className="offcanvas-title" id="offcanvasNavbarLabel">
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
          <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
            <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
              {list.map((item, index) => (
                <li className="stroke nav-item mx-2 fw-bold " key={index}>
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
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-center flex-column">
              <button
                type="button"
                className="btn btn-secondary bg-transparent shadow-none border border-3 border-light "
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

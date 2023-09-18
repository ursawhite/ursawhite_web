"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../styles/navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container ">
          <Link className="navbar-brand" href="/">
            <Image
              className="logo-logo m-1"
              src="/logo.png"
              height={40}
              width={200}
              alt="logo"
              priority
            />
          </Link>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <div className="navbar-toggler-icon"></div>
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
                <li className="stroke nav-item mx-2 fw-bold ">
                  <Link
                    className={`nav-link fs-6 ${
                      activeLink === "/" ? "active border-bottom" : ""
                    }`}
                    id="link"
                    aria-current="page"
                    href="/"
                    onClick={() => setActiveLink("/")}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-2 fw-bold ">
                  <Link
                    className={`nav-link fs-6 ${
                      activeLink === "/ourwork" ? "active border-bottom" : ""
                    }`}
                    id="link"
                    href="/ourwork"
                    onClick={() => setActiveLink("/ourwork")}
                  >
                    Our Work
                  </Link>
                </li>
                <li className="nav-item mx-2 fw-bold ">
                  <Link
                    className={`nav-link fs-6 ${
                      activeLink === "/about_us" ? "active border-bottom" : ""
                    }`}
                    id="link"
                    href="/about_us"
                    onClick={() => setActiveLink("/about_us")}
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item mx-2 fw-bold ">
                  <Link
                    className={`nav-link fs-6 ${
                      activeLink === "/services" ? "active border-bottom" : ""
                    }`}
                    id="link"
                    href="/services"
                    onClick={() => setActiveLink("/services")}
                  >
                    Services
                  </Link>
                </li>
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
    </div>
  );
}

export default Navbar;

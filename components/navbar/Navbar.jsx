"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("/");
  const [width, setWidth] = useState(0);

  const list = [
    { name: "Home", link: "/", id: "linkHome" },
    { name: "Our Work", link: "/our-works", id: "linkOurWorks" },
    { name: "About Us", link: "/about-us", id: "linkAboutUs" },
    { name: "Services", link: "/services", id: "linkServices" },
    { name: "Blog", link: "/blog", id: "linkBlog" },
    { name: "Contact Us", link: "/contact-us", id: "linkContactUs" },
  ];

  useEffect(() => {
    const firstSegment = pathname.split("/")[1];
    const result = "/" + firstSegment;
    setActiveLink(result);
  }, [pathname]);


  return (
    <nav className="navbar navbar-expand-lg fixed-top pt-3">
      <div className="container ">
        <Link href="/" className="navbar-brand">
          <Image
            src="/logo.png"
            width={360}
            height={480}
            loading="eager"
            priority
            alt="logo"
            style={{ objectFit: "contain", width: "100%", height: "25px" }}
          />
        </Link>
        <button
          className="navbar-toggler shadow-none "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <div className="bi bi-list" style={{ color: "white" }}></div>
        </button>
        <div
          className="sidebar offcanvas offcanvas-start bg-dark"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header border-bottom text-white">
            <div className="offcanvas-title" id="offcanvasNavbarLabel">
              <Image
                src="/logo.png"
                width={width < 1024 ? "150" : "200"}
                height={width < 1024 ? "25" : "35"}
                priority
                alt="logo"
                style={{ objectFit: "contain" }}
              />
            </div>
            <button
              type="button"
              className="btn-close btn-close-white shadow-none border-0"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex flex-column p-4 p-lg-0 ">
            <ul className="navbar-nav justify-content-lg-end align-items-center">
              {list.map((item, index) => (
                <li
                  className="nav-item mx-2 fw-bold"
                  key={index}
                  data-bs-toggle="collapse"
                  data-bs-target="#main-menu-navbar"
                >
                  {index === list.length - 1 ? (
                    <Link
                      className="nav-link fs-6 pe-0"
                      id={item.id}
                      href={item.link}
                    >
                      <div className="button p-2 ms-1 me-1 rounded">
                        <span
                          className="ms-3 me-3 fw-bold "
                          data-bs-dismiss="offcanvas"
                        >
                          {item.name}
                        </span>
                        <i className="bi bi-envelope ms-2 me-2"></i>
                      </div>
                    </Link>
                  ) : (
                    <Link
                      className="text-decoration-none"
                      id={item.id}
                      aria-current={item.link}
                      href={item.link}
                    >
                      <div
                        data-bs-dismiss="offcanvas"
                        className={`nav-link fs-6 ${
                          activeLink === `${item.link}`
                            ? "active border-bottom border-3 text-white p-2"
                            : "text-secondary"
                        }`}
                      >
                        {item.name}
                      </div>
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

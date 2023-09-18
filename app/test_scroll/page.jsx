"use client";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import Box from "../test_parallax_framer/Box";
function Page_Test() {
  const pages = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    function manageClasses() {
      var wrap = document.querySelector(".wrapper");
      var navBtns = document.querySelectorAll(".nav-btn");
      var navPanel = document.querySelectorAll(".nav-panel");
      //   var scrollBtn = document.querySelector(".scroll-btn");
      wrap.className = `wrapper active-page${currentPage}`;
      navBtns.forEach((btn, index) => {
        btn.classList.remove("active");
        if (index + 1 === currentPage) {
          btn.classList.add("active");
        }
      });

      setTimeout(() => {
        navPanel.forEach((panel) => {
          panel.classList.remove("invisible");
        });
        setScrolling(false);
      }, 1000);
    }

    function navigateUp() {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        manageClasses();
      }
    }

    function navigateDown() {
      if (currentPage < pages) {
        setCurrentPage(currentPage + 1);
        manageClasses();
      }
    }

    function handleMouseWheel(e) {
      if (!scrolling) {
        const deltaY = e.deltaY;
        // console.log(deltaY);
        if (deltaY < 0) {
          navigateUp();
        } else {
          navigateDown();
        }
      }
    }

    function handleScrollBtnClick(e) {
      console.log(e);
      if (e.target.classList.contains("up")) {
        navigateUp();
      } else {
        navigateDown();
      }
    }

    function handleNavBtnClick(e) {
      if (!scrolling) {
        var target = e.target.getAttribute("data-target");
        setCurrentPage(parseInt(target));
        manageClasses();
      }
    }

    document.addEventListener("wheel", handleMouseWheel);
    document.addEventListener("MouseScrollEvent", handleMouseWheel);

    document.addEventListener("click", handleScrollBtnClick);
    document.addEventListener("click", handleNavBtnClick);

    return () => {
      document.removeEventListener("wheel", handleMouseWheel);
      document.removeEventListener("MouseScrollEvent", handleMouseWheel);

      document.removeEventListener("click", handleScrollBtnClick);
      document.removeEventListener("click", handleNavBtnClick);
    };
  }, [currentPage, scrolling, pages]);

  return (
    <>
      <div className={`wrapper active-page${currentPage}`}>
        <div className="page page1">
          <h2>First page</h2>
          <div className="container">
            <div className="row">
              <div className="col"></div>
            </div>
          </div>
        </div>
        <div className="page page2">
          <h2>Second page</h2>
        </div>
        <div className="page page3">
          <h2>Third page</h2>
        </div>
        <div className="page page4">
          <h2>Fourth page</h2>
        </div>
      </div>
      <div className="nav-panel">
        <div className="scroll-btn up"></div>
        <div className="scroll-btn down"></div>
        <nav>
          <ul>
            <li
              data-target="1"
              className={`nav-btn nav-page1 ${
                currentPage === 1 ? "active" : ""
              }`}
            ></li>
            <li
              data-target="2"
              className={`nav-btn nav-page2 ${
                currentPage === 2 ? "active" : ""
              }`}
            ></li>
            <li
              data-target="3"
              className={`nav-btn nav-page3 ${
                currentPage === 3 ? "active" : ""
              }`}
            ></li>
            <li
              data-target="4"
              className={`nav-btn nav-page4 ${
                currentPage === 4 ? "active" : ""
              }`}
            ></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Page_Test;

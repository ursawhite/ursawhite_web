"use client";
import { useEffect, useState } from "react";

export const useScrollHandler = (maxPages) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [canScroll, setCanScroll] = useState(true);

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const maxScroll = maxPages * windowHeight;

      if (scrollPosition >= maxScroll && currentPage < maxPages - 1) {
        setCurrentPage(currentPage + 1);
        setCanScroll(false);
        setTimeout(() => {
          setCanScroll(true);
        }, 1000);
      } else if (scrollPosition < maxScroll && currentPage > 0) {
        setCurrentPage(currentPage - 1);
        setCanScroll(false);
        setTimeout(() => {
          setCanScroll(true);
        }, 1000);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown" && canScroll) {
        setCurrentPage(currentPage + 1);
        setCanScroll(false);
        setTimeout(() => {
          setCanScroll(true);
        }, 1000);
      } else if (event.key === "ArrowUp" && canScroll) {
        setCurrentPage(currentPage - 1);
        setCanScroll(false);
        setTimeout(() => {
          setCanScroll(true);
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage, maxPages, canScroll]);

  return currentPage;
};

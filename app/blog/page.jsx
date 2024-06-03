"use client";
import React, { useEffect, useState } from "react";
import Blog from "@/components/view/blog/Blog";
import BlogPagination from "@/components/view/blog/BlogPagination";
import Footer from "@/components/footer/footer";

const Blogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [blogData, setBlogData] = useState([]);

  const BlogPost = async () => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/blog?acf_format=standard&per_page=7&page=${currentPage}`,
      {
        cache: "no-store",
      }
    );
    const Data = await data.json();
    if (data) {
      setBlogData(Data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    BlogPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const getBlogData = async () => {
    try {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/blog?acf_format=standard`,
        {
          cache: "no-store",
          revalidate: 60,
        }
      );

      if (!data.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const Data = await data.json();

      setTotalPages(Math.ceil(Data.length / 7));
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  useEffect(() => {
    getBlogData();
  }, [totalPages]);

  return (
    <>
      <div
        className="container"
        style={{
          minHeight: "100svh",
          width: "100%",
          marginTop: "50px",
        }}
      >
        <div className="row g-2">
          <div className="col-12 p-2">
            <div className="display-4 fw-bold text-title text-center mt-5 mb-5">
              Our Blog
            </div>
          </div>
          {isLoading ? (
            Array.from({ length: 7 }).map((_, index) => (
              <div
                className={
                  index === 0
                    ? "col-12 p-2"
                    : "col-12 col-md-6 col-lg-4 p-2 text-decoration-none"
                }
                key={index}
              >
                <div className="skeleton-loader" />
              </div>
            ))
          ) : (
            <>
              <Blog blogPost={blogData} />
            </>
          )}

          <BlogPagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", width: "auto", marginTop: "200px" }}
      >
        <Footer />
      </div>
    </>
  );
};

export default Blogs;

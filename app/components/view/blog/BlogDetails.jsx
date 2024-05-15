"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "../../footer/footer";
import AnotherBlog from "./AnotherBlog";

const getBlogById = async ({ slug }) => {
  const blogData = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/blog?slug=${slug}&acf_format=standard`,
    {
      cache: "no-store",
    }
  );

  const Data = await blogData.json();
  return Data;
};
const BlogDetails = ({ slug }) => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getBlogData = async () => {
    setIsLoading(true);
    try {
      const data = await getBlogById({ slug });
      setBlogData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (blogData.length === 0) {
      getBlogData({ slug });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogData, slug]);

  let blog_date;
  if (blogData && blogData.length > 0) {
    blog_date = new Date(blogData[0].date || Date.now());
    blog_date = blog_date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          <div className="container" style={{ color: "white" }}>
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-md-10">
                <div className="blog-details">
                  <div className="blog-title">
                    {blogData[0].title.rendered || "title"}
                  </div>
                  <div className="blog-author">
                    <div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: blogData[0].acf.Blog_Author.user_avatar,
                        }}
                      />
                    </div>
                    <div>
                      <div className="blog-author-name">
                        {blogData[0].acf.Blog_Author.display_name}
                      </div>
                      <div className="blog-date">{blog_date}</div>
                    </div>
                  </div>
                  <Image
                    src={blogData[0].acf.image}
                    width={1280}
                    height={720}
                    alt="blog image"
                    className="blog-details-image img-fluid"
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogData[0].acf.blog_content,
                    }}
                  />
                </div>
              </div>
            </div>
            <AnotherBlog />
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100vh", width: "auto", marginTop: "250px" }}
            >
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BlogDetails;

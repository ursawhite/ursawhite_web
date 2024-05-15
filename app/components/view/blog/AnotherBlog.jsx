"use client";
import { Suspense, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const AnotherBlog = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDataBlog = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/blog?acf_format=standard&per_page=3`,
        {
          cache: "no-store",
        }
      );
      const data = await response.json();
      setBlogData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataBlog();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-10 p-0">
            <div className="row g-2">
              {isLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <div
                    className="col-12 col-md-6 col-lg-4 p-2 text-decoration-none "
                    key={index}
                  >
                    <div className="skeleton-loader" />
                  </div>
                ))
              ) : (
                <>
                  {blogData?.map((item) => {
                    let date = new Date(item.date);
                    let formattedDate = date.toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    });
                    return (
                      <Link
                        href={`/blog/${item.slug}`}
                        className="col-12 col-md-6 col-lg-4 p-2 text-decoration-none"
                        key={item.id}
                      >
                        <div
                          className="p-2"
                          style={{
                            backgroundColor: "#333333",
                            borderRadius: "10px",
                          }}
                        >
                          <div>
                            <Image
                              className=""
                              src={item.acf.image}
                              width={400}
                              height={400}
                              alt="logo"
                              sizes={
                                "(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"
                              }
                              style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                                borderRadius: "10px",
                                marginTop: "0",
                                marginBottom: "10px",
                              }}
                              priority
                            />
                          </div>

                          <div className="blog_category_badge">
                            {item.acf.category.name}
                          </div>
                          <div className="p-2">
                            <div className="blog_title">
                              {item.title.rendered}
                            </div>
                            <div className="blog_desc">
                              {item.acf.description}
                            </div>
                            <div className="d-flex align-items-center">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item.acf.Blog_Author.user_avatar,
                                }}
                              ></div>

                              <div className="blog_author">
                                {item.acf.Blog_Author.display_name ||
                                  "Anonymous"}
                              </div>
                              <div className="blog_seperator">|</div>
                              <div className="blog_date">{formattedDate}</div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default AnotherBlog;

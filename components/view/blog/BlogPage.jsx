import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogPage = ({ data, index }) => {
  let date = new Date(data.date);
  let formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <>
      {index === 0 ? (
        <>
          <Link
            href={`/blog/${data.slug}`}
            className="blog_post d-block d-md-flex w-100 h-100 text-decoration-none"
          >
            <div className="w-100 w-md-50">
              <Image
                src={data.acf.image}
                alt={data.title.rendered}
                width={1280}
                height={720}
                loading="lazy"
                blurDataURL={data.acf.image}
                placeholder="blur"
                className="blog_image first_blog_image"
              />
            </div>
            <div className="w-100 w-md-50 p-0 p-md-3 p-1">
              <div className="blog_category_badge">
                {data.acf.category.name}
              </div>
              <div className="blog_title">{data.title.rendered}</div>
              <div className="blog_desc">{data.acf.description}</div>
              <div className="d-flex align-items-center mb-2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.acf.Blog_Author.user_avatar,
                  }}
                ></div>

                <div className="blog_author">
                  {data.acf.Blog_Author.display_name || "Anonymous"}
                </div>
                <div className="blog_seperator">|</div>
                <div className="blog_date">{formattedDate}</div>
              </div>
            </div>
          </Link>
        </>
      ) : (
        <>
          <div className="blog_post">
            <Link href={`/blog/${data.slug}`} className="text-decoration-none">
              <div>
                <Image
                  src={data.acf.image}
                  alt={data.title.rendered}
                  width={1280}
                  height={720}
                  loading="lazy"
                  blurDataURL={data.acf.image}
                  placeholder="blur"
                  className="blog_image"
                />
              </div>
              <div className="p-md-3 p-1">
                <div className="blog_category_badge">
                  {data.acf.category.name}
                </div>
                <div className="blog_title">{data.title.rendered}</div>
                <div className="blog_desc">{data.acf.description}</div>
                <div className="d-flex align-items-center">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.acf.Blog_Author.user_avatar,
                    }}
                  ></div>

                  <div className="blog_author">
                    {data.acf.Blog_Author.display_name || "Anonymous"}
                  </div>
                  <div className="blog_seperator">|</div>
                  <div className="blog_date">{formattedDate}</div>
                </div>
              </div>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default BlogPage;

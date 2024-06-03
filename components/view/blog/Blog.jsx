import React from "react";
import BlogPage from "./BlogPage";

const BlogsPage = ({ blogPost }) => {
  return (
    <>
      {blogPost.map((post, index) => {
        return (
          <div
            className={`${
              index === 0 ? "col-12 p-2" : "col-12 col-md-6 col-lg-4 p-2"
            }`}
            key={post.id}
          >
            <BlogPage data={post} index={index} />
          </div>
        );
      })}
    </>
  );
};

export default BlogsPage;

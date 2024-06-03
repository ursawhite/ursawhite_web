import React from "react";
import BlogDetails from "@/components/view/blog/BlogDetails";

export async function generateStaticParams() {
  const blogData = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/blog?acf_format=standard`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  const Data = await blogData.json();
  return Data.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/blog?slug=${params.slug}&acf_format=standard`,
      {
        method: "GET",
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (data.length === 0) {
      throw new Error("Blog post not found");
    }

    const post = data[0];

    return {
      title: `Blog | ${post.title.rendered}`,
      description: post.description || post.acf.description,
      alternates: {
        canonical: `/blog/${params.slug}`,
      },
      openGraph: {
        title: post.title.rendered,
        description: post.acf.description,
        url: `https://www.ursawhite.com/blog/${post.slug}`,
        images: [
          {
            url: post.acf.image,
            alt: post.title.rendered,
            width: 800,
            height: 600,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title.rendered,
        images: post.acf.image,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog | Post not found",
      description: "The requested blog post could not be found.",
    };
  }
}

const BlogPage = async ({ params: { slug } }) => {
  return (
    <>
      <BlogDetails slug={slug} />
    </>
  );
};

export default BlogPage;

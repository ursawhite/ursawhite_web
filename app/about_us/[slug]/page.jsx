import React from "react";
import data from "../../../public/approach.json";
import Approach from "./page_container";

export function generateMetadata({ params }) {
  try {
    const about = data.filter(
      (item) => item.title.toLowerCase() === params.slug.replace(/_/g, " ")
    );
    if (!about)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };
    return {
      title: about[0].title + " | About Us ",
      description: about[0].description,
      alternates: {
        canonical: `/about_us/${params.slug}`,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }
}

export async function generateStaticParams() {
  return data.map((item) => ({
    slug: item.title.replace(/\s/g, "_").toLowerCase(),
  }));
}

const About = ({ params }) => {
  const title = params.slug;
  return (
    <>
      <Approach title={title} />
    </>
  );
};

export default About;

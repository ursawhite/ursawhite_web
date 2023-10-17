import React from "react";
import data from "../../../public/sprint.json";
import SprintPage from "./page_container";

export function generateMetadata({ params }) {
  try {
    const sprint = data.filter(
      (item) => item.title.toLowerCase() === params.slug.replace(/-/g, " ")
    );
    if (!sprint)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };
    return {
      title: sprint[0].title + " | Home ",
      description: sprint[0].description,
      alternates: {
        canonical: `/home/${params.slug}`,
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

const Sprint = ({ params }) => {
  const title = params.slug;
  return (
    <>
      <SprintPage title={title} />
    </>
  );
};

export default Sprint;

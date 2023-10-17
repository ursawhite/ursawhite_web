import React from "react";
import ProjectPage from "./project_page";
import data from "../../../public/data.json";

export function generateMetadata({ params }) {
  try {
    const project = data.filter(
      (item) => item.title.toLowerCase() === params.project.replace(/-/g, " ")
    );

    if (!project)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };
    return {
      title: project[0].title + " | Our Works",
      description: project[0].description,
      alternates: {
        canonical: `/our works/${project[0].title}`,
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

function Project({ params }) {
  return (
    <>
      <ProjectPage title={params.project} />
    </>
  );
}

export default Project;

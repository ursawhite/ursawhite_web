import React from "react";
import data from "../../../public/services.json";
import Serv from "./page_container";

export function generateMetadata({ params }) {
  try {
    const services = data.filter(
      (item) =>
        item.title.replace(/-/g, " ").toLowerCase() ===
        params.slug.replace(/-/g, " ")
    );
    if (!services)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };
    return {
      title: services[0].title + " | Services ",
      description: services[0].description,
      alternates: {
        canonical: `/services/${params.slug}`,
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
    slug: item.title.replace(/\s/g, "-").toLowerCase(),
  }));
}

const Services = ({ params }) => {
  const title = params.slug;
  return (
    <>
      <Serv title={title} />
    </>
  );
};

export default Services;

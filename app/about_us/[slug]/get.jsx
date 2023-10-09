import data from "../../../public/data.json";

export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const posts = await data();

  // Props returned will be passed to the page component
  return { props: { posts } };
}

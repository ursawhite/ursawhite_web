import Home from "./home/home_page.jsx";

export const metadata = {
  title: "Ursawhite Pte Ltd | Home",
  description: "Home Page of Ursawhite Pte Ltd",
  openGraph: {
    title: "Ursawhite Pte Ltd | Home",
    description: "Home Page of Ursawhite Pte Ltd",
    url: "https://ursawhite-web.vercel.app/",
    siteName: "Ursawhite Pte Ltd | Home",
    images: "/opengraph-image.jpg",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Ursawhite Pte Ltd | Home",
    images: "/opengraph-image.jpg",
  },
};

function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}

export default HomePage;

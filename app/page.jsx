import Home from "./home/home_page.jsx";
import img from "../public/images/head_logo.png";

export const metadata = {
  title: "Ursawhite Pte Ltd | Home",
  description: "Home Page of Ursawhite Pte Ltd",
  openGraph: {
    title: "Ursawhite Pte Ltd | Home",
    description: "Home Page of Ursawhite Pte Ltd",
    url: "https://ursawhite-web.vercel.app/",
    siteName: "Ursawhite Pte Ltd | Home",
    images: { img },
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Ursawhite Pte Ltd | Home",
    images: { img },
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

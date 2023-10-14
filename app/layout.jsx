import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import Navbar from "./components/navbar/navbar";

import "./global.css";

export const metadata = {
  metadataBase: new URL("https://ursawhite-web.vercel.app/"),
  title: "Ursawhite Ltt | Home",
  description: "Home Page of Ursawhite Ltt",
  openGraph: {
    title: "Ursawhite Pte Ltd | Home",
    description: "Home Page of Ursawhite Ltt",
    url: "https://ursawhite-web.vercel.app/",
    siteName: "Ursawhite Ltt | Home",
    images: [
      {
        url: "https://res.cloudinary.com/dkp658sgi/image/upload/v1697044030/iq9huffxsyir0dsmi1x3.png",
        alt: "Ursawhite Ltt",
        width: 800,
        height: 600,
      },
      {
        url: "/logo.png",
        alt: "Ursawhite Ltt",
        width: 50,
        height: 50,
      },
    ],
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
    title: "Ursawhite Ltt | Home",
    images: "/opengraph-image.jpg",
  },
  icons: "/logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
          as="style"
        />
      </head>

      <body
        style={{
          backgroundColor: "rgba(27, 27, 29)",
        }}
      >
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
        as="script"
      />
    </html>
  );
}

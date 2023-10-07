import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import Navbar from "./components/header/navbar";

export const metadata = {
  metadataBase: new URL("https://ursawhite-web.vercel.app/"),
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

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
          as="script"
        />
      </body>
    </html>
  );
}

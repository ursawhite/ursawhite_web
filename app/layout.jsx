import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import Navbar from "./components/header/navbar";

export const metadata = {
  title: "Ursawhite Pte Ltd",
  description: "Home page of Ursawhite Pte Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
        ></link>
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

        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>
      </body>
    </html>
  );
}

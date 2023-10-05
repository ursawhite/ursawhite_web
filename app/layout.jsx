import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import Navbar from "./components/header/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          referrerPolicy="no-referrer"
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
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
          as="script"
        />
      </body>
    </html>
  );
}

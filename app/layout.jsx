import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import NavProvider from "@/components/provider/Nav-Provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./global.css";

export const metadata = {
  metadataBase: new URL("https://www.ursawhite.com/"),
  title: {
    template: "%s | Ursawhite",
    default: "Ursawhite",
  },
  description:
    "MVPs Made Simple, Fast, Easy, Reliable, We provide — IT solutions that are stress free and easy to work with.",
  openGraph: {
    title: "Ursawhite",
    description:
      "MVPs Made Simple, Fast, Easy, Reliable, We provide — IT solutions that are stress free and easy to work with.",
    url: "https://www.ursawhite.com/",
    siteName: "Ursawhite",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Ursawhite",
        width: 800,
        height: 600,
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Ursawhite",
    images: "/opengraph-image.png",
  },
  icons: "/opengraph-image.png",
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
        <main>
          <NavProvider>{children}</NavProvider>
        </main>
      </body>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
        as="script"
      />
      <GoogleAnalytics gaId="G-L2S1NJ0632" />
    </html>
  );
}

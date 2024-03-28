module.exports = {
  reactStrictMode: false,
  env: {
    EMAILJS_INIT: process.env.EMAILJS_INIT,
    EMAILJS_SERVICE: process.env.EMAILJS_SERVICE,
    EMAILJS_TEMPLATE: process.env.EMAILJS_TEMPLATE,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "/uc?export=view&id=**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};

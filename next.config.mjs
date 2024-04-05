/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "newtronic-solution.com",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },
};

/*
   https://newtronic-solution.com/wp-content/uploads/2023/10/Main-Logo.png 
   https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg
   https://103.183.75.112/api/directory/dataList
*/
export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: "/people-and-cats",
  trailingSlash: true,
};

export default nextConfig;

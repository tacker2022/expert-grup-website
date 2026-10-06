import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "https://expertgrup.istanbul/hakkimizda/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "https://expertgrup.istanbul/iletisim/",
        permanent: true,
      },
      {
        source: "/:path*",
        destination: "https://expertgrup.istanbul/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Using output: 'standalone' is best for Amplify
  output: "standalone",
  images: {
    unoptimized: true,
  },
  transpilePackages: [
    "@nextui-org/react",
    "@ionic/react",
    "@ionic/core",
    "@stencil/core",
    "ionicons",
  ],
};

export default nextConfig;

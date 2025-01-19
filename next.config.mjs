// next.config.mjs
/**
 * @type {import('next').NextConfig}
 */
// const nextConfig = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: /\.[jt]sx?$/,
//       use: [
//         {
//           loader: "@svgr/webpack",
//           options: {
//             svgo: false, // Disable SVGO optimization if needed
//           },
//         },
//       ],
//     });

//     return config;
//   },
// };
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "randomuser.me",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
            replaceAttrValues: {
              "#000": "{props.fill}",
              "#fff": "{props.fill}", // Add more colors if necessary
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;

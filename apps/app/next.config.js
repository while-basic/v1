/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@v1/supabase", "@v1/env", "@v1/analytics", "@v1/ui"],
  webpack: (config, { isServer }) => {
    // Add TypeScript loader for workspace packages
    config.module.rules.push({
      test: /\.tsx?$/,
      include: /packages\//,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig; 
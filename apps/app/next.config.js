/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@v1/supabase", "@v1/env", "@v1/analytics", "@v1/ui"],
  experimental: {
    externalDir: true,
    // This enables proper transpilation of TypeScript in workspace packages
    transpilePackages: ["@v1/supabase", "@v1/env", "@v1/analytics", "@v1/ui"]
  },
  webpack: (config, { isServer }) => {
    // Handle workspace packages
    config.module.rules.push({
      test: /\.tsx?$/,
      include: [/packages\//],
      use: [
        {
          loader: 'swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
            },
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig; 
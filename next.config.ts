const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Disable the experimental mdxRs flag since we're using the plugin with Webpack
  experimental: {
    mdxRs: false,
  },
});

module.exports = nextConfig;
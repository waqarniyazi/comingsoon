/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable MDX in the new App Router
  experimental: {
    mdxRs: true
  },
  // Let Next.js treat .mdx files as routes or regular modules
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default nextConfig;
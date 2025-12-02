/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimized config for static portfolio site on GitHub Pages
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable static export for GitHub Pages
  output: "export",
  // IMPORTANT: basePath must match the repository name for GitHub Pages project sites
  basePath: "/portfolio_academia",
  assetPrefix: "/portfolio_academia/",
  trailingSlash: true,
}

export default nextConfig

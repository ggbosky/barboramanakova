/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statický export do složky `out/` – web jde nahrát na GitHub Pages, Netlify, Vercel i běžný hosting
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig

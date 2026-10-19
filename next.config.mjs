// Builds a static site into `out/` so it can be hosted on GitHub Pages.
// PAGES_BASE_PATH is set by the deploy workflow (e.g. "/Kimdecuba"); it is empty locally.
const nextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH || "",
  images: { unoptimized: true },
};

export default nextConfig;

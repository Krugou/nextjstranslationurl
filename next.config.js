const basePath = process.env.BASE_PATH || "";

module.exports = {
  output: "export",
  // Use base path only when provided (e.g., /nextjstranslationurl)
  basePath: basePath || undefined,
  // Ensure all assets load from the GitHub Pages subpath
  assetPrefix: basePath ? `${basePath}/` : undefined,
  // Recommended for static export
  images: { unoptimized: true },
  // Helps GitHub Pages serve index.html in folders
  trailingSlash: true,
};


// This file is used to configure the build process for Cloudflare Pages
// It ensures that npm is used for dependency installation

module.exports = {
  installCommand: "npm install --no-frozen-lockfile",
  buildCommand: "npm run build",
  nodeVersion: "18", // Using Node.js version 18 for compatibility
  buildOutput: "dist"
};


// This file is used to configure the build process for Cloudflare Pages
// It ensures that npm is used for dependency installation

export default {
  installCommand: "npm install",
  buildCommand: "npm run build",
  nodeVersion: "18", // Using Node.js version 18 for compatibility
  buildConfig: {
    baseDirectory: "dist"
  }
};

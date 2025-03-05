
// Configuration for Cloudflare Pages
module.exports = {
  build: {
    command: "npm run build",
    directory: "dist"
  },
  install: {
    command: "npm install"
  },
  environment: {
    NODE_VERSION: "18",
    NPM_FLAGS: "--prefer-offline --no-audit"
  }
}

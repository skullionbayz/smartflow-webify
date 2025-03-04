
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
    NPM_FLAGS: "--prefer-offline"
  }
}

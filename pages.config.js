
// Configuration for Cloudflare Pages
module.exports = {
  build: {
    command: "npm run build",
    directory: "dist"
  },
  install: {
    command: "npm install --no-frozen-lockfile"
  },
  environment: {
    NODE_VERSION: "18",
    NPM_FLAGS: "--no-audit"
  }
}

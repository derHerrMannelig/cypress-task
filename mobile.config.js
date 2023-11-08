const { defineConfig } = require("cypress");

console.log("Current configuration: mobile.");

module.exports = defineConfig({
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3',
  viewportHeight: 568,
  viewportWidth: 320,
  e2e: {
    baseUrl: 'https://demo.realworld.io/#/',
  },
});

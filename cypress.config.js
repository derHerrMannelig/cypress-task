const { defineConfig } = require("cypress");

console.log("Current configuration: default.");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.realworld.io/#/',
  },
});

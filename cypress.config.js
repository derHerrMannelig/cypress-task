const { defineConfig } = require("cypress");

console.log("Current configuration: default.");

module.exports = defineConfig({
  projectId: '4ahx8w',
  e2e: {
    baseUrl: 'https://demo.realworld.io/#/',
  },
});

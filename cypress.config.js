const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

module.exports = defineConfig({

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    "configFile": "reporter-config-junit.json"
  }
  ,
  e2e: {
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
  },
});

import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '<product_id_cypress_cloud>',
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  defaultCommandTimeout: 10000,
  watchForFileChanges: false,
  chromeWebSecurity: false,
  viewportWidth: 1000,
  viewportHeight: 600,
  waitForAnimations: true,
  animationDistanceThreshold: 20,
  execTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

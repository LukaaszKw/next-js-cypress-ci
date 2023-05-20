import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    supportFile: false,
    specPattern: "**/*.cy.{js,jsx,ts,tsx}"
  },
  e2e: {
    experimentalRunAllSpecs: true,
    supportFile: false,
    specPattern: "**/*.cy.{js,jsx,ts,tsx}"
  },
});








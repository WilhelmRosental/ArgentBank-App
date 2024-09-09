const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: ".",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFiles: ["./jest.polyfills.ts"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''], // Spécifique à MSW v2
  },
};

module.exports = createJestConfig(customJestConfig);

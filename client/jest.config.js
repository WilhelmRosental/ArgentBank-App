const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    // Handle module aliases (this will be different for your config)
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^@/styles/(.*)$": "<rootDir>/styles/$1",
  },
  setupFilesAfterEnv: ["./jest.setup.js"], // Optional setup for additional config
};

module.exports = customJestConfig;

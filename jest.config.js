module.exports = {
  collectCoverageFrom: [
    "!**/stories/**",
    "!**/node_modules/**",
    "!**/tests/**",
    "!**/coverage/**",
    "!**/.storybook/**",
    "!**/.github/**",
    "!jest.config.js",
    "!./**",
    "./src/**/*",
  ],
  coverageThreshold: {
    global: {
      functions: 90,
    },
  },
  coverageReporters: ["text", "text-summary"],
  moduleNameMapper: {
    "^src(.*)$": "<rootDir>/src$1",
    "^enums(.*)$": "<rootDir>/enums$1",
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/coverage/"],
  transform: {
    "^.+\\.[jt]sx?$": "ts-jest",
  },
};

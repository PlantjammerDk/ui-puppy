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
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageReporters: ["json", "text", "text-summary"],
  moduleNameMapper: {
    "^src(.*)$": "<rootDir>/src$1",
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/coverage/"],
  transform: {
    "^.+\\.[jt]sx?$": "ts-jest",
  },
};

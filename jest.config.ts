export default {
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testTimeout: 50_000,
  testMatch: ["**/tests/**/*.test.(ts|js)"],
  testEnvironment: "node",
};

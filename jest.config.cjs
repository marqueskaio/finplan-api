module.exports = {

  roots: ['<rootDir>/src'],

  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  testMatch: [
    "**/__test__/**/*.test.js?(x)",
  ],

  transform: {
    '.+\\.ts$': 'ts-jest'
  }

};
